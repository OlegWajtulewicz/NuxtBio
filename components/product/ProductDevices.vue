<script setup>
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

defineProps({
  devices: {
    type: Array,
    required: true
  },
  title: {
    type: String,
    required: true
  }
})

// onMounted(() => {
//   gsap.utils.toArray('[data-scroll]').forEach(element => {
//     const speed = element.dataset.scrollSpeed || 0;
//     console.log(speed)
//     gsap.to(element, {
//       y: () => speed * 100,
//       ease: "none",
     // scrollTrigger: {
     //   trigger: element,
     //  start: "top bottom",
     //  end: "bottom top",
     //  scrub: 1,
     //  markers: true
     // }
//     });
//   });
// })
</script>

<template>
  <div class="product__device-wrap device-wrap-product">
    <div class="device-wrap-product__container">
      <div class="device-wrap-product__item-wrap" data-scroll data-scroll-speed="-1">
        <div class="device-wrap-product__item">
          <img :src="devices[0]" class="ibg" :alt="`${title} device 1`">
        </div>
      </div>
      <div class="device-wrap-product__item-wrap">
        <div class="device-wrap-product__item">
          <img :src="devices[1]" class="ibg" :alt="`${title} device 2`">
        </div>
      </div>
      <div class="device-wrap-product__item-wrap" data-scroll data-scroll-speed="1">
        <div class="device-wrap-product__item">
          <img :src="devices[2]" class="ibg" :alt="`${title} device 3`">
        </div>
      </div>
    </div>
  </div>
</template> 