import React, { useState } from 'react';
import CodeBox from './CodeBox';

const code = `/** @type {import('tailwindcss').Config} */
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
`;

const TailwindConfigExample = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-6 shadow-xl border border-slate-200/50 hover:shadow-2xl transition-all duration-300">
      <button 
        className="flex items-center justify-between w-full text-left text-lg font-semibold text-slate-800 hover:text-blue-600 transition-colors duration-200" 
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="flex items-center gap-3">
          🎨 tailwind.config.js Configuration
        </span>
        <svg
          className={`w-5 h-5 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>
      
      {isOpen && (
        <div className="mt-6">
          <CodeBox 
            language="javascript" 
            title="tailwind.config.js - Complete Tailwind Configuration"
            theme="dark"
          >
            {code}
          </CodeBox>
        </div>
      )}
    </div>
  );
};

export default TailwindConfigExample;
