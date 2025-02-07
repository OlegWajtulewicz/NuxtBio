<script setup>
defineProps({
  works: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <section class="works-items work-grid small-work-grid grid-fade grid-rows-part">
    <div class="works__color"></div>
    <div class="works-items__container color-container">
      <ul class="works-items__items-list work-wrapper">
        <li v-for="work in works" :key="work.title" class="works-items__item visible">
          <div class="line"></div>
          <NuxtLink 
            :to="`/work/${work.slug}`" 
            :class="['works-items__link link-works-items']"
          >
            <h4 class="link-works-items__title">{{ work.title }}</h4>
            <div class="link-works-items__service"><p>{{ work.service }}</p></div>
            <div class="link-works-items__year"><p>{{ work.year }}</p></div>
          </NuxtLink>
        </li>
        <div class="line"></div>
      </ul>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '@/assets/styles/components/works.scss';
</style>