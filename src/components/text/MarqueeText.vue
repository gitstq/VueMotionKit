<template>
  <div
    class="vm-marquee-text"
    :class="{ 'vm-marquee-text--paused': isPaused }"
    :style="{
      '--vm-marquee-duration': `${duration}s`,
      '--vm-marquee-gap': `${gap}px`,
    } as any"
    @mouseenter="pauseOnHover && (isPaused = true)"
    @mouseleave="pauseOnHover && (isPaused = false)"
  >
    <div
      class="vm-marquee-text__track"
      :class="`vm-marquee-text__track--${direction}`"
    >
      <div class="vm-marquee-text__content">
        <slot />
      </div>
      <div class="vm-marquee-text__content" aria-hidden="true">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { MarqueeDirection } from '../../types'

export interface MarqueeTextProps {
  speed?: number
  direction?: MarqueeDirection
  pauseOnHover?: boolean
  gap?: number
}

const props = withDefaults(defineProps<MarqueeTextProps>(), {
  speed: 30,
  direction: 'left',
  pauseOnHover: true,
  gap: 40,
})

const isPaused = ref(false)

const duration = computed(() => {
  return props.speed
})
</script>

<script lang="ts">
import { computed } from 'vue'
</script>

<style scoped>
.vm-marquee-text {
  overflow: hidden;
  width: 100%;
  display: flex;
}

.vm-marquee-text__track {
  display: flex;
  width: max-content;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

.vm-marquee-text__track--left {
  animation-name: vm-marquee-scroll;
  animation-duration: var(--vm-marquee-duration, 30s);
}

.vm-marquee-text__track--right {
  animation-name: vm-marquee-scroll-reverse;
  animation-duration: var(--vm-marquee-duration, 30s);
}

.vm-marquee-text__content {
  display: flex;
  align-items: center;
  gap: var(--vm-marquee-gap, 40px);
  padding-right: var(--vm-marquee-gap, 40px);
  flex-shrink: 0;
}

.vm-marquee-text--paused .vm-marquee-text__track {
  animation-play-state: paused;
}

@keyframes vm-marquee-scroll {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

@keyframes vm-marquee-scroll-reverse {
  from { transform: translateX(-50%); }
  to { transform: translateX(0); }
}
</style>
