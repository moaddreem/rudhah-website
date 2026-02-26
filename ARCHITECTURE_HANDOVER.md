# Cafe Website — Architecture & Handover (Full Technical Description)

## 1) Executive Overview (Scope)

### What the Site Is
**Rudhah Cafe (ردهه)** is a bilingual (Arabic/English) static marketing website for a specialty coffee cafe located in Abha, Saudi Arabia. The site serves as a digital menu, location finder, and social media hub for the cafe.

### Intended Audience
- **Primary**: Local customers in Abha seeking cafe information, menu, and location
- **Secondary**: Tourists visiting the Al Miftaha District / Art Street area
- **Language**: Arabic-first (RTL default), with English toggle

### Primary User Journeys
1. **Browse Menu**: Home → Menu page → Scroll through categories (Cold Drinks, Hot Drinks, Drip Coffee, Sweets, Breakfast, Winter)
2. **Explore Coffee Origins**: Home → Coffee Origins page → View coffee bean cards with origin/variety/flavor details
3. **Find Location**: Home → Location page → View address, hours, open Google Maps
4. **Social/Contact**: Home → Contact page → Access Instagram, TikTok links; view delivery app info
5. **Language Switch**: Any page → Click AR/EN toggle in header → Navigate to alternate locale version

### Non-Goals for This Build
- No online ordering or e-commerce
- No user authentication or accounts
- No CMS or admin dashboard
- No database or backend API
- No payment processing
- No reservation system

---

## 2) Pages & Routes Inventory

### Complete Route List

| Route | Language | Page File |
|-------|----------|-----------|
| `/` | Arabic (RTL) | `src/app/page.tsx` |
| `/menu` | Arabic | `src/app/menu/page.tsx` |
| `/coffee` | Arabic | `src/app/coffee/page.tsx` |
| `/location` | Arabic | `src/app/location/page.tsx` |
| `/contact` | Arabic | `src/app/contact/page.tsx` |
| `/en` | English (LTR) | `src/app/en/page.tsx` |
| `/en/menu` | English | `src/app/en/menu/page.tsx` |
| `/en/coffee` | English | `src/app/en/coffee/page.tsx` |
| `/en/location` | English | `src/app/en/location/page.tsx` |
| `/en/contact` | English | `src/app/en/contact/page.tsx` |

---

### Page: Home (`/` and `/en`)

**Purpose**: Landing page showcasing cafe brand, featured sweets, testimonials, location preview, and delivery apps.

**UI Sections**:
1. **Hero Section**: Gradient background (`bg-gradient-to-b from-primary via-primary to-primary/95`), Logo, tagline, two CTA buttons ("افتح المنيو" / "قائمة البن")
2. **Featured Sweets**: 2×2 grid of 4 selected sweets with icon, name (AR/EN), price
3. **Testimonials**: 3-column grid of customer reviews
4. **Location & Hours**: Card with city, area, hours, Google Maps button
5. **Delivery Apps Section**: Keeta and HungerStation cards
6. **Footer**: Logo, tagline, nav links, copyright

**Components Used**:
- `Header` (`src/components/Header.tsx`)
- `Logo` (`src/components/Logo.tsx`)
- `DeliveryAppsSection` (`src/components/DeliveryAppsSection.tsx`)
- `Riyal` (`src/components/Riyal.tsx`)
- `FadeIn` (`src/components/FadeIn.tsx`)

**Data Sources**:
- `src/data/menu.json` — sweets category items
- `src/data/site.json` — cafe info, location, hours, testimonials

**Interactions**:
- CTA buttons navigate to `/menu` and `/coffee`
- Google Maps button opens external link (`target="_blank"`)
- Footer links navigate to internal pages

**Transitions/Animations**:
- `FadeIn` component wraps sections (700ms ease-out, translateY 12px → 0)
- Hover effects on buttons: `hover:scale-105`, `transition-all duration-200`
- Sweet cards: `hover:shadow-md`, `hover:-translate-y-1`, `transition-all duration-300`

**Edge Cases**:
- Featured sweets filtered by exact Arabic name match; if name changes in JSON, filter breaks
- Testimonials array must have exactly 3 items for balanced grid

**Responsive Behavior**:
- Hero: `py-16 md:py-20`, buttons stack on mobile (`flex-col sm:flex-row`)
- Sweets grid: `grid-cols-2` always, `max-w-2xl mx-auto`
- Testimonials: `grid-cols-1 md:grid-cols-3`
- Footer links: `flex-wrap`, `gap-8 sm:gap-10`

---

### Page: Menu (`/menu` and `/en/menu`)

**Purpose**: Full cafe menu organized by category with sticky category tabs.

**UI Sections**:
1. **Header**: Sticky navigation
2. **Category Tabs**: Sticky horizontal scrollable tabs below header
3. **Menu Sections**: Category heading + grid of menu items
4. **CTA**: "تصفح موقعنا" button at bottom
5. **Bottom Nav**: Mobile-only fixed bottom navigation

**Components Used**:
- `Header` (`src/components/Header.tsx`)
- `MenuItem` (`src/components/MenuItem.tsx`)
- `CategoryTabs` (`src/components/CategoryTabs.tsx`)
- `BottomNav` (`src/components/BottomNav.tsx`)

**Data Sources**:
- `src/data/menu.json` — all categories and items

**Interactions**:
- Click category tab → smooth scroll to section
- Scroll → IntersectionObserver updates active tab
- Bottom nav links to Location, Coffee, Contact

**Transitions/Animations**:
- Tab active state: `transition-all duration-200`
- MenuItem hover: `hover:border-accent/40`, `hover:shadow-lg`, `hover:-translate-y-0.5`, `transition-all duration-200`

**Edge Cases**:
- Scroll offset calculated as 132px (Header 56px + Tabs 60px + gap 16px)
- IntersectionObserver uses `rootMargin: '-120px 0px -50% 0px'`

**Responsive Behavior**:
- Menu grid: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`
- Bottom nav: `md:hidden` (mobile only)
- Category tabs: horizontal scroll with `scrollbar-hide`

---

### Page: Coffee Origins (`/coffee` and `/en/coffee`)

**Purpose**: Showcase specialty coffee beans with origin, variety, and flavor notes.

**UI Sections**:
1. **Hero**: Primary background, title, subtitle
2. **Coffee Grid**: Cards for each coffee bean

**Components Used**:
- `Header` (`src/components/Header.tsx`)
- `CoffeeCard` (`src/components/CoffeeCard.tsx`)
- `FadeIn` (`src/components/FadeIn.tsx`)

**Data Sources**:
- `src/data/coffee-beans.json` — 7 coffee beans with full details

**Interactions**:
- Cards are display-only (no click action in current build)
- `CoffeeModal` component exists but is not currently used

**Transitions/Animations**:
- `FadeIn` wrapper on grid
- Card hover: `hover:shadow-lg`, `transition-all duration-200`

**Edge Cases**:
- Odd number of beans: last card centered on mobile using `col-span-2 md:col-span-1 justify-self-center` with calculated width

**Responsive Behavior**:
- Grid: `grid-cols-2 md:grid-cols-2 lg:grid-cols-3`
- Last odd card width: `w-[calc((100%-12px)/2)]` on mobile

---

### Page: Location (`/location` and `/en/location`)

**Purpose**: Display cafe location, hours, and photo.

**UI Sections**:
1. **Hero**: Primary background, title
2. **Location Card**: Address, hours, Google Maps button
3. **Location Photo**: Image of cafe

**Components Used**:
- `Header` (`src/components/Header.tsx`)
- `FadeIn` (`src/components/FadeIn.tsx`)
- `next/image` for optimized image

**Data Sources**:
- `src/data/site.json` — location, hours, maps_link

**Interactions**:
- Google Maps button opens external link

**Transitions/Animations**:
- Two `FadeIn` wrappers with staggered delay (0ms, 100ms)

**Edge Cases**:
- Image uses `aspect-square` with `object-cover`
- `sizes` attribute: `(max-width: 768px) 100vw, 672px`

---

### Page: Contact (`/contact` and `/en/contact`)

**Purpose**: Social media links and delivery app information.

**UI Sections**:
1. **Header**
2. **Social Media Section**: Instagram, TikTok cards
3. **Delivery Apps Section**: HungerStation, Keeta cards

**Components Used**:
- `Header` (`src/components/Header.tsx`)
- `FadeIn` (`src/components/FadeIn.tsx`)
- Local `ContactCard` and `ContactIcon` components (defined in page file)

**Data Sources**:
- `src/data/site.json` — contact.instagram, contact.tiktok, delivery.hungerstation, delivery.keeta

**Interactions**:
- Cards with `placeholder: false` and valid `link` are clickable
- Delivery cards show "متوفر الآن عبر التطبيق" / "Available Now" badge

**Transitions/Animations**:
- `FadeIn` with staggered delays
- Card hover: `hover:scale-[1.02]`, `transition-all duration-200`

---

## 3) Information Architecture (Site Structure)

### Navigation Structure

**Header Navigation** (`src/components/Header.tsx`):
```
navLinks = [
  { href: '/menu', label_ar: 'المنيو', label_en: 'Menu' },
  { href: '/coffee', label_ar: 'قائمة البن', label_en: 'Coffee Origins' },
  { href: '/location', label_ar: 'الموقع', label_en: 'Location' },
  { href: '/contact', label_ar: 'حساباتنا', label_en: 'Our Accounts' },
]
```

**Mobile Menu**: Adds Home link, centered modal overlay with backdrop blur.

**Bottom Nav** (`src/components/BottomNav.tsx`, mobile only):
- Location, Coffee, Contact

**Footer Links** (in `page.tsx`):
- المنيو/Menu, قائمة البن/Coffee, الموقع/Location, حساباتنا/Our Accounts

---

### Content Models

#### MenuItem (defined in `src/data/menu.json`)
```typescript
{
  name_ar: string;      // Arabic name
  name_en: string;      // English name
  price: number;        // Price in SAR
  calories: number;     // Calorie count
}
```

#### Category (defined in `src/data/menu.json`)
```typescript
{
  id: string;           // URL-safe identifier
  category_ar: string;  // Arabic category name
  category_en: string;  // English category name
  items: MenuItem[];    // Array of menu items
}
```

#### CoffeeBean (defined in `src/data/coffee-beans.json`)
```typescript
{
  id: string;
  name_ar: string;
  name_en: string;
  origin_ar: string;
  origin_en: string;
  region_ar: string;
  region_en: string;
  variety_ar: string;
  variety_en: string;
  flavor_notes_ar: string;
  flavor_notes_en: string;
  flavor_profile: string[];  // e.g., ["fruity", "floral"]
  image: string;             // Path to image in /public/images/
}
```

#### SocialLink (defined in `src/data/site.json`)
```typescript
{
  label_ar: string;
  label_en: string;
  link: string | null;
  placeholder: boolean;  // If true, link is not active
}
```

#### DeliveryApp (defined in `src/data/site.json`)
```typescript
{
  label_ar: string;
  label_en: string;
  link: string | null;
  placeholder: boolean;
}
```

#### Testimonial (defined in `src/data/site.json`)
```typescript
{
  text_ar: string;
  text_en: string;
  author_ar: string;
  author_en: string;
}
```

---

## 4) Tech Stack & Versions (Exact)

| Technology | Version | Source |
|------------|---------|--------|
| **Next.js** | ^14.2.0 | `package.json` |
| **React** | ^18.2.0 | `package.json` |
| **React DOM** | ^18.2.0 | `package.json` |
| **TypeScript** | ^5.3.0 | `package.json` |
| **Tailwind CSS** | ^3.4.1 | `package.json` |
| **PostCSS** | ^8.4.35 | `package.json` |
| **Autoprefixer** | ^10.4.17 | `package.json` |
| **ESLint** | ^8.56.0 | `package.json` |
| **eslint-config-next** | ^14.2.0 | `package.json` |
| **Node Types** | ^20.11.0 | `package.json` |

### UI/Styling Approach
- **Tailwind CSS** configured in `tailwind.config.ts`
- Custom CSS in `src/app/globals.css`
- No CSS Modules used
- No external UI component library (custom components only)

### Animation/Transitions
- **No external animation library** (no Framer Motion, no AOS)
- Pure CSS transitions via Tailwind utility classes
- Custom `FadeIn` component using IntersectionObserver + CSS transitions

---

## 5) Repository Anatomy (Concrete)

### Repository Tree (4 levels deep)
```
RUDHAH WEBSITE/
├── .git/
├── .gitignore
├── .next/                          # Build output (gitignored)
├── node_modules/                   # Dependencies (gitignored)
├── public/
│   ├── fonts/
│   │   ├── Lateef/
│   │   │   ├── Lateef-Regular.ttf
│   │   │   ├── Lateef-Medium.ttf
│   │   │   ├── Lateef-SemiBold.ttf
│   │   │   └── Lateef-Bold.ttf
│   │   ├── Adobe Arabic Regular.ttf
│   │   ├── alfont_com_AlFont_com_joumhouria-1.ttf
│   │   ├── mishafi-gold-regular.ttf
│   │   ├── mishafi.woff
│   │   └── mishafi.woff2
│   └── images/
│       ├── beans/
│       ├── hero/
│       ├── sweets/
│       ├── logo.svg
│       ├── logo.webp
│       ├── loca.jpg
│       ├── hungerlogo.png
│       ├── keetalogo.webp
│       ├── Copy of نسخة من ردهه.pdf.svg
│       ├── Saudi_Riyal_Symbol-2.svg
│       └── [coffee origin images].png
├── src/
│   ├── app/
│   │   ├── coffee/
│   │   │   └── page.tsx
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   ├── en/
│   │   │   ├── coffee/
│   │   │   │   └── page.tsx
│   │   │   ├── contact/
│   │   │   │   └── page.tsx
│   │   │   ├── location/
│   │   │   │   └── page.tsx
│   │   │   ├── menu/
│   │   │   │   └── page.tsx
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   ├── location/
│   │   │   └── page.tsx
│   │   ├── menu/
│   │   │   └── page.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── BottomNav.tsx
│   │   ├── CategoryTabs.tsx
│   │   ├── CoffeeCard.tsx
│   │   ├── CoffeeModal.tsx
│   │   ├── DeliveryAppsSection.tsx
│   │   ├── FadeIn.tsx
│   │   ├── Header.tsx
│   │   ├── LanguageToggle.tsx
│   │   ├── Logo.tsx
│   │   ├── MenuItem.tsx
│   │   ├── Price.tsx
│   │   └── Riyal.tsx
│   ├── data/
│   │   ├── coffee-beans.json
│   │   ├── menu.json
│   │   └── site.json
│   └── lib/
│       ├── coffeeImageMap.ts
│       └── i18n.ts
├── next.config.js
├── next-env.d.ts
├── package.json
├── package-lock.json
├── postcss.config.js
├── README.md
├── tailwind.config.ts
├── tsconfig.json
└── vercel.json
```

### Folder Responsibilities

| Folder | Responsibility |
|--------|----------------|
| `src/app/` | Next.js App Router pages and layouts |
| `src/app/en/` | English locale pages (LTR) |
| `src/components/` | Reusable React components |
| `src/data/` | Static JSON data files |
| `src/lib/` | Utility functions (i18n, image mapping) |
| `public/fonts/` | Self-hosted Arabic fonts |
| `public/images/` | Static images (logos, coffee origins, location) |

### Entry Points and Bootstrapping

1. **Root Layout**: `src/app/layout.tsx`
   - Sets `<html lang="ar" dir="rtl">`
   - Imports `globals.css`
   - Defines metadata (title, description, OpenGraph)
   - Preloads Lateef fonts

2. **English Layout**: `src/app/en/layout.tsx`
   - Wraps children in `<div dir="ltr" lang="en">`
   - Overrides metadata for English

3. **App Mounting**: Next.js App Router handles mounting via `layout.tsx` → `page.tsx` hierarchy

---

## 6) Architecture (High → Low)

### Architecture Diagram (ASCII)
```
┌─────────────────────────────────────────────────────────────────┐
│                         USER (Browser)                          │
└─────────────────────────────────────────────────────────────────┘
                                │
                                ▼
┌─────────────────────────────────────────────────────────────────┐
│                     Vercel Edge Network                         │
│                   (CDN + Static Hosting)                        │
└─────────────────────────────────────────────────────────────────┘
                                │
                                ▼
┌─────────────────────────────────────────────────────────────────┐
│                    Next.js Static Export                        │
│                                                                 │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────────┐ │
│  │   Pages     │  │ Components  │  │      Static Data        │ │
│  │  (App Dir)  │──│  (React)    │──│  (JSON in src/data/)    │ │
│  └─────────────┘  └─────────────┘  └─────────────────────────┘ │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │                    Static Assets                         │   │
│  │           (public/images/, public/fonts/)                │   │
│  └─────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
                                │
                                ▼
┌─────────────────────────────────────────────────────────────────┐
│                     External Services                           │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────────────┐  │
│  │ Google Maps  │  │  Instagram   │  │       TikTok         │  │
│  │   (Link)     │  │   (Link)     │  │       (Link)         │  │
│  └──────────────┘  └──────────────┘  └──────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
```

### Rendering Strategy

**Static Site Generation (SSG)** — Evidence:
- `next.config.js` has no `output: 'export'` but Vercel auto-detects
- All pages use `'use client'` directive for client-side interactivity
- No `getServerSideProps`, no API routes
- Data imported directly from JSON files at build time

**Hydration**: Pages are pre-rendered at build time, then hydrated on client for interactivity (IntersectionObserver, state, navigation).

### Boundary Map

| Boundary | What Runs There |
|----------|-----------------|
| **Build Time** | JSON data import, page pre-rendering, Tailwind CSS compilation |
| **Server (Vercel)** | Static file serving, CDN caching |
| **Browser** | React hydration, IntersectionObserver, useState, smooth scroll, navigation |

### Component Architecture

```
Page (e.g., page.tsx)
├── Header
│   └── LanguageToggle
├── [Page-specific sections]
│   ├── FadeIn (animation wrapper)
│   ├── MenuItem / CoffeeCard / ContactCard
│   └── DeliveryAppsSection
│       └── FadeIn
├── BottomNav (mobile only, menu page)
└── Footer (home page only)
```

### State Management

| State | Location | Purpose |
|-------|----------|---------|
| `mobileMenuOpen` | `Header.tsx` (useState) | Toggle mobile menu visibility |
| `activeCategory` | `menu/page.tsx` (useState) | Track active menu category for tabs |
| `isVisible` | `FadeIn.tsx` (useState) | Track if element is in viewport |

**No global state management** — No Redux, Zustand, or Context API used. All state is local component state.

---

## 7) Transitions & Motion (Deep Dive)

### Animation Inventory

#### 1. FadeIn Component (`src/components/FadeIn.tsx`)
- **Trigger**: Element enters viewport (IntersectionObserver, threshold 0.1)
- **Implementation**: CSS transition via Tailwind classes
  ```css
  transition-all duration-700 ease-out
  opacity-0 translate-y-3 → opacity-100 translate-y-0
  ```
- **Delay**: Configurable via `delay` prop (setTimeout)
- **Accessibility**: Checks `prefers-reduced-motion: reduce`, skips animation if true
- **Performance**: Uses `translate-y` (GPU-accelerated transform)

#### 2. Button Hover Effects
- **Trigger**: Mouse hover
- **Implementation**: Tailwind classes
  ```css
  hover:scale-105 transition-all duration-200
  hover:bg-accent/90
  ```
- **Performance**: `scale` is GPU-accelerated

#### 3. Card Hover Effects
- **Trigger**: Mouse hover
- **Implementation**: Various per component
  - MenuItem: `hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200`
  - CoffeeCard: `hover:shadow-lg transition-all duration-200`
  - Sweet cards: `hover:shadow-md hover:-translate-y-1 transition-all duration-300`
- **Performance**: All use GPU-accelerated transforms

#### 4. Mobile Menu Transition
- **Trigger**: `mobileMenuOpen` state change
- **Implementation**: CSS opacity + scale
  ```css
  transition-opacity duration-200
  scale-100 opacity-100 ↔ scale-95 opacity-0
  ```

#### 5. Category Tab Active State
- **Trigger**: Tab click or scroll intersection
- **Implementation**: Tailwind classes
  ```css
  transition-all duration-200
  bg-primary text-bg ↔ bg-cream text-primary
  ```

#### 6. Smooth Scroll
- **Trigger**: Category tab click
- **Implementation**: 
  - CSS: `html { scroll-behavior: smooth; }` in `globals.css`
  - JS: `window.scrollTo({ behavior: 'smooth' })` in `menu/page.tsx`
- **Accessibility**: Disabled if `prefers-reduced-motion: reduce`

#### 7. Global Reduced Motion Support (`globals.css:128-140`)
```css
@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Route Transitions
**No route transitions implemented.** Page navigation is instant (standard Next.js behavior).

To add route transitions:
1. Install `framer-motion`
2. Create `src/components/PageTransition.tsx`
3. Wrap page content in `layout.tsx`

---

## 8) Styling System & Design Tokens

### Typography

**Primary Font**: Lateef (Arabic)
- Loaded via `@font-face` in `globals.css:17-47`
- Weights: 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold)
- Files: `public/fonts/Lateef/Lateef-*.ttf`
- Preloaded in `layout.tsx:28-29`

**Fallback Stack** (defined in `tailwind.config.ts:19-21`):
```
'Lateef', 'Geeza Pro', 'Noto Naskh Arabic', 'Tahoma', sans-serif
```

**Additional Fonts** (loaded but minimally used):
- Adobe Arabic (`public/fonts/Adobe Arabic Regular.ttf`)
- Joumhouria (`public/fonts/alfont_com_AlFont_com_joumhouria-1.ttf`)

### Colors (defined in `tailwind.config.ts:11-16` and `globals.css:5-10`)

| Token | Value | Usage |
|-------|-------|-------|
| `primary` | `#590D1A` | Dark burgundy — text, buttons, header |
| `accent` | `#B38F6F` | Gold/tan — header bg, highlights, icons |
| `bg` | `#F8F2E6` | Cream — page background |
| `muted` | `#A18D7E` | Gray-brown — secondary text |
| `cream` | `#F5EDE4` | Lighter cream — card backgrounds |

### Spacing & Breakpoints

**Breakpoints** (Tailwind defaults):
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

**Container** (`globals.css:151-179`):
- Max width: 1280px
- Padding: 1rem (mobile) → 1.5rem (sm) → 2rem (lg) → 2.5rem (xl)

**Section Padding** (`globals.css:182-199`):
- Mobile: 2.5rem top/bottom
- md: 4rem
- lg: 5rem

### Font Sizes (defined in `tailwind.config.ts:23-31`)

| Token | Size | Line Height |
|-------|------|-------------|
| `heading-xl` | 2.5rem | 1.2 |
| `heading-lg` | 2rem | 1.2 |
| `heading-md` | 1.75rem | 1.3 |
| `heading-sm` | 1.25rem | 1.4 |
| `body-lg` | 1.125rem | 1.7 |
| `body` | 1rem | 1.8 |
| `body-sm` | 0.875rem | 1.6 |

### Reusable UI Patterns

**Card** (`globals.css:296-305`):
```css
.card {
  background-color: var(--bg);
  border-radius: 1rem;
  box-shadow: 0 2px 8px rgba(89, 13, 26, 0.08);
  transition: box-shadow 200ms, transform 200ms;
}
.card:hover {
  box-shadow: 0 4px 16px rgba(89, 13, 26, 0.12);
}
```

**Button Primary** (`globals.css:257-273`):
```css
.btn-primary {
  background-color: var(--primary);
  color: var(--bg);
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 500;
  transition: background-color 150ms, box-shadow 150ms;
}
```

**Chip/Tab** (`globals.css:308-333`):
```css
.chip { /* pill-shaped button */ }
.chip-active { /* filled state */ }
.chip-inactive { /* outlined state */ }
```

---

## 9) Assets & Media Pipeline

### Image Locations

| Path | Contents |
|------|----------|
| `public/images/logo.svg` | SVG logo (used in sweet cards) |
| `public/images/logo.webp` | WebP logo (favicon, apple-touch-icon) |
| `public/images/Copy of نسخة من ردهه.pdf.svg` | Header/footer logo |
| `public/images/loca.jpg` | Location page photo |
| `public/images/hungerlogo.png` | HungerStation logo |
| `public/images/keetalogo.webp` | Keeta logo |
| `public/images/*.png` | Coffee origin images (Arabic names) |

### Image Optimization

**Next.js Image Component** (`next/image`):
- Used in: `CoffeeCard.tsx`, `CoffeeModal.tsx`, `DeliveryAppsSection.tsx`, `location/page.tsx`
- Automatic optimization, lazy loading, responsive sizing
- `sizes` attribute specified for responsive images

**Standard `<img>` tags**:
- Used in: `Header.tsx`, `Logo.tsx`, `page.tsx` (sweet icons)
- No optimization (intentional for SVGs)

### Font Loading

**Preloading** (`layout.tsx:28-29`):
```html
<link rel="preload" href="/fonts/Lateef/Lateef-Regular.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
<link rel="preload" href="/fonts/Lateef/Lateef-Bold.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
```

**Font Display**: `font-display: swap` in all `@font-face` rules

### Naming Conventions

- Coffee images: Arabic name + `.png` (e.g., `اثيوبيا شلشلي.png`)
- Logos: descriptive English names
- **To add new assets**: Place in `public/images/`, reference with `/images/filename`

---

## 10) Integrations

### External Links

| Service | Link Location | Configuration File |
|---------|---------------|-------------------|
| **Google Maps** | Location page, Home page | `src/data/site.json` → `location.maps_link` |
| **Instagram** | Contact page | `src/data/site.json` → `contact.instagram.link` |
| **TikTok** | Contact page | `src/data/site.json` → `contact.tiktok.link` |

### Delivery Apps

| App | Status | Configuration |
|-----|--------|---------------|
| **HungerStation** | Placeholder (`link: null`) | `src/data/site.json` → `delivery.hungerstation` |
| **Keeta** | Placeholder (`link: null`) | `src/data/site.json` → `delivery.keeta` |

To activate delivery links:
1. Edit `src/data/site.json`
2. Set `link` to actual URL
3. Set `placeholder` to `false`

### Analytics
**No analytics currently implemented.**

To add Google Analytics:
1. Create `src/components/Analytics.tsx`
2. Add to `layout.tsx`
3. Use `next/script` with `strategy="afterInteractive"`

---

## 11) SEO & Accessibility

### Metadata (`src/app/layout.tsx:4-15`)
```typescript
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
```

### English Metadata (`src/app/en/layout.tsx:3-6`)
```typescript
export const metadata: Metadata = {
  title: 'Rudhah Cafe | ردهه',
  description: 'A calm coffee experience in the heart of Abha - قهوة رايقة في قلب أبها',
};
```

### Sitemap/Robots
**Not present.** 

To add:
1. Create `public/robots.txt`
2. Create `src/app/sitemap.ts` (Next.js 14 convention)

### Accessibility Coverage

| Feature | Status | Location |
|---------|--------|----------|
| **Keyboard Navigation** | ✅ Partial | Links/buttons are focusable |
| **Focus Styles** | ✅ Yes | `globals.css:251-254` — `:focus-visible` with accent outline |
| **ARIA Labels** | ✅ Partial | Mobile menu button, language toggle, Riyal symbol |
| **Alt Text** | ✅ Yes | All images have alt attributes |
| **Reduced Motion** | ✅ Yes | `globals.css:128-140`, `FadeIn.tsx:16-21` |
| **RTL Support** | ✅ Yes | `dir="rtl"` on Arabic pages |
| **Color Contrast** | ⚠️ Check | Primary (#590D1A) on bg (#F8F2E6) — verify ratio |

### Accessibility Gaps

1. **Skip to content link**: Not present
   - Add to: `src/app/layout.tsx`
   
2. **Landmark roles**: Implicit via semantic HTML, but could be explicit
   - Add `role="main"`, `role="navigation"`, `role="banner"`

3. **Form labels**: No forms in current build

---

## 12) Security & Privacy

### Threat Surfaces

| Surface | Risk | Mitigation |
|---------|------|------------|
| **External Links** | Low | All use `rel="noopener noreferrer"` ✅ |
| **User Input** | None | No forms, no query params processed |
| **Embeds** | None | No iframes, no third-party embeds |
| **Dependencies** | Low | Minimal dependencies, all from npm |

### Dependency Safety

Current dependencies are well-maintained:
- Next.js, React, Tailwind — actively maintained, security patches
- No known vulnerabilities in current versions

**Recommendation**: Run `npm audit` periodically

### Recommended Headers (Vercel)

Add to `vercel.json`:
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-XSS-Protection", "value": "1; mode=block" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" }
      ]
    }
  ]
}
```

---

## 13) Deployment & Environments

### Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev
# → http://localhost:3000

# Build for production
npm run build

# Run production build locally
npm start

# Lint code
npm run lint
```

### Hosting

**Platform**: Vercel (confirmed by `vercel.json`)

**Evidence**:
- `vercel.json` exists with `"framework": "nextjs"`
- No other deployment configs (no `netlify.toml`, no `Dockerfile`)

### Environment Variables

**No environment variables in this build.**

All configuration is in:
- `src/data/site.json` — cafe info, links
- `src/data/menu.json` — menu items
- `src/data/coffee-beans.json` — coffee data

### Release Process

1. Make changes locally
2. Test with `npm run build` (ensures no build errors)
3. Commit and push to GitHub
4. Vercel auto-deploys on push to `main` branch
5. Verify deployment at production URL

### Rollback

Via Vercel Dashboard:
1. Go to Deployments
2. Find previous working deployment
3. Click "..." → "Promote to Production"

---

## 14) Maintenance Guide (Future-Proof)

### How to Add a New Menu Item

1. Edit `src/data/menu.json`
2. Find the appropriate category by `id`
3. Add item to `items` array:
   ```json
   { "name_ar": "اسم عربي", "name_en": "English Name", "price": 20, "calories": 150 }
   ```
4. Run `npm run build` to verify
5. Commit and push

### How to Add a New Menu Category

1. Edit `src/data/menu.json`
2. Add new category object to `categories` array:
   ```json
   {
     "id": "new-category",
     "category_ar": "فئة جديدة",
     "category_en": "NEW CATEGORY",
     "items": []
   }
   ```
3. Category will automatically appear in tabs and menu

### How to Add a New Coffee Bean

1. Add image to `public/images/` (Arabic name + `.png`)
2. Edit `src/data/coffee-beans.json`
3. Add bean object to `beans` array with all required fields
4. Update `filters` arrays if new origin/variety/flavor

### How to Add a New Social Link

1. Edit `src/data/site.json` → `contact`
2. Add new entry:
   ```json
   "twitter": {
     "label_ar": "تويتر",
     "label_en": "Twitter",
     "link": "https://twitter.com/...",
     "placeholder": false
   }
   ```
3. Edit `src/app/contact/page.tsx` and `src/app/en/contact/page.tsx`
4. Add to `socialLinks` array
5. Add icon case to `ContactIcon` function

### How to Add a New Page

1. Create folder: `src/app/[page-name]/`
2. Create `page.tsx` with `'use client'` directive
3. Import and use `Header` component
4. Create English version: `src/app/en/[page-name]/page.tsx`
5. Add to `navLinks` in `src/components/Header.tsx`
6. Add to footer links in `src/app/page.tsx` and `src/app/en/page.tsx`

### How to Change Transitions Globally

1. **Duration**: Edit `FadeIn.tsx:43` — change `duration-700`
2. **Easing**: Edit `FadeIn.tsx:43` — change `ease-out`
3. **Distance**: Edit `FadeIn.tsx:46` — change `translate-y-3`
4. **Hover effects**: Search for `transition-all duration-` in components

### Common Changes Cookbook

| Change | Files to Edit |
|--------|---------------|
| Update hours | `src/data/site.json` → `hours` |
| Change tagline | `src/data/site.json` → `cafe.tagline_ar/en` |
| Update Google Maps link | `src/data/site.json` → `location.maps_link` |
| Change featured sweets | `src/app/page.tsx:14` and `src/app/en/page.tsx:14` — edit `featuredSweetNames` array |
| Update testimonials | `src/data/site.json` → `testimonials` array |
| Change primary color | `tailwind.config.ts:12` and `globals.css:6` |
| Update logo | Replace `public/images/Copy of نسخة من ردهه.pdf.svg` |

---

## 15) Not In Scope (Current Build)

### Backend / CMS
- **Why out of scope**: Static site for simple cafe; content changes infrequent
- **Where to add**: Create `src/app/api/` routes or integrate Sanity/Contentful
- **Minimal approach**: Use Sanity Studio with `@sanity/client` for content management

### Authentication
- **Why out of scope**: No user accounts needed for menu display
- **Where to add**: `src/app/api/auth/` with NextAuth.js
- **Minimal approach**: NextAuth.js with credentials provider

### Online Ordering / Payments
- **Why out of scope**: Cafe uses third-party delivery apps
- **Where to add**: Create `src/app/order/` pages, integrate Stripe
- **Minimal approach**: Link to delivery app deep links when available

### Admin Dashboard
- **Why out of scope**: JSON files editable by developer
- **Where to add**: `src/app/admin/` with authentication
- **Minimal approach**: Use Sanity Studio or create simple protected routes

### Database
- **Why out of scope**: Static data sufficient for current needs
- **Where to add**: Vercel Postgres or PlanetScale
- **Minimal approach**: Prisma ORM with serverless-compatible database

### Automated Tests
- **Why out of scope**: Simple static site, manual testing sufficient
- **Where to add**: `__tests__/` folder, `jest.config.js`
- **Minimal approach**: Jest + React Testing Library for component tests

### CI/CD Pipeline
- **Why out of scope**: Vercel handles deployment automatically
- **Where to add**: `.github/workflows/` for GitHub Actions
- **Minimal approach**: Add lint/build checks on PR

### i18n Framework
- **Why out of scope**: Manual locale handling sufficient for 2 languages
- **Where to add**: Install `next-intl` or `next-i18next`
- **Minimal approach**: Current `src/lib/i18n.ts` pattern works for 2 locales

---

## 16) Additional Maintainer Notes (Repo-Specific)

### 404 / Redirect Strategy
**Not explicitly configured.** Next.js default 404 page will be shown.

To customize:
- Create `src/app/not-found.tsx`

### Scroll Restoration
**Browser default behavior.** No custom scroll restoration implemented.

### basePath / trailingSlash
**Not configured** in `next.config.js`. Using Next.js defaults:
- No basePath
- No trailing slash enforcement

### Image Fallback Strategy
**No fallback implemented.** If image fails to load, broken image shown.

To add fallback:
- Use `onError` handler on `<Image>` components
- Set fallback `src` to placeholder image

### Hardcoded Constants That May Need Updates

| Constant | Location | Value |
|----------|----------|-------|
| Featured sweet names | `src/app/page.tsx:14`, `src/app/en/page.tsx:14` | Array of 4 names |
| Copyright year | `src/app/page.tsx:192`, `src/app/en/page.tsx:192` | `2026` |
| Scroll offset | `src/app/menu/page.tsx:21` | `132` (pixels) |
| Header height CSS var | `globals.css:11` | `56px` |
| Tabs height CSS var | `globals.css:12` | `60px` |

### RTL Styling Gotchas

1. **Decorative circles in hero**: Positioned with `left`/`right` — swapped between AR/EN pages
2. **Quote icon position**: `right-4` in Arabic, `left-4` in English (testimonials)
3. **Mobile menu close button**: Position swapped based on `isRTL`
4. **Price display**: Uses `dir="ltr"` and `unicodeBidi: 'isolate'` to keep numbers LTR

### Font Loading Order
1. Lateef Regular/Bold preloaded in `<head>`
2. Other weights loaded on demand via `@font-face`
3. Fallback to system Arabic fonts if Lateef fails

### Container Width Consistency
All pages use `max-w-[1280px]` for main content. Some sections use `max-w-2xl` for narrower content (location card, featured sweets).

### Third-Party Embed Quirks
**None currently.** No iframes, no embedded maps, no social widgets.

### Build/Deploy Quirks

1. **Arabic filenames**: Coffee images use Arabic names (e.g., `اثيوبيا شلشلي.png`). Ensure Git and filesystem handle UTF-8 correctly.

2. **Case sensitivity**: Vercel runs on Linux (case-sensitive). Ensure import paths match actual file names exactly.

3. **Node version**: Not specified in `package.json`. Vercel will use default. Consider adding `engines` field if issues arise.

### Performance Hotspots

1. **Coffee origin images**: Large PNG files (up to 2.5MB). Consider:
   - Converting to WebP
   - Reducing resolution
   - Using `next/image` with `quality` prop

2. **Font files**: Multiple TTF files. Consider:
   - Subsetting fonts to Arabic + Latin characters only
   - Converting to WOFF2 for better compression

### Naming Conventions

- **Components**: PascalCase (`Header.tsx`, `CoffeeCard.tsx`)
- **Pages**: `page.tsx` in folder (Next.js App Router convention)
- **Data files**: kebab-case (`coffee-beans.json`)
- **CSS classes**: Tailwind utilities, no custom class naming convention
- **JSON keys**: snake_case for bilingual fields (`name_ar`, `name_en`)

### Component Patterns

1. **Locale prop**: All components accept `locale: Locale` prop
2. **Bilingual data**: Components receive both `_ar` and `_en` fields, display based on locale
3. **Client components**: All interactive components use `'use client'` directive
4. **FadeIn wrapper**: Used for scroll-triggered animations on sections

---

## 17) Appendix

### Full Dependency List

**Core**:
- `next`: ^14.2.0 — React framework
- `react`: ^18.2.0 — UI library
- `react-dom`: ^18.2.0 — React DOM renderer

**Styling**:
- `tailwindcss`: ^3.4.1 — Utility-first CSS
- `postcss`: ^8.4.35 — CSS processing
- `autoprefixer`: ^10.4.17 — Vendor prefixes

**Tooling**:
- `typescript`: ^5.3.0 — Type checking
- `eslint`: ^8.56.0 — Linting
- `eslint-config-next`: ^14.2.0 — Next.js ESLint rules
- `@types/node`: ^20.11.0 — Node.js types
- `@types/react`: ^18.2.0 — React types
- `@types/react-dom`: ^18.2.0 — React DOM types

### Full Routes List (Compact)

```
/                 → Arabic Home
/menu             → Arabic Menu
/coffee           → Arabic Coffee Origins
/location         → Arabic Location
/contact          → Arabic Contact
/en               → English Home
/en/menu          → English Menu
/en/coffee        → English Coffee Origins
/en/location      → English Location
/en/contact       → English Contact
```

### Config Files Explained

#### `next.config.js`
```javascript
const nextConfig = {
  reactStrictMode: true,  // Enable React strict mode for development warnings
}
module.exports = nextConfig
```
Minimal config — no custom webpack, no redirects, no rewrites.

#### `tailwind.config.ts`
- **content**: Scans `src/pages/`, `src/components/`, `src/app/` for class usage
- **theme.extend.colors**: Custom color palette (primary, accent, bg, muted, cream)
- **theme.extend.fontFamily**: Arabic font stacks (mishafi, arabic, ui)
- **theme.extend.fontSize**: Custom heading/body sizes with line heights
- **theme.extend.maxWidth**: Custom container width (1280px)
- **plugins**: None

#### `tsconfig.json`
- **strict**: true — Full TypeScript strictness
- **paths**: `@/*` → `./src/*` — Import alias
- **jsx**: preserve — Let Next.js handle JSX transformation
- **moduleResolution**: bundler — Modern resolution for Next.js 14

#### `postcss.config.js`
```javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```
Standard Tailwind setup.

#### `vercel.json`
```json
{
  "framework": "nextjs"
}
```
Minimal — tells Vercel to use Next.js build system.

---

**Document Version**: 1.0  
**Generated**: February 2026  
**Codebase Version**: 0.1.0 (per `package.json`)
