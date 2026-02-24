'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Locale, getAlternateLocalePath } from '@/lib/i18n';

interface LanguageToggleProps {
  locale: Locale;
}

export default function LanguageToggle({ locale }: LanguageToggleProps) {
  const pathname = usePathname();
  const alternatePath = getAlternateLocalePath(pathname, locale);
  const alternateLocale = locale === 'ar' ? 'EN' : 'AR';

  return (
    <Link
      href={alternatePath}
      className="flex items-center justify-center px-3 py-1.5 text-sm font-bold text-[#590D1A] bg-[#F8F2E6]/80 hover:bg-[#F8F2E6] rounded-full transition-all duration-150 ease-out hover:shadow-sm"
      aria-label={`Switch to ${alternateLocale === 'EN' ? 'English' : 'Arabic'}`}
    >
      {alternateLocale}
    </Link>
  );
}
