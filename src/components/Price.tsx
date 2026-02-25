'use client';

import { Locale } from '@/lib/i18n';
import Riyal from './Riyal';

interface PriceProps {
  amount: number;
  locale: Locale;
  className?: string;
}

export default function Price({ amount, locale, className = '' }: PriceProps) {
  return (
    <span 
      className={`inline-flex items-center font-variant-numeric tabular-nums ${className}`}
      style={{ fontVariantNumeric: 'tabular-nums' }}
    >
      <span dir="ltr" style={{ unicodeBidi: 'isolate' }}>{amount}</span>
      <Riyal />
    </span>
  );
}
