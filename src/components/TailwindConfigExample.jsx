import React, { useState } from 'react';

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
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="border rounded-lg p-4 mb-4">
      <button className="text-blue-500 mb-2" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Hide' : 'Show'} tailwind.config.js Example
      </button>
      {isOpen && (
        <div>
          <pre className="mt-2 bg-gray-100 p-2 rounded overflow-x-auto text-sm">
            {code}
          </pre>
          <button className="flex items-center bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-200 mt-2" onClick={copyToClipboard}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11V3a1 1 0 011-1h6a1 1 0 011 1v8m-6 0h6m-6 0v8a1 1 0 001 1h6a1 1 0 001-1v-8" />
            </svg>
            {copied ? 'Copied!' : 'Copy Code'}
          </button>
        </div>
      )}
    </div>
  );
};

export default TailwindConfigExample;
