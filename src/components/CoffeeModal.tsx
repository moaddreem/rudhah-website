'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Locale, t, getLocalizedPath } from '@/lib/i18n';

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

interface CoffeeModalProps {
  bean: CoffeeBean | null;
  locale: Locale;
  onClose: () => void;
}

export default function CoffeeModal({ bean, locale, onClose }: CoffeeModalProps) {
  if (!bean) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-end md:items-center justify-center"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-primary/60 backdrop-blur-sm transition-opacity duration-200" />
      
      {/* Modal */}
      <div 
        className="relative w-full max-w-lg bg-bg rounded-t-2xl md:rounded-2xl max-h-[90vh] overflow-y-auto transition-transform duration-200"
        onClick={(e: React.MouseEvent) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-bg/80 text-primary hover:bg-bg transition-colors"
          aria-label={t('close', locale)}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Coffee Origin Image */}
        <div className="aspect-[4/3] relative bg-gradient-to-br from-primary/10 to-accent/20 overflow-hidden">
          <Image
            src={bean.image}
            alt={bean.name_ar}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 512px"
            priority
          />
        </div>

        {/* Content */}
        <div className="p-6">
          <h2 className="text-2xl font-bold text-primary font-mishafi">
            {locale === 'ar' ? bean.name_ar : bean.name_en}
          </h2>
          <p className="text-muted mt-1">
            {locale === 'ar' ? bean.name_en : bean.name_ar}
          </p>

          <div className="mt-6 space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-accent font-medium min-w-[80px]">{t('origin', locale)}:</span>
              <span className="text-primary">
                {locale === 'ar' ? `${bean.origin_ar} — ${bean.region_ar}` : `${bean.origin_en} — ${bean.region_en}`}
              </span>
            </div>
            
            <div className="flex items-start gap-3">
              <span className="text-accent font-medium min-w-[80px]">{t('variety', locale)}:</span>
              <span className="text-primary">
                {locale === 'ar' ? bean.variety_ar : bean.variety_en}
              </span>
            </div>
            
            <div className="flex items-start gap-3">
              <span className="text-accent font-medium min-w-[80px]">{t('flavorNotes', locale)}:</span>
              <span className="text-primary">
                {locale === 'ar' ? bean.flavor_notes_ar : bean.flavor_notes_en}
              </span>
            </div>
          </div>

          <Link
            href={getLocalizedPath('/menu', locale)}
            className="btn-primary w-full mt-8 flex items-center justify-center gap-2"
          >
            {locale === 'ar' ? 'عرض القائمة' : 'View Menu'}
          </Link>
        </div>
      </div>
    </div>
  );
}
