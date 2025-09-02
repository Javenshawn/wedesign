import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

export const runtime = 'nodejs';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2024-06-20',
  });
  try {
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [
        {
          price: body.priceId,
          quantity: 1,
        },
      ],
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/cancel`,
      metadata: {
        ...body.metadata,
        plan: planFromPriceId(body.priceId),
      },
    });
    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    console.error('[checkout] error', err);
    return new NextResponse(err.message || 'Error', { status: 500 });
  }
}

function planFromPriceId(id: string): string {
  switch (id) {
    case 'price_1RneIcBGsxhWlvw1ohUlRned':
      return 'economy';
    case 'price_1S2CCXBGsxhWlvw1xOKZ6TVr':
      return 'business';
    case 'price_1S2CF3BGsxhWlvw1IWIFJnJu':
      return 'private';
    default:
      return 'economy';
  }
}