import React, { useState } from 'react';
import CodeBox from './CodeBox';

const code = `import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 4000,
    open: true
  }
})
`;

const ViteConfigExample = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-6 shadow-xl border border-slate-200/50 hover:shadow-2xl transition-all duration-300">
      <button 
        className="flex items-center justify-between w-full text-left text-lg font-semibold text-slate-800 hover:text-blue-600 transition-colors duration-200" 
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="flex items-center gap-3">
          ⚡ vite.config.js Configuration
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
            title="vite.config.js - Vite Build Configuration"
            theme="dark"
          >
            {code}
          </CodeBox>
        </div>
      )}
    </div>
  );
};

export default ViteConfigExample;
