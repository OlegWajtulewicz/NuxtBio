<script setup>
import { onMounted, nextTick } from 'vue'
import { gsap } from 'gsap'
import { useI18n } from 'vue-i18n'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { initTricksWords, initSpanLinesAnimation } from '@/animation/trickWordAnimation'

const { t } = useI18n()

// Регистрируем ScrollTrigger только на клиенте
if (process.client) {
  gsap.registerPlugin(ScrollTrigger)
}

onMounted(async () => {
  if (!process.client) return

  // Ждем следующего тика для уверенности, что DOM обновился
  await nextTick()
  
  // Проверяем наличие элементов перед инициализацией
  const spanElements = document.querySelectorAll('.span-lines')
  if (spanElements.length > 0) {
    initTricksWords()
    initSpanLinesAnimation()
  }
})
</script>

<template>
<section class="about" data-scroll-section>
    <div class="about__container">
       <div class="about__wrapper">
           <div class="about__body">
            <div class="about__text">
                <p class="span-lines animate">
                    {{ t('about_home.main_text') }}
                </p> 
            </div>
            <div class="about__kontext">
                <p class="about__kontext--text">
                    {{ t('about_home.context_text') }}
                </p>
                <div class="about__image magnetic" data-scroll data-scroll-speed="-1.2">
                    <div class="spinner magnetic" data-strength="70"></div>
                </div>
            </div>
           </div>
        </div>
    </div>
</section> 
</template>

<style scoped lang="scss">
@use '@/assets/styles/components/about-home.scss' as *;

.about__text {
  position: relative;
  overflow: hidden;
  opacity: 1;
  min-height: 20px;
}

.span-lines {
  display: inline-block;
  overflow: hidden;
  width: 100%;
  opacity: 1;
}

.span-line {
  display: inline-block;
  overflow: hidden;
  vertical-align: top;
  margin-right: 0.25em;
  opacity: 1;
}

.span-line-inner {
  display: inline-block;
  transform: translateY(100%);
  will-change: transform;
  opacity: 1;
}
</style>
