'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import LanguageToggle from './LanguageToggle';
import { Locale, getLocalizedPath } from '@/lib/i18n';

interface HeaderProps {
  locale: Locale;
}

// Only 3 links: Menu, Coffee Origins, Location (removed Coffee/القهوة)
const navLinks = [
  { href: '/menu', label_ar: 'المنيو', label_en: 'Menu' },
  { href: '/coffee', label_ar: 'قائمة البن', label_en: 'Coffee Origins' },
  { href: '/location', label_ar: 'الموقع', label_en: 'Location' },
];

export default function Header({ locale }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isRTL = locale === 'ar';

  const isActive = (href: string) => {
    const localizedHref = getLocalizedPath(href, locale);
    return pathname === localizedHref || pathname === href;
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-[#B38F6F] w-full" dir={isRTL ? 'rtl' : 'ltr'}>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            {/* Logo - LEFT for Arabic (RTL), RIGHT for English (LTR) */}
            <Link href={getLocalizedPath('/', locale)} className="flex items-center transition-opacity duration-200 hover:opacity-80">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="/images/Copy of نسخة من ردهه.pdf.svg" 
                alt="Rudhah" 
                className="h-10 w-auto object-contain"
              />
            </Link>

            {/* Navigation Links - RIGHT for Arabic (RTL), LEFT for English (LTR) */}
            <div className="hidden md:flex items-center gap-6">
              <nav className="flex items-center gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={getLocalizedPath(link.href, locale)}
                    className={`relative py-2 text-[#590D1A] font-ui text-base font-bold tracking-wide transition-all duration-150 ease-out hover:text-[#F8F2E6] hover:scale-[1.02] ${
                      isActive(link.href) ? 'text-[#F8F2E6]' : ''
                    }`}
                  >
                    {isRTL ? link.label_ar : link.label_en}
                    <span className={`absolute bottom-0 left-0 right-0 h-0.5 bg-[#590D1A] rounded-full transition-transform duration-150 origin-center ${
                      isActive(link.href) ? 'scale-x-100' : 'scale-x-0'
                    }`} />
                  </Link>
                ))}
              </nav>
              <LanguageToggle locale={locale} />
            </div>

            {/* Mobile: Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden flex items-center justify-center w-10 h-10 text-[#590D1A] hover:text-[#F8F2E6] transition-colors duration-200"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu - Centered Modal Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-200 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Dim Backdrop */}
        <div 
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />
        
        {/* Centered Modal Panel */}
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-[420px] bg-[#F8F2E6] rounded-2xl shadow-2xl transform transition-all duration-200 ${
            mobileMenuOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
          }`}
          dir={isRTL ? 'rtl' : 'ltr'}
        >
          {/* Close Button */}
          <button
            onClick={() => setMobileMenuOpen(false)}
            className={`absolute top-4 ${isRTL ? 'left-4' : 'right-4'} w-10 h-10 flex items-center justify-center rounded-full bg-[#590D1A]/10 text-[#590D1A] hover:bg-[#590D1A]/20 transition-colors duration-150`}
            aria-label="Close menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Menu Content */}
          <div className="p-6 pt-16">
            <nav className="flex flex-col gap-2">
              {/* Home link - mobile only */}
              <Link
                href={getLocalizedPath('/', locale)}
                onClick={() => setMobileMenuOpen(false)}
                className={`block w-full min-h-[48px] px-4 py-3 rounded-xl text-xl font-ui font-medium transition-colors duration-150 ${
                  pathname === '/' || pathname === '/en'
                    ? 'bg-[#590D1A] text-[#F8F2E6]' 
                    : 'text-[#590D1A] hover:bg-[#590D1A]/10'
                } ${isRTL ? 'text-right' : 'text-left'}`}
              >
                {isRTL ? 'الصفحة الرئيسية' : 'Home'}
              </Link>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={getLocalizedPath(link.href, locale)}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block w-full min-h-[48px] px-4 py-3 rounded-xl text-xl font-ui font-medium transition-colors duration-150 ${
                    isActive(link.href) 
                      ? 'bg-[#590D1A] text-[#F8F2E6]' 
                      : 'text-[#590D1A] hover:bg-[#590D1A]/10'
                  } ${isRTL ? 'text-right' : 'text-left'}`}
                >
                  {isRTL ? link.label_ar : link.label_en}
                </Link>
              ))}
            </nav>
            
            {/* Language Toggle */}
            <div className="mt-6 pt-4 border-t border-[#590D1A]/10 flex justify-center">
              <LanguageToggle locale={locale} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
