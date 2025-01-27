<script setup>
import { ref, onMounted } from 'vue'
import { useGridViewStore } from '@/stores/gridView'

const gridViewStore = useGridViewStore()
const isClient = ref(false)
const isImagesLoaded = ref(false)

const props = defineProps({
  works: {
    type: Array,
    required: true
  }
})

onMounted(() => {
  gridViewStore.loadSavedState()
  isClient.value = true
  
  // Загружаем изображения
  Promise.all(
    props.works.map(work => {
      return new Promise((resolve) => {
        if (work.image) {
          const img = new Image()
          img.onload = resolve
          img.src = work.image
        } else {
          resolve()
        }
      })
    })
  ).then(() => {
    isImagesLoaded.value = true
  })
})
</script>

<template>
  <div class="works-grid-wrapper">
    <section class="works-tiles work-tiles" :class="{
      'grid-fade': true,
      'grid-columns-part': true,
      'grid-fade-out': isClient,
      'grid-fade-in': isClient && isImagesLoaded,
      'grid-view': gridViewStore.view === 'rows',
      'list-view': gridViewStore.view === 'columns'
    }">
      <div class="works__color"></div>
      <div class="works-tiles__container">
        <div class="line"></div>
        <ul class="works-tiles__tiles-list work-tiles-wrapper">
          <li v-for="work in works" :key="work.title" class="works-tiles__item">
            <div class="works-tiles__wrapper">
              <a :href="work.link" :class="['works-tiles__link link-works-tiles', work.external ? 'works-link' : '']" :target="work.external ? '_blank' : ''">
                <div class="link-works-tiles__images">
                  <div :class="['item-latest-work__color', work.color]"></div>
                  <img :src="work.image" :alt="work.title" class="link-works-tiles__image ibg">
                </div>
                <h4 class="link-works-tiles__title">{{ work.title }}</h4>
                <div class="link-works-tiles__devider"></div>
                <div class="link-works-tiles__footer">
                  <div class="link-works-tiles__service"><p>{{ work.service }}</p></div>
                  <div class="link-works-tiles__year"><p>{{ work.year }}</p></div>
                </div>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>
  


<style scoped lang="scss">
@use '@/assets/styles/components/works.scss';

.works-grid-wrapper {
  width: 100%;
}
</style>