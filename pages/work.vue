<script setup>
import { useGridViewStore } from '@/stores/gridView'
import WorkPageHead from '@/components/WorkPageHead.vue'
import WorksSwitch from '@/components/WorksSwitch.vue'
import WorksList from '@/components/WorksList.vue'
import WorksGrid from '@/components/WorksGrid.vue'
import MouseCursor from '@/components/MouseCursor.vue'
import { works } from '@/data/works'

const gridViewStore = useGridViewStore()
const isLoading = ref(true)

onMounted(() => {
  gridViewStore.loadSavedState()
  isLoading.value = false
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
    <MouseCursor :projects="works" />
    <WorkPageHead />
    <WorksSwitch />
    
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
    width: 120px;
    height: 120px;
  }

  &__content {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  &__title {
    height: 2rem;
    width: 60%;
  }

  &__text {
    height: 1.5rem;
    width: 40%;
  }
}
</style>