<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useNuxtApp } from '#app'

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
    <div class="mouse-image active">
    <div class="mouse-image__bounce overlay">
        <div class="mouse-image__float-wrap">
            <li class="mouse-image__image-inner visible">
                <div class="item-latest-work__images">
                    <div class="item-latest-work__color orange"></div>
                    <img src="/img/works/Julia.png" alt="image" class="tile-image item-latest-work__image ibg">
                </div>            
            </li>
            <li class="mouse-image__image-inner visible">
                <div class="item-latest-work__images">
                    <div class="item-latest-work__color blue1"></div>
                    <img data-src="/img/works/bwg.png" alt="image" class="item-latest-work__image ibg">
                </div>
            </li>
            <li class="mouse-image__image-inner visible">
                <div class="item-latest-work__images">
                    <div class="item-latest-work__color yellow"></div>
                    <img data-src="/img/works/pizza-next.png" alt="image" class="item-latest-work__image ibg "/>
                </div>
            </li>
        </div>
    </div>
</div>

<div class="mouse-btn no-select"></div>
<div class="mouse-span no-select">
    <p class="icon-Right"></p>
</div>
</template>

<style lang="scss">
@use '@/assets/styles/components/mouse';
</style> 