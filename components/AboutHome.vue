<script setup>
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import { useI18n } from 'vue-i18n'

//const { $lenis } = useNuxtApp()

const { t } = useI18n()

function initTricksWords() {
  const spanWords = document.querySelectorAll('.about__text .span-lines')
  spanWords.forEach(wordWrap => {
    wordWrap.innerHTML = wordWrap.innerHTML.replace(/(^|<\/?[^>]+>|\s+)([^\s<]+)/g, '$1<span class="span-line"><span class="span-line-inner">$2</span></span>')
  })
}

function initSpanLinesAnimation() {
  document.querySelectorAll('.about__text .span-lines.animate').forEach(function(triggerElement) {
    let targetElements = triggerElement.querySelectorAll('.span-line-inner')
    
    gsap.set(targetElements, {
      opacity: 0.1
    })

    window.addEventListener('scroll', () => {
      const rect = triggerElement.getBoundingClientRect()
      const inView = rect.top <= window.innerHeight && rect.bottom >= 0

      if (inView) {
        gsap.to(targetElements, {
          opacity: 1,
          stagger: 0.05,
          ease: "power3.out",
          duration: 0.5
        })
      } else {
        gsap.set(targetElements, {
          opacity: 0.1
        })
      }
    })
  })
}

onMounted(() => {
  if (!process.client) return
  
  setTimeout(() => {
    initTricksWords()
    initSpanLinesAnimation()
  }, 1000)
})
</script>

<template>
<section class="about" data-scroll-section>
    <div class="about__container">
       <div class="about__wrapper">
           <div class="about__body">
            <div class="about__text">
                <p class="p span-lines animate">
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
}

.span-lines {
  display: inline-block;
  overflow: hidden;
}

.span-line {
  display: inline-block;
  overflow: hidden;
  vertical-align: top;
}

.span-line-inner {
  display: inline-block;
  transform: translateY(100%);
  will-change: transform;
}
</style>
