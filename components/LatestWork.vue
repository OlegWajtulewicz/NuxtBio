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
    <section class="latest-work" data-scroll-section>
    <div class="latest-work__container">
        <h3 class="latest-work__title">latest work</h3>
        <ul class="latest-work__wrapper work-wrapper">
            <li class="latest-work__item item-latest-work  visible">
                <div class="latest-work__diwider"></div>
                <a href="./julia-maisa.html" class="item-latest-work__body">
                    <div class="item-latest-work__title">
                        <div class="item-latest-work__title--item">Julia Maisa</div>
                    </div>
                    <div class="item-latest-work__body-image">
                        <div class="item-latest-work__images" v-if="isClient" v-lazy>
                            <img data-src="/img/works/Julia.png" alt="Julia Maisa" class="item-latest-work__image ibg">
                        </div>
                    </div>
                    
                    <div class="item-latest-work__descr">Design & Development</div>
                </a>
            </li>
            <li class="latest-work__item item-latest-work  visible">
                <div class="latest-work__diwider"></div>
                <a href="./groove-school.html" div class="item-latest-work__body">
                    <div class="item-latest-work__title">Groove School</div>
                    <div class="item-latest-work__body-image">
                        <div class="item-latest-work__images" v-if="isClient" v-lazy>
                            <img data-src="/img/works/bwg.png" alt="Groove School" class="item-latest-work__image ibg">
                        </div>
                    </div>
                    
                    <div class="item-latest-work__descr">Design & Development</div>
                </a>
            </li>
            <li class="latest-work__item item-latest-work  visible">
                <div class="latest-work__diwider"></div>
                <a href="./pizza.html" class="item-latest-work__body">
                    <div class="item-latest-work__title">Pizza-Next</div>
                    <div class="item-latest-work__body-image">
                        <div class="item-latest-work__images" v-if="isClient" v-lazy>
                            <img data-src="/img/works/pizza-next.png" alt="Pizza Next" class="item-latest-work__image ibg">
                        </div>
                    </div>
                    
                    <div class="item-latest-work__descr">Full Stack Development</div>
                </a>
            </li>
            <div class="latest-work__diwider"></div>
        </ul>

        <ul class="latest-work__wrapper--tiles">
            <li class="latest-work__item item-latest-work  visible">
                <a href="./julia-maisa.html" class="item-latest-work__body single-tile-wrap">
                    <div class="item-latest-work__images" v-if="isClient" v-lazy>
                        <div class="item-latest-work__color orange"></div>
                        <img data-src="/img/works/Julia.png" alt="Julia Maisa" class="tile-image item-latest-work__image ibg">
                    </div>
                    <div class="item-latest-work__title">
                        <div class="item-latest-work__title--item">Julia Maisa</div>
                    </div>
                    <div class="latest-work__diwider"></div>
                    <div class="item-latest-work__descr">Design & Development</div>
                </a>
            </li>
            
            <li class="latest-work__item item-latest-work  visible">
                <a href="./groove-school.html" class="item-latest-work__body single-tile-wrap">
                    <div class="item-latest-work__images" v-if="isClient" v-lazy>
                        <div class="item-latest-work__color blue1"></div>
                        <img data-src="/img/works/bwg.png" alt="Groove School" class="item-latest-work__image ibg">
                    </div>
                    <div class="item-latest-work__title">Groove School</div>
                    <div class="latest-work__diwider"></div>
                    <div class="item-latest-work__descr">Design & Development</div>
                </a>
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