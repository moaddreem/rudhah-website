'use client';

import Header from '@/components/Header';
import CoffeeCard from '@/components/CoffeeCard';
import FadeIn from '@/components/FadeIn';
import coffeeData from '@/data/coffee-beans.json';

export default function CoffeePageEN() {
  const locale = 'en';

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
        <FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {coffeeData.beans.map((bean, index) => (
              <div 
                key={bean.id}
                className={coffeeData.beans.length % 2 !== 0 && index === coffeeData.beans.length - 1 ? 'col-span-2 md:col-span-1 flex justify-center' : ''}
              >
                <CoffeeCard
                  bean={bean}
                  locale={locale}
                />
              </div>
            ))}
          </div>
        </FadeIn>
      </main>
    </div>
  );
}
