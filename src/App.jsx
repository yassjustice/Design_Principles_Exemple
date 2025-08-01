import React, { useState } from "react";
import PrincipleCard from "./components/PrincipleCard";
import { designPrinciples } from "./data/designPrinciples";
import './App.css';
import PackageJsonExample from './components/PackageJsonExample';
import PostcssConfigExample from './components/PostcssConfigExample';
import TailwindConfigExample from './components/TailwindConfigExample';
import ViteConfigExample from './components/ViteConfigExample';
import TailwindReportPage from './components/TailwindReportPage';
import { PDFDownloadLink } from '@react-pdf/renderer';
import DesignPrinciplesPDF from './components/DesignPrinciplesPDF';
import packageJsonCode from './assets/package.txt?raw';
import postcssConfigCode from './assets/postcss.config.txt?raw';
import tailwindConfigCode from './assets/tailwind.config.txt?raw';
import viteConfigCode from './assets/vite.config.txt?raw';

function exportToMarkdown(content, filename = 'design-principles.md') {
  const blob = new Blob([content], { type: 'text/markdown' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function exportToText(content, filename = 'design-principles.txt') {
  const blob = new Blob([content], { type: 'text/plain' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function generateMarkdown() {
  let md = `# Premium Design Principles\n\n`;
  md += designPrinciples.map(p => {
    let sections = '';
    if (p.sections) {
      sections = p.sections.map(s => `### ${s.subtitle}\n${s.content.map(c => `- ${c}`).join('\n')}`).join('\n');
    }
    return `## ${p.title}\n${sections}`;
  }).join('\n');
  md += `\n## Configuration Examples\n`;
  md += '### package.json\n```json\n' + packageJsonCode + '\n```\n';
  md += '### postcss.config.js\n```js\n' + postcssConfigCode + '\n```\n';
  md += '### tailwind.config.js\n```js\n' + tailwindConfigCode + '\n```\n';
  md += '### vite.config.js\n```js\n' + viteConfigCode + '\n```\n';
  return md;
}

function generateText() {
  let txt = 'Premium Design Principles\n\n';
  txt += designPrinciples.map(p => {
    let sections = '';
    if (p.sections) {
      sections = p.sections.map(s => `${s.subtitle}: ${s.content.join('; ')}`).join('\n');
    }
    return `${p.title}: ${sections}`;
  }).join('\n');
  txt += '\n\nConfiguration Examples\n';
  txt += '\npackage.json\n' + packageJsonCode;
  txt += '\npostcss.config.js\n' + postcssConfigCode;
  txt += '\ntailwind.config.js\n' + tailwindConfigCode;
  txt += '\nvite.config.js\n' + viteConfigCode;
  return txt;
}

function App() {
  const [exporting, setExporting] = useState(false);
  const [exportError, setExportError] = useState(null);
  const [exportSuccess, setExportSuccess] = useState(false);
  const [activeTab, setActiveTab] = useState('principles');
  const [showConfig, setShowConfig] = useState({
    packageJson: false,
    postcssConfig: false,
    tailwindConfig: false,
    viteConfig: false,
  });

  const handleExport = async (format) => {
    setExporting(true);
    setExportError(null);
    setExportSuccess(false);
    try {
      if (format === 'Markdown') {
        const markdown = generateMarkdown(); // implement this function to serialize your content
        exportToMarkdown(markdown);
      } else if (format === 'Text') {
        const text = generateText(); // implement this function to serialize your content
        exportToText(text);
      }
      setTimeout(() => {
        setExporting(false);
        setExportSuccess(true);
      }, 1200);
    } catch (e) {
      setExporting(false);
      setExportError('Export failed. Please try again.');
    }
  };

  const toggleShow = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.classList.toggle('hidden');
    }
  };

  return (
    <main className="max-w-7xl mx-auto min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 font-sans">
      {/* Navigation Tabs */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-white/50 shadow-lg">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex space-x-8">
            <button
              onClick={() => setActiveTab('principles')}
              className={`px-6 py-2 rounded-lg font-semibold transition-all duration-200 ${
                activeTab === 'principles'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
              }`}
            >
              🎨 Design Principles
            </button>
            <button
              onClick={() => setActiveTab('tailwind')}
              className={`px-6 py-2 rounded-lg font-semibold transition-all duration-200 ${
                activeTab === 'tailwind'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
              }`}
            >
              ⚡ Tailwind v4+ Setup
            </button>
          </div>
        </div>
      </nav>

      {/* Tab Content */}
      {activeTab === 'principles' && (
        <div id="export-content">
          {/* Hero Section */}
          <section className="py-20 px-6 md:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
            Premium Design Principles
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 font-medium">
            Transform your projects with modern, high-impact design that drives engagement and delivers exceptional user experiences.
          </p>
          <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/50">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Get Your Complete Implementation Guide
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Download the comprehensive guide with code examples, best practices, and implementation strategies for your next project.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <PDFDownloadLink
                document={<DesignPrinciplesPDF />}
                fileName="design-principles-guide.pdf"
                className="px-8 py-4 rounded-xl font-semibold shadow-lg text-white text-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300 hover:scale-105 hover:shadow-xl active:scale-95 bg-gradient-to-r from-blue-600 to-purple-600"
              >
                {({ loading }) => loading ? 'Generating PDF...' : '📄 Download PDF'}
              </PDFDownloadLink>
              <button
                className="px-8 py-4 rounded-xl font-semibold shadow-lg text-white text-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-purple-300 hover:scale-105 hover:shadow-xl active:scale-95 bg-gradient-to-r from-purple-600 to-pink-600"
                onClick={() => handleExport("Markdown")}
                disabled={exporting}
              >
                {exporting ? "Generating..." : "📝 Download Markdown"}
              </button>
              <button
                className="px-8 py-4 rounded-xl font-semibold shadow-lg text-white text-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-pink-300 hover:scale-105 hover:shadow-xl active:scale-95 bg-gradient-to-r from-pink-600 to-blue-600"
                onClick={() => handleExport("Text")}
                disabled={exporting}
              >
                {exporting ? "Generating..." : "📋 Download Text"}
              </button>
            </div>
            {exportError && (
              <div className="mt-4 text-red-600 font-semibold animate-pulse">
                {exportError}
              </div>
            )}
            {exportSuccess && (
              <div className="mt-4 text-green-600 font-semibold animate-bounce">
                ✅ Export successful! Check your downloads.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-6 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
            Why These Principles Matter
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-6 shadow-xl">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Higher Engagement</h3>
              <p className="text-gray-600">Modern design principles increase user engagement by up to 75% through emotional connection and intuitive interactions.</p>
            </div>
            <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-6 shadow-xl">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Better Performance</h3>
              <p className="text-gray-600">Optimized design patterns and efficient animations ensure smooth 60fps experiences across all devices.</p>
            </div>
            <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-6 shadow-xl">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Faster Development</h3>
              <p className="text-gray-600">Proven patterns and reusable components accelerate your development workflow and reduce iteration time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles Overview */}
      <section className="py-16 px-6 md:px-8 bg-white/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
            13 Essential Design Principles
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Foundational Philosophy", desc: "Emotional impact first, functionality through beauty", icon: "🎨" },
              { title: "Layout & Spacing", desc: "Systematic approach to visual hierarchy and rhythm", icon: "📐" },
              { title: "Typography System", desc: "Scalable type hierarchy for all screen sizes", icon: "📝" },
              { title: "Component Patterns", desc: "Reusable design patterns for consistency", icon: "🧩" },
              { title: "Animation & Interaction", desc: "Smooth micro-interactions and timing", icon: "✨" },
              { title: "Visual Hierarchy", desc: "Guide user attention with purposeful design", icon: "🎯" },
              { title: "Responsive Design", desc: "Mobile-first approach with progressive enhancement", icon: "📱" },
              { title: "Modern Effects", desc: "Glassmorphism, gradients, and contemporary aesthetics", icon: "🌟" },
              { title: "Performance", desc: "Optimized loading and smooth animations", icon: "⚡" },
              { title: "Accessibility", desc: "Inclusive design for all users", icon: "♿" },
              { title: "Implementation", desc: "Practical coding patterns and best practices", icon: "💻" },
              { title: "Quality Assurance", desc: "Comprehensive testing and validation checklist", icon: "✅" },
              { title: "Development Guidelines", desc: "Workflow and code quality standards", icon: "🛠️" }
            ].map((principle, idx) => (
              <div key={idx} className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-3xl mb-4">{principle.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{principle.title}</h3>
                <p className="text-gray-600">{principle.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features Preview */}
      <section className="py-16 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
            What You'll Learn
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Complete Implementation Guide</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="text-green-500 text-xl">✓</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Modern Visual Effects</h4>
                    <p className="text-gray-600">Glassmorphism, gradients, shadows, and cutting-edge aesthetics</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="text-green-500 text-xl">✓</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Animation Patterns</h4>
                    <p className="text-gray-600">Smooth micro-interactions and performance-optimized animations</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="text-green-500 text-xl">✓</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Responsive Systems</h4>
                    <p className="text-gray-600">Mobile-first approach with progressive enhancement strategies</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="text-green-500 text-xl">✓</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Code Examples</h4>
                    <p className="text-gray-600">Ready-to-use implementations for React, Vue, and vanilla JS</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Perfect for:</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="text-yellow-300">👨‍💻</div>
                  <span>Frontend Developers</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="text-yellow-300">🎨</div>
                  <span>UI/UX Designers</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="text-yellow-300">🤖</div>
                  <span>AI Development Agents</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="text-yellow-300">📱</div>
                  <span>Mobile App Developers</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="text-yellow-300">🌐</div>
                  <span>Web Development Teams</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Principle Cards */}
      <section className="py-16 px-6 md:px-8 bg-white/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
            Explore the Principles in Action
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {designPrinciples.map((principle, idx) => (
              <PrincipleCard key={idx} {...principle} />
            ))}
          </div>
        </div>
      </section>

      {/* Configuration Examples */}
      <section className="py-16 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
            Ready-to-Use Configuration Examples
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Get started instantly with these pre-configured setups for popular frameworks and tools.
          </p>
          <div className="space-y-8">
            <PackageJsonExample />
            <PostcssConfigExample />
            <TailwindConfigExample />
            <ViteConfigExample />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 md:px-8 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Design Process?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Download the complete guide and start implementing premium design principles in your next project today.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              className="px-10 py-5 rounded-xl font-bold shadow-2xl text-gray-800 text-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white/50 hover:scale-105 hover:shadow-3xl active:scale-95 bg-white"
              onClick={() => handleExport("PDF")}
              disabled={exporting}
            >
              {exporting ? "🔄 Generating..." : "📄 Get PDF Guide"}
            </button>
            <button
              className="px-10 py-5 rounded-xl font-bold shadow-2xl text-gray-800 text-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white/50 hover:scale-105 hover:shadow-3xl active:scale-95 bg-white"
              onClick={() => handleExport("Markdown")}
              disabled={exporting}
            >
              {exporting ? "🔄 Generating..." : "📝 Get Markdown"}
            </button>
          </div>
          <p className="text-white/80 mt-6 text-lg">
            Comprehensive guide • Code examples • Best practices • Implementation checklist
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-8 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Premium Design Principles Guide</h3>
          <p className="text-gray-400 mb-6">
            Elevate your projects with modern, high-impact design that drives engagement and delivers exceptional user experiences.
          </p>
          <div className="border-t border-gray-700 pt-6">
            <p className="text-gray-500">© 2025 Premium Design Guide. All rights reserved.</p>
          </div>
        </div>
      </footer>
      </div>
      )}

      {/* Tailwind Report Tab */}
      {activeTab === 'tailwind' && (
        <TailwindReportPage />
      )}
    </main>
  );
}

export default App;