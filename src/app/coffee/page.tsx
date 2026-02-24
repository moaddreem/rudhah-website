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

export default function CoffeePage() {
  const locale = 'ar';
  const [selectedBean, setSelectedBean] = useState<CoffeeBean | null>(null);

  return (
    <div className="min-h-screen" dir="rtl">
      <Header locale={locale} />

      {/* Hero */}
      <section className="bg-primary text-bg py-12 md:py-16">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl md:text-3xl font-mishafi font-bold mb-3">
            قائمة البن
          </h1>
          <p className="text-bg/70 text-base md:text-lg">
            اكتشف أصول قهوتنا المختارة بعناية
          </p>
        </div>
      </section>

      {/* Coffee Grid */}
      <main className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
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

      {/* Modal */}
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
