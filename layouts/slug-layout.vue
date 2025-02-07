<template>
    <div class="wrapper" data-lenis-prevent>
      <TheHeader />
      <MenuMobile />
      <main class="main">
        <slot />
      </main>
      <FooterWork />
      <Cookies />
    </div>
  </template>
  
  <script setup>
  import TheHeader from '@/components/TheHeader.vue'
  import MenuMobile from '@/components/MenuMobile.vue'
  import FooterWork from '@/components/FooterWork.vue'
  import Cookies from '~/components/Cookies.vue'
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