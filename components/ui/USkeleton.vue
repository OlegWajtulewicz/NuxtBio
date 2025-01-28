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
    background-color: rgb(8, 8, 8);
  }

  &--rounded {
    border-radius: 0.5rem;
  }

  &--rounded-full {
    border-radius: 9999px;
  }

  &--pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }
}

@keyframes pulse {
  50% {
    opacity: .7;
  }
}
</style> 