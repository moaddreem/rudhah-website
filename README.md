# ردهه | Rudhah Cafe Website

A premium, calm ("رايق") bilingual website for Rudhah Cafe in Abha, Saudi Arabia.

## Features

- **Bilingual Support**: Arabic (default, RTL) and English (LTR)
- **Route-based i18n**: `/` for Arabic, `/en` for English
- **Premium Design**: Calm, elegant, luxurious but welcoming
- **Mobile-First**: Optimized for QR code scanning
- **Data-Driven**: All content from JSON files for easy editing

## Pages

| Arabic Route | English Route | Description |
|--------------|---------------|-------------|
| `/` | `/en` | Home page with hero, featured sweets, testimonials |
| `/menu` | `/en/menu` | Full menu with sticky category tabs |
| `/coffee` | `/en/coffee` | Coffee origins catalog with filters |
| `/location` | `/en/location` | Location, hours, Google Maps link |
| `/contact` | `/en/contact` | Social media and delivery app placeholders |

## Brand Colors

- **Primary**: `#590D1A` (deep maroon)
- **Accent**: `#B38F6F` (gold)
- **Background**: `#F8F2E6` (cream)
- **Muted**: `#A18D7E` (secondary text)

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000)

## Data Files

Edit these JSON files to update content without touching UI code:

- `src/data/menu.json` - Menu categories and items
- `src/data/coffee-beans.json` - Coffee origins catalog
- `src/data/site.json` - Contact info, hours, location, testimonials

## Fonts

Place your custom fonts in `public/fonts/`:
- `Beirut.woff2` / `Beirut.woff` - Arabic body font
- `Misha.woff2` / `Misha.woff` - Display/headings font
- `Gold.woff2` / `Gold.woff` - Alternative display font

## Logo

Replace the placeholder logo component in `src/components/Logo.tsx` with your actual logo.

## Placeholders to Update

1. **Logo**: Replace placeholder in `Logo.tsx`
2. **Social Links**: Update `site.json` with real links
3. **Delivery Apps**: Update `site.json` with HungerStation/Keeta links
4. **Images**: Add coffee bean images to `public/images/beans/`
5. **Favicon**: Replace `public/favicon.ico`

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- RTL Support

## License

Private - Rudhah Cafe
