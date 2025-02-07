<script setup>
defineProps({
  stack: {
    type: Array,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="product__info info-product">
    <div class="info-product__left">
      <h5 class="info-product__title">stack</h5>
      <ul class="info-product__list">
        <li class="info-product__item" v-for="tech in stack" :key="tech">
          <span class="info-product__divider">•</span>{{ tech }}
        </li>
      </ul>
    </div>
    <div class="info-product__right">
      <h3 class="info-product__title-big">{{ title }}</h3>
      <div class="info-product__text">{{ description }}</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/components/product.scss';


</style> 