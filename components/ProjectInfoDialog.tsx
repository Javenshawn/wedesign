"use client";
import { useState } from 'react';
import { INDUSTRIES, STYLES, COLOR_COMBOS } from '@/lib/dictionaries';

interface FormData {
  logo_name: string;
  industry: string;
  style: string;
  color_preferences: string;
  description: string;
}

export default function ProjectInfoDialog({ planId }: { planId: 'economy' | 'business' | 'private' }) {
  const [form, setForm] = useState<FormData>({
    logo_name: '',
    industry: '',
    style: 'icon',
    color_preferences: '',
    description: '',
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [field]: e.target.value });
  };

  async function onSubmit() {
    setSubmitting(true);
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ priceId: planToPriceId(planId), metadata: form }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert('Error creating checkout session');
      }
    } catch (e) {
      console.error(e);
      alert('Failed to initiate checkout');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="p-4 space-y-4 max-w-lg mx-auto">
      <input
        className="w-full rounded-xl border px-3 py-2"
        value={form.logo_name}
        onChange={handleChange('logo_name')}
        placeholder="Logo Name *"
      />
      <select
        className="w-full rounded-xl border px-3 py-2"
        value={form.industry}
        onChange={handleChange('industry')}
      >
        <option value="">Select your industry *</option>
        {INDUSTRIES.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
      <select
        className="w-full rounded-xl border px-3 py-2"
        value={form.style}
        onChange={handleChange('style')}
      >
        {STYLES.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
      <select
        className="w-full rounded-xl border px-3 py-2"
        value={form.color_preferences}
        onChange={handleChange('color_preferences')}
      >
        <option value="">Select your color preference</option>
        {COLOR_COMBOS.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label} — {o.mood}
          </option>
        ))}
      </select>
      <textarea
        className="w-full rounded-xl border px-3 py-2"
        rows={4}
        value={form.description}
        onChange={handleChange('description')}
        placeholder="Describe your brand, values, target audience, and any special requirements..."
      />
      <button
        className="w-full rounded-xl py-3 font-semibold glass hover:opacity-90"
        onClick={onSubmit}
        disabled={submitting}
      >
        {submitting ? 'Submitting...' : 'Continue to Checkout'}
      </button>
    </div>
  );
}

function planToPriceId(plan: 'economy' | 'business' | 'private') {
  switch (plan) {
    case 'economy':
      return 'price_1RneIcBGsxhWlvw1ohUlRned';
    case 'business':
      return 'price_1S2CCXBGsxhWlvw1xOKZ6TVr';
    case 'private':
      return 'price_1S2CF3BGsxhWlvw1IWIFJnJu';
    default:
      return 'price_1RneIcBGsxhWlvw1ohUlRned';
  }
}