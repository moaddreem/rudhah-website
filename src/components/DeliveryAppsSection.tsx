'use client';

import Image from 'next/image';
import { Locale } from '@/lib/i18n';

interface DeliveryAppsSectionProps {
  locale: Locale;
}

const deliveryApps = [
  {
    id: 'keeta',
    name_ar: 'كيتا',
    name_en: 'Keeta',
    logo: '/images/keetalogo.webp',
  },
  {
    id: 'hungerstation',
    name_ar: 'هنقرستيشن',
    name_en: 'HungerStation',
    logo: '/images/hungerlogo.png',
  },
];

export default function DeliveryAppsSection({ locale }: DeliveryAppsSectionProps) {
  const isRTL = locale === 'ar';

  return (
    <section className="py-10 md:py-16 bg-bg">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="text-accent text-sm font-ui tracking-wider">
            {isRTL ? 'تطبيقات التوصيل' : 'Delivery Apps'}
          </span>
          <h2 className="text-2xl md:text-3xl font-mishafi font-bold text-primary mt-2">
            {isRTL ? 'طلبك يوصل لين بابك' : 'Delivery to your door'}
          </h2>
          <p className="text-muted mt-3 max-w-md mx-auto">
            {isRTL 
              ? 'خدمة التوصيل متاحة الآن عبر تطبيقات: هنقرستيشن، وكيتا.'
              : 'Delivery is now available through: HungerStation and Keeta.'
            }
          </p>
          <div className="w-16 h-1 bg-accent mx-auto mt-4 rounded-full"></div>
        </div>

        {/* App Cards */}
        <div className="grid grid-cols-2 sm:flex sm:flex-row justify-center items-center gap-4 sm:gap-6 max-w-lg mx-auto">
          {deliveryApps.map((app) => (
            <div
              key={app.id}
              className="w-full sm:w-48 bg-cream rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-lg transition-all duration-200 ease-out hover:-translate-y-1 hover:border-accent/30 border border-transparent cursor-default"
            >
              {/* Logo */}
              <div className="relative w-full h-16 mb-4">
                <Image
                  src={app.logo}
                  alt={isRTL ? app.name_ar : app.name_en}
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 100vw, 192px"
                />
              </div>
              
              {/* App Name */}
              <p className="text-center text-primary font-bold text-sm">
                {isRTL ? app.name_ar : app.name_en}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
