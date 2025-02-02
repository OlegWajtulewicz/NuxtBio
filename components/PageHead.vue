<script setup>
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const { t } = useI18n()
const route = useRoute()

// Получаем название страницы из маршрута
const pageTitle = computed(() => {
    const path = route.path
    // Убираем слэши и получаем последний сегмент пути
    const pageName = path.split('/').filter(Boolean).pop() || 'home'
    // Получаем перевод для заголовка
    return t(`pages.${pageName}.title`)
})
</script>


<template>
    <section class="home page-head" data-scroll-section>
        <div class="home__container">
            <div class="home__text " data-scroll data-scroll-speed="-7.5" data-scroll-position="top"> 
                <div class="span-lines animate">
                    <h1 class="home__subtitle text-effect">{{ pageTitle }}</h1>
                </div>
            </div>
        </div>
        <div class="line">  
        </div>
    </section>
</template>

<style lang="scss">
@use '@/assets/styles/components/work-page-head';
</style> 