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
  const [originFilter, setOriginFilter] = useState<string>('all');
  const [flavorFilter, setFlavorFilter] = useState<string>('all');

  const filteredBeans = coffeeData.beans.filter((bean) => {
    const matchesOrigin = originFilter === 'all' || bean.origin_en.toLowerCase().includes(originFilter);
    const matchesFlavor = flavorFilter === 'all' || bean.flavor_profile.includes(flavorFilter);
    return matchesOrigin && matchesFlavor;
  });

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

      {/* Filters */}
      <section className="sticky top-[57px] z-40 bg-bg/95 backdrop-blur-sm py-4 px-4 border-b border-muted/20">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted">Origin:</span>
            <select
              value={originFilter}
              onChange={(e) => setOriginFilter(e.target.value)}
              className="bg-transparent border border-muted/30 rounded-lg px-3 py-1.5 text-sm text-primary focus:border-accent focus:outline-none"
            >
              <option value="all">All</option>
              {coffeeData.filters.origins.map((origin) => (
                <option key={origin.id} value={origin.id}>
                  {origin.name_en}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm text-muted">Flavor:</span>
            <select
              value={flavorFilter}
              onChange={(e) => setFlavorFilter(e.target.value)}
              className="bg-transparent border border-muted/30 rounded-lg px-3 py-1.5 text-sm text-primary focus:border-accent focus:outline-none"
            >
              <option value="all">All</option>
              {coffeeData.filters.flavor_profiles.map((flavor) => (
                <option key={flavor.id} value={flavor.id}>
                  {flavor.name_en}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Coffee Grid */}
      <main className="px-4 py-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBeans.map((bean) => (
            <CoffeeCard
              key={bean.id}
              bean={bean}
              locale={locale}
              onClick={() => setSelectedBean(bean)}
            />
          ))}
        </div>

        {filteredBeans.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted">No results match your filters</p>
          </div>
        )}
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
