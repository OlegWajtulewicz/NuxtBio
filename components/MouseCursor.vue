<template>
  <div>
    <div class="mouse-image">
      <div class="mouse-image__bounce overlay">
        <div class="mouse-image__float-wrap">
          <li v-for="project in projects" :key="project.image" class="mouse-image__image-inner visible">
            <div class="item-latest-work__images">
              <div class="item-latest-work__color" :class="project.color"></div>
              <img :src="project.image" :alt="project.title" class="tile-image item-latest-work__image ibg">
            </div>            
          </li>
        </div>
      </div>
    </div>

    <div class="mouse-btn no-select"></div>
    <div class="mouse-span no-select">
      <p>
        <span class="mouse-span__link">Live Site</span>
        <span class="icon-Right"></span>
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  projects: {
    type: Array,
    required: true
  }
})
</script>

<style scoped lang="scss">
@use '@/assets/styles/components/mouse';
</style> 