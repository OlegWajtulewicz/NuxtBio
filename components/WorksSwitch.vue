<script setup>
import { useGridViewStore } from '@/stores/gridView'
import { computed, onMounted, nextTick } from 'vue'
import gsap from 'gsap'
import { Elastic, Power4 } from 'gsap'

const gridViewStore = useGridViewStore()

onMounted(async () => {
  await nextTick()
  gridViewStore.loadSavedState()
  initMagneticButtons()
})

// Вычисляемые свойства для классов кнопок
const gridButtonClasses = computed(() => ({
  'works-switch__grid-wrap': true,
  'btn-': true,
  'btn-normal': true,
  'columns-btn': true,
  'active': gridViewStore.view === 'columns',
  'not-active': gridViewStore.view === 'rows'
}))

const listButtonClasses = computed(() => ({
  'works-switch__flex-wrap': true,
  'btn-': true,
  'btn-normal': true,
  'rows-btn': true,
  'active': gridViewStore.view === 'rows',
  'not-active': gridViewStore.view === 'columns'
}))

const handleViewChange = (newView) => {
  if (process.client) {
    setTimeout(() => {
      gridViewStore.setView(newView)
      initMagneticButtons()
    }, 150)
  }
}

function initMagneticButtons() {
  if (window.innerWidth > 540) {
    const magnets = document.querySelectorAll('.magnetic')
    magnets.forEach((magnet) => {
      magnet.addEventListener('mousemove', moveMagnet)
      magnet.parentNode?.classList.remove('not-active')
      
      magnet.addEventListener('mouseleave', function(event) {
        gsap.to(event.currentTarget, {
          duration: 1.5,
          x: 0,
          y: 0,
          ease: Elastic.easeOut,
          clearProps: "all",
        })
      })
    })
  }
}

function moveMagnet(event) {
  const magnetButton = event.currentTarget
  const bounding = magnetButton.getBoundingClientRect()
  const magnetsStrength = magnetButton.getAttribute("data-strength") || "70"
  
  gsap.to(magnetButton, {
    duration: 1.5,
    x: (((event.clientX - bounding.left) / magnetButton.offsetWidth) - 0.5) * magnetsStrength,
    y: (((event.clientY - bounding.top) / magnetButton.offsetHeight) - 0.5) * magnetsStrength,
    rotate: "0.001deg",
    ease: Power4.easeOut
  })
}
</script>

<template>
    <section class="works-switch" data-scroll-section>
        <div class="works-switch__container">
            <h5 class="works-switch__title">all works</h5>
            <div class="works-switch__buttons product-header-pr">
                <button :class="gridButtonClasses" @click="handleViewChange('columns')"
                >
                    <div class="works-switch__grid btn magnetic" data-strength="70" data-strength-text="40">
                        <div class="btn__bg"></div>
                    <div class="btn__circle-wrap">
                        <div class="btn__circle">
                            <div class="before__100"></div>
                        </div>
                    </div>
                    <span class="btn__text">
                        <p class="btn-text-p change">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
                            </svg>

                        </p>
                    </span>
                    <div class="btn__border"></div>
                    </div>
                </button>
                
                <button :class="listButtonClasses" @click="handleViewChange('rows')"
                >
                    <div class="works-switch__flex btn magnetic" data-strength="70" data-strength-text="40">
                        <div class="btn__bg"></div>
                    <div class="btn__circle-wrap">
                        <div class="btn__circle">
                            <div class="before__100"></div>
                        </div>
                    </div>
                    <span class="btn__text">
                        <p class="btn-text-p change">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                            </svg>
                        </p>
                    </span>
                    <div class="btn__border"></div>
                    </div>
                </button>
                
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
@use '@/assets/styles/components/works-switch';
</style> 