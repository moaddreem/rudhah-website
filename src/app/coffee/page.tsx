'use client';

import Header from '@/components/Header';
import CoffeeCard from '@/components/CoffeeCard';
import FadeIn from '@/components/FadeIn';
import coffeeData from '@/data/coffee-beans.json';

export default function CoffeePage() {
  const locale = 'ar';

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
        <FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {coffeeData.beans.map((bean, index) => {
              const isLastOdd = coffeeData.beans.length % 2 !== 0 && index === coffeeData.beans.length - 1;
              return (
                <div 
                  key={bean.id}
                  className={isLastOdd ? 'col-span-2 md:col-span-1 justify-self-center w-[calc((100%-12px)/2)] sm:w-[calc((100%-16px)/2)] md:w-full' : ''}
                >
                  <CoffeeCard
                    bean={bean}
                    locale={locale}
                  />
                </div>
              );
            })}
          </div>
        </FadeIn>
      </main>
    </div>
  );
}
