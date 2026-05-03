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
  <strong>Vue 3 创意动画组件库</strong><br/>
  32+ 轻量级、纯 CSS 驱动的动画组件，让你的 Web 应用瞬间拥有令人惊艳的视觉效果 ✨
</p>

<p align="center">
  <img src="https://img.shields.io/badge/📦_32%2B_组件-6366f1" />
  <img src="https://img.shields.io/badge/🚀_零外部依赖-8b5cf6" />
  <img src="https://img.shields.io/badge/🎯_完全_Tree--Shakeable-06b6d4" />
  <img src="https://img.shields.io/badge/♿_无障碍支持-f43f5e" />
  <img src="https://img.shields.io/badge/📐_完整_TypeScript-10b981" />
</p>

---

## 🎉 项目介绍

**VueMotionKit** 是一款专为 Vue 3 生态打造的创意动画组件库，灵感来源于现代 Web 设计中对动效的强烈需求。在 React 生态中已有类似的动画组件库（如 React Bits），但 Vue 3 社区一直缺乏同等质量的同类产品。

### 🔥 解决的核心痛点

- **前端动效开发成本高**：手写复杂的 CSS 动画需要大量时间和经验
- **现有组件库缺乏创意**：Element Plus、Ant Design Vue 等偏重功能性，缺少"令人印象深刻"的视觉效果
- **动画库依赖重**：GSAP、Anime.js 等库体积大，增加打包体积
- **Vue 生态动画组件匮乏**：相比 React 生态，Vue 缺少专门的创意动画组件库

### ✨ 自研差异化亮点

| 特性 | VueMotionKit | 其他方案 |
|------|-------------|---------|
| **纯 CSS 动画** | ✅ 零 JS 动画库依赖 | ❌ 依赖 GSAP/Anime.js |
| **Tree-Shakeable** | ✅ 按需导入，最小打包 | ❌ 全量引入 |
| **TypeScript** | ✅ 完整类型支持 | ⚠️ 部分支持 |
| **无障碍** | ✅ 尊重 `prefers-reduced-motion` | ❌ 大多忽略 |
| **Vue 3 原生** | ✅ Composition API + `<script setup>` | ⚠️ Options API 或 React |
| **组件数量** | 32+ 组件 | 10-20 组件 |

---

## ✨ 核心特性

### 📝 文字动画 (8 个组件)
- **GradientText** — 流动渐变文字，支持自定义颜色和方向
- **TypewriterText** — 打字机效果，支持循环和自定义光标
- **GlitchText** — 赛博朋克风格故障文字
- **SplitText** — 文字拆分动画（按字符/单词），支持淡入、滑动、弹跳、旋转
- **FadeText** — 多方向淡入文字
- **WaveText** — 波浪动画文字
- **MarqueeText** — 无限滚动走马灯文字
- **CountUp** — 数字滚动计数器，支持前缀/后缀/千分位

### 🌌 背景特效 (6 个组件)
- **ParticleField** — Canvas 粒子场，支持连线效果
- **AuroraBg** — CSS 极光/北极光背景
- **GradientOrb** — 动态渐变光球
- **GridBg** — 透视网格背景
- **NoiseBg** — SVG 噪点纹理叠加
- **StarfieldBg** — Canvas 星空背景

### 🖱️ 交互组件 (7 个组件)
- **MagneticElement** — 磁性跟随鼠标元素
- **TiltCard** — 3D 透视倾斜卡片，支持光泽效果
- **SpotlightCard** — 聚光灯跟随鼠标卡片
- **RippleButton** — Material Design 风格水波纹按钮
- **MorphingCard** — 悬停形变卡片
- **ParallaxScroll** — 视差滚动容器
- **DragContainer** — 可拖拽容器

### 🔄 过渡动画 (6 个组件)
- **FadeExpand** — 淡入展开过渡
- **SlideReveal** — 滑动揭示过渡
- **FlipCard** — 3D 翻转卡片
- **AccordionTransition** — 手风琴折叠过渡
- **StaggerList** — 交错列表动画
- **PageTransition** — 页面切换过渡包装器

### 💥 反馈组件 (5 个组件)
- **ConfettiExplosion** — 彩纸爆炸效果
- **PulseRing** — 脉冲环指示器
- **ShimmerEffect** — 骨架屏微光加载效果
- **ProgressBar** — 动画进度条
- **ToastNotification** — 动画通知提示

### 🛠️ 开发工具
- **useMousePosition** — 鼠标位置追踪 Composable
- **useScrollProgress** — 滚动进度追踪 Composable
- **useReducedMotion** — 无障碍动画偏好检测 Composable
- **useIntersectionObserver** — 视口检测 Composable

---

## 🚀 快速开始

### 📋 环境要求

- **Node.js** >= 16.0.0
- **Vue** >= 3.3.0
- **TypeScript** >= 5.0（推荐）

### 📦 安装

```bash
# 使用 npm
npm install vue-motion-kit

# 使用 pnpm（推荐）
pnpm add vue-motion-kit

# 使用 yarn
yarn add vue-motion-kit
```

### ⚡ 快速使用

#### 全局注册

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

#### 按需导入（推荐，支持 Tree-Shaking）

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

  <CountUp :from="0" :to="9999" :duration="2" separator="," prefix="¥" />
</template>
```

### 🎮 本地开发（Playground）

```bash
# 克隆仓库
git clone https://github.com/gitstq/VueMotionKit.git
cd VueMotionKit

# 安装依赖
npm install

# 启动开发服务器（含交互式演示）
npm run dev

# 运行测试
npm run test

# 构建库
npm run build
```

---

## 📖 详细使用指南

### 🎨 GradientText — 渐变文字

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

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| colors | `string[]` | `['#6366f1', '#8b5cf6', '#06b6d4']` | 渐变颜色数组 |
| speed | `string` | `'3s'` | 动画速度 |
| direction | `'horizontal' \| 'vertical' \| 'diagonal'` | `'horizontal'` | 渐变方向 |
| fontWeight | `string` | `'700'` | 字体粗细 |
| fontSize | `string` | `'inherit'` | 字体大小 |

### ⌨️ TypewriterText — 打字机效果

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

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| text | `string` | `''` | 要显示的文字 |
| speed | `number` | `80` | 每个字符的打字间隔(ms) |
| delay | `number` | `0` | 开始前的延迟(ms) |
| cursor | `boolean` | `true` | 是否显示光标 |
| cursorChar | `string` | `'\|'` | 光标字符 |
| loop | `boolean` | `false` | 是否循环播放 |

### 🃏 TiltCard — 3D 倾斜卡片

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

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| maxTilt | `number` | `15` | 最大倾斜角度 |
| perspective | `number` | `1000` | 透视距离(px) |
| glare | `boolean` | `false` | 是否启用光泽效果 |
| glareColor | `string` | `'rgba(255,255,255,0.15)'` | 光泽颜色 |
| scale | `number` | `1` | 悬停缩放比例 |

### 🔢 CountUp — 数字动画

```vue
<CountUp
  :from="0"
  :to="12345.67"
  :duration="2.5"
  :decimals="2"
  separator=","
  prefix="¥"
  suffix=" 元"
/>
```

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| from | `number` | `0` | 起始值 |
| to | `number` | `1000` | 目标值 |
| duration | `number` | `2` | 动画时长(秒) |
| decimals | `number` | `0` | 小数位数 |
| separator | `string` | `','` | 千分位分隔符 |
| prefix | `string` | `''` | 前缀 |
| suffix | `string` | `''` | 后缀 |
| trigger | `'mount' \| 'scroll'` | `'mount'` | 触发方式 |

### 🌌 ParticleField — 粒子背景

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

### 🎊 ConfettiExplosion — 彩纸爆炸

```vue
<ConfettiExplosion
  :particle-count="60"
  :colors="['#f43f5e', '#8b5cf6', '#06b6d4', '#10b981', '#f59e0b']"
  :spread="360"
  :duration="2000"
/>
```

### 📋 StaggerList — 交错列表

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

## 💡 设计思路与迭代规划

### 🎯 设计理念

1. **CSS 优先**：所有动画优先使用纯 CSS 实现（`@keyframes`、`transition`、`transform`），仅在需要复杂交互逻辑时使用少量 JavaScript
2. **零依赖**：不依赖任何外部动画库（GSAP、Anime.js 等），保持极致轻量
3. **渐进增强**：自动检测用户的 `prefers-reduced-motion` 偏好，为需要的用户禁用动画
4. **Tree-Shakeable**：每个组件独立导出，支持按需引入，最小化打包体积

### 🔧 技术选型原因

| 技术 | 选择原因 |
|------|---------|
| Vue 3 Composition API | 最先进的 Vue 开发范式，更好的类型推导和逻辑复用 |
| TypeScript | 提供完整的类型安全，改善开发体验 |
| Vite | 极速构建，原生 ESM 支持 |
| CSS Custom Properties | 实现主题定制，无需 JavaScript 运行时 |
| Canvas API | 高性能粒子/星空效果渲染 |

### 🗺️ 后续迭代计划

- [ ] **v1.1** — 新增 SVG 路径动画组件（DrawSVG、MorphSVG）
- [ ] **v1.2** — 新增滚动驱动动画组件（ScrollTrigger、PinSection）
- [ ] **v1.3** — 新增 Nuxt 3 模块支持
- [ ] **v2.0** — 在线交互式文档站点 + 主题编辑器
- [ ] **v2.1** — 新增 Figma 插件，支持设计稿直接导出组件代码

### 🤝 社区贡献方向

欢迎贡献新的动画组件！请参考以下方向：

- 🎨 新的文字动画效果（描边文字、霓虹灯文字等）
- 🌊 新的背景效果（水波纹、烟雾等）
- 🎭 新的交互组件（磁性菜单、弹性滚动等）
- 📱 移动端手势动画组件

---

## 📦 打包与部署指南

### 构建库

```bash
npm run build
```

构建产物：

| 文件 | 格式 | 大小 | Gzip |
|------|------|------|------|
| `vue-motion-kit.js` | ES Module | ~44 KB | ~11 KB |
| `vue-motion-kit.cjs` | CommonJS | ~35 KB | ~9 KB |
| `vue-motion-kit.css` | CSS | ~23 KB | ~4 KB |

### 在 Vite 项目中使用

```ts
// vite.config.ts
export default defineConfig({
  optimizeDeps: {
    include: ['vue-motion-kit']
  }
})
```

### 在 Nuxt 3 项目中使用

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  build: {
    transpile: ['vue-motion-kit']
  }
})
```

### 兼容环境

| 环境 | 版本要求 |
|------|---------|
| Vue | >= 3.3.0 |
| Node.js | >= 16.0.0 |
| 浏览器 | Chrome 80+、Firefox 78+、Safari 14+、Edge 80+ |
| TypeScript | >= 5.0（推荐） |

---

## 🤝 贡献指南

我们非常欢迎社区贡献！无论是提交新组件、修复 Bug 还是改进文档。

### 📋 贡献流程

1. **Fork** 本仓库
2. 创建特性分支：`git checkout -b feature/amazing-component`
3. 提交更改：`git commit -m 'feat: add AmazingComponent'`
4. 推送分支：`git push origin feature/amazing-component`
5. 提交 **Pull Request**

### 📝 提交规范

遵循 [Angular 提交规范](https://github.com/angular/angular/blob/master/CONTRIBUTING.md)：

- `feat: 新增组件/功能`
- `fix: 修复问题`
- `docs: 文档更新`
- `style: 代码格式调整`
- `refactor: 代码重构`
- `test: 测试相关`
- `chore: 构建/工具链更新`

### 🐛 Issue 反馈

提交 Issue 时请包含：

- 问题描述
- 复现步骤
- 期望行为
- 实际行为
- 运行环境（浏览器、Vue 版本、OS 等）

---

## 📄 开源协议

本项目基于 [MIT License](LICENSE) 开源。

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
