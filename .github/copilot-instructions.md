<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

This project is a premium, modern design principles guide app built with React and Vite. Focus on UX-friendly, visually engaging presentation, interactive components, and export functionality for developers and AI agents. Use Tailwind CSS for styling and animation. All code should follow accessibility and performance best practices.

# Premium Modern Design Principles & Implementation Guide

## 1. FOUNDATIONAL DESIGN PHILOSOPHY
- Emotional Impact First: Evoke a "wow" factor
- Functionality Through Beauty: Visual appeal enhances UX
- Dynamic over Static: Prefer animated, interactive elements
- Bold over Safe: Choose striking, memorable design
- Progressive Enhancement: Mobile-first, enhance for larger screens
- Design Hierarchy: UX > Visual Impact > Performance > Accessibility > Brand Consistency

## 2. LAYOUT & SPACING SYSTEM
- Max-width: 7xl (1280px) for main content
- Padding: 6 units (24px) mobile, maintain on desktop
- Sections: 20 units (80px) vertical padding min
- Components: 8 units (32px) internal padding
- Cards: 6-8 units (24-32px) internal padding
- Grid: Mobile 1col/16px, Tablet 2col/24px, Desktop 3-4col/32px, Large 6col/40px
- Spacing Scale: Micro 1-2u, Small 3-4u, Medium 6-8u, Large 12-16u, XL 20-32u

## 3. TYPOGRAPHY SYSTEM
- Font Hierarchy: Hero 6xl-7xl/800, Main 4xl-5xl/700, Section 2xl-3xl/700, Body Large xl-2xl/500, Body base-lg/400, Caption sm-base/400
- Line Height: 1.6-1.8 body, 1.2-1.4 headlines
- Letter Spacing: -0.025em headlines
- Font Weight Pairing: 2-3 weights max
- Responsive Scaling: -25-30% on mobile
- Gradient Text: Hero headlines, key CTAs

## 4. COMPONENT DESIGN PATTERNS
- Button: Padding 4-6u/6-8u, rounded-2xl, 600, shadow-2xl, hover scale/brightness, active scale, loading shimmer
- Card: rounded-3xl, padding 6-8u, shadow-xl, border 50% opacity, hover translate-y-2/shadow-2xl, bg white/50% or solid
- Input: rounded-xl, padding 3-4u/4-6u, border 2px, focus ring, placeholder 50% opacity, error shake/red

## 5. ANIMATION & INTERACTION PRINCIPLES
- Timing: Ease-out/in/in-out/linear
- Duration: Micro 150-200ms, Hover 200-300ms, Page 300-500ms, Complex 500-1000ms, Ambient 2000ms+
- Essential: Hover scale/translate/shadow, Loading shimmer/pulse, Entrance fade/slide, Focus ring/scale, Success/Error shake/bounce/slide
- Micro: Button press scale, Card hover lift, Icon hover rotate/scale/color, Form focus ring, Loading skeleton shimmer

## 6. VISUAL HIERARCHY & COMPOSITION
- Z-Index: Background -1-0, Content 1-9, Nav 10-19, Overlay 20-29, Modal 30-39, Tooltip 40-49, Critical 50+
- Weight: Primary high contrast/size/color, Secondary medium, Tertiary low
- Emphasis: Size 2-3x, Contrast 4.5:1 text/3:1 UI, Color bright/muted, Position center, Whitespace generous

## 7. RESPONSIVE DESIGN PATTERNS
- Breakpoints: Mobile 320-767px, Tablet 768-1023px, Desktop 1024-1279px, Large 1280px+
- Adapt: Nav hamburger/horizontal, Grid 1-6col, Typography scale, Spacing tight/generous, Interactions touch/hover
- Mobile-First: Touch 44px min, Priority content, Simple nav, Thumb reach, Performance

## 8. MODERN VISUAL EFFECTS
- Glassmorphism: bg-white/80, blur-lg, border 20% opacity, shadow tint
- Gradients: bg 2-3 colors/45-135deg, text bg-clip, border pseudo/border-image, animated rotate/shift
- Shadows: sm/md/lg/2xl/colored
- Toolkit: blur, 3D transforms, clip paths, masks, filters

## 9. PERFORMANCE & OPTIMIZATION
- Loading: Skeleton, progressive, lazy, preload critical, smooth transitions
- Animation: transform, GPU, reduce motion, throttle, cleanup

## 10. ACCESSIBILITY INTEGRATION
- Contrast: Text 4.5:1, UI 3:1, color independence, focus indicators, error multi-indicator
- Interaction: Keyboard nav, screen reader, touch 44px, reduced motion, color blindness

## 11. IMPLEMENTATION PATTERNS
- Structure: Wrapper > Container > Header > Content > Actions
- State: Loading skeleton, error retry, empty illustration, success next, disabled opacity
- CSS: Grid, Flexbox, custom properties, container queries, aspect ratio

## 12. QUALITY ASSURANCE CHECKLIST
- Visual: Spacing, typography, animation, responsive, accessibility, performance, cross-browser
- UX: Navigation, CTAs, error messages, fast load, smooth, logical, mobile
- Technical: Semantic HTML, optimized images, efficient CSS/JS, meta tags, SEO, analytics, security

## 13. IMPLEMENTATION GUIDELINES
- Workflow: Mobile-first, component-based, design system, performance budget, testing
- Code: Semantic HTML, CSS org, JS enhancement, image/font optimization

Apply these principles and patterns consistently across all code and UI. Prioritize clarity, accessibility, performance, and modern visual engagement in every component and feature.
