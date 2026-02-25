'use client';

import Image from 'next/image';
import Header from '@/components/Header';
import FadeIn from '@/components/FadeIn';
import siteData from '@/data/site.json';

export default function LocationPageEN() {
  const locale = 'en';

  return (
    <div className="min-h-screen">
      <Header locale={locale} />

      <main className="px-4 py-12 max-w-2xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-mishafi font-bold text-primary text-center mb-12">
          Location
        </h1>

        <FadeIn>
          <div className="card p-8 text-center">
          <div className="mb-8">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent/20 flex items-center justify-center">
              <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-primary mb-2">
              {siteData.location.city_en} — {siteData.location.area_en}
            </h2>
            <p className="text-muted text-lg">
              {siteData.location.context_en}
            </p>
          </div>

          <div className="w-24 h-0.5 bg-accent/30 mx-auto my-8"></div>

          <div className="mb-8">
            <h3 className="text-lg font-bold text-primary mb-4">Opening Hours</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center max-w-xs mx-auto">
                <span className="text-muted">{siteData.hours.weekdays.days_en}</span>
                <span className="text-primary font-medium">
                  {siteData.hours.weekdays.open_en} - {siteData.hours.weekdays.close_en}
                </span>
              </div>
              <div className="flex justify-between items-center max-w-xs mx-auto">
                <span className="text-muted">{siteData.hours.friday.day_en}</span>
                <span className="text-primary font-medium">
                  {siteData.hours.friday.open_en} - {siteData.hours.friday.close_en}
                </span>
              </div>
            </div>
          </div>

          <a
            href={siteData.location.maps_link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-3 px-8 py-4 text-lg"
          >
            Open in Google Maps
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="mt-8 card overflow-hidden">
            <div className="relative aspect-square">
              <Image
                src="/images/loca.jpg"
                alt="Rudhah Location"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 672px"
              />
            </div>
          </div>
        </FadeIn>
      </main>
    </div>
  );
}
