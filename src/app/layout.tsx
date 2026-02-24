import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ردهه | Rudhah Cafe',
  description: 'قهوة رايقة في قلب أبها - A calm coffee experience in the heart of Abha',
  keywords: ['cafe', 'coffee', 'abha', 'saudi arabia', 'قهوة', 'أبها', 'ردهه', 'كافيه'],
  openGraph: {
    title: 'ردهه | Rudhah Cafe',
    description: 'قهوة رايقة في قلب أبها',
    locale: 'ar_SA',
    alternateLocale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#590D1A" />
        <link rel="preload" href="/fonts/Adobe Arabic Regular.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/mishafi-gold-regular.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
      </head>
      <body className="antialiased min-h-screen bg-bg">
        {children}
      </body>
    </html>
  );
}
