<script setup>
import { onMounted } from 'vue'
import { gsap } from 'gsap'


onMounted(() => {
  const tl = gsap.timeline({
        onComplete() {
            general.isPreloaderVisible = false
            general.scrollLenis?.start()
        }
    })

    tl.set(".wrapper", { 
		opacity: 0 
	  })
    tl.set(".transition__screen", { bottom: "-142%", opacity: 1 })
    tl.set(".transition__rounded-wrap.top", { opacity: 1 })
    tl.set(".transition__fade, .transition__container", { opacity: 1 })
    tl.set("html", { cursor: "wait" })

    const roundedWrapHeight = window.innerWidth > 540 ? "20vh" : "10vh"
    tl.set(".transition__rounded-wrap.top", { height: roundedWrapHeight })

    tl.to(".transition__fade", {
    duration: 0.3,
    opacity: 1,
    ease: "linear",
    })

    tl.to(".transition__screen", {
    duration: 0.8,
    bottom: "-30%",
    opacity: 1,
    ease: "Power2.easeIn",
    }, "+=0.1")

    tl.to(".transition__rounded-wrap.top", {
    duration: 0.8,
    height: roundedWrapHeight,
    ease: "none",
    }, "<")

    tl.to(".wrapper", { opacity: 1 }, "<")

    tl.to(".transition__rounded-wrap.top", {
    duration: 0.6,
    height: "1vh",
    opacity: 1,
    ease: "Expo.easeInOut",
    delay: 0.3,
    })

    tl.to(".transition__screen", {
    duration: 1.6,
    bottom: "150%",
    opacity: 1,
    ease: "Expo.easeInOut",
    }, "-=1")

    tl.to(".transition__fade, .transition__container", {
    duration: 1.8,
    opacity: 0,
    ease: "linear",
    }, "-=1")

    if (document.querySelector(".home .line")) {
    tl.from(".home .line", {
        duration: 1.5,
        scaleX: 0,
        ease: "Expo.easeOut",
        transformOrigin: "left top",
    }, "-=1.2")
    }

    tl.set("html", { cursor: "auto" })
    tl.set(".transition__screen", { bottom: "-142%" }, "+=0.6")

    tl.call(() => {
    if (typeof ScrollTrigger !== "undefined") {
        ScrollTrigger.refresh()
    }
    }, null, "+=3")

    return tl
})
</script>

<template>
  <div>
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