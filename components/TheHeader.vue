<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
    <header class="header"  id="header"  data-scroll-section> 
        <div class="header__container" id="up">
            <div class="header__header magnetic" data-strength="20" data-strength-text="10">
                <div class="header__svg-icon top">    
                    <NuxtLink to="/" class="header__logo-btn">
                        <svg class="logo"><use xlink:href="@/assets/images/icons/sprite.svg#logo"></use></svg> 
                        <span class="header__logo-text logo-text">
                            <div class="logo-text__wrap none-transform">
                                <span class="logo-text__aleh">Aleh</span>
                                <span class="logo-text__vait">Vaitulevich</span>
                                <p hidden class="btn__text"></p>
                            </div>
                        </span>
                    </NuxtLink>
                </div>
            </div>
            <nav class="header__menu menu-top-header">
                <ul class="menu-top-header__list">
                    <li class="menu-top-header__item" data-link-update>
                        <NuxtLink to="/work" class="menu-top-header__link magnetic" data-strength="20" data-strength-text="10">{{ t('work') }}<p hidden class="btn__text"></p></NuxtLink>
                    </li>
                    <li class="menu-top-header__item" data-link-update>
                        <NuxtLink to="/about" class="menu-top-header__link magnetic" data-strength="20" data-strength-text="10">{{ t('about') }}<p hidden class="btn__text"></p></NuxtLink>
                    </li>
                    <li class="menu-top-header__item" data-link-update>
                        <a href="#footer" data-barba-prevent="self" class="menu-top-header__link magnetic" data-strength="20" data-strength-text="10">{{ t('contact') }}<p hidden class="btn__text"></p></a>
                    </li>
                    <button type="button" class="menu__icon icon-menu">
                        <span class="icon-menu__divider">•</span>
                        <div class="icon-menu__span-wrap">
                            <span class="icon-menu__menu">{{ t('menu') }}</span>
                            <span class="icon-menu__close">{{ t('close') }}</span>
                        </div>
                    </button>
                </ul>
            </nav>
        </div>
    </header>
</template>

<style  lang="scss">
@use '@/assets/styles/components/the-header';
</style>