/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'dynamic-primary': 'var(--color-primary)',
        'dynamic-primary-light': 'var(--color-primary-light)',
        'dynamic-secondary': 'var(--color-secondary)',
        'dynamic-accent': 'var(--color-accent)',
        'dynamic-background': 'var(--color-background)',
        'dynamic-surface': 'var(--color-surface)',
        'dynamic-text': 'var(--color-text)',
        'dynamic-text-secondary': 'var(--color-text-secondary)',
        'dynamic-border': 'var(--color-border)',
        'dynamic-success': 'var(--color-success)',
        'dynamic-warning': 'var(--color-warning)',
        'dynamic-error': 'var(--color-error)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
        'color-shift': 'colorShift 0.3s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        colorShift: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.02)' },
          '100%': { transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}
