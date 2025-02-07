<script setup>
import { useGridViewStore } from '@/stores/gridView'
import PageHead from '@/components/PageHead.vue'
import WorksSwitch from '@/components/WorksSwitch.vue'
import WorksList from '@/components/WorksList.vue'
import WorksGrid from '@/components/WorksGrid.vue'
import MouseCursor from '@/components/MouseCursor.vue'
import { works } from '@/data/works'
import USkeleton from '@/components/ui/USkeleton.vue'


const gridViewStore = useGridViewStore()
const isLoading = ref(true)
const isImagesLoaded = ref(false)

onMounted(() => {
  gridViewStore.loadSavedState()
  // Временно убираем изменение isLoading для стилизации
  
  Promise.all(
    works.map(work => {
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
    isLoading.value = false
    isImagesLoaded.value = true
  })
  
})

useHead({
  title: 'Work • Aleh Vaitulevich'
})

definePageMeta({
  layout: 'work-layout'
})
</script>

<template>
  <div>
    <MouseCursor :projects="works"  />
    <PageHead />
    <WorksSwitch :isLoading="isLoading" />
    
    <div v-if="isLoading" class="works-skeleton">
      <div v-for="i in 6" :key="i" class="works-skeleton__item">
        <USkeleton class="works-skeleton__image" :ui="{ background: 'skeleton--bg' }" />
        <div class="works-skeleton__content">
          <USkeleton class="works-skeleton__title" :ui="{ background: 'skeleton--bg' }" />
          <USkeleton class="works-skeleton__text" :ui="{ background: 'skeleton--bg' }" />
        </div>
      </div>
    </div>

    <template v-else>
      <WorksList 
        v-show="gridViewStore.view === 'rows'" 
        :works="works" 
        class="grid-fade grid-rows-part"
      />
      <WorksGrid 
        v-show="gridViewStore.view === 'columns'" 
        :works="works" 
        class="grid-fade grid-columns-part"
      />
    </template>
  </div>
</template>

<style scoped lang="scss">
@use "sass:math";
@use '@/assets/styles/components/works.scss';

.works-skeleton {
  padding: 2rem;

  &__item {
    display: flex;
    align-items: flex-start;
    gap: 2rem;
    padding: 2rem 0;
    border-bottom: 1px solid var(--color-border);
    
    &:last-child {
      border-bottom: none;
    }
  }

  &__image {
    width: 8em;
    height: 8em;
    border-radius: .5em;
  }

  &__content {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border-radius: .5em;
  }

  &__title {
    height: 2rem;
    width: 90%;
    border-radius: .5em;
  }

  &__text {
    height: 1.5rem;
    width: 60%;
    border-radius: .5em;
  }
}
</style>