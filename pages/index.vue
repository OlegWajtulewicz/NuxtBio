<!--   -->
<script setup>
import MainHome from '@/components/MainHome.vue'
import MarqueeHome from '@/components/MarqueeHome.vue'
import AboutHome from '@/components/AboutHome.vue'
import LatestWork from '@/components/LatestWork.vue'
import AllWorksButton from '@/components/AllWorksButton.vue'
import { firstScreenAnimation } from '@/composables/useFirstScreenAnimation'
import { watch, nextTick } from 'vue'
import { transition } from '@/utils/transitionTemplate'
import { useHead } from 'unhead'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

definePageMeta({
  layout: 'home-layout',
  ...transition,
})

useHead(() => ({
  title: t('meta.home.title')
}))

watch(() =>
		[general.isTransitionFinish, general.isPreloaderVisible],
		([transitionFinish, preloaderVisibility]) => {
        if(transitionFinish && !preloaderVisibility) {
          nextTick(() => {
            firstScreenAnimation({parent: '.main'})
          })
        }
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

<style scoped lang="scss">
@use "sass:math";
@use '@/assets/styles/main.scss';

</style>
