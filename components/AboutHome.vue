<script setup>
import { onMounted } from 'vue'
import { gsap } from 'gsap'

//const { $lenis } = useNuxtApp()

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
                    I'm a web developer with a passion for creating websites. 
                    I strive for perfection, so that my projects are not only 
                    aesthetically pleasing and functional, 
                    but also effectively solve business problems.
                </p> 
            </div>
            <div class="about__kontext">
                <p class="about__kontext--text">
                    On this website I present my best works created using modern web development technologies. 
                    I will be happy to offer my services and help you stand out in the digital world.
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
