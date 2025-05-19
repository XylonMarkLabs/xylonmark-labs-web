/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './app/2components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      backgroundImage: {
        'about-gradient': 'radial-gradient(circle at 30% 30%, #3a2231 60%, #181822 100%)',
      },
      colors: {
        // You can customize your color palette here
        primary: {
          DEFAULT: '#0A0A1A',
          50: '#fff1f2',
          100: '#ffe4e6',
          200: '#fecdd3',
          300: '#fda4af',
          400: '#fb7185',
          500: '#f43f5e',
          600: '#e11d48',
          700: '#be123c',
          800: '#9f1239',
          900: '#881337',
          950: '#4c0519',
        },
        darkBlue: '#0A0A1A',
        darkRed: '#6A0101'
      },
    },
  },
  plugins: [],
};