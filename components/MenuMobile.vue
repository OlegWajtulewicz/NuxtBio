<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useNuxtApp } from '#app'
import LanguageSwitcher from './ui/LanguageSwitcher.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const isMenuOpen = ref(false)
const { $locomotiveScroll: scroll } = useNuxtApp()

const handleMenuClick = (e) => {
  if (e.target.closest('.menu__icon.icon-menu') || e.target.closest('.hamburger')) {
    isMenuOpen.value = !isMenuOpen.value
    
    if (isMenuOpen.value) {
      document.documentElement.classList.add("menu-open", "lock")
      scroll?.stop()
    } else {
      document.documentElement.classList.remove("menu-open", "lock")
      scroll?.start()
    }
  } else if (e.target.closest('.menu__body a')) {
    isMenuOpen.value = false
    document.documentElement.classList.remove("menu-open", "lock")
    scroll?.start()
  }
}

const handleOverlayClick = () => {
  isMenuOpen.value = false
  document.documentElement.classList.remove("menu-open", "lock")
  scroll?.start()
}

const handleEscape = (e) => {
  if (e.key === 'Escape' && isMenuOpen.value) {
    isMenuOpen.value = false
    document.documentElement.classList.remove("menu-open", "lock")
    scroll?.start()
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleEscape)
  document.addEventListener('click', handleMenuClick)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleEscape)
  document.removeEventListener('click', handleMenuClick)
})
</script>

<template>
    <div class="menu__overlay" @click="handleOverlayClick"></div>
    <div class="menu__fixed">
        <li class="menu _dynamic_adapt_">
            <button type="button" class="menu__icon icon-menu">
                <span class="icon-menu__divider">•</span>
                <div class="icon-menu__span-wrap">
                    <span class="icon-menu__menu">{{ t('menu') }}</span>
                    <span class="icon-menu__close">{{ t('close') }}</span>
                </div>
            </button>

            <nav class="menu__body">
                <ul class="menu__list">
                    <h5 class="menu__title menu__item">{{ t('navigation') }}</h5>
                    <div class="line menu__item"></div>
                    <li class="menu__item" data-link-update>
                        <NuxtLink to="/" class="menu__link magnetic" data-strength="25" data-strength-text="15">
                            <span class="btn__text">
                                <p class="btn-text-p change">{{ t('home') }}</p>
                            </span> 
                        </NuxtLink>
                    </li>

                    <li class="menu__item" data-link-update>
                        <NuxtLink to="/work" class="menu__link magnetic" data-strength="25" data-strength-text="15">
                            <span class="btn__text">
                                <p class="btn-text-p change">{{ t('work') }}</p>
                            </span> 
                        </NuxtLink>
                    </li>
                    <li class="menu__item" data-link-update>
                        <NuxtLink to="/about" class="menu__link magnetic" data-strength="25" data-strength-text="15">
                            <span class="btn__text">
                                <p class="btn-text-p change">{{ t('about') }}</p>
                            </span> 
                        </NuxtLink>
                    </li>
                    <li class="menu__item" data-link-update>
                        <a 
                            @click.prevent="general.scrollLenis?.scrollTo('#footer')" 
                            href="#footer" 
                            data-barba-prevent="self" 
                            class="menu__link magnetic" 
                            data-strength="25" 
                            data-strength-text="15"
                        >
                            <span class="btn__text">
                                <p class="btn-text-p change">{{ t('contact') }}</p>
                            </span> 
                        </a>
                    </li>
                    <div class="line menu__item"></div>
                    <LanguageSwitcher class="menu__item" />
                </ul>
            </nav>
        </li>

    </div>
    <div class="hamburger-wrap not-active">
        <button type="button" class="hamburger magnetic" data-strength="50" data-strength-text="30">
            <div class="btn__bg"></div>
            <span class="btn__text">
                <p class="btn-text-p change">{{ t('menu') }}</p>
            </span>
            <div class="btn__border"></div>
        </button>
    </div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/components/menu-mobile';
</style>