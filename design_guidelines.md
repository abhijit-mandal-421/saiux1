# SAIUX AI/Tech Company - Design Guidelines

## Design Approach
**Reference-Based + Modern Tech Aesthetic**
Drawing inspiration from leading tech companies (Stripe, Linear, Vercel) combined with futuristic AI/tech design language. The design emphasizes sophisticated technology showcases while maintaining approachable, human-centered UX as per SAIUX's philosophy.

## Typography System

**Primary Font:** Inter or DM Sans (Google Fonts)
- Hero Headline: 4xl-6xl (64-96px), font-weight: 700
- Section Headings: 3xl-4xl (48-64px), font-weight: 600
- Subsection Titles: xl-2xl (24-32px), font-weight: 600
- Body Text: base-lg (16-18px), font-weight: 400
- Small Text/Labels: sm (14px), font-weight: 400

**Secondary Font (Optional Accent):** Space Grotesk for technical terms/numbers
- Use sparingly for statistics, metrics, tech terminology

## Layout System

**Spacing Primitives:** Tailwind units of 4, 8, 12, 16, 20, 24, 32
- Section padding: py-20 to py-32 (desktop), py-12 to py-16 (mobile)
- Content max-width: max-w-7xl with px-6 to px-8
- Component gaps: gap-8 to gap-12
- Vertical rhythm between elements: space-y-6 to space-y-8

**Grid Strategy:**
- Services section: 3-column grid on desktop (lg:grid-cols-3), 2-col tablet (md:grid-cols-2), 1-col mobile
- Industries: 4-column grid on desktop (lg:grid-cols-4)
- Testimonials: 2-column layout on desktop
- Case studies: Asymmetric 2-column split (60/40)

## Component Library

### Navigation
- Sticky header with backdrop blur (backdrop-blur-lg)
- Logo left-aligned, navigation items centered/right-aligned
- Hamburger menu for mobile with full-screen overlay
- Active section indicator: underline with gradient accent or pill background
- Height: h-20 (80px) with smooth shadow on scroll

### Hero Section (Full Viewport)
- **3D Background:** Full-page Three.js neural network/wave animation covering entire viewport behind all content
- Centered content with max-w-4xl
- Headline with typewriter animation effect
- Subheadline (text-xl) with 70% opacity
- Primary CTA button (large, px-8 py-4) with backdrop blur background (bg-white/10 backdrop-blur-md) and ripple click animation
- Secondary CTA as ghost button
- Subtle scroll indicator at bottom (animated chevron or "scroll to explore" text)

### Content Sections (Home, About, Services, Industries, Case Studies, Contact)
- **Background Treatment:** Each section has AI-themed imagery (neural networks, data visualization, circuit patterns, futuristic tech) with dark translucent overlay (bg-black/60 to bg-black/70) ensuring text readability
- Minimum height considerations but never force-fit into single viewport
- Section headers with gradient text effect or subtle glow
- GSAP scroll reveal: Content fades in and slides up as user scrolls (30-50px vertical translation)

### Services Section
- 7 service cards in grid layout
- Each card: Icon (top), title, 2-3 line description, "Learn more" micro-link
- Cards with subtle backdrop blur (bg-white/5 backdrop-blur-sm) and border (border-white/10)
- Hover state: Slight scale and enhanced glow effect

### Industries Grid
- Compact industry cards with icon + label
- 4-column responsive grid
- Minimal design with hover highlight

### Testimonials
- 2-column layout with customer quotes
- Include company logo, quote text, person name/title
- Carousel/slider optional for >4 testimonials
- Card style with subtle elevation

### Trusted Logos Bar
- Horizontal scrolling marquee or static grid
- Grayscale logos with opacity 60%, hover to 100%
- 6-8 logos visible at once

### Contact Form
- 2-column layout: Form (left 60%) + Contact info/map placeholder (right 40%)
- Form fields: Name, Company, Email, Service dropdown, Message textarea
- Real-time validation with red error states and green success states
- Focus states: Bright accent border (2px) and subtle glow
- Submit button: Large, full-width within form, ripple animation on click
- Input backgrounds: Semi-transparent with backdrop blur

### Scroll-to-Top Button
- Fixed bottom-right position (bottom-8 right-8)
- Circular button with upward arrow icon
- Appears after scrolling 400px down
- Smooth fade-in animation

## Images

### Background Images Strategy
**Hero Section:** Full-viewport 3D Three.js animation (no static image needed - neural network particles or flowing waves)

**Section Backgrounds (5 sections need imagery):**
1. **About Us:** Abstract AI brain/neural pathways visualization with blue/purple tones
2. **Services:** Digital transformation concept - interconnected nodes, data streams
3. **Industries:** Modern cityscape with digital overlay/holographic interface elements
4. **Case Studies:** Code/data visualization with graphs and analytics dashboards
5. **Contact:** Futuristic workspace or abstract geometric patterns

All section backgrounds should be high-resolution (1920px wide minimum), dark-toned, and work with 60-70% dark overlay for text readability.

### Logos Section
- Trusted company logos (placeholder if needed: "Fortune 500 Partners")
- Format: PNG with transparent backgrounds, grayscale treatment

## Interactive Elements

**Animations Budget:**
- Hero typewriter effect: Smooth character-by-character reveal
- CTA ripple: Radial expansion on click (1-2 second duration)
- Scroll reveals: GSAP-powered fade-in + translateY for section content (0.6-0.8s duration, stagger children by 0.1s)
- Navigation: Smooth scroll with easing (1-1.5s duration)
- Three.js background: Continuous subtle motion (low-intensity, performance-optimized)
- Hover states: Quick transitions (0.2-0.3s)

**No animations on:** Form inputs (except validation states), logo sections, footer

## Accessibility & Semantic Structure

- Semantic HTML5: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
- Each section with `id` for anchor navigation
- ARIA labels for navigation, buttons, and form inputs
- Focus visible states for keyboard navigation (2px outline with offset)
- Alt text for all decorative and informational images
- Minimum contrast ratio 4.5:1 for body text, 7:1 for headlines (achieved via overlays)
- Skip-to-content link for keyboard users

## Responsive Breakpoints

- Mobile: < 768px (single column, stacked navigation)
- Tablet: 768px - 1024px (2-column grids, simplified animations)
- Desktop: > 1024px (full multi-column layouts, all animations active)

**Mobile Considerations:**
- Reduce Three.js particle count for performance
- Hamburger menu with slide-in navigation drawer
- Stack all multi-column grids to single column
- Larger tap targets (minimum 44x44px)
- Reduced section padding (py-12 vs py-24)

This design creates a **sophisticated, futuristic tech aesthetic** that balances visual impact with usability, ensuring SAIUX's AI-first brand identity shines through every interaction.