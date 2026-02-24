'use client';

import { Locale } from '@/lib/i18n';

interface PriceProps {
  amount: number;
  locale: Locale;
  className?: string;
}

// Saudi Riyal Symbol SVG (fallback for fonts that don't support it)
const SARSymbol = () => (
  <svg 
    className="inline-block w-[1em] h-[1em] align-middle" 
    viewBox="0 0 1024 1024" 
    fill="currentColor"
    aria-label="SAR"
  >
    <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"/>
    <text x="512" y="580" textAnchor="middle" fontSize="400" fontWeight="bold" fontFamily="Arial">﷼</text>
  </svg>
);

export default function Price({ amount, locale, className = '' }: PriceProps) {
  const isRTL = locale === 'ar';
  
  return (
    <span 
      className={`inline-flex items-center gap-1 font-variant-numeric tabular-nums ${className}`}
      style={{ fontVariantNumeric: 'tabular-nums' }}
    >
      {isRTL ? (
        <>
          <span dir="ltr" style={{ unicodeBidi: 'isolate' }}>{amount}</span>
          <span className="text-[0.85em]">ر.س</span>
        </>
      ) : (
        <>
          <span dir="ltr" style={{ unicodeBidi: 'isolate' }}>{amount}</span>
          <span className="text-[0.85em]">SAR</span>
        </>
      )}
    </span>
  );
}
