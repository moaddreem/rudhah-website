'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import CoffeeCard from '@/components/CoffeeCard';
import CoffeeModal from '@/components/CoffeeModal';
import coffeeData from '@/data/coffee-beans.json';

interface CoffeeBean {
  id: string;
  name_ar: string;
  name_en: string;
  origin_ar: string;
  origin_en: string;
  region_ar: string;
  region_en: string;
  variety_ar: string;
  variety_en: string;
  flavor_notes_ar: string;
  flavor_notes_en: string;
  flavor_profile: string[];
  image: string;
}

export default function CoffeePageEN() {
  const locale = 'en';
  const [selectedBean, setSelectedBean] = useState<CoffeeBean | null>(null);

  return (
    <div className="min-h-screen">
      <Header locale={locale} />

      {/* Hero */}
      <section className="bg-primary text-bg py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-mishafi font-bold mb-4">
            Coffee Origins
          </h1>
          <p className="text-bg/70 text-lg">
            Discover our carefully selected coffee origins
          </p>
        </div>
      </section>

      {/* Coffee Grid */}
      <main className="px-4 py-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coffeeData.beans.map((bean) => (
            <CoffeeCard
              key={bean.id}
              bean={bean}
              locale={locale}
              onClick={() => setSelectedBean(bean)}
            />
          ))}
        </div>
      </main>

      {selectedBean && (
        <CoffeeModal
          bean={selectedBean}
          locale={locale}
          onClose={() => setSelectedBean(null)}
        />
      )}
    </div>
  );
}
