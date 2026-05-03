<template>
  <div class="vm-progress-bar" :style="{ height: `${height}px` }">
    <div
      v-if="showLabel"
      class="vm-progress-bar__label"
    >
      {{ Math.round(percentage) }}%
    </div>
    <div class="vm-progress-bar__track">
      <div
        class="vm-progress-bar__fill"
        :class="{ 'vm-progress-bar__fill--animated': animated }"
        :style="{
          width: `${percentage}%`,
          backgroundColor: color,
          '--vm-progress-duration': `${duration}ms`,
        } as any"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

export interface ProgressBarProps {
  value?: number
  max?: number
  color?: string
  height?: number
  animated?: boolean
  showLabel?: boolean
  duration?: number
}

const props = withDefaults(defineProps<ProgressBarProps>(), {
  value: 0,
  max: 100,
  color: '#6366f1',
  height: 8,
  animated: true,
  showLabel: false,
  duration: 1000,
})

const percentage = computed(() => {
  return Math.min(Math.max((props.value / props.max) * 100, 0), 100)
})
</script>

<style scoped>
.vm-progress-bar {
  width: 100%;
}

.vm-progress-bar__label {
  text-align: right;
  font-size: 12px;
  color: #666;
  margin-bottom: 4px;
  font-variant-numeric: tabular-nums;
}

.vm-progress-bar__track {
  width: 100%;
  background-color: #e5e7eb;
  border-radius: 9999px;
  overflow: hidden;
}

.vm-progress-bar__fill {
  height: 100%;
  border-radius: 9999px;
  transition: width 0.3s ease;
}

.vm-progress-bar__fill--animated {
  animation: vm-progress-pulse 2s ease-in-out infinite;
}

@keyframes vm-progress-pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.8; }
}
</style>
