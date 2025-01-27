<script setup>
import { useGridViewStore } from '@/stores/gridView'
import WorkPageHead from '@/components/WorkPageHead.vue'
import WorksSwitch from '@/components/WorksSwitch.vue'
import WorksList from '@/components/WorksList.vue'
import WorksGrid from '@/components/WorksGrid.vue'
import { useWorks } from '@/composables/useWorks'

const gridViewStore = useGridViewStore()
const { works } = useWorks()

useHead({
  title: 'Work • Aleh Vaitulevich'
})

definePageMeta({
  layout: 'work-layout'
})
</script>

<template>
  <div>
    <WorkPageHead />
    <WorksSwitch />
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
  </div>
</template>

<style scoped lang="scss">
@use "sass:math";
@use '@/assets/styles/components/works.scss';
</style>