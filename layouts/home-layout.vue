<script setup>
import TheHeader from '@/components/TheHeader.vue'
import MenuMobile from '@/components/MenuMobile.vue'
import FooterMain from '@/components/FooterMain.vue'
</script>

<template>
  <div class="wrapper" data-lenis-prevent>
    <TheHeader />
    <MenuMobile />
    <main class="main">
      <slot />
    </main>
    <FooterMain />
  </div>
</template>



<style lang="scss">
.home-layout {
  position: relative;
  width: 100%;
  min-height: 100vh;
  background-color: var(--background-color);
}
</style>