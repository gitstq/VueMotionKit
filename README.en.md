<p align="center">
  <a href="README.md">简体中文</a> | <a href="README.zh-TW.md">繁體中文</a> | <a href="README.en.md">English</a>
</p>

<p align="center">
  <img src="https://img.shields.io/npm/v/vue-motion-kit?color=6366f1&label=npm" alt="npm version" />
  <img src="https://img.shields.io/npm/l/vue-motion-kit?color=8b5cf6" alt="license" />
  <img src="https://img.shields.io/badge/vue-3.3%2B-42b883?logo=vue.js" alt="vue" />
  <img src="https://img.shields.io/badge/typescript-5.0%2B-3178c6?logo=typescript" alt="typescript" />
  <img src="https://img.shields.io/badge/zero%20dependencies-brightgreen" alt="zero deps" />
  <img src="https://img.shields.io/badge/tree--shakeable-orange" alt="tree-shakeable" />
</p>

<h1 align="center">🎨 VueMotionKit</h1>

<p align="center">
  <strong>Creative Animation Component Library for Vue 3</strong><br/>
  32+ lightweight, CSS-first animated components to bring stunning visual effects to your web apps ✨
</p>

<p align="center">
  <img src="https://img.shields.io/badge/📦_32%2B_Components-6366f1" />
  <img src="https://img.shields.io/badge/🚀_Zero_External_Deps-8b5cf6" />
  <img src="https://img.shields.io/badge/🎯_Fully_Tree--Shakeable-06b6d4" />
  <img src="https://img.shields.io/badge/♿_Accessibility_First-f43f5e" />
  <img src="https://img.shields.io/badge/📐_Full_TypeScript-10b981" />
</p>

---

## 🎉 About

**VueMotionKit** is a creative animation component library purpose-built for the Vue 3 ecosystem. It was inspired by the growing demand for high-quality motion design in modern web applications. While the React ecosystem enjoys libraries like React Bits, the Vue 3 community has lacked an equivalent — until now.

### 🔥 Problems We Solve

- **High cost of animation development**: Writing complex CSS animations from scratch requires significant time and expertise
- **Boring component libraries**: Popular UI libraries like Element Plus and Ant Design Vue focus on functionality, not visual delight
- **Heavy animation dependencies**: Libraries like GSAP and Anime.js add considerable bundle size
- **Gap in Vue ecosystem**: Compared to React, Vue lacks a dedicated creative animation component library

### ✨ What Makes Us Different

| Feature | VueMotionKit | Others |
|---------|-------------|--------|
| **Pure CSS Animations** | ✅ Zero JS animation library deps | ❌ Depends on GSAP/Anime.js |
| **Tree-Shakeable** | ✅ Import only what you need | ❌ Full bundle import |
| **TypeScript** | ✅ Complete type support | ⚠️ Partial support |
| **Accessibility** | ✅ Respects `prefers-reduced-motion` | ❌ Mostly ignored |
| **Vue 3 Native** | ✅ Composition API + `<script setup>` | ⚠️ Options API or React |
| **Component Count** | 32+ components | 10-20 components |

---

## ✨ Core Features

### 📝 Text Animations (8 Components)
- **GradientText** — Animated gradient text with customizable colors and directions
- **TypewriterText** — Typewriter effect with loop support and custom cursor
- **GlitchText** — Cyberpunk-style glitch text effect
- **SplitText** — Text split animation (by chars/words) with fade, slide, bounce, and rotate modes
- **FadeText** — Multi-directional fade-in text
- **WaveText** — Wave animation text
- **MarqueeText** — Infinite scrolling marquee text
- **CountUp** — Animated number counter with prefix/suffix/thousands separator

### 🌌 Background Effects (6 Components)
- **ParticleField** — Canvas-based particle field with connection lines
- **AuroraBg** — CSS aurora/northern lights background
- **GradientOrb** — Animated gradient orbs
- **GridBg** — Perspective grid background
- **NoiseBg** — SVG noise texture overlay
- **StarfieldBg** — Canvas starfield background

### 🖱️ Interaction Components (7 Components)
- **MagneticElement** — Mouse-following magnetic element
- **TiltCard** — 3D perspective tilt card with glare effect
- **SpotlightCard** — Mouse-following spotlight card
- **RippleButton** — Material Design ripple button
- **MorphingCard** — Hover morphing card
- **ParallaxScroll** — Parallax scrolling container
- **DragContainer** — Draggable container

### 🔄 Transition Components (6 Components)
- **FadeExpand** — Fade + expand transition
- **SlideReveal** — Slide reveal transition
- **FlipCard** — 3D flip card
- **AccordionTransition** — Accordion expand/collapse transition
- **StaggerList** — Staggered list animation
- **PageTransition** — Page transition wrapper

### 💥 Feedback Components (5 Components)
- **ConfettiExplosion** — Confetti burst effect
- **PulseRing** — Pulsing ring indicator
- **ShimmerEffect** — Skeleton shimmer loading effect
- **ProgressBar** — Animated progress bar
- **ToastNotification** — Animated toast notification

### 🛠️ Developer Tools
- **useMousePosition** — Mouse position tracking composable
- **useScrollProgress** — Scroll progress tracking composable
- **useReducedMotion** — Accessibility motion preference detection composable
- **useIntersectionObserver** — Viewport detection composable

---

## 🚀 Quick Start

### 📋 Prerequisites

- **Node.js** >= 16.0.0
- **Vue** >= 3.3.0
- **TypeScript** >= 5.0 (recommended)

### 📦 Installation

```bash
# Using npm
npm install vue-motion-kit

# Using pnpm (recommended)
pnpm add vue-motion-kit

# Using yarn
yarn add vue-motion-kit
```

### ⚡ Usage

#### Global Registration

```ts
// main.ts
import { createApp } from 'vue'
import App from './App.vue'
import VueMotionKit from 'vue-motion-kit'
import 'vue-motion-kit/dist/vue-motion-kit.css'

const app = createApp(App)
app.use(VueMotionKit)
app.mount('#app')
```

#### On-Demand Import (Recommended — Tree-Shakeable)

```vue
<script setup lang="ts">
import { GradientText, TiltCard, CountUp } from 'vue-motion-kit'
import 'vue-motion-kit/dist/vue-motion-kit.css'
</script>

<template>
  <GradientText
    :colors="['#6366f1', '#8b5cf6', '#06b6d4']"
    speed="3s"
  >
    Hello VueMotionKit!
  </GradientText>

  <TiltCard :max-tilt="15" :glare="true">
    <div class="card-content">Hover me!</div>
  </TiltCard>

  <CountUp :from="0" :to="9999" :duration="2" separator="," prefix="$" />
</template>
```

### 🎮 Local Development (Playground)

```bash
# Clone the repository
git clone https://github.com/gitstq/VueMotionKit.git
cd VueMotionKit

# Install dependencies
npm install

# Start dev server with interactive demos
npm run dev

# Run tests
npm run test

# Build the library
npm run build
```

---

## 📖 Detailed Usage Guide

### 🎨 GradientText — Gradient Text

```vue
<GradientText
  :colors="['#f43f5e', '#8b5cf6', '#06b6d4', '#10b981']"
  speed="4s"
  direction="horizontal"
  font-weight="800"
  font-size="3rem"
>
  VueMotionKit
</GradientText>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| colors | `string[]` | `['#6366f1', '#8b5cf6', '#06b6d4']` | Gradient color array |
| speed | `string` | `'3s'` | Animation speed |
| direction | `'horizontal' \| 'vertical' \| 'diagonal'` | `'horizontal'` | Gradient direction |
| fontWeight | `string` | `'700'` | Font weight |
| fontSize | `string` | `'inherit'` | Font size |

### ⌨️ TypewriterText — Typewriter Effect

```vue
<TypewriterText
  text="Welcome to VueMotionKit! 🎉"
  :speed="80"
  :delay="500"
  :cursor="true"
  cursor-char="|"
  :loop="true"
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| text | `string` | `''` | Text to display |
| speed | `number` | `80` | Typing interval per character (ms) |
| delay | `number` | `0` | Delay before starting (ms) |
| cursor | `boolean` | `true` | Show cursor |
| cursorChar | `string` | `'\|'` | Cursor character |
| loop | `boolean` | `false` | Loop playback |

### 🃏 TiltCard — 3D Tilt Card

```vue
<TiltCard
  :max-tilt="20"
  :perspective="1000"
  :glare="true"
  glare-color="rgba(255,255,255,0.15)"
  :scale="1.02"
>
  <div class="p-8 rounded-xl bg-white shadow-lg">
    <h3>Interactive Card</h3>
    <p>Hover to see the 3D tilt effect!</p>
  </div>
</TiltCard>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| maxTilt | `number` | `15` | Maximum tilt angle (degrees) |
| perspective | `number` | `1000` | Perspective distance (px) |
| glare | `boolean` | `false` | Enable glare effect |
| glareColor | `string` | `'rgba(255,255,255,0.15)'` | Glare color |
| scale | `number` | `1` | Hover scale ratio |

### 🔢 CountUp — Animated Counter

```vue
<CountUp
  :from="0"
  :to="12345.67"
  :duration="2.5"
  :decimals="2"
  separator=","
  prefix="$"
  suffix=" USD"
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| from | `number` | `0` | Start value |
| to | `number` | `1000` | Target value |
| duration | `number` | `2` | Animation duration (seconds) |
| decimals | `number` | `0` | Decimal places |
| separator | `string` | `','` | Thousands separator |
| prefix | `string` | `''` | Value prefix |
| suffix | `string` | `''` | Value suffix |
| trigger | `'mount' \| 'scroll'` | `'mount'` | Trigger mode |

### 🌌 ParticleField — Particle Background

```vue
<ParticleField
  :count="80"
  color="rgba(99, 102, 241, 0.6)"
  :size="2"
  :speed="0.5"
  :connect-lines="true"
  :connect-distance="120"
/>
```

### 🎊 ConfettiExplosion — Confetti Burst

```vue
<ConfettiExplosion
  :particle-count="60"
  :colors="['#f43f5e', '#8b5cf6', '#06b6d4', '#10b981', '#f59e0b']"
  :spread="360"
  :duration="2000"
/>
```

### 📋 StaggerList — Staggered List

```vue
<StaggerList
  :stagger-delay="100"
  animation="slide"
  :duration="0.5"
  tag="div"
>
  <div v-for="item in items" :key="item.id">
    {{ item.text }}
  </div>
</StaggerList>
```

---

## 💡 Design Philosophy & Roadmap

### 🎯 Design Principles

1. **CSS First**: All animations prioritize pure CSS implementation (`@keyframes`, `transition`, `transform`). JavaScript is only used for complex interaction logic
2. **Zero Dependencies**: No external animation libraries (GSAP, Anime.js, etc.) — keeping the bundle ultra-lightweight
3. **Progressive Enhancement**: Automatically detects `prefers-reduced-motion` and disables animations for users who need it
4. **Tree-Shakeable**: Every component is independently exported for optimal bundling

### 🔧 Tech Stack Choices

| Technology | Why |
|-----------|-----|
| Vue 3 Composition API | Most advanced Vue development paradigm with superior type inference and logic reuse |
| TypeScript | Complete type safety for better developer experience |
| Vite | Blazing-fast builds with native ESM support |
| CSS Custom Properties | Theme customization without JavaScript runtime overhead |
| Canvas API | High-performance particle and starfield rendering |

### 🗺️ Roadmap

- [ ] **v1.1** — SVG path animation components (DrawSVG, MorphSVG)
- [ ] **v1.2** — Scroll-driven animation components (ScrollTrigger, PinSection)
- [ ] **v1.3** — Nuxt 3 module support
- [ ] **v2.0** — Interactive documentation site + theme editor
- [ ] **v2.1** — Figma plugin for direct design-to-code component export

### 🤝 Contribution Areas

We welcome contributions for new animation components! Here are some ideas:

- 🎨 New text effects (stroke text, neon text, etc.)
- 🌊 New background effects (water ripples, smoke, etc.)
- 🎭 New interaction components (magnetic menu, elastic scroll, etc.)
- 📱 Mobile gesture animation components

---

## 📦 Build & Deployment

### Building the Library

```bash
npm run build
```

Build Output:

| File | Format | Size | Gzip |
|------|--------|------|------|
| `vue-motion-kit.js` | ES Module | ~44 KB | ~11 KB |
| `vue-motion-kit.cjs` | CommonJS | ~35 KB | ~9 KB |
| `vue-motion-kit.css` | CSS | ~23 KB | ~4 KB |

### Using with Vite

```ts
// vite.config.ts
export default defineConfig({
  optimizeDeps: {
    include: ['vue-motion-kit']
  }
})
```

### Using with Nuxt 3

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  build: {
    transpile: ['vue-motion-kit']
  }
})
```

### Browser Compatibility

| Environment | Version |
|------------|---------|
| Vue | >= 3.3.0 |
| Node.js | >= 16.0.0 |
| Browsers | Chrome 80+, Firefox 78+, Safari 14+, Edge 80+ |
| TypeScript | >= 5.0 (recommended) |

---

## 🤝 Contributing

We warmly welcome community contributions! Whether it's new components, bug fixes, or documentation improvements.

### 📋 Contribution Workflow

1. **Fork** this repository
2. Create a feature branch: `git checkout -b feature/amazing-component`
3. Commit your changes: `git commit -m 'feat: add AmazingComponent'`
4. Push to the branch: `git push origin feature/amazing-component`
5. Submit a **Pull Request**

### 📝 Commit Convention

Follow the [Angular Commit Convention](https://github.com/angular/angular/blob/master/CONTRIBUTING.md):

- `feat: new component/feature`
- `fix: bug fix`
- `docs: documentation update`
- `style: code formatting`
- `refactor: code refactoring`
- `test: test-related changes`
- `chore: build/toolchain updates`

### 🐛 Bug Reports

When filing an issue, please include:

- Problem description
- Steps to reproduce
- Expected behavior
- Actual behavior
- Environment (browser, Vue version, OS, etc.)

---

## 📄 License

This project is released under the [MIT License](LICENSE).

```
MIT License

Copyright (c) 2025 VueMotionKit Contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/gitstq">gitstq</a><br/>
  If you like this project, please give it a ⭐ star!
</p>
