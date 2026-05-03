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
  <strong>Vue 3 創意動畫元件庫</strong><br/>
  32+ 輕量級、純 CSS 驅動的動畫元件，讓你的 Web 應用瞬間擁有令人驚豔的視覺效果 ✨
</p>

<p align="center">
  <img src="https://img.shields.io/badge/📦_32%2B_元件-6366f1" />
  <img src="https://img.shields.io/badge/🚀_零外部依賴-8b5cf6" />
  <img src="https://img.shields.io/badge/🎯_完全_Tree--Shakeable-06b6d4" />
  <img src="https://img.shields.io/badge/♿_無障礙支援-f43f5e" />
  <img src="https://img.shields.io/badge/📐_完整_TypeScript-10b981" />
</p>

---

## 🎉 專案介紹

**VueMotionKit** 是一款專為 Vue 3 生態打造的創意動畫元件庫，靈感來源於現代 Web 設計中對動效的強烈需求。在 React 生態中已有類似的動畫元件庫（如 React Bits），但 Vue 3 社群一直缺乏同等品質的同類產品。

### 🔥 解決的核心痛點

- **前端動效開發成本高**：手寫複雜的 CSS 動畫需要大量時間和經驗
- **現有元件庫缺乏創意**：Element Plus、Ant Design Vue 等偏重功能性，缺少「令人印象深刻」的視覺效果
- **動畫庫依賴重**：GSAP、Anime.js 等庫體積大，增加打包體積
- **Vue 生態動畫元件匱乏**：相比 React 生態，Vue 缺少專門的創意動畫元件庫

### ✨ 自研差異化亮點

| 特性 | VueMotionKit | 其他方案 |
|------|-------------|---------|
| **純 CSS 動畫** | ✅ 零 JS 動畫庫依賴 | ❌ 依賴 GSAP/Anime.js |
| **Tree-Shakeable** | ✅ 按需匯入，最小打包 | ❌ 全量引入 |
| **TypeScript** | ✅ 完整型別支援 | ⚠️ 部分支援 |
| **無障礙** | ✅ 尊重 `prefers-reduced-motion` | ❌ 大多忽略 |
| **Vue 3 原生** | ✅ Composition API + `<script setup>` | ⚠️ Options API 或 React |
| **元件數量** | 32+ 元件 | 10-20 元件 |

---

## ✨ 核心特性

### 📝 文字動畫 (8 個元件)
- **GradientText** — 流動漸層文字，支援自訂顏色和方向
- **TypewriterText** — 打字機效果，支援循環和自訂游標
- **GlitchText** — 賽博龐克風格故障文字
- **SplitText** — 文字拆分動畫（按字元/單詞），支援淡入、滑動、彈跳、旋轉
- **FadeText** — 多方向淡入文字
- **WaveText** — 波浪動畫文字
- **MarqueeText** — 無限捲動走馬燈文字
- **CountUp** — 數字滾動計數器，支援前綴/後綴/千分位

### 🌌 背景特效 (6 個元件)
- **ParticleField** — Canvas 粒子場，支援連線效果
- **AuroraBg** — CSS 極光/北極光背景
- **GradientOrb** — 動態漸層光球
- **GridBg** — 透視網格背景
- **NoiseBg** — SVG 噪點紋理疊加
- **StarfieldBg** — Canvas 星空背景

### 🖱️ 互動元件 (7 個元件)
- **MagneticElement** — 磁性跟隨滑鼠元素
- **TiltCard** — 3D 透視傾斜卡片，支援光澤效果
- **SpotlightCard** — 聚光燈跟隨滑鼠卡片
- **RippleButton** — Material Design 風格水波紋按鈕
- **MorphingCard** — 懸停形變卡片
- **ParallaxScroll** — 視差捲動容器
- **DragContainer** — 可拖曳容器

### 🔄 過渡動畫 (6 個元件)
- **FadeExpand** — 淡入展開過渡
- **SlideReveal** — 滑動揭示過渡
- **FlipCard** — 3D 翻轉卡片
- **AccordionTransition** — 手風琴折疊過渡
- **StaggerList** — 交錯列表動畫
- **PageTransition** — 頁面切換過渡包裝器

### 💥 回饋元件 (5 個元件)
- **ConfettiExplosion** — 彩紙爆炸效果
- **PulseRing** — 脈衝環指示器
- **ShimmerEffect** — 骨架屏微光載入效果
- **ProgressBar** — 動畫進度條
- **ToastNotification** — 動畫通知提示

### 🛠️ 開發工具
- **useMousePosition** — 滑鼠位置追蹤 Composable
- **useScrollProgress** — 捲動進度追蹤 Composable
- **useReducedMotion** — 無障礙動畫偏好偵測 Composable
- **useIntersectionObserver** — 視口偵測 Composable

---

## 🚀 快速開始

### 📋 環境要求

- **Node.js** >= 16.0.0
- **Vue** >= 3.3.0
- **TypeScript** >= 5.0（建議）

### 📦 安裝

```bash
# 使用 npm
npm install vue-motion-kit

# 使用 pnpm（建議）
pnpm add vue-motion-kit

# 使用 yarn
yarn add vue-motion-kit
```

### ⚡ 快速使用

#### 全域註冊

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

#### 按需匯入（建議，支援 Tree-Shaking）

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

### 🎮 本地開發（Playground）

```bash
# 克隆倉庫
git clone https://github.com/gitstq/VueMotionKit.git
cd VueMotionKit

# 安裝依賴
npm install

# 啟動開發伺服器（含互動式演示）
npm run dev

# 執行測試
npm run test

# 建構庫
npm run build
```

---

## 📖 詳細使用指南

### 🎨 GradientText — 漸層文字

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

| 屬性 | 型別 | 預設值 | 說明 |
|------|------|--------|------|
| colors | `string[]` | `['#6366f1', '#8b5cf6', '#06b6d4']` | 漸層顏色陣列 |
| speed | `string` | `'3s'` | 動畫速度 |
| direction | `'horizontal' \| 'vertical' \| 'diagonal'` | `'horizontal'` | 漸層方向 |
| fontWeight | `string` | `'700'` | 字型粗細 |
| fontSize | `string` | `'inherit'` | 字型大小 |

### ⌨️ TypewriterText — 打字機效果

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

| 屬性 | 型別 | 預設值 | 說明 |
|------|------|--------|------|
| text | `string` | `''` | 要顯示的文字 |
| speed | `number` | `80` | 每個字元的打字間隔(ms) |
| delay | `number` | `0` | 開始前的延遲(ms) |
| cursor | `boolean` | `true` | 是否顯示游標 |
| cursorChar | `string` | `'\|'` | 游標字元 |
| loop | `boolean` | `false` | 是否循環播放 |

### 🃏 TiltCard — 3D 傾斜卡片

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

| 屬性 | 型別 | 預設值 | 說明 |
|------|------|--------|------|
| maxTilt | `number` | `15` | 最大傾斜角度 |
| perspective | `number` | `1000` | 透視距離(px) |
| glare | `boolean` | `false` | 是否啟用光澤效果 |
| glareColor | `string` | `'rgba(255,255,255,0.15)'` | 光澤顏色 |
| scale | `number` | `1` | 懸停縮放比例 |

### 🔢 CountUp — 數字動畫

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

| 屬性 | 型別 | 預設值 | 說明 |
|------|------|--------|------|
| from | `number` | `0` | 起始值 |
| to | `number` | `1000` | 目標值 |
| duration | `number` | `2` | 動畫時長(秒) |
| decimals | `number` | `0` | 小數位數 |
| separator | `string` | `','` | 千分位分隔符 |
| prefix | `string` | `''` | 前綴 |
| suffix | `string` | `''` | 後綴 |
| trigger | `'mount' \| 'scroll'` | `'mount'` | 觸發方式 |

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

### 🎊 ConfettiExplosion — 彩紙爆炸

```vue
<ConfettiExplosion
  :particle-count="60"
  :colors="['#f43f5e', '#8b5cf6', '#06b6d4', '#10b981', '#f59e0b']"
  :spread="360"
  :duration="2000"
/>
```

### 📋 StaggerList — 交錯列表

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

## 💡 設計思路與迭代規劃

### 🎯 設計理念

1. **CSS 優先**：所有動畫優先使用純 CSS 實作（`@keyframes`、`transition`、`transform`），僅在需要複雜互動邏輯時使用少量 JavaScript
2. **零依賴**：不依賴任何外部動畫庫（GSAP、Anime.js 等），保持極致輕量
3. **漸進增強**：自動偵測使用者的 `prefers-reduced-motion` 偏好，為需要的使用者停用動畫
4. **Tree-Shakeable**：每個元件獨立匯出，支援按需引入，最小化打包體積

### 🔧 技術選型原因

| 技術 | 選擇原因 |
|------|---------|
| Vue 3 Composition API | 最先進的 Vue 開發範式，更好的型別推導和邏輯複用 |
| TypeScript | 提供完整的型別安全，改善開發體驗 |
| Vite | 極速建構，原生 ESM 支援 |
| CSS Custom Properties | 實現主題定制，無需 JavaScript 執行期 |
| Canvas API | 高效能粒子/星空效果渲染 |

### 🗺️ 後續迭代計畫

- [ ] **v1.1** — 新增 SVG 路徑動畫元件（DrawSVG、MorphSVG）
- [ ] **v1.2** — 新增捲動驅動動畫元件（ScrollTrigger、PinSection）
- [ ] **v1.3** — 新增 Nuxt 3 模組支援
- [ ] **v2.0** — 線上互動式文件站點 + 主題編輯器
- [ ] **v2.1** — 新增 Figma 外掛，支援設計稿直接匯出元件程式碼

### 🤝 社群貢獻方向

歡迎貢獻新的動畫元件！請參考以下方向：

- 🎨 新的文字動畫效果（描邊文字、霓虹燈文字等）
- 🌊 新的背景效果（水波紋、煙霧等）
- 🎭 新的互動元件（磁性選單、彈性捲動等）
- 📱 行動裝置手勢動畫元件

---

## 📦 打包與部署指南

### 建構庫

```bash
npm run build
```

建構產物：

| 檔案 | 格式 | 大小 | Gzip |
|------|------|------|------|
| `vue-motion-kit.js` | ES Module | ~44 KB | ~11 KB |
| `vue-motion-kit.cjs` | CommonJS | ~35 KB | ~9 KB |
| `vue-motion-kit.css` | CSS | ~23 KB | ~4 KB |

### 在 Vite 專案中使用

```ts
// vite.config.ts
export default defineConfig({
  optimizeDeps: {
    include: ['vue-motion-kit']
  }
})
```

### 在 Nuxt 3 專案中使用

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  build: {
    transpile: ['vue-motion-kit']
  }
})
```

### 相容環境

| 環境 | 版本要求 |
|------|---------|
| Vue | >= 3.3.0 |
| Node.js | >= 16.0.0 |
| 瀏覽器 | Chrome 80+、Firefox 78+、Safari 14+、Edge 80+ |
| TypeScript | >= 5.0（建議） |

---

## 🤝 貢獻指南

我們非常歡迎社群貢獻！無論是提交新元件、修復 Bug 還是改進文件。

### 📋 貢獻流程

1. **Fork** 本倉庫
2. 建立特性分支：`git checkout -b feature/amazing-component`
3. 提交變更：`git commit -m 'feat: add AmazingComponent'`
4. 推送分支：`git push origin feature/amazing-component`
5. 提交 **Pull Request**

### 📝 提交規範

遵循 [Angular 提交規範](https://github.com/angular/angular/blob/master/CONTRIBUTING.md)：

- `feat: 新增元件/功能`
- `fix: 修復問題`
- `docs: 文件更新`
- `style: 程式碼格式調整`
- `refactor: 程式碼重構`
- `test: 測試相關`
- `chore: 建構/工具鏈更新`

### 🐛 Issue 回饋

提交 Issue 時請包含：

- 問題描述
- 重現步驟
- 預期行為
- 實際行為
- 執行環境（瀏覽器、Vue 版本、OS 等）

---

## 📄 開源協議

本專案基於 [MIT License](LICENSE) 開源。

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
