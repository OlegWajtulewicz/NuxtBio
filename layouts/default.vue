<template>
  <div class="wrapper" data-scroll-container>
    <TheHeader />
    <MenuMobile />
    <main class="main">
      <slot />
    </main>
  </div>
</template>

<script setup>
import TheHeader from '@/components/TheHeader.vue'
import MenuMobile from '@/components/MenuMobile.vue'
</script>

<style lang="scss">
.wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.main {
  flex: 1 1 auto;
}
</style> 