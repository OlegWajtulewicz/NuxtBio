import { ref } from 'vue'

const lenis = ref(null)

export const useLenis = () => {
  const initLenis = (instance) => {
    lenis.value = instance
  }

  return {
    lenis,
    initLenis
  }
} 