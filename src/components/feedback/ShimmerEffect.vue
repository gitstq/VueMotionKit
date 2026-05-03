<template>
  <div
    class="vm-shimmer-effect"
    :style="{
      width: width || '100%',
      height: height || '20px',
      borderRadius: borderRadius || '4px',
      '--vm-shimmer-color': color,
      '--vm-shimmer-duration': `${duration}ms`,
    } as any"
  />
</template>

<script setup lang="ts">
export interface ShimmerEffectProps {
  color?: string
  duration?: number
  width?: string
  height?: string
  borderRadius?: string
}

const props = withDefaults(defineProps<ShimmerEffectProps>(), {
  color: '#e5e7eb',
  duration: 1500,
  width: '',
  height: '20px',
  borderRadius: '4px',
})
</script>

<style scoped>
.vm-shimmer-effect {
  background: linear-gradient(
    90deg,
    var(--vm-shimmer-color, #e5e7eb) 25%,
    #f3f4f6 50%,
    var(--vm-shimmer-color, #e5e7eb) 75%
  );
  background-size: 200% 100%;
  animation: vm-shimmer-slide var(--vm-shimmer-duration, 1500ms) ease-in-out infinite;
}

@keyframes vm-shimmer-slide {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
</style>
