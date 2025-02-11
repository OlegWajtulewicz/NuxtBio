<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const isClient = ref(false)
const isReady = ref(false)

function initLoaderHome() {
  const tl = gsap.timeline()

  // Ждем, пока элементы будут в DOM
  nextTick(() => {
    // Начальная настройка элементов
    tl.set(".transition__screen", { bottom: "-142%", opacity: 1 })
    tl.set(".transition__rounded-wrap.top", { opacity: 1 })
    tl.set(".transition__fade, .transition__container", { opacity: 1 })
    tl.set("html", { cursor: "wait" })

    // Установка высоты полукруга в зависимости от ширины экрана
    const roundedWrapHeight = window.innerWidth > 540 ? "20vh" : "10vh"
    tl.set(".transition__rounded-wrap.top", { height: roundedWrapHeight })

    // Анимация затемнения экрана
    tl.to(".transition__fade", {
      duration: 0.3,
      opacity: 1,
      ease: "linear",
    })

    // Подъем блока до середины экрана
    tl.to(".transition__screen", {
      duration: 0.8,
      bottom: "-30%",
      opacity: 1,
      ease: "Power2.easeIn",
    }, "+=0.1")

    // Уменьшение высоты полукруга
    tl.to(".transition__rounded-wrap.top", {
      duration: 0.8,
      height: roundedWrapHeight,
      ease: "none",
    }, "<")

    tl.to(".transition__rounded-wrap.top", {
      duration: 0.6,
      height: "1vh",
      opacity: 1,
      ease: "Expo.easeInOut",
      delay: 0.3,
    })

    // Подъем блока вверх и его исчезновение
    tl.to(".transition__screen", {
      duration: 1.6,
      bottom: "150%",
      opacity: 1,
      ease: "Expo.easeInOut",
    }, "-=1")

    // Исчезновение затемнения
    tl.to(".transition__fade, .transition__container", {
      duration: 1.8,
      opacity: 0,
      ease: "linear",
    }, "-=1")

    // Анимация линии на домашней странице
    if (document.querySelector(".home .line")) {
      tl.from(".home .line", {
        duration: 1.5,
        scaleX: 0,
        ease: "Expo.easeOut",
        transformOrigin: "left top",
      }, "-=1.2")
    }

    // Возвращение нормального курсора
    tl.set("html", { cursor: "auto" })

    // Возврат блока в исходное положение
    tl.set(".transition__screen", { bottom: "-142%" }, "+=0.6")

    // Обновление ScrollTrigger
    tl.call(() => {
      if (typeof ScrollTrigger !== "undefined") {
        ScrollTrigger.refresh()
      }
    }, null, "+=3")

    isReady.value = true
  })

  return tl
}

function pageTransitionIn() {
  if (!isReady.value) return gsap.timeline()
  
  const tl = gsap.timeline()

  // Установка начальных параметров
  tl.set(".transition__screen", {
    bottom: "-142%",
    opacity: 1,
  })

  if (window.innerWidth > 1024) {
    tl.set(".wrapper", { opacity: 0, scale: 0.95, height: "100%" })
  } else {
    tl.set(".wrapper", { opacity: 0, y: "30vh" })
  }

  tl.set(".transition__rounded-wrap.top", {
    opacity: 1,
    height: window.innerWidth > 540 ? "20vh" : "10vh",
  })

  tl.set("html", { cursor: "wait" })

  // Затемнение экрана
  tl.to(".transition__fade, .transition__container", {
    opacity: 1,
    ease: "linear",
    duration: 0.3,
  })

  // Анимация поднятия экрана
  tl.to(".transition__screen", {
    duration: 0.8,
    bottom: "-30%",
    ease: "Power2.easeIn",
  })

  // Уменьшение высоты полукруга
  tl.to(".transition__rounded-wrap.top", {
    duration: 0.6,
    height: "1vh",
    ease: "Expo.easeInOut",
    delay: 0.3,
  })

  // Полное поднятие экрана
  tl.to(".transition__screen", {
    duration: 1.6,
    bottom: "150%",
    ease: "Expo.easeInOut",
  }, "-=1")

  if (window.innerWidth > 1024) {
    tl.to(".wrapper", {
      duration: 1.5,
      scale: 1,
      height: "auto",
      ease: "Expo.easeOut",
      delay: 0.1,
      clearProps: "all"
    }, "-=3")
  } else {
    tl.to(".wrapper", {
      duration: 1.5,
      y: "0em",
      ease: "Expo.easeOut",
      delay: 0.1,
      clearProps: "all"
    }, "-=3.7")
  }

  // Уменьшение затемнения
  tl.to(".transition__fade, .transition__container", {
    duration: 1.8,
    opacity: 0,
    ease: "linear",
  }, "-=1")

  // Анимация линии
  if (document.querySelector(".home .line")) {
    tl.from(".home .line", {
      duration: 1.5,
      scaleX: 0,
      ease: "Expo.easeOut",
      transformOrigin: "left top",
    }, "-=1.4")
  }

  // Сброс параметров
  tl.set("html", { cursor: "auto" })
  tl.set(".transition__screen", { bottom: "-142%" }, "+=0.6")

  return tl
}

function pageTransitionOut() {
  if (!isReady.value) return gsap.timeline()
  
  const tl = gsap.timeline()

  tl.set(".home__container", "header", { clearProps: 'all', height: 'unset' })
  
  if (window.innerWidth > 1024) {
    tl.to(".wrapper", {
      scale: 1,
      height: "100%",
      opacity: 0,
    })
  } else {
    tl.to(".wrapper", { opacity: 0 })
  }

  return tl
}

onMounted(() => {
  isClient.value = true
  initLoaderHome()
})

// Экспортируем функции для использования в родительских компонентах
defineExpose({
  pageTransitionIn,
  pageTransitionOut
})
</script>

<template>
  <div v-show="isClient">
    <div class="transition__container">
      <div class="transition__fade"></div>
      <div class="transition__screen">
        <div class="transition__rounded-wrap top">
          <div class="transition__rounded-div"></div>
        </div>
        <div class="transition__rounded-wrap bottom">
          <div class="transition__rounded-div"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@use '@/assets/styles/components/transition';
</style>