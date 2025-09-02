"use client";

import { useState } from 'react';
import Pricing from '../components/Pricing';
import ProjectInfoDialog from '../components/ProjectInfoDialog';
import ThemeToggle from '../components/ThemeToggle';
import LocaleSwitcher from '../components/LocaleSwitcher';

export default function Home() {
  const [plan, setPlan] = useState<"economy"|"business"|"private"|null>(null);

  return (
    <main>
      <div className="fixed top-4 right-4 flex gap-2 z-50">
        <LocaleSwitcher />
        <ThemeToggle />
      </div>
      <section className="min-h-screen flex flex-col justify-center items-center text-center p-8">
        <h1 className="text-5xl font-bold mb-4">Start your logo design</h1>
        <p className="mb-8">Pick a plan and tell us about your business.</p>
        <Pricing onSelect={(p) => setPlan(p)} />
        {plan && <ProjectInfoDialog plan={plan} />}
      </section>
    </main>
  );
}
