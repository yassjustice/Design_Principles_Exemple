import React, { useState } from 'react';

const TailwindReportCodeBox = ({ title, description, code, language = 'javascript' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="border rounded-lg p-4 mb-4 bg-white/80 backdrop-blur-lg shadow-xl">
      <button className="text-blue-500 mb-2 font-semibold" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Hide' : 'Show'} {title}
      </button>
      <p className="text-gray-600 text-sm mb-2">{description}</p>
      {isOpen && (
        <div>
          <pre className="mt-2 bg-gray-100 p-4 rounded overflow-x-auto text-sm border">
            <code className={`language-${language}`}>{code}</code>
          </pre>
          <button 
            className="flex items-center bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-200 mt-2" 
            onClick={copyToClipboard}
          >
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

const TailwindReportPage = () => {
  const setupItems = [
    {
      title: 'index.css',
      description: 'The new, official way for Tailwind v4+ with the Vite plugin. No need for separate @tailwind directives.',
      code: `@import "tailwindcss";`,
      language: 'css'
    },
    {
      title: 'tailwind.config.js',
      description: 'ESM export with darkMode class support. Critical for toggle-based dark mode.',
      code: `/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // Enables class-based dark mode (required for toggle)
  theme: { extend: {} },
  plugins: [],
}`,
      language: 'javascript'
    },
    {
      title: 'vite.config.js',
      description: '@tailwindcss/vite plugin is required for Tailwind v4+. No need for separate postcss.config.js.',
      code: `import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 4000,
    open: true
  }
})`,
      language: 'javascript'
    },
    {
      title: 'package.json (dependencies)',
      description: 'Only these packages are needed for Tailwind v4+. No postcss or autoprefixer required.',
      code: `"devDependencies": {
  "@tailwindcss/vite": "^4.1.11",
  "tailwindcss": "^4.1.11",
  "vite": "^7.0.4",
  "react": "^19.1.0",
  "react-dom": "^19.1.0",
  "@vitejs/plugin-react": "^4.6.0"
}`,
      language: 'json'
    },
    {
      title: 'index.html (FOUC prevention)',
      description: 'Optional but recommended script for seamless dark mode experience without flash of unstyled content.',
      code: `<script>
  // Set initial theme before React loads to prevent FOUC
  try {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (saved === 'dark' || (!saved && prefersDark)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  } catch (e) {}
</script>`,
      language: 'html'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-16 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Latest Tailwind CSS v4+ Setup
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 font-medium">
            Modern, minimal, and official setup for Tailwind v4+ with Vite and React (2025)
          </p>
          <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/50">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              🚀 Working Configuration Guide
            </h2>
            <p className="text-lg text-gray-600">
              This is the official, minimal, and modern setup for Tailwind v4+ with Vite and React as of 2025.
              Follow this configuration and your dark mode toggle and all Tailwind features will work as intended.
            </p>
          </div>
        </div>

        {/* Key Points */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Key Highlights</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🎯", title: "No PostCSS Config", desc: "No postcss.config.js needed for Tailwind v4+ with Vite plugin" },
              { icon: "✨", title: "Single Import", desc: "Just @import \"tailwindcss\"; in your CSS file" },
              { icon: "🌙", title: "Dark Mode Ready", desc: "darkMode: 'class' enables toggle-based dark mode" },
              { icon: "⚡", title: "Minimal Dependencies", desc: "Only @tailwindcss/vite and tailwindcss needed" }
            ].map((point, idx) => (
              <div key={idx} className="bg-white/70 backdrop-blur-lg rounded-2xl p-6 shadow-xl text-center">
                <div className="text-4xl mb-4">{point.icon}</div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">{point.title}</h3>
                <p className="text-gray-600 text-sm">{point.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Configuration Files */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Configuration Files</h2>
          <div className="space-y-6">
            {setupItems.map((item, idx) => (
              <TailwindReportCodeBox
                key={idx}
                title={item.title}
                description={item.description}
                code={item.code}
                language={item.language}
              />
            ))}
          </div>
        </div>

        {/* Summary Table */}
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/50 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Setup Summary</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="py-3 px-4 font-semibold text-gray-800">File</th>
                  <th className="py-3 px-4 font-semibold text-gray-800">Key Setting</th>
                  <th className="py-3 px-4 font-semibold text-gray-800">Purpose</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['index.css', '@import "tailwindcss";', 'Loads all Tailwind layers (v4+ style)'],
                  ['tailwind.config.js', 'darkMode: "class"', 'Enables class-based dark mode'],
                  ['vite.config.js', '@tailwindcss/vite in plugins', 'Ensures Tailwind is processed by Vite'],
                  ['package.json', '@tailwindcss/vite, tailwindcss, vite', 'Only these are needed for Tailwind v4+'],
                  ['index.html', '<script>...</script> (optional)', 'Prevents FOUC for dark mode']
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium text-blue-600">{row[0]}</td>
                    <td className="py-3 px-4 text-gray-700 font-mono text-sm">{row[1]}</td>
                    <td className="py-3 px-4 text-gray-600">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Upgrade?</h3>
            <p className="text-lg mb-6">
              Follow this modern setup and enjoy the latest Tailwind CSS v4+ features with optimal performance.
            </p>
            <div className="text-sm opacity-90">
              ✅ Official Setup • ✅ Minimal Config • ✅ Dark Mode Ready • ✅ Future Proof
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TailwindReportPage;
