'use client';

import Image from 'next/image';
import { Locale, t } from '@/lib/i18n';

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
  image: string;
}

interface CoffeeCardProps {
  bean: CoffeeBean;
  locale: Locale;
  onClick?: () => void;
}

export default function CoffeeCard({ bean, locale }: CoffeeCardProps) {
  return (
    <div
      className="card overflow-hidden text-start w-full transition-all duration-200 hover:shadow-lg"
    >
      {/* Image - using uploaded coffee origin images */}
      <div className="aspect-[4/3] relative bg-gradient-to-br from-primary/20 to-accent/30 overflow-hidden">
        <Image
          src={bean.image}
          alt={bean.name_ar}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      
      {/* Info block */}
      <div className="p-4 bg-bg">
        <h3 className="text-xl font-bold text-primary font-mishafi">
          {locale === 'ar' ? bean.name_ar : bean.name_en}
        </h3>
        <p className="text-sm text-muted mt-1">
          {locale === 'ar' ? bean.name_en : bean.name_ar}
        </p>
        
        <div className="mt-3 space-y-1">
          <p className="text-sm text-primary">
            <span className="text-muted">{t('origin', locale)}: </span>
            {locale === 'ar' ? bean.origin_ar : bean.origin_en}
          </p>
          <p className="text-sm text-primary">
            <span className="text-muted">{t('variety', locale)}: </span>
            {locale === 'ar' ? bean.variety_ar : bean.variety_en}
          </p>
        </div>
        
        <p className="mt-3 text-sm text-accent font-medium">
          {locale === 'ar' ? bean.flavor_notes_ar : bean.flavor_notes_en}
        </p>
      </div>
    </div>
  );
}
