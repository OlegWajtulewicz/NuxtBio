<script setup>
import PageHead from '@/components/PageHead.vue'
import MouseCursor from '@/components/MouseCursor.vue'
import BioAbout from '@/components/BioAbout.vue'

// Создаем пустой массив для курсора
const works = ref([])

useHead({
  title: 'About • Aleh Vaitulevich'
})

definePageMeta({
  layout: 'about-layout'
})
</script>

<template>
  <div>
    <MouseCursor :projects="works" />
    <PageHead />
    <div>
      <BioAbout />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.about {
  padding-top: toRem(100);

}


</style>
