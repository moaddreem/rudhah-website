'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import MenuItem from '@/components/MenuItem';
import CategoryTabs from '@/components/CategoryTabs';
import BottomNav from '@/components/BottomNav';
import menuData from '@/data/menu.json';

export default function MenuPage() {
  const locale = 'ar';
  const [activeCategory, setActiveCategory] = useState(menuData.categories[0].id);
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const scrollToCategory = (categoryId: string) => {
    setActiveCategory(categoryId);
    const element = sectionRefs.current[categoryId];
    if (element) {
      // Header (56px) + Tabs (60px) + gap (16px) = 132px
      const scrollOffset = 132;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - scrollOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    // Header height (56px) + Tabs height (~52px) = ~108px, use 120px for safety
    const observerOptions = {
      root: null,
      rootMargin: '-120px 0px -50% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveCategory(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Small delay to ensure refs are populated
    const timer = setTimeout(() => {
      menuData.categories.forEach((category) => {
        const element = sectionRefs.current[category.id];
        if (element) {
          observer.observe(element);
        }
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen pb-20" dir="rtl">
      <Header locale={locale} />
      
      <CategoryTabs
        categories={menuData.categories}
        activeCategory={activeCategory}
        onCategoryChange={scrollToCategory}
        locale={locale}
      />

      <main className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {menuData.categories.map((category) => (
          <section
            key={category.id}
            id={category.id}
            ref={(el) => { sectionRefs.current[category.id] = el; }}
            className="mb-14"
            style={{ scrollMarginTop: 'var(--scroll-offset)' }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="w-8 h-0.5 bg-accent rounded-full"></span>
              <h2 className="text-lg md:text-xl font-bold text-primary">
                {locale === 'ar' ? category.category_ar : category.category_en}
              </h2>
              <span className="flex-1 h-px bg-muted/15"></span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {category.items.map((item, index) => (
                <MenuItem
                  key={index}
                  name_ar={item.name_ar}
                  name_en={item.name_en}
                  price={item.price}
                  calories={item.calories}
                  locale={locale}
                />
              ))}
            </div>
          </section>
        ))}

        {/* Browse Website CTA */}
        <div className="mt-10 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-bg font-bold px-6 py-3 rounded-full transition-all duration-200"
          >
            تصفح موقعنا
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </main>

      <BottomNav locale={locale} />
    </div>
  );
}
