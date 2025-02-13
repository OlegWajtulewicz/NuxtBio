<script setup>
import PageHead from '@/components/PageHead.vue'
import MouseCursor from '@/components/MouseCursor.vue'
import PrivacyPage from '@/components/PrivacyPage.vue'
import { firstScreenAnimation } from '@/composables/useFirstScreenAnimation'
import { watch, nextTick } from 'vue'
import { transition } from '@/utils/transitionTemplate'
import { useHead } from 'unhead'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

// Создаем пустой массив для курсора
const works = ref([])

definePageMeta({
  layout: 'privacy-layout',
  ...transition
})

useHead(() => ({
  title: t('meta.privacy.title')
}))

watch(() =>
    [general.isTransitionFinish, general.isPreloaderVisible],
    ([transitionFinish, preloaderVisibility]) => {
        if(transitionFinish && !preloaderVisibility) {
          nextTick(() => {
            firstScreenAnimation({parent: '.main'})
          })
        }
    }
)
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
