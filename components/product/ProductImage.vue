<script setup>
defineProps({
  image: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="product__image-wrap" data-scroll-section>
    <div class="product__image" >
      <img 
        :src="image" 
        data-scroll 
        data-scroll-speed="-1" 
        data-scroll-position="top" 
        class="ibg" 
        :alt="title"
        loading="lazy"
        decoding="async"
        fetchpriority="high"
      />
    </div>
  </div>
</template> 