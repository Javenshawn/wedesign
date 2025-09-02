import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

type PlanKey = 'starter' | 'business' | 'enterprise';

interface Plan {
  key: PlanKey;
  title: string;
  price: string;
  features: string[];
  popular?: boolean;
}

const PLANS: Plan[] = [
  {
    key: 'starter',
    title: 'Starter',
    price: '$199',
    features: [
      '2 Initial Logo Concepts',
      '2 Revisions',
      'High-Resolution PNG',
      '5-Day Turnaround',
    ],
  },
  {
    key: 'business',
    title: 'Business',
    price: '$399',
    features: [
      '4 Initial Logo Concepts',
      '5 Revisions',
      'Source Files (AI, EPS)',
      'Vector Files (SVG)',
      '4-Day Turnaround',
      'Priority Support',
    ],
    popular: true,
  },
  {
    key: 'enterprise',
    title: 'Enterprise',
    price: '$799',
    features: [
      '6 Initial Logo Concepts',
      'Unlimited Revisions',
      'Full Copyright Ownership',
      'Brand Style Guide',
      'Social Media Kit',
      '3-Day Express Delivery',
    ],
  },
];

export default function Pricing({
  onSelect,
}: {
  onSelect: (plan: 'economy' | 'business' | 'private') => void;
}) {
  return (
    <section className="py-16 max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6">
      {PLANS.map((p) => (
        <motion.div
          key={p.key}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`glass rounded-3xl p-6 border ${p.popular ? 'bg-brand-dark text-white shadow-glass ring-1 ring-brand-gold/40' : ''}`}
        >
          <div className="text-2xl font-bold mb-4">{p.title}</div>
          <div className="text-5xl font-extrabold mb-1">{p.price}</div>
          <div className="text-sm mb-6 opacity-80">/ one-time</div>
          <ul className="space-y-3 mb-8">
            {p.features.map((f) => (
              <li key={f} className="flex gap-2 items-center">
                <Check className="w-4 h-4 text-brand-gold" /> <span>{f}</span>
              </li>
            ))}
          </ul>
          <button
            onClick={() =>
              onSelect(
                p.key === 'starter'
                  ? 'economy'
                  : p.key === 'business'
                  ? 'business'
                  : 'private',
              )
            }
            className={`w-full rounded-xl py-3 font-semibold ${p.popular ? 'bg-brand-gold text-black' : 'glass hover:opacity-90'}`}
          >
            Get Started
          </button>
        </motion.div>
      ))}
    </section>
  );
}