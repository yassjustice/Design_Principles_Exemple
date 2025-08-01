import React, { useState } from 'react';
import CodeBox from './CodeBox';

const StatusBadge = ({ status, children }) => {
  const styles = {
    success: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    warning: 'bg-amber-100 text-amber-800 border-amber-200',
    error: 'bg-red-100 text-red-800 border-red-200',
    info: 'bg-blue-100 text-blue-800 border-blue-200'
  };

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${styles[status]}`}>
      {children}
    </span>
  );
};

const Section = ({ icon, title, children, status }) => (
  <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-slate-200/50 hover:shadow-2xl transition-all duration-300">
    <div className="flex items-center gap-4 mb-6">
      <div className="text-3xl">{icon}</div>
      <div className="flex-1">
        <h3 className="text-2xl font-bold text-slate-800">{title}</h3>
        {status && <div className="mt-2">{status}</div>}
      </div>
    </div>
    <div className="space-y-6">
      {children}
    </div>
  </div>
);

const CollapsibleSection = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border border-slate-200 rounded-2xl overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-gradient-to-r from-slate-50 to-slate-100 hover:from-slate-100 hover:to-slate-200 px-6 py-4 text-left font-semibold text-slate-800 flex items-center justify-between transition-all duration-200"
      >
        <span>{title}</span>
        <svg
          className={`w-5 h-5 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>
      {isOpen && (
        <div className="p-6 bg-white">
          {children}
        </div>
      )}
    </div>
  );
};

export default function TailwindComprehensiveReport() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-16 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Comprehensive Tailwind CSS v4+ Report
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 font-medium">
            Complete dark mode configuration analysis and solutions
          </p>
        </div>

        <div className="space-y-12">
          {/* Executive Summary */}
          <Section
            icon="🎯"
            title="Executive Summary"
            status={<StatusBadge status="success">✅ Issue Resolved</StatusBadge>}
          >
            <div className="bg-gradient-to-r from-emerald-50 to-blue-50 border border-emerald-200 rounded-2xl p-6">
              <p className="text-lg text-slate-700 leading-relaxed">
                Your project uses <strong className="text-emerald-700">Tailwind CSS v4.1.11</strong> with the new <code className="bg-slate-200 px-2 py-1 rounded">@tailwindcss/vite</code> plugin. 
                The dark mode toggle was not working because <strong>Tailwind v4+ uses prefers-color-scheme by default</strong> instead of class-based switching. 
                The solution required adding a <code className="bg-slate-200 px-2 py-1 rounded">@custom-variant</code> directive to override this behavior.
              </p>
            </div>
          </Section>

          {/* Current Configuration */}
          <Section
            icon="📋"
            title="Current Project Configuration"
            status={<StatusBadge status="success">✅ Correctly Configured</StatusBadge>}
          >
            <div className="grid gap-6">
              <CollapsibleSection title="Package.json Configuration" defaultOpen>
                <CodeBox language="json" title="package.json - ✅ CORRECT">
{`{
  "tailwindcss": "^4.1.11",
  "@tailwindcss/vite": "^4.1.11"
}`}
                </CodeBox>
              </CollapsibleSection>

              <CollapsibleSection title="Vite Configuration">
                <CodeBox language="javascript" title="vite.config.js - ✅ CORRECT">
{`import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [react(), tailwindcss()],
})`}
                </CodeBox>
              </CollapsibleSection>

              <CollapsibleSection title="Fixed CSS Configuration">
                <CodeBox language="css" title="src/index.css - ✅ NOW CORRECT">
{`@import "tailwindcss";

/* CRITICAL: Override dark variant for class-based switching */
@custom-variant dark (&:where(.dark, .dark *));

/* Additional styling for proper theme behavior */
:root {
  color-scheme: light;
}
html.dark {
  color-scheme: dark;
}`}
                </CodeBox>
              </CollapsibleSection>
            </div>
          </Section>

          {/* Root Cause Analysis */}
          <Section
            icon="🔍"
            title="Root Cause Analysis"
            status={<StatusBadge status="error">❌ Previous Issues Identified</StatusBadge>}
          >
            <div className="space-y-6">
              <div className="grid gap-4">
                <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                  <h4 className="font-bold text-red-800 mb-3">1. Conflicting CSS Files</h4>
                  <p className="text-red-700 mb-3">App.css had hardcoded styles overriding Tailwind</p>
                  <CodeBox language="css" title="Problem">
{`body { background: #f6f8fa }`}
                  </CodeBox>
                  <p className="text-emerald-700 font-semibold">✅ Solution: Removed conflicting styles from App.css</p>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                  <h4 className="font-bold text-red-800 mb-3">2. Missing Custom Variant</h4>
                  <p className="text-red-700 mb-3">Tailwind v4+ defaults to prefers-color-scheme media queries</p>
                  <p className="text-emerald-700 font-semibold">✅ Solution: Added @custom-variant dark (&:where(.dark, .dark *));</p>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                  <h4 className="font-bold text-red-800 mb-3">3. Incorrect CSS Import Syntax</h4>
                  <p className="text-red-700 mb-3">Tried using v3 syntax which doesn't exist in v4+</p>
                  <div className="grid gap-3">
                    <CodeBox language="css" title="❌ OLD (v3)">
{`@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";`}
                    </CodeBox>
                    <CodeBox language="css" title="✅ NEW (v4+)">
{`@import "tailwindcss";`}
                    </CodeBox>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          {/* New Guidelines */}
          <Section
            icon="🚀"
            title="Tailwind CSS v4+ New Guidelines & Best Practices"
            status={<StatusBadge status="info">📚 Latest Documentation</StatusBadge>}
          >
            <div className="space-y-6">
              <CollapsibleSection title="Installation & Setup">
                <CodeBox language="bash" title="v4+ Installation">
{`# v4+ Installation (Current in your project)
npm install tailwindcss@latest @tailwindcss/vite@latest

# v4+ uses single import instead of three separate ones
# ❌ OLD (v3): @import "tailwindcss/base"; @import "tailwindcss/components"; @import "tailwindcss/utilities";
# ✅ NEW (v4+): @import "tailwindcss";`}
                </CodeBox>
              </CollapsibleSection>

              <CollapsibleSection title="CSS-First Configuration (v4+ Feature)">
                <CodeBox language="css" title="v4+ CSS-native theme configuration">
{`/* v4+ allows CSS-native theme configuration */
@import "tailwindcss";

@theme {
  --font-family-display: "Satoshi", sans-serif;
  --breakpoint-3xl: 1920px;
  --color-neon-pink: oklch(71.7% 0.25 360);
}`}
                </CodeBox>
              </CollapsibleSection>

              <CollapsibleSection title="Dark Mode Configuration">
                <div className="space-y-6">
                  <CodeBox language="css" title="Default Behavior (v4+)">
{`/* By default, v4+ uses prefers-color-scheme */
@import "tailwindcss";
/* dark: utilities respond to system preference only */`}
                  </CodeBox>

                  <CodeBox language="css" title="Class-Based Dark Mode (Required for Manual Toggle)">
{`/* Required for manual dark mode toggle */
@import "tailwindcss";
@custom-variant dark (&:where(.dark, .dark *));
/* Now dark: utilities respond to .dark class */`}
                  </CodeBox>

                  <CodeBox language="css" title="Alternative Syntaxes (v4+)">
{`/* Data attribute approach */
@custom-variant dark (&:where([data-theme=dark], [data-theme=dark] *));

/* Custom selector */
@custom-variant dark (&:where(.theme-dark, .theme-dark *));`}
                  </CodeBox>
                </div>
              </CollapsibleSection>
            </div>
          </Section>

          {/* Performance Features */}
          <Section
            icon="⚡"
            title="Performance & Modern Features"
            status={<StatusBadge status="success">🏎️ 10x Faster</StatusBadge>}
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl p-6 border border-emerald-200">
                <h4 className="font-bold text-emerald-800 mb-4 flex items-center gap-2">
                  🏎️ Speed Improvements
                </h4>
                <ul className="space-y-2 text-emerald-700">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                    <strong>10x faster builds</strong> (105ms vs 960ms)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                    <strong>35% smaller footprint</strong>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                    <strong>Rust-powered engine</strong>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                    <strong>Lightning CSS integration</strong>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-200">
                <h4 className="font-bold text-purple-800 mb-4 flex items-center gap-2">
                  🔮 Modern CSS Features
                </h4>
                <ul className="space-y-2 text-purple-700">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                    <strong>Native cascade layers</strong>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                    <strong>CSS custom properties</strong>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                    <strong>Container queries</strong> in core
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                    <strong>Color mixing</strong> with color-mix()
                  </li>
                </ul>
              </div>
            </div>
          </Section>

          {/* Working Implementation */}
          <Section
            icon="🎛️"
            title="Working Implementation"
            status={<StatusBadge status="success">✅ Fully Functional</StatusBadge>}
          >
            <CollapsibleSection title="ThemeToggle Component - Working Implementation" defaultOpen>
              <CodeBox language="jsx" title="ThemeToggle.jsx">
{`function ThemeToggle() {
  const [theme, setTheme] = useState(getInitialTheme);
  
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);
  
  return (
    <button onClick={() => setTheme(prev => prev === 'dark' ? 'light' : 'dark')}>
      {theme === 'dark' ? '🌙 Dark' : '☀️ Light'}
    </button>
  );
}`}
              </CodeBox>
            </CollapsibleSection>
          </Section>

          {/* Final Status */}
          <Section
            icon="🎉"
            title="Final Status"
            status={<StatusBadge status="success">🎉 Fully Functional</StatusBadge>}
          >
            <div className="bg-gradient-to-r from-emerald-50 to-blue-50 border border-emerald-200 rounded-2xl p-8">
              <h4 className="text-xl font-bold text-slate-800 mb-6">Your dark/light mode toggle is now fully functional with:</h4>
              <div className="grid gap-4">
                {[
                  'Visual theme switching between light (bg-gray-50) and dark (bg-gray-950)',
                  'Component-wide styling with dark: utilities working',
                  'Smooth transitions with transition-colors duration-300',
                  'localStorage persistence and system preference detection',
                  'FOUC prevention with pre-React theme script'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-white rounded-xl border border-slate-200">
                <p className="text-slate-700 leading-relaxed">
                  <strong className="text-emerald-600">The key breakthrough</strong> was adding{' '}
                  <code className="bg-slate-200 px-2 py-1 rounded text-sm">@custom-variant dark (&:where(.dark, .dark *));</code>{' '}
                  to override Tailwind v4+'s default <code className="bg-slate-200 px-2 py-1 rounded text-sm">prefers-color-scheme</code>{' '}
                  behavior and enable manual class-based dark mode switching.
                </p>
              </div>
            </div>
          </Section>
        </div>
      </div>
    </div>
  );
}
