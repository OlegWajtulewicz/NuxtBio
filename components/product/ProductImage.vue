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
  <div class="product__image-wrap">
    <div class="product__image">
      <nuxt-img 
        :src="image" 
        data-scroll 
        data-scroll-speed="-1" 
        data-scroll-position="top" 
        class="ibg" 
        :alt="title"
        format="webp"
        quality="80"
        loading="lazy"
      />
    </div>
  </div>
</template> 