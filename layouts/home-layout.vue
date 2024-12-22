<template>
  <div class="home-layout">
    <MainHome />
    <MarqueeHome />
    <AboutHome />
    <LatestWork />
    <AllWorksButton />
    <FooterMain />
  </div>
</template>

<script setup>
import MainHome from '@/components/MainHome.vue'
import MarqueeHome from '@/components/MarqueeHome.vue'
import AboutHome from '@/components/AboutHome.vue'
import LatestWork from '@/components/LatestWork.vue'
import AllWorksButton from '@/components/AllWorksButton.vue'

defineProps({
  // Здесь можно определить пропсы, если они нужны
})
</script>

<style lang="scss">
.home-layout {
  position: relative;
  width: 100%;
  min-height: 100vh;
  background-color: var(--background-color);
}
</style>