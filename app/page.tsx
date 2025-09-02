"use client";
import { useState } from 'react';
import Pricing from '@/components/Pricing';
import ProjectInfoDialog from '@/components/ProjectInfoDialog';
import ThemeToggle from '@/components/ThemeToggle';

export default function HomePage() {
  const [selectedPlan, setSelectedPlan] = useState<null | 'economy' | 'business' | 'private'>(null);

  return (
    <main className="min-h-screen p-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">WeDesign</h1>
        <ThemeToggle />
      </div>
      <section className="mb-12 text-center space-y-4">
        <h2 className="text-4xl font-extrabold">Logo design you remember at first glance</h2>
        <p className="max-w-xl mx-auto text-lg opacity-80">
          Senior branding + lightning-fast delivery. Pick a plan below to get started.
        </p>
      </section>
      {selectedPlan ? (
        <ProjectInfoDialog planId={selectedPlan} />
      ) : (
        <Pricing onSelect={(plan) => setSelectedPlan(plan)} />
      )}
    </main>
  );
}