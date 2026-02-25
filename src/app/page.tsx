import Link from 'next/link';
import Header from '@/components/Header';
import Logo from '@/components/Logo';
import DeliveryAppsSection from '@/components/DeliveryAppsSection';
import Riyal from '@/components/Riyal';
import menuData from '@/data/menu.json';
import siteData from '@/data/site.json';

export default function HomePage() {
  const locale = 'ar';
  const sweets = menuData.categories.find(c => c.id === 'sweets')?.items.slice(0, 6) || [];

  return (
    <div className="min-h-screen" dir="rtl">
      <Header locale={locale} />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary via-primary to-primary/95 text-bg py-16 md:py-20 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border border-accent/50 rounded-full"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 border border-accent/30 rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 border border-bg/20 rounded-full"></div>
        </div>
        
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="flex justify-center mb-6">
            <Logo locale={locale} size="lg" variant="light" />
          </div>
          <p className="text-xl md:text-2xl text-accent font-medium mb-10">
            {siteData.cafe.tagline_ar}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/menu" 
              className="inline-flex items-center justify-center gap-3 bg-accent hover:bg-accent/90 text-primary font-bold px-8 py-4 text-lg rounded-full transition-all duration-200 hover:scale-105 shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              افتح المنيو
            </Link>
            <Link 
              href="/coffee" 
              className="inline-flex items-center justify-center gap-3 border-2 border-bg/40 text-bg hover:bg-bg/10 font-bold px-8 py-4 text-lg rounded-full transition-all duration-200 hover:border-accent"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              قائمة البن
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Sweets */}
      <section className="py-10 md:py-16 bg-cream">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-lg sm:text-sm md:text-base font-ui tracking-wider text-accent">من قائمتنا</span>
            <h2 className="text-[2rem] sm:text-2xl md:text-3xl font-mishafi font-bold text-primary mt-2">
              أبرز الحلويات
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto mt-4 rounded-full"></div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
            {sweets.map((item, index) => (
              <div key={index} className="bg-bg rounded-xl p-4 sm:p-6 text-center shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-primary/10 to-accent/20 flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0A1.75 1.75 0 013 15.546V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v8.046z" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-lg font-bold text-primary">{item.name_ar}</h3>
                <p className="text-base sm:text-sm text-muted mt-1">{item.name_en}</p>
                <div className="mt-4 pt-4 border-t border-muted/20">
                  <p className="text-2xl font-bold text-primary price" style={{ fontVariantNumeric: 'tabular-nums' }}><span dir="ltr" style={{ unicodeBidi: 'isolate' }}>{item.price}</span><Riyal /></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-10 md:py-16">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-lg sm:text-sm md:text-base font-ui tracking-wider text-accent">ماذا يقولون</span>
            <h2 className="text-[2rem] sm:text-2xl md:text-3xl font-mishafi font-bold text-primary mt-2">
              آراء العملاء
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto mt-4 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {siteData.testimonials.map((testimonial, index) => (
              <div key={index} className="bg-cream rounded-xl p-6 relative">
                <svg className="w-8 h-8 text-accent/30 absolute top-4 right-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
                <p className="text-primary mb-4 leading-relaxed text-lg sm:text-base">"{testimonial.text_ar}"</p>
                <p className="text-accent font-bold text-base sm:text-sm">— {testimonial.author_ar}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Hours */}
      <section className="py-10 md:py-16 bg-cream">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-center mb-10">
            <span className="text-lg sm:text-sm md:text-base font-ui tracking-wider text-accent">زورونا</span>
            <h2 className="text-[2rem] sm:text-2xl md:text-3xl font-mishafi font-bold text-primary mt-2">
              الموقع وساعات العمل
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto mt-4 rounded-full"></div>
          </div>
          <div className="bg-bg rounded-xl p-8 shadow-sm max-w-2xl mx-auto">
            <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
              <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <p className="text-xl md:text-2xl text-primary font-bold mb-2">
              {siteData.location.city_ar} — {siteData.location.area_ar}
            </p>
            <p className="text-muted mb-6">{siteData.location.context_ar}</p>
            
            <div className="bg-cream rounded-lg p-4 mb-6">
              <div className="flex justify-center gap-8 text-sm">
                <div>
                  <p className="text-muted mb-1">{siteData.hours.weekdays.days_ar}</p>
                  <p className="text-primary font-bold">{siteData.hours.weekdays.open_ar} - {siteData.hours.weekdays.close_ar}</p>
                </div>
                <div className="w-px bg-muted/30"></div>
                <div>
                  <p className="text-muted mb-1">{siteData.hours.friday.day_ar}</p>
                  <p className="text-primary font-bold">{siteData.hours.friday.open_ar} - {siteData.hours.friday.close_ar}</p>
                </div>
              </div>
            </div>
            
            <a 
              href="https://www.google.com/maps/place/Radha+Cafe/@21.3479034,38.4562732,7z/data=!4m6!3m5!1s0x15e35300125a194d:0x253a24a3cd004f91!8m2!3d18.2126226!4d42.4932888!16s%2Fg%2F11xgw5z4p8?entry=ttu&g_ep=EgoyMDI2MDIxOC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-bg font-bold px-6 py-3 rounded-full transition-all duration-200"
            >
              افتح في خرائط Google
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Delivery Apps */}
      <DeliveryAppsSection locale={locale} />

      {/* Footer */}
      <footer className="bg-primary text-bg py-12 md:py-16">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Logo locale={locale} size="md" variant="light" />
          <p className="text-accent mt-4 mb-6">قهوة رايقة في قلب أبها</p>
          <div className="flex flex-wrap justify-center gap-8 sm:gap-10 mb-8">
            <Link href="/menu" className="text-bg/80 hover:text-accent transition-colors font-medium text-xl">المنيو</Link>
            <Link href="/coffee" className="text-bg/80 hover:text-accent transition-colors font-medium text-xl">قائمة البن</Link>
            <Link href="/location" className="text-bg/80 hover:text-accent transition-colors font-medium text-xl">الموقع</Link>
            <Link href="/contact" className="text-bg/80 hover:text-accent transition-colors font-medium text-xl">تواصل</Link>
          </div>
          <div className="w-24 h-px bg-bg/20 mx-auto mb-6"></div>
          <p className="text-bg/50 text-sm">© 2026 ردهه. جميع الحقوق محفوظة.</p>
        </div>
      </footer>
    </div>
  );
}
