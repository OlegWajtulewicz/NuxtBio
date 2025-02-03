<script setup>
import PageHead from '@/components/PageHead.vue'
import MouseCursor from '@/components/MouseCursor.vue'
import CookiesPage from '@/components/CookiesPage.vue'
// Создаем пустой массив для курсора
const works = ref([])

useHead({
  title: 'Cookie • Aleh Vaitulevich'
})

definePageMeta({
  layout: 'cookie-layout'
})
</script>

<template>
  <div>
    <MouseCursor :projects="works" />
    <PageHead />
    <div>
      <CookiesPage /> 
    </div>
  </div>
</template>

<style lang="scss" scoped>


</style>