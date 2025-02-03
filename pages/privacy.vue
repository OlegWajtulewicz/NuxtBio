<script setup>
import PageHead from '@/components/PageHead.vue'
import MouseCursor from '@/components/MouseCursor.vue'
import PrivacyPage from '@/components/PrivacyPage.vue'
// Создаем пустой массив для курсора
const works = ref([])

useHead({
  title: 'Privacy Policy • Aleh Vaitulevich'
})

definePageMeta({
  layout: 'privacy-layout'
})
</script>

<template>
  <div>
    <MouseCursor :projects="works" />
    <PageHead />
    <div>
      <PrivacyPage /> 
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
