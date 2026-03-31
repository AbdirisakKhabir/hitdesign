/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        primary: '#0076d6',
        secondary: '#36a9fa',
        brand: {
          50: '#e8f4fd',
          100: '#d1e9fb',
          200: '#a3d3f7',
          300: '#75bdf3',
          400: '#36a9fa',
          500: '#1c94e8',
          600: '#0076d6',
          700: '#005fb0',
          800: '#00488a',
          900: '#003666',
          950: '#001b36',
        },
      },
      fontFamily: {
        sans: ['"Hurme Geometric Sans 4"', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-mesh':
          'radial-gradient(at 40% 20%, rgba(0, 118, 214, 0.38) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(54, 169, 250, 0.22) 0px, transparent 50%), radial-gradient(at 0% 50%, rgba(0, 88, 176, 0.28) 0px, transparent 50%), radial-gradient(at 80% 50%, rgba(54, 169, 250, 0.12) 0px, transparent 50%), radial-gradient(at 0% 100%, rgba(0, 118, 214, 0.22) 0px, transparent 50%)',
        'hero-mesh-light':
          'radial-gradient(at 40% 20%, rgba(0, 118, 214, 0.14) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(54, 169, 250, 0.12) 0px, transparent 50%), radial-gradient(at 0% 50%, rgba(0, 118, 214, 0.1) 0px, transparent 50%), radial-gradient(at 80% 50%, rgba(54, 169, 250, 0.08) 0px, transparent 50%), radial-gradient(at 0% 100%, rgba(0, 118, 214, 0.1) 0px, transparent 50%)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        marquee: 'marquee 42s linear infinite',
        'marquee-rev': 'marquee 48s linear infinite reverse',
        'about-card-in':
          'aboutCardIn 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        aboutCardIn: {
          '0%': { opacity: '0', transform: 'translateY(1.35rem) scale(0.98)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
      },
    },
  },
  plugins: [],
};
