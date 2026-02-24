import Header from '@/components/Header';
import siteData from '@/data/site.json';

export default function LocationPage() {
  const locale = 'ar';

  return (
    <div className="min-h-screen" dir="rtl">
      <Header locale={locale} />

      {/* Hero */}
      <section className="bg-primary text-bg py-12 md:py-16">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl md:text-3xl font-mishafi font-bold mb-3">
            الموقع
          </h1>
          <p className="text-bg/70 text-base md:text-lg">
            تفضل بزيارتنا
          </p>
        </div>
      </section>

      <main className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="bg-cream rounded-xl p-8 text-center shadow-sm max-w-2xl mx-auto">
          {/* Location Info */}
          <div className="mb-6">
            <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-accent/20 flex items-center justify-center">
              <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-primary mb-2">
              {siteData.location.city_ar} — {siteData.location.area_ar}
            </h2>
            <p className="text-muted">
              {siteData.location.context_ar}
            </p>
          </div>

          {/* Divider */}
          <div className="w-24 h-0.5 bg-accent/30 mx-auto my-6"></div>

          {/* Hours */}
          <div className="mb-6">
            <h3 className="text-lg font-bold text-primary mb-4">ساعات العمل</h3>
            <div className="space-y-2 max-w-xs mx-auto">
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted">{siteData.hours.weekdays.days_ar}</span>
                <span className="text-primary font-bold">
                  {siteData.hours.weekdays.open_ar} - {siteData.hours.weekdays.close_ar}
                </span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted">{siteData.hours.friday.day_ar}</span>
                <span className="text-primary font-bold">
                  {siteData.hours.friday.open_ar} - {siteData.hours.friday.close_ar}
                </span>
              </div>
            </div>
          </div>

          {/* Map Button */}
          <a
            href={siteData.location.maps_link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-bg font-bold px-6 py-3 rounded-full transition-all duration-200"
          >
            افتح في خرائط Google
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

        {/* Map Placeholder */}
        <div className="mt-8 rounded-xl overflow-hidden shadow-sm max-w-2xl mx-auto">
          <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/20 flex items-center justify-center">
            <div className="text-center">
              <svg className="w-12 h-12 text-primary/30 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              <p className="text-muted">خريطة الموقع</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
