"use client";
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';

// Available locales. Feel free to adjust to your supported languages.
const LOCALES = ['en', 'zh', 'fr', 'de', 'it', 'ru', 'th'];

export default function LocaleSwitcher() {
  const pathname = usePathname();
  const { locale } = useParams() as { locale?: string };
  const currentLocale = locale || 'en';
  return (
    <div className="flex gap-2">
      {LOCALES.map((l) => (
        <Link
          key={l}
          className={`px-2 py-1 rounded ${l === currentLocale ? 'bg-brand-gold text-black' : 'glass'}`}
          href={`/${l}${pathname.replace(/^\/(?:en|zh|fr|de|it|ru|th)/, '')}`}
        >
          {l.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}