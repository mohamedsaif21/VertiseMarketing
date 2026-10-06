# Agency Website — Implementation Plan

A modern, interactive agency website built with **Next.js, Three.js, and GSAP**, following a premium visual direction inspired by the provided Crency design reference.

The experience uses a near-black canvas with a brand-driven color system based on the agency logo, combining **gold, red, blue, and green** accents with interactive motion, 3D elements, and scroll-based animations.

---

## 1. Technology Stack

| Technology        | Purpose                                      |
| ----------------- | -------------------------------------------- |
| Next.js           | Application framework                        |
| React             | UI architecture                              |
| TypeScript        | Type-safe development                        |
| Three.js          | 3D graphics and interactive scenes           |
| React Three Fiber | React integration for Three.js               |
| GSAP              | Animation and motion                         |
| Tailwind CSS      | Styling and design system                    |
| CSS               | Custom visual effects and responsive styling |

---

## 2. Current Implementation

The initial site scaffold and core visual system are already in place.

### 🎨 Brand Design System

A global color system has been implemented using the agency logo as the visual reference.

**Primary accents:**

* Gold
* Red
* Blue
* Green

The colors are applied consistently through:

```text
app/globals.css
tailwind.config.ts
```

The overall interface uses a **near-black background** to create a premium, high-contrast visual style.

---

### 🖱️ Custom Interactive Cursor

A custom morphing cursor has been implemented in:

```text
components/CustomCursor.tsx
```

Interactive elements can change the cursor appearance using:

```html
data-cursor="drag"
data-cursor="like"
data-cursor="stats"
data-cursor="cta"
```

This allows different interactions to communicate different visual states.

The custom cursor is automatically disabled on touch/mobile devices to prevent interference with mobile navigation and usability.

---

### 🌐 3D Hero Experience

A Three.js-based hero scene has been implemented using:

```text
components/HeroScene.tsx
```

The scene contains **four interlocking rings** using the brand accent colors.

The composition is inspired by the agency logo's:

* Infinity-like structure
* Diamond geometry
* Interlocking visual language

The 3D scene is rendered using:

```text
Three.js
@react-three/fiber
```

---

### 🔄 Marquee System

Reusable marquee ticker bands have been implemented in:

```text
components/Marquee.tsx
```

The marquee system provides:

* Infinite horizontal movement
* Outlined typography
* Multiple accent-color variations
* Reusable ticker components

Each visual band can be associated with one of the primary brand colors.

---

### 🏷️ Hero Section

The initial hero section includes:

* Navigation
* Brand identity
* Interactive 3D scene
* Trust-badge stickers
* Supporting icon row
* Marquee elements
* Premium dark visual treatment

The hero currently acts as the primary visual introduction to the agency.

---

# 3. Implementation Roadmap

The following features are planned for the next development phase.

---

## Phase 1 — Navigation Experience

### Full-Screen Circular Navigation

Implement the full-screen circular navigation overlay based on the design reference.

### Requirements

* Circular navigation structure
* Full-screen overlay
* Smooth open/close animation
* GSAP-powered transitions
* Keyboard accessibility
* Mobile-friendly interaction
* Clear active/hover states

### Target

```text
Navigation → Full-screen circular menu → Page/section navigation
```

---

## Phase 2 — Case Study Section

Implement the primary case-study showcase section.

### Design

Each case study should use a browser-style presentation containing:

* Browser chrome
* Project preview
* Project title
* Project description
* Category
* Technology information
* CTA
* Segmented control

### Interaction

Users should be able to switch between case studies using the segmented control without leaving the page.

---

## Phase 3 — Showcase / Product Section

Implement the split-panel showcase section with a responsive phone mockup.

### Layout

```text
┌───────────────────────┬───────────────────────┐
│                       │                       │
│     Content Panel     │     Phone Mockup      │
│                       │                       │
│  Heading              │                       │
│  Description          │                       │
│  CTA                  │                       │
│                       │                       │
└───────────────────────┴───────────────────────┘
```

### Requirements

* Split-screen layout
* Responsive behavior
* Phone/device mockup
* Product/interface preview
* Supporting content
* GSAP entrance animations
* Scroll-based transitions

---

# 4. Motion & Interaction System

GSAP will be used as the primary animation engine.

### Scroll Animations

Implement:

```text
GSAP
└── ScrollTrigger
```

for:

* Section reveals
* Text animations
* Image transitions
* Parallax effects
* Horizontal movement
* Scale transitions
* 3D scene interaction
* Marquee control

Animations should remain subtle and purposeful rather than excessive.

---

## 5. Typography

The current implementation uses:

**Space Grotesk**

as a free geometric-rounded typeface.

The final production version can replace it with the agency's licensed brand typeface if available.

Potential brand-font options:

* Aeonik
* Clash Display
* General Sans

The final font should be selected based on the actual agency brand guidelines.

---

# 6. Responsive Design

The website must provide a consistent experience across:

* Desktop
* Laptop
* Tablet
* Mobile

### Desktop

Prioritize:

* Large typography
* 3D hero
* Custom cursor
* Large-scale motion
* Split layouts

### Mobile

Prioritize:

* Touch-friendly navigation
* Simplified animations
* Optimized 3D rendering
* No custom cursor
* Responsive typography
* Reduced visual complexity where required

Performance should take priority over unnecessary animation on mobile devices.

---

# 7. Performance Requirements

Because the website uses Three.js and GSAP, performance optimization is an important part of the implementation.

### Requirements

* Lazy-load heavy visual components
* Optimize 3D geometry
* Limit unnecessary render loops
* Optimize textures and assets
* Reduce animation complexity on mobile
* Use responsive image formats
* Avoid unnecessary client-side rendering
* Keep page transitions smooth
* Maintain good Core Web Vitals

create a high-end agency feel.

### Interactive

Interactions should feel intentional and responsive.

### Minimal

Avoid unnecessary UI elements, excessive gradients, and decorative clutter.

### Brand-Driven

The logo, colors, typography, and visual language should remain consistent throughout the website.

### Motion With Purpose

Animations should guide attention and communicate interaction rather than simply add movement.

### Performance First

Visual effects should never compromise usability or loading performance.

---

# 10. Development Priority

The implementation should follow this order:

```text
01. Navigation Overlay
        ↓
02. Case Study Section
        ↓
03. Showcase / Phone Mockup
        ↓
04. GSAP ScrollTrigger Animations
        ↓
05. Typography Refinement
        ↓
06. Responsive Optimization
        ↓
07. Performance Optimization
        ↓
08. Final UI Polish
        ↓
09. Cross-Browser Testing
        ↓
10. Production Deployment
```

---

# 11. Local Development

Install dependencies:

```bash
npm install
```
