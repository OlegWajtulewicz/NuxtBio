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
      <NuxtImg 
        :src="image"
        :alt="title"
        class="ibg"
        loading="lazy"
        decoding="async"
        fetchpriority="high"
        format="webp"
        fit="cover"
        placeholder
      />
    </div>
  </div>
</template> 
<style scoped lang="scss">
@use '@/assets/styles/components/product.scss';

</style> 