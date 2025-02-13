<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useNuxtApp } from '#app'
import { useI18n } from 'vue-i18n'
import MouseCursor from './MouseCursor.vue'
import { works } from '@/data/works'
import { NuxtLink } from '#components'

const { t } = useI18n()
const isClient = ref(false)
const { $locomotiveScroll: scroll } = useNuxtApp()

const updateLayout = () => {
  if (scroll) {
    setTimeout(() => {
      scroll.update()
    }, 100)
  }
}

onMounted(() => {
  isClient.value = true
  updateLayout()
  window.addEventListener('resize', updateLayout)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateLayout)
})
</script>

<template>
    <MouseCursor :projects="works.slice(0,4)" />
   
    <section class="latest-work" data-scroll-section>
    <div class="latest-work__container">
        <h3 class="latest-work__title">{{ t('latest_work.title') }}</h3>
        <ul class="latest-work__wrapper work-wrapper">
            <li v-for="project in works.slice(0,4)" :key="project.image" class="latest-work__item item-latest-work visible">
                <div class="latest-work__diwider"></div>
                <NuxtLink :to="`/work/${project.slug}`" class="item-latest-work__body">
                    <div class="item-latest-work__title">
                        <div class="item-latest-work__title--item">{{ project.title }}</div>
                    </div>
                    <div class="item-latest-work__body-image">
                        <div class="item-latest-work__images" v-if="isClient" v-lazy>
                            <img :data-src="project.image" :alt="project.title" class="item-latest-work__image ibg">
                        </div>
                    </div>
                    
                    <div class="item-latest-work__descr">{{ project.service }}</div>
                </NuxtLink>
            </li>
            <div class="latest-work__diwider"></div>
        </ul>

        <ul class="latest-work__wrapper--tiles">
            <li v-for="project in works.slice(0,2)" :key="project.image" class="latest-work__item item-latest-work visible">
                <NuxtLink :to="`/work/${project.slug}`" class="item-latest-work__body single-tile-wrap">
                    <div class="item-latest-work__images" v-if="isClient" v-lazy>
                        <div class="item-latest-work__color" :class="project.color"></div>
                        <img :data-src="project.image" :alt="project.title" class="tile-image item-latest-work__image ibg">
                    </div>
                    <div class="item-latest-work__title">
                        <div class="item-latest-work__title--item">{{ project.title }}</div>
                    </div>
                    <div class="latest-work__diwider"></div>
                    <div class="item-latest-work__descr">{{ project.service }}</div>
                </NuxtLink>
            </li>
        </ul>
    </div>
</section>
</template>

<style lang="scss">
@use '@/assets/styles/components/latest-work';

.item-latest-work__images {
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    
    &.loaded {
        opacity: 1;
    }
}
</style> 