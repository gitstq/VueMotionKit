<template>
  <div class="vm-pulse-ring">
    <div
      v-for="i in count"
      :key="i"
      class="vm-pulse-ring__ring"
      :style="{
        width: `${size}px`,
        height: `${size}px`,
        borderColor: color,
        animationDuration: `${duration}ms`,
        animationDelay: `${(i - 1) * (duration / count)}ms`,
      }"
    />
    <div class="vm-pulse-ring__center" :style="{ backgroundColor: color }" />
  </div>
</template>

<script setup lang="ts">
export interface PulseRingProps {
  color?: string
  count?: number
  duration?: number
  size?: number
}

const props = withDefaults(defineProps<PulseRingProps>(), {
  color: '#6366f1',
  count: 3,
  duration: 2000,
  size: 20,
})
</script>

<style scoped>
.vm-pulse-ring {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.vm-pulse-ring__ring {
  position: absolute;
  border: 2px solid;
  border-radius: 50%;
  animation: vm-pulse-ring-anim linear infinite;
  opacity: 0;
}

.vm-pulse-ring__center {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  z-index: 1;
}

@keyframes vm-pulse-ring-anim {
  0% {
    transform: scale(0.5);
    opacity: 0.8;
  }
  100% {
    transform: scale(2.5);
    opacity: 0;
  }
}
</style>
