import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { supabase } from '@/lib/db';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-06-20',
});

function durationByPlan(plan: string): number {
  switch (plan) {
    case 'economy':
      return 5 * 24 * 3600;
    case 'business':
      return 4 * 24 * 3600;
    case 'private':
      return 72 * 3600;
    default:
      return 5 * 24 * 3600;
  }
}

export async function POST(req: NextRequest) {
  const sig = req.headers.get('stripe-signature');
  if (!sig) {
    return new NextResponse('Missing signature', { status: 400 });
  }
  const rawBody = await req.text();
  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(rawBody, sig, process.env.STRIPE_WEBHOOK_SECRET!);
  } catch (err: any) {
    console.error('[stripe-webhook] signature error:', err.message);
    return new NextResponse(`Webhook Error: ${err.message}`, { status: 400 });
  }
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;
    const meta = session.metadata || {};
    const plan = String(meta.plan || '');
    const secs = durationByPlan(plan);
    const deadline = new Date(Date.now() + secs * 1000).toISOString();
    // Insert order into database
    const { data: order, error } = await supabase
      .from('orders')
      .insert({
        client: session.customer_details?.name || '',
        email: session.customer_details?.email || '',
        plan,
        logo_name: meta.logo_name || '',
        industry: meta.industry || '',
        style: meta.style || '',
        color_preferences: meta.color_preferences || '',
        description: meta.description || '',
        deadline,
        stage: 'drafting',
      })
      .select()
      .single();
    if (error) {
      console.error('[orders insert]', error);
    }
    // Initialize design stage
    if (order) {
      const { error: stageErr } = await supabase
        .from('design_stages')
        .insert({ order_id: order.id, stage: 'drafting', note: '系统：支付完成，进入初稿阶段。' });
      if (stageErr) {
        console.error('[design_stages insert]', stageErr);
      }
    }
  }
  return NextResponse.json({ received: true });
}