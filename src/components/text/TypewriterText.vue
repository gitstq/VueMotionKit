<template>
  <span class="vm-typewriter">
    <span class="vm-typewriter__text">{{ displayedText }}</span>
    <span
      v-if="cursor"
      class="vm-typewriter__cursor"
      aria-hidden="true"
    >{{ cursorChar }}</span>
  </span>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, onUnmounted } from 'vue'
import { useReducedMotion } from '../../composables/useReducedMotion'

export interface TypewriterTextProps {
  text: string
  speed?: number
  delay?: number
  cursor?: boolean
  cursorChar?: string
  loop?: boolean
}

const props = withDefaults(defineProps<TypewriterTextProps>(), {
  speed: 50,
  delay: 0,
  cursor: true,
  cursorChar: '|',
  loop: false,
})

const { prefersReducedMotion } = useReducedMotion()
const displayedText = ref('')
let timer: ReturnType<typeof setTimeout> | null = null
let currentIndex = 0

const type = () => {
  if (currentIndex < props.text.length) {
    displayedText.value += props.text[currentIndex]
    currentIndex++
    timer = setTimeout(type, prefersReducedMotion.value ? 0 : props.speed)
  } else if (props.loop) {
    timer = setTimeout(() => {
      displayedText.value = ''
      currentIndex = 0
      type()
    }, props.speed * 5)
  }
}

onMounted(() => {
  timer = setTimeout(type, props.delay)
})

onUnmounted(() => {
  if (timer) clearTimeout(timer)
})

watch(
  () => props.text,
  () => {
    if (timer) clearTimeout(timer)
    displayedText.value = ''
    currentIndex = 0
    type()
  }
)
</script>

<style scoped>
.vm-typewriter {
  display: inline;
}

.vm-typewriter__cursor {
  display: inline-block;
  animation: vm-cursor-blink 1s step-end infinite;
  font-weight: 100;
  margin-left: 1px;
}

@keyframes vm-cursor-blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
</style>
