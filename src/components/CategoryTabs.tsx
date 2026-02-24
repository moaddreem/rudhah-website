'use client';

import { Locale } from '@/lib/i18n';

interface Category {
  id: string;
  category_ar: string;
  category_en: string;
}

interface CategoryTabsProps {
  categories: Category[];
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
  locale: Locale;
}

export default function CategoryTabs({ 
  categories, 
  activeCategory, 
  onCategoryChange, 
  locale 
}: CategoryTabsProps) {
  const isRTL = locale === 'ar';
  
  return (
    <div 
      className="sticky top-14 z-40 bg-bg border-b border-muted/10 py-4"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 overflow-x-auto scrollbar-hide">
        <div className="flex gap-3 flex-nowrap">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all duration-200 ${
                activeCategory === category.id 
                  ? 'bg-primary text-bg shadow-sm' 
                  : 'bg-cream text-primary border border-muted/20 hover:border-accent hover:text-accent'
              }`}
            >
              {isRTL ? category.category_ar : category.category_en}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
