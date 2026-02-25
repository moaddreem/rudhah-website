export type Locale = 'ar' | 'en';

export const defaultLocale: Locale = 'ar';

export const locales: Locale[] = ['ar', 'en'];

export function getDirection(locale: Locale): 'rtl' | 'ltr' {
  return locale === 'ar' ? 'rtl' : 'ltr';
}

export function getLocalizedPath(path: string, locale: Locale): string {
  if (locale === 'ar') {
    return path;
  }
  return `/en${path === '/' ? '' : path}`;
}

export function getAlternateLocalePath(currentPath: string, currentLocale: Locale): string {
  const targetLocale = currentLocale === 'ar' ? 'en' : 'ar';
  
  if (currentLocale === 'ar') {
    return `/en${currentPath === '/' ? '' : currentPath}`;
  } else {
    return currentPath.replace(/^\/en/, '') || '/';
  }
}

export const translations = {
  ar: {
    menu: 'المنيو',
    coffee: 'قائمة البن',
    location: 'اللوكيشن',
    contact: 'تواصل معنا',
    home: 'الرئيسية',
    openMenu: 'افتح المنيو',
    coffeeOrigins: 'قائمة البن',
    browseWebsite: 'تصفح موقعنا',
    askBarista: 'اسأل الباريستا',
    openInMaps: 'افتح في خرائط Google',
    comingSoon: 'قريبًا',
    cal: 'سعرة',
    featuredSweets: 'أبرز الحلويات',
    testimonials: 'آراء العملاء',
    locationAndHours: 'الموقع وساعات العمل',
    followUs: 'تابعنا',
    deliveryApps: 'تطبيقات التوصيل',
    socialMedia: 'وسائل التواصل',
    filterByOrigin: 'فلتر حسب المنشأ',
    filterByFlavor: 'فلتر حسب النكهة',
    filterByVariety: 'فلتر حسب الصنف',
    allOrigins: 'جميع المناشئ',
    allFlavors: 'جميع النكهات',
    allVarieties: 'جميع الأصناف',
    origin: 'المنشأ',
    variety: 'الصنف',
    flavorNotes: 'ملاحظات النكهة',
    close: 'إغلاق',
  },
  en: {
    menu: 'Menu',
    coffee: 'Coffee Origins',
    location: 'Location',
    contact: 'Contact Us',
    home: 'Home',
    openMenu: 'Open Menu',
    coffeeOrigins: 'Coffee Origins',
    browseWebsite: 'Browse Our Website',
    askBarista: 'Ask the Barista',
    openInMaps: 'Open in Google Maps',
    comingSoon: 'Coming Soon',
    cal: 'cal',
    featuredSweets: 'Featured Sweets',
    testimonials: 'Testimonials',
    locationAndHours: 'Location & Hours',
    followUs: 'Follow Us',
    deliveryApps: 'Delivery Apps',
    socialMedia: 'Social Media',
    filterByOrigin: 'Filter by Origin',
    filterByFlavor: 'Filter by Flavor',
    filterByVariety: 'Filter by Variety',
    allOrigins: 'All Origins',
    allFlavors: 'All Flavors',
    allVarieties: 'All Varieties',
    origin: 'Origin',
    variety: 'Variety',
    flavorNotes: 'Flavor Notes',
    close: 'Close',
  },
};

export function t(key: keyof typeof translations.ar, locale: Locale): string {
  return translations[locale][key];
}
