<script setup>
defineProps({
  ui: {
    type: Object,
    default: () => ({
      rounded: '',
      background: 'skeleton--bg',
      animation: 'skeleton--pulse'
    })
  }
})
</script>

<template>
  <div 
    class="skeleton"
    :class="[
      ui.rounded,
      ui.background,
      ui.animation
    ]"
  ></div>
</template>

<style scoped lang="scss">
.skeleton {
  position: relative;
  overflow: hidden;

  &--bg {
    background-color: rgba(82, 82, 82, 0.432);
  }

  &--rounded {
    border-radius: 1em;
  }

  &--rounded-full {
    border-radius: 9999px;
  }

  &--pulse {
    animation: pulse 2s ease-in-out infinite;
    opacity: 1;
    transition: opacity 0.3s ease-in-out;
  }
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: .7;
  }
}
</style> 