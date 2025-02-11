<script setup>
import { onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
import TheHeader from '@/components/TheHeader.vue'
import MenuMobile from '@/components/MenuMobile.vue'
import FooterMain from '@/components/FooterMain.vue'
import Cookies from '~/components/Cookies.vue'
import PageTransition from '@/components/PageTransition.vue'

const router = useRouter()

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
  router.beforeEach(onBeforeRouteLeave)
  router.afterEach(onRouteEnter)
})

onBeforeUnmount(() => {
  // Удаляем обработчики при размонтировании компонента
  router.beforeHooks.delete(onBeforeRouteLeave)
  router.afterHooks.delete(onRouteEnter)
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
