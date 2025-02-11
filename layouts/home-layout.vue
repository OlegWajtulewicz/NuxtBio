<script setup>
import { onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
import TheHeader from '@/components/TheHeader.vue'
import MenuMobile from '@/components/MenuMobile.vue'
import FooterMain from '@/components/FooterMain.vue'
import Cookies from '~/components/Cookies.vue'
import PageTransition from '@/components/PageTransition.vue'

const router = useRouter()
let beforeHook = null
let afterHook = null

// Функция для обработки начала перехода
function onBeforeRouteLeave(to, from, next) {
  const pageTransition = document.querySelector('.transition__container')?.parentNode?.__vueParentComponent?.ctx

  if (pageTransition?.pageTransitionOut) {
    pageTransition.pageTransitionOut().then(() => {
      next()
    })
  } else {
    next()
  }
}

// Функция для обработки завершения перехода
function onRouteEnter() {
  const pageTransition = document.querySelector('.transition__container')?.parentNode?.__vueParentComponent?.ctx

  if (pageTransition?.pageTransitionIn) {
    pageTransition.pageTransitionIn()
  }
}

onMounted(() => {
  beforeHook = router.beforeEach(onBeforeRouteLeave)
  afterHook = router.afterEach(onRouteEnter)
})

onBeforeUnmount(() => {
  if (beforeHook) beforeHook()
  if (afterHook) afterHook()
})
</script>

<template>
  <div class="wrapper" data-lenis-prevent>
    <PageTransition />
    <TheHeader />
    <MenuMobile />
    <main class="main">
      <slot />
    </main>
    <FooterMain />
    <Cookies />
  </div>
</template>

<style lang="scss">
.wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.main {
  flex: 1 1 auto;
}
</style>
