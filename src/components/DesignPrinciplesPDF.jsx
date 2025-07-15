import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { designPrinciples } from '../data/designPrinciples';

const styles = StyleSheet.create({
  page: {
    padding: 32,
    fontFamily: 'Helvetica',
    fontSize: 12,
    backgroundColor: '#F8FAFC',
  },
  section: {
    marginBottom: 24,
    paddingBottom: 24,
    borderBottom: '1px solid #E5E7EB',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3B82F6',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#6366F1',
    marginBottom: 4,
  },
  text: {
    fontSize: 12,
    color: '#374151',
    marginBottom: 8,
    lineHeight: 1.5,
  },
  list: {
    marginLeft: 12,
    marginBottom: 8,
  },
  listItem: {
    fontSize: 12,
    color: '#374151',
    marginBottom: 4,
    lineHeight: 1.5,
  },
  pageBreak: {
    marginTop: 32,
    borderTop: '2px solid #6366F1',
  },
});

const configExamples = [
  {
    title: 'package.json',
    description: 'Defines project metadata, dependencies, scripts, and engines for your app.',
    code: `{
  "name": "color-visualization-app",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  },
  "dependencies": {
    "clsx": "^2.0.0",
    "framer-motion": "^10.16.4",
    "lucide-react": "^0.294.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^7.6.3",
    "tailwind-merge": "^2.2.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.43",
    "@types/react-dom": "^18.2.17",
    "@vitejs/plugin-react": "^4.2.1",
    "autoprefixer": "^10.4.16",
    "eslint": "^8.55.0",
    "eslint-plugin-react": "^7.33.2",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.4.5",
    "postcss": "^8.4.32",
    "tailwindcss": "^3.3.6",
    "vite": "^5.0.8"
  }
}`
  },
  {
    title: 'postcss.config.js',
    description: 'Configures PostCSS plugins for Tailwind CSS and autoprefixer.',
    code: `export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}`
  },
  {
    title: 'tailwind.config.js',
    description: 'Tailwind CSS configuration for theme, colors, animations, and content scanning.',
    code: `/** @type {import('tailwindcss').Config} */
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
}`
  },
  {
    title: 'vite.config.js',
    description: 'Vite configuration for React, path aliases, and dev server options.',
    code: `import { defineConfig } from 'vite'
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
})`
  }
];

const DesignPrinciplesPDF = () => (
  <Document>
    <Page size="A4" style={styles.page} wrap>
      {/* Title and Introduction */}
      <View style={styles.section}>
        <Text style={styles.title}>Premium Modern Design Principles</Text>
        <Text style={styles.text}>A comprehensive guide to next-level UX/UI implementation for developers and AI agents.</Text>
      </View>
      {/* Core Principles */}
      {designPrinciples.map((principle, idx) => (
        <View key={idx} style={{ ...styles.section, marginBottom: 32, paddingBottom: 32 }}>
          <Text style={styles.title}>{principle.title}</Text>
          {principle.sections && principle.sections.map((section, sidx) => (
            <View key={sidx} style={{ marginBottom: 16 }}>
              <Text style={styles.subtitle}>{section.subtitle}</Text>
              <View style={styles.list}>
                {section.content.map((item, iidx) => (
                  <Text key={iidx} style={styles.listItem}>• {item}</Text>
                ))}
              </View>
            </View>
          ))}
        </View>
      ))}
      {/* Page Break before Config Examples */}
      <View style={{ marginTop: 48, borderTop: '2px solid #6366F1', paddingTop: 32 }}>
        <Text style={styles.title}>Configuration Examples</Text>
      </View>
      {/* Config Examples Section */}
      {configExamples.map((cfg, idx) => (
        <View key={idx} style={{ marginBottom: 32, padding: 16, backgroundColor: '#F3F4F6', borderRadius: 8 }}>
          <Text style={styles.subtitle}>{cfg.title}</Text>
          <Text style={styles.text}>{cfg.description}</Text>
          <View style={{ backgroundColor: '#E5E7EB', padding: 8, borderRadius: 4, marginTop: 8 }}>
            <Text style={{ fontSize: 9, fontFamily: 'Courier', color: '#111827', lineHeight: 1.3 }}>{cfg.code}</Text>
          </View>
        </View>
      ))}
    </Page>
  </Document>
);

export default DesignPrinciplesPDF;
