'use client';

import { Locale, t } from '@/lib/i18n';
import Riyal from './Riyal';

interface MenuItemProps {
  name_ar: string;
  name_en: string;
  price: number;
  calories?: number;
  locale: Locale;
}

export default function MenuItem({ name_ar, name_en, price, calories, locale }: MenuItemProps) {
  return (
    <div className="group bg-cream rounded-2xl p-4 border border-muted/10 hover:border-accent/40 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 ease-out">
      <div className="flex justify-between items-start gap-3">
        <div className="flex-1 min-w-0">
          <h3 className="text-base font-bold text-primary leading-tight mb-1 truncate">
            {locale === 'ar' ? name_ar : name_en}
          </h3>
          <p className="text-sm text-muted/80 truncate">
            {locale === 'ar' ? name_en : name_ar}
          </p>
          {calories && (
            <p className="text-xs text-muted mt-1 calories">
              <span dir="ltr" style={{ unicodeBidi: 'isolate' }}>{calories}</span> {t('cal', locale)}
            </p>
          )}
        </div>
        <div className="flex-shrink-0 text-end price" style={{ fontVariantNumeric: 'tabular-nums' }}>
          <span className="text-lg font-bold text-primary">
            <span dir="ltr" style={{ unicodeBidi: 'isolate' }}>{price}</span>
            <Riyal />
          </span>
        </div>
      </div>
    </div>
  );
}
