import { ref, onMounted, onUnmounted } from 'vue'

export function useReducedMotion() {
  const prefersReducedMotion = ref(false)

  const mediaQuery =
    typeof window !== 'undefined'
      ? window.matchMedia('(prefers-reduced-motion: reduce)')
      : null

  const update = () => {
    if (mediaQuery) {
      prefersReducedMotion.value = mediaQuery.matches
    }
  }

  onMounted(() => {
    update()
    mediaQuery?.addEventListener('change', update)
  })

  onUnmounted(() => {
    mediaQuery?.removeEventListener('change', update)
  })

  return { prefersReducedMotion }
}
