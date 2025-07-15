import React from "react";

export const designPrinciples = [
  {
    title: "Foundational Design Philosophy",
    sections: [
      {
        subtitle: "Core Principles",
        content: [
          "Emotional Impact First: Every design decision should evoke a 'wow' factor that makes users pause and engage.",
          "Functionality Through Beauty: Visual appeal should enhance, not hinder, user experience.",
          "Dynamic over Static: Prefer animated, interactive elements over static presentations.",
          "Bold over Safe: Choose striking, memorable design over conventional approaches.",
          "Progressive Enhancement: Build from mobile-first, enhance for larger screens."
        ]
      },
      {
        subtitle: "Design Hierarchy",
        content: [
          "User Experience (seamless interaction flow)",
          "Visual Impact (emotional engagement)",
          "Performance (smooth, responsive)",
          "Accessibility (inclusive design)",
          "Brand Consistency (cohesive identity)"
        ]
      }
    ]
  },
  {
    title: "Layout & Spacing System",
    sections: [
      {
        subtitle: "Container Strategy",
        content: [
          "Max-width: 7xl (1280px) for main content",
          "Padding: 6 units (24px) on mobile, maintain on desktop",
          "Sections: 20 units (80px) vertical padding minimum",
          "Components: 8 units (32px) internal padding",
          "Cards: 6-8 units (24-32px) internal padding"
        ]
      },
      {
        subtitle: "Grid System",
        content: [
          "Mobile: Single column with 16px margins",
          "Tablet: 2-column grid with 24px gaps",
          "Desktop: 3-4 column grid with 32px gaps",
          "Large Desktop: Up to 6 columns with 40px gaps"
        ]
      },
      {
        subtitle: "Spacing Scale (Tailwind Units)",
        content: [
          "Micro: 1-2 units (4-8px) - icon-text gaps",
          "Small: 3-4 units (12-16px) - button padding",
          "Medium: 6-8 units (24-32px) - card padding",
          "Large: 12-16 units (48-64px) - section spacing",
          "Extra Large: 20-32 units (80-128px) - hero sections"
        ]
      }
    ]
  },
  {
    title: "Typography System",
    sections: [
      {
        subtitle: "Font Hierarchy",
        content: [
          "Hero Headlines: 6xl-7xl (60-72px) - extrabold (800)",
          "Main Headlines: 4xl-5xl (36-48px) - bold (700)",
          "Section Titles: 2xl-3xl (24-30px) - bold (700)",
          "Body Large: xl-2xl (20-24px) - medium (500)",
          "Body Text: base-lg (16-18px) - normal (400)",
          "Caption: sm-base (14-16px) - normal (400)"
        ]
      },
      {
        subtitle: "Typography Best Practices",
        content: [
          "Line Height: 1.6-1.8 for body text, 1.2-1.4 for headlines",
          "Letter Spacing: Slight tracking for headlines (-0.025em), normal for body",
          "Font Weight Pairing: Use 2-3 weights maximum (400, 600, 700)",
          "Responsive Scaling: Reduce font sizes by 25-30% on mobile",
          "Gradient Text: Apply to hero headlines and key CTAs for visual impact"
        ]
      }
    ]
  },
  {
    title: "Component Design Patterns",
    sections: [
      {
        subtitle: "Button Design",
        content: [
          "Primary Button: Padding 4-6 units vertical, 6-8 units horizontal",
          "Border Radius: 16-24px (rounded-2xl)",
          "Font Weight: 600 (semibold)",
          "Shadow: Large drop shadow (shadow-2xl)",
          "Hover: Scale 105%, brightness increase",
          "Active: Scale 95%",
          "Loading: Shimmer animation overlay"
        ]
      },
      {
        subtitle: "Card Design",
        content: [
          "Standard Card: Border Radius 24px (rounded-3xl)",
          "Padding: 6-8 units (24-32px)",
          "Shadow: xl with subtle color tint",
          "Border: 1px with 50% opacity",
          "Hover: -translate-y-2, shadow-2xl",
          "Background: White with 50% opacity or solid"
        ]
      },
      {
        subtitle: "Input Design",
        content: [
          "Form Inputs: Border Radius 12-16px (rounded-xl)",
          "Padding: 3-4 units vertical, 4-6 units horizontal",
          "Border: 2px solid with focus states",
          "Focus Ring: 2px offset with primary color",
          "Placeholder: 50% opacity of text color",
          "Error States: Red border with shake animation"
        ]
      }
    ]
  },
  {
    title: "Animation & Interaction Principles",
    sections: [
      {
        subtitle: "Timing Functions",
        content: [
          "Ease-out: For entrances and hover states",
          "Ease-in: For exits and dismissals",
          "Ease-in-out: For transforms and position changes",
          "Linear: For rotations and infinite animations"
        ]
      },
      {
        subtitle: "Duration Standards",
        content: [
          "Micro-interactions: 150-200ms",
          "Hover effects: 200-300ms",
          "Page transitions: 300-500ms",
          "Complex animations: 500-1000ms",
          "Ambient animations: 2000ms+"
        ]
      },
      {
        subtitle: "Essential Animations",
        content: [
          "Hover States: Scale (105%), translate, shadow changes",
          "Loading States: Shimmer effects, pulse animations",
          "Entrance: Fade-in with slide-up (translate-y-10 to 0)",
          "Focus: Ring animations with scale",
          "Success/Error: Shake, bounce, or slide animations"
        ]
      },
      {
        subtitle: "Micro-Interaction Patterns",
        content: [
          "Button Press: Scale down to 95% on active",
          "Card Hover: Lift (-translate-y-2) with shadow increase",
          "Icon Hover: Rotate, scale, or color shift",
          "Form Focus: Border color change with ring",
          "Loading: Skeleton screens with shimmer"
        ]
      }
    ]
  },
  {
    title: "Visual Hierarchy & Composition",
    sections: [
      {
        subtitle: "Z-Index Strategy",
        content: [
          "Background Elements: -1 to 0",
          "Content Layer: 1 to 9",
          "Navigation: 10 to 19",
          "Overlays: 20 to 29",
          "Modals: 30 to 39",
          "Tooltips: 40 to 49",
          "Emergency/Critical: 50+"
        ]
      },
      {
        subtitle: "Visual Weight Distribution",
        content: [
          "Primary Action: Highest contrast, largest size, brightest color",
          "Secondary Actions: Medium contrast, smaller size, muted colors",
          "Tertiary Elements: Low contrast, smallest size, background colors"
        ]
      },
      {
        subtitle: "Emphasis Techniques",
        content: [
          "Size Variation: 2-3x difference between elements",
          "Contrast Ratios: 4.5:1 minimum for text, 3:1 for UI elements",
          "Color Saturation: Bright for primary, muted for secondary",
          "Positioning: Center stage for important elements",
          "Whitespace: Generous spacing around key elements"
        ]
      }
    ]
  },
  {
    title: "Responsive Design Patterns",
    sections: [
      {
        subtitle: "Breakpoint Strategy",
        content: [
          "Mobile: 320px - 767px",
          "Tablet: 768px - 1023px",
          "Desktop: 1024px - 1279px",
          "Large Desktop: 1280px+"
        ]
      },
      {
        subtitle: "Component Adaptations",
        content: [
          "Navigation: Hamburger menu → horizontal menu",
          "Grid: 1 column → 2-3 columns → 4-6 columns",
          "Typography: Smaller scales → larger scales",
          "Spacing: Tighter → more generous",
          "Interactions: Touch-friendly → hover states"
        ]
      },
      {
        subtitle: "Mobile-First Principles",
        content: [
          "Touch Targets: Minimum 44px for interactive elements",
          "Content Priority: Most important content first",
          "Simplified Navigation: Minimal menu items",
          "Thumb-Friendly: Place actions within thumb reach",
          "Performance: Optimize for slower connections"
        ]
      }
    ]
  },
  {
    title: "Modern Visual Effects",
    sections: [
      {
        subtitle: "Glassmorphism Implementation",
        content: [
          "Background: Semi-transparent (bg-white/80)",
          "Backdrop Filter: blur(12px) or backdrop-blur-lg",
          "Border: 1px solid with 20% opacity",
          "Box Shadow: Subtle with color tint"
        ]
      },
      {
        subtitle: "Gradient Strategies",
        content: [
          "Background Gradients: 2-3 colors, 45-135 degree angles",
          "Text Gradients: bg-gradient-to-r with bg-clip-text",
          "Border Gradients: Use pseudo-elements or border-image",
          "Animated Gradients: Rotate hue or shift positions"
        ]
      },
      {
        subtitle: "Shadow System",
        content: [
          "Subtle: shadow-sm (0 1px 2px)",
          "Default: shadow-md (0 4px 6px)",
          "Elevated: shadow-lg (0 10px 15px)",
          "Dramatic: shadow-2xl (0 25px 50px)",
          "Colored: Add color tint to shadows"
        ]
      },
      {
        subtitle: "Modern Effects Toolkit",
        content: [
          "Blur Effects: backdrop-blur for depth",
          "Transforms: 3D rotations and perspectives",
          "Clip Paths: Custom shapes and reveals",
          "Masks: Image and gradient masks",
          "Filters: Brightness, contrast, saturation adjustments"
        ]
      }
    ]
  },
  {
    title: "Performance & Optimization",
    sections: [
      {
        subtitle: "Loading Strategies",
        content: [
          "Skeleton Screens: Match final layout structure",
          "Progressive Loading: Load above-fold content first",
          "Lazy Loading: Images and components below fold",
          "Preload Critical: Fonts and hero images",
          "Smooth Transitions: Between loading states"
        ]
      },
      {
        subtitle: "Animation Performance",
        content: [
          "Use Transform: Instead of changing layout properties",
          "GPU Acceleration: will-change property for complex animations",
          "Reduce Motion: Respect user preferences",
          "Throttle: High-frequency events (scroll, resize)",
          "Cleanup: Remove event listeners and intervals"
        ]
      }
    ]
  },
  {
    title: "Accessibility Integration",
    sections: [
      {
        subtitle: "Color & Contrast",
        content: [
          "Text Contrast: 4.5:1 minimum for normal text",
          "UI Contrast: 3:1 minimum for interface elements",
          "Color Independence: Don't rely solely on color for information",
          "Focus Indicators: Visible and high contrast",
          "Error States: Multiple indicators beyond color"
        ]
      },
      {
        subtitle: "Interaction Accessibility",
        content: [
          "Keyboard Navigation: Tab order and focus management",
          "Screen Reader: Semantic HTML and ARIA labels",
          "Touch Targets: Minimum 44px for mobile",
          "Motion Sensitivity: Reduced motion preferences",
          "Color Blindness: Test with simulation tools"
        ]
      }
    ]
  },
  {
    title: "Implementation Patterns",
    sections: [
      {
        subtitle: "Component Structure",
        content: [
          "Wrapper (positioning, spacing)",
          "Container (max-width, padding)",
          "Header (title, subtitle)",
          "Content (main information)",
          "Actions (buttons, links)"
        ]
      },
      {
        subtitle: "State Management",
        content: [
          "Loading: Show skeleton or spinner",
          "Error: Clear error message with retry option",
          "Empty: Helpful illustration with action",
          "Success: Confirmation with next steps",
          "Disabled: Reduced opacity with explanation"
        ]
      },
      {
        subtitle: "Modern CSS Techniques",
        content: [
          "CSS Grid: For complex layouts",
          "Flexbox: For component alignment",
          "Custom Properties: For theme systems",
          "Container Queries: For responsive components",
          "Aspect Ratio: For consistent media containers"
        ]
      }
    ]
  },
  {
    title: "Quality Assurance Checklist",
    sections: [
      {
        subtitle: "Visual Quality",
        content: [
          "Consistent spacing throughout",
          "Proper typography hierarchy",
          "Smooth animations (60fps)",
          "Responsive on all devices",
          "Accessibility compliance",
          "Performance optimization",
          "Cross-browser compatibility"
        ]
      },
      {
        subtitle: "User Experience",
        content: [
          "Intuitive navigation",
          "Clear call-to-actions",
          "Helpful error messages",
          "Fast loading times",
          "Smooth interactions",
          "Logical flow",
          "Mobile-friendly"
        ]
      },
      {
        subtitle: "Technical Implementation",
        content: [
          "Semantic HTML structure",
          "Optimized images",
          "Efficient CSS/JS",
          "Proper meta tags",
          "Search engine optimization",
          "Analytics implementation",
          "Security considerations"
        ]
      }
    ]
  },
  {
    title: "Implementation Guidelines",
    sections: [
      {
        subtitle: "Development Workflow",
        content: [
          "Mobile-First: Start with mobile design, enhance for desktop",
          "Component-Based: Build reusable component library",
          "Design System: Establish consistent patterns",
          "Performance Budget: Set and monitor performance metrics",
          "Testing: Regular cross-device and accessibility testing"
        ]
      },
      {
        subtitle: "Code Quality",
        content: [
          "Semantic HTML: Use proper HTML5 elements",
          "CSS Organization: Use methodologies like BEM or utility-first",
          "JavaScript: Progressive enhancement, graceful degradation",
          "Images: Optimize formats, sizes, and loading",
          "Fonts: Optimize loading and fallbacks"
        ]
      }
    ]
  }
];

// ## 1. FOUNDATIONAL DESIGN PHILOSOPHY

// ### Core Principles
// - **Emotional Impact First**: Every design decision should evoke a "wow" factor that makes users pause and engage
// - **Functionality Through Beauty**: Visual appeal should enhance, not hinder, user experience
// - **Dynamic over Static**: Prefer animated, interactive elements over static presentations
// - **Bold over Safe**: Choose striking, memorable design over conventional approaches
// - **Progressive Enhancement**: Build from mobile-first, enhance for larger screens

// ### Design Hierarchy
// 1. **User Experience** (seamless interaction flow)
// 2. **Visual Impact** (emotional engagement)
// 3. **Performance** (smooth, responsive)
// 4. **Accessibility** (inclusive design)
// 5. **Brand Consistency** (cohesive identity)

// ## 2. LAYOUT & SPACING SYSTEM

// ### Container Strategy
// ```
// - Max-width: 7xl (1280px) for main content
// - Padding: 6 units (24px) on mobile, maintain on desktop
// - Sections: 20 units (80px) vertical padding minimum
// - Components: 8 units (32px) internal padding
// - Cards: 6-8 units (24-32px) internal padding
// ```

// ### Grid System
// - **Mobile**: Single column with 16px margins
// - **Tablet**: 2-column grid with 24px gaps
// - **Desktop**: 3-4 column grid with 32px gaps
// - **Large Desktop**: Up to 6 columns with 40px gaps

// ### Spacing Scale (Tailwind Units)
// - **Micro**: 1-2 units (4-8px) - icon-text gaps
// - **Small**: 3-4 units (12-16px) - button padding
// - **Medium**: 6-8 units (24-32px) - card padding
// - **Large**: 12-16 units (48-64px) - section spacing
// - **Extra Large**: 20-32 units (80-128px) - hero sections

// ## 3. TYPOGRAPHY SYSTEM

// ### Font Hierarchy
// ```
// - Hero Headlines: 6xl-7xl (60-72px) - extrabold (800)
// - Main Headlines: 4xl-5xl (36-48px) - bold (700)
// - Section Titles: 2xl-3xl (24-30px) - bold (700)
// - Body Large: xl-2xl (20-24px) - medium (500)
// - Body Text: base-lg (16-18px) - normal (400)
// - Caption: sm-base (14-16px) - normal (400)
// ```

// ### Typography Best Practices
// - **Line Height**: 1.6-1.8 for body text, 1.2-1.4 for headlines
// - **Letter Spacing**: Slight tracking for headlines (-0.025em), normal for body
// - **Font Weight Pairing**: Use 2-3 weights maximum (400, 600, 700)
// - **Responsive Scaling**: Reduce font sizes by 25-30% on mobile
// - **Gradient Text**: Apply to hero headlines and key CTAs for visual impact

// ## 4. COMPONENT DESIGN PATTERNS

// ### Button Design
// ```
// Primary Button:
// - Padding: 4-6 units vertical, 6-8 units horizontal
// - Border Radius: 16-24px (rounded-2xl)
// - Font Weight: 600 (semibold)
// - Shadow: Large drop shadow (shadow-2xl)
// - Hover: Scale 105%, brightness increase
// - Active: Scale 95%
// - Loading: Shimmer animation overlay
// ```

// ### Card Design
// ```
// Standard Card:
// - Border Radius: 24px (rounded-3xl)
// - Padding: 6-8 units (24-32px)
// - Shadow: xl with subtle color tint
// - Border: 1px with 50% opacity
// - Hover: -translate-y-2, shadow-2xl
// - Background: White with 50% opacity or solid
// ```

// ### Input Design
// ```
// Form Inputs:
// - Border Radius: 12-16px (rounded-xl)
// - Padding: 3-4 units vertical, 4-6 units horizontal
// - Border: 2px solid with focus states
// - Focus Ring: 2px offset with primary color
// - Placeholder: 50% opacity of text color
// - Error States: Red border with shake animation
// ```

// ## 5. ANIMATION & INTERACTION PRINCIPLES

// ### Timing Functions
// - **Ease-out**: For entrances and hover states
// - **Ease-in**: For exits and dismissals
// - **Ease-in-out**: For transforms and position changes
// - **Linear**: For rotations and infinite animations

// ### Duration Standards
// ```
// - Micro-interactions: 150-200ms
// - Hover effects: 200-300ms
// - Page transitions: 300-500ms
// - Complex animations: 500-1000ms
// - Ambient animations: 2000ms+
// ```

// ### Essential Animations
// 1. **Hover States**: Scale (105%), translate, shadow changes
// 2. **Loading States**: Shimmer effects, pulse animations
// 3. **Entrance**: Fade-in with slide-up (translate-y-10 to 0)
// 4. **Focus**: Ring animations with scale
// 5. **Success/Error**: Shake, bounce, or slide animations

// ### Micro-Interaction Patterns
// - **Button Press**: Scale down to 95% on active
// - **Card Hover**: Lift (-translate-y-2) with shadow increase
// - **Icon Hover**: Rotate, scale, or color shift
// - **Form Focus**: Border color change with ring
// - **Loading**: Skeleton screens with shimmer

// ## 6. VISUAL HIERARCHY & COMPOSITION

// ### Z-Index Strategy
// ```
// - Background Elements: -1 to 0
// - Content Layer: 1 to 9
// - Navigation: 10 to 19
// - Overlays: 20 to 29
// - Modals: 30 to 39
// - Tooltips: 40 to 49
// - Emergency/Critical: 50+
// ```

// ### Visual Weight Distribution
// - **Primary Action**: Highest contrast, largest size, brightest color
// - **Secondary Actions**: Medium contrast, smaller size, muted colors
// - **Tertiary Elements**: Low contrast, smallest size, background colors

// ### Emphasis Techniques
// 1. **Size Variation**: 2-3x difference between elements
// 2. **Contrast Ratios**: 4.5:1 minimum for text, 3:1 for UI elements
// 3. **Color Saturation**: Bright for primary, muted for secondary
// 4. **Positioning**: Center stage for important elements
// 5. **Whitespace**: Generous spacing around key elements

// ## 7. RESPONSIVE DESIGN PATTERNS

// ### Breakpoint Strategy
// ```
// - Mobile: 320px - 767px
// - Tablet: 768px - 1023px
// - Desktop: 1024px - 1279px
// - Large Desktop: 1280px+
// ```

// ### Component Adaptations
// - **Navigation**: Hamburger menu → horizontal menu
// - **Grid**: 1 column → 2-3 columns → 4-6 columns
// - **Typography**: Smaller scales → larger scales
// - **Spacing**: Tighter → more generous
// - **Interactions**: Touch-friendly → hover states

// ### Mobile-First Principles
// 1. **Touch Targets**: Minimum 44px for interactive elements
// 2. **Content Priority**: Most important content first
// 3. **Simplified Navigation**: Minimal menu items
// 4. **Thumb-Friendly**: Place actions within thumb reach
// 5. **Performance**: Optimize for slower connections

// ## 8. MODERN VISUAL EFFECTS

// ### Glassmorphism Implementation
// ```
// Background: Semi-transparent (bg-white/80)
// Backdrop Filter: blur(12px) or backdrop-blur-lg
// Border: 1px solid with 20% opacity
// Box Shadow: Subtle with color tint
// ```

// ### Gradient Strategies
// - **Background Gradients**: 2-3 colors, 45-135 degree angles
// - **Text Gradients**: bg-gradient-to-r with bg-clip-text
// - **Border Gradients**: Use pseudo-elements or border-image
// - **Animated Gradients**: Rotate hue or shift positions

// ### Shadow System
// ```
// - Subtle: shadow-sm (0 1px 2px)
// - Default: shadow-md (0 4px 6px)
// - Elevated: shadow-lg (0 10px 15px)
// - Dramatic: shadow-2xl (0 25px 50px)
// - Colored: Add color tint to shadows
// ```

// ### Modern Effects Toolkit
// 1. **Blur Effects**: backdrop-blur for depth
// 2. **Transforms**: 3D rotations and perspectives
// 3. **Clip Paths**: Custom shapes and reveals
// 4. **Masks**: Image and gradient masks
// 5. **Filters**: Brightness, contrast, saturation adjustments

// ## 9. PERFORMANCE & OPTIMIZATION

// ### Loading Strategies
// - **Skeleton Screens**: Match final layout structure
// - **Progressive Loading**: Load above-fold content first
// - **Lazy Loading**: Images and components below fold
// - **Preload Critical**: Fonts and hero images
// - **Smooth Transitions**: Between loading states

// ### Animation Performance
// - **Use Transform**: Instead of changing layout properties
// - **GPU Acceleration**: will-change property for complex animations
// - **Reduce Motion**: Respect user preferences
// - **Throttle**: High-frequency events (scroll, resize)
// - **Cleanup**: Remove event listeners and intervals

// ## 10. ACCESSIBILITY INTEGRATION

// ### Color & Contrast
// - **Text Contrast**: 4.5:1 minimum for normal text
// - **UI Contrast**: 3:1 minimum for interface elements
// - **Color Independence**: Don't rely solely on color for information
// - **Focus Indicators**: Visible and high contrast
// - **Error States**: Multiple indicators beyond color

// ### Interaction Accessibility
// - **Keyboard Navigation**: Tab order and focus management
// - **Screen Reader**: Semantic HTML and ARIA labels
// - **Touch Targets**: Minimum 44px for mobile
// - **Motion Sensitivity**: Reduced motion preferences
// - **Color Blindness**: Test with simulation tools

// ## 11. IMPLEMENTATION PATTERNS

// ### Component Structure
// ```
// Wrapper (positioning, spacing)
// ├── Container (max-width, padding)
// │   ├── Header (title, subtitle)
// │   ├── Content (main information)
// │   └── Actions (buttons, links)
// ```

// ### State Management
// - **Loading**: Show skeleton or spinner
// - **Error**: Clear error message with retry option
// - **Empty**: Helpful illustration with action
// - **Success**: Confirmation with next steps
// - **Disabled**: Reduced opacity with explanation

// ### Modern CSS Techniques
// 1. **CSS Grid**: For complex layouts
// 2. **Flexbox**: For component alignment
// 3. **Custom Properties**: For theme systems
// 4. **Container Queries**: For responsive components
// 5. **Aspect Ratio**: For consistent media containers

// ## 12. QUALITY ASSURANCE CHECKLIST

// ### Visual Quality
// - [ ] Consistent spacing throughout
// - [ ] Proper typography hierarchy
// - [ ] Smooth animations (60fps)
// - [ ] Responsive on all devices
// - [ ] Accessibility compliance
// - [ ] Performance optimization
// - [ ] Cross-browser compatibility

// ### User Experience
// - [ ] Intuitive navigation
// - [ ] Clear call-to-actions
// - [ ] Helpful error messages
// - [ ] Fast loading times
// - [ ] Smooth interactions
// - [ ] Logical flow
// - [ ] Mobile-friendly

// ### Technical Implementation
// - [ ] Semantic HTML structure
// - [ ] Optimized images
// - [ ] Efficient CSS/JS
// - [ ] Proper meta tags
// - [ ] Search engine optimization
// - [ ] Analytics implementation
// - [ ] Security considerations

// ## 13. IMPLEMENTATION GUIDELINES

// ### Development Workflow
// 1. **Mobile-First**: Start with mobile design, enhance for desktop
// 2. **Component-Based**: Build reusable component library
// 3. **Design System**: Establish consistent patterns
// 4. **Performance Budget**: Set and monitor performance metrics
// 5. **Testing**: Regular cross-device and accessibility testing

// ### Code Quality
// - **Semantic HTML**: Use proper HTML5 elements
// - **CSS Organization**: Use methodologies like BEM or utility-first
// - **JavaScript**: Progressive enhancement, graceful degradation
// - **Images**: Optimize formats, sizes, and loading
// - **Fonts**: Optimize loading and fallbacks