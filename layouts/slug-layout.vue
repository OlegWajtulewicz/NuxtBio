<template>
    <div class="wrapper work-slug">
      <ThePreloader />
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
import ThePreloader from '@/components/ThePreloader.vue'

import { onMounted, watch, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import { firstScreenAnimation } from '@/composables/useFirstScreenAnimation'

const route = useRoute()

onMounted(() => {
   // useSmoothScroll()
})

watch(() =>
    [general.isTransitionStart, general.isPreloaderVisible],
    ([transitionStart, preloaderVisibility]) => {
        if(transitionStart && !preloaderVisibility) {
          nextTick(() => {
            firstScreenAnimation({parent: '.main'})
          })
        }
    }
)

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