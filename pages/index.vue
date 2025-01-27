<script setup>
import MainHome from '@/components/MainHome.vue'
import MarqueeHome from '@/components/MarqueeHome.vue'
import AboutHome from '@/components/AboutHome.vue'
import LatestWork from '@/components/LatestWork.vue'
import AllWorksButton from '@/components/AllWorksButton.vue'

useHead({
  title: 'Aleh Vaitulevich • Freelance Developer'
})

definePageMeta({
  layout: 'home-layout'
})
</script>

<template>
  <div>
    <MainHome />
    <MarqueeHome />
    <AboutHome />
    <LatestWork />
    <AllWorksButton />
  </div>
</template>
