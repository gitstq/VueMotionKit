<template>
  <div class="playground">
    <header class="playground__header">
      <h1 class="playground__title">
        <GradientText
          :colors="['#6366f1', '#8b5cf6', '#06b6d4', '#f43f5e']"
          font-size="48px"
        >
          VueMotionKit
        </GradientText>
      </h1>
      <p class="playground__subtitle">
        <TypewriterText text="A Vue 3 Creative Animation Component Library" :speed="60" />
      </p>
    </header>

    <nav class="playground__nav">
      <button
        v-for="tab in tabs"
        :key="tab.id"
        :class="['playground__nav-btn', { 'playground__nav-btn--active': activeTab === tab.id }]"
        @click="activeTab = tab.id"
      >
        {{ tab.label }}
      </button>
    </nav>

    <main class="playground__content">
      <TextDemo v-if="activeTab === 'text'" />
      <BackgroundDemo v-if="activeTab === 'background'" />
      <InteractionDemo v-if="activeTab === 'interaction'" />
      <TransitionDemo v-if="activeTab === 'transition'" />
      <FeedbackDemo v-if="activeTab === 'feedback'" />
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { GradientText, TypewriterText } from 'vue-motion-kit'
import TextDemo from './components/TextDemo.vue'
import BackgroundDemo from './components/BackgroundDemo.vue'
import InteractionDemo from './components/InteractionDemo.vue'
import TransitionDemo from './components/TransitionDemo.vue'
import FeedbackDemo from './components/FeedbackDemo.vue'

const activeTab = ref('text')

const tabs = [
  { id: 'text', label: 'Text Effects' },
  { id: 'background', label: 'Backgrounds' },
  { id: 'interaction', label: 'Interaction' },
  { id: 'transition', label: 'Transitions' },
  { id: 'feedback', label: 'Feedback' },
]
</script>

<style>
* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: #0f0f1a;
  color: #e2e8f0;
  min-height: 100vh;
}

.playground {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 24px;
}

.playground__header {
  text-align: center;
  margin-bottom: 40px;
}

.playground__title {
  margin-bottom: 12px;
}

.playground__subtitle {
  font-size: 18px;
  color: #94a3b8;
}

.playground__nav {
  display: flex;
  gap: 8px;
  margin-bottom: 40px;
  justify-content: center;
  flex-wrap: wrap;
}

.playground__nav-btn {
  padding: 8px 20px;
  border: 1px solid rgba(99, 102, 241, 0.3);
  background: transparent;
  color: #94a3b8;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.2s;
}

.playground__nav-btn:hover {
  border-color: rgba(99, 102, 241, 0.6);
  color: #e2e8f0;
}

.playground__nav-btn--active {
  background: rgba(99, 102, 241, 0.2);
  border-color: #6366f1;
  color: #e2e8f0;
}

.playground__content {
  min-height: 400px;
}

.demo-section {
  margin-bottom: 48px;
}

.demo-section__title {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 16px;
  color: #c7d2fe;
  padding-bottom: 8px;
  border-bottom: 1px solid rgba(99, 102, 241, 0.2);
}

.demo-card {
  background: rgba(30, 30, 50, 0.6);
  border: 1px solid rgba(99, 102, 241, 0.15);
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 16px;
}

.demo-card__label {
  font-size: 12px;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 12px;
}

.demo-row {
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  align-items: center;
}
</style>
