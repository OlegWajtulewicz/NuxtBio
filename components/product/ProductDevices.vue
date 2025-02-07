<script setup>
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
</script>

<template>
  <div class="product__device-wrap device-wrap-product">
    <div class="device-wrap-product__container">
      <div class="device-wrap-product__item-wrap" data-scroll data-scroll-speed="1">
        <div class="device-wrap-product__item">
          <img :src="devices[0]" class="ibg" :alt="`${title} device 1`">
        </div>
      </div>
      <div class="device-wrap-product__item-wrap">
        <div class="device-wrap-product__item">
          <img :src="devices[1]" class="ibg" :alt="`${title} device 2`">
        </div>
      </div>
      <div class="device-wrap-product__item-wrap" data-scroll data-scroll-speed="-1">
        <div class="device-wrap-product__item">
          <img :src="devices[2]" class="ibg" :alt="`${title} device 3`">
        </div>
      </div>
    </div>
  </div>
</template> 