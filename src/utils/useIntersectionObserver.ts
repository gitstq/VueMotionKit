import { ref, onMounted, onUnmounted, watch, type Ref } from 'vue'

export interface UseIntersectionObserverOptions {
  threshold?: number | number[]
  rootMargin?: string
  once?: boolean
}

export function useIntersectionObserver(
  target: Ref<HTMLElement | null>,
  options: UseIntersectionObserverOptions = {}
) {
  const { threshold = 0.1, rootMargin = '0px', once = true } = options
  const isVisible = ref(false)
  let observer: IntersectionObserver | null = null

  const cleanup = () => {
    if (observer) {
      observer.disconnect()
      observer = null
    }
  }

  const observe = () => {
    cleanup()
    if (!target.value) return

    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          isVisible.value = entry.isIntersecting
          if (entry.isIntersecting && once) {
            cleanup()
          }
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(target.value)
  }

  onMounted(() => {
    watch(
      () => target.value,
      () => observe(),
      { immediate: true }
    )
  })

  onUnmounted(cleanup)

  return { isVisible }
}
