'use client';

import { Locale } from '@/lib/i18n';

interface LogoProps {
  locale: Locale;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'dark' | 'light';
}

export default function Logo({ locale, size = 'md', variant = 'dark' }: LogoProps) {
  const sizeConfig = {
    sm: { width: 100, height: 40 },
    md: { width: 160, height: 60 },
    lg: { width: 240, height: 90 },
  };

  return (
    <div className="flex flex-col items-center">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/Copy of نسخة من ردهه.pdf.svg"
        alt="Rudhah Logo"
        width={sizeConfig[size].width}
        height={sizeConfig[size].height}
        className={`object-contain ${variant === 'light' ? 'brightness-0 invert' : ''}`}
      />
    </div>
  );
}
