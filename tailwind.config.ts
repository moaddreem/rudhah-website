import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#590D1A',
        accent: '#B38F6F',
        bg: '#F8F2E6',
        muted: '#A18D7E',
        cream: '#F5EDE4',
      },
      fontFamily: {
        mishafi: ['MishafiGold', 'sans-serif'],
        arabic: ['AdobeArabic', 'sans-serif'],
        ui: ['Joumhouria', 'sans-serif'],
      },
      fontSize: {
        'heading-xl': ['2.5rem', { lineHeight: '1.2' }],
        'heading-lg': ['2rem', { lineHeight: '1.2' }],
        'heading-md': ['1.75rem', { lineHeight: '1.3' }],
        'heading-sm': ['1.25rem', { lineHeight: '1.4' }],
        'body-lg': ['1.125rem', { lineHeight: '1.7' }],
        'body': ['1rem', { lineHeight: '1.8' }],
        'body-sm': ['0.875rem', { lineHeight: '1.6' }],
      },
      maxWidth: {
        'container': '1280px',
      },
    },
  },
  plugins: [],
}
export default config
