<template>
  <div>
    <section class="demo-section">
      <h2 class="demo-section__title">Confetti Explosion</h2>
      <div class="demo-card" style="display: flex; justify-content: center; padding: 60px;">
        <div style="text-align: center;">
          <button @click="showConfetti = !showConfetti" style="padding: 12px 24px; background: linear-gradient(135deg, #6366f1, #8b5cf6); border: none; color: white; border-radius: 8px; cursor: pointer; font-size: 16px; font-weight: 600;">
            Click for Confetti!
          </button>
          <div style="position: relative; margin-top: 20px;">
            <ConfettiExplosion
              :particle-count="60"
              :colors="['#6366f1', '#8b5cf6', '#06b6d4', '#f43f5e', '#fbbf24', '#34d399']"
              :spread="200"
              :duration="1500"
              :trigger="showConfetti"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="demo-section">
      <h2 class="demo-section__title">Pulse Ring</h2>
      <div class="demo-card">
        <div class="demo-row" style="justify-content: center;">
          <PulseRing color="#6366f1" :count="3" :duration="2000" :size="20" />
          <PulseRing color="#06b6d4" :count="2" :duration="1500" :size="30" />
          <PulseRing color="#f43f5e" :count="4" :duration="2500" :size="15" />
        </div>
      </div>
    </section>

    <section class="demo-section">
      <h2 class="demo-section__title">Shimmer Effect</h2>
      <div class="demo-card">
        <div style="display: flex; flex-direction: column; gap: 12px;">
          <ShimmerEffect height="20px" width="60%" />
          <ShimmerEffect height="16px" width="100%" />
          <ShimmerEffect height="16px" width="80%" />
          <div style="display: flex; gap: 12px; margin-top: 8px;">
            <ShimmerEffect height="80px" width="80px" border-radius="12px" />
            <div style="flex: 1; display: flex; flex-direction: column; gap: 8px;">
              <ShimmerEffect height="14px" width="50%" />
              <ShimmerEffect height="14px" width="100%" />
              <ShimmerEffect height="14px" width="70%" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="demo-section">
      <h2 class="demo-section__title">Progress Bar</h2>
      <div class="demo-card">
        <div style="display: flex; flex-direction: column; gap: 20px;">
          <div>
            <ProgressBar :value="75" :max="100" color="#6366f1" :height="8" :show-label="true" />
          </div>
          <div>
            <ProgressBar :value="45" :max="100" color="#06b6d4" :height="12" :show-label="true" />
          </div>
          <div>
            <ProgressBar :value="90" :max="100" color="#f43f5e" :height="6" :show-label="true" />
          </div>
          <div>
            <div style="display: flex; gap: 12px; align-items: center;">
              <button @click="progressValue = Math.max(0, progressValue - 10)" style="padding: 6px 12px; background: rgba(99, 102, 241, 0.3); border: none; color: white; border-radius: 6px; cursor: pointer;">-</button>
              <ProgressBar :value="progressValue" :max="100" color="#34d399" :height="10" :show-label="true" />
              <button @click="progressValue = Math.min(100, progressValue + 10)" style="padding: 6px 12px; background: rgba(99, 102, 241, 0.3); border: none; color: white; border-radius: 6px; cursor: pointer;">+</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="demo-section">
      <h2 class="demo-section__title">Toast Notification</h2>
      <div class="demo-card">
        <div class="demo-row">
          <button @click="showToast('success')" style="padding: 8px 16px; background: rgba(16, 185, 129, 0.3); border: none; color: white; border-radius: 6px; cursor: pointer;">
            Success Toast
          </button>
          <button @click="showToast('error')" style="padding: 8px 16px; background: rgba(239, 68, 68, 0.3); border: none; color: white; border-radius: 6px; cursor: pointer;">
            Error Toast
          </button>
          <button @click="showToast('warning')" style="padding: 8px 16px; background: rgba(245, 158, 11, 0.3); border: none; color: white; border-radius: 6px; cursor: pointer;">
            Warning Toast
          </button>
          <button @click="showToast('info')" style="padding: 8px 16px; background: rgba(99, 102, 241, 0.3); border: none; color: white; border-radius: 6px; cursor: pointer;">
            Info Toast
          </button>
        </div>
      </div>
      <ToastNotification
        v-if="currentToast"
        :key="toastKey"
        :message="currentToast.message"
        :type="currentToast.type"
        :duration="3000"
        position="top-right"
      />
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { ToastType } from 'vue-motion-kit'
import {
  ConfettiExplosion,
  PulseRing,
  ShimmerEffect,
  ProgressBar,
  ToastNotification,
} from 'vue-motion-kit'

const showConfetti = ref(false)
const progressValue = ref(50)

const currentToast = ref<{ message: string; type: ToastType } | null>(null)
const toastKey = ref(0)

const showToast = (type: ToastType) => {
  const messages: Record<ToastType, string> = {
    success: 'Operation completed successfully!',
    error: 'Something went wrong. Please try again.',
    warning: 'Warning: Please check your input.',
    info: 'Here is some useful information.',
  }
  currentToast.value = { message: messages[type], type }
  toastKey.value++
}
</script>
