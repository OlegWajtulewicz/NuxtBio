
<script setup>
// Здесь можно добавить необходимую логику
</script>

<template>
    <section class="all-works" data-scroll-section>
    <div class="all-works__container">
        <a href="./work.html" class="all-works__btn btn magnetic" data-btn-hover data-strength="70" data-strength-text="40">
            <div class="btn__bg"></div>
            <div class="btn__circle-wrap">
                <div class="btn__circle">
                    <div class="before__100"></div>
                </div>
            </div>
            <span class="btn__text">
                <p class="btn-text-p change">All works</p>
            </span>
            <div class="btn__border"></div>
        </a>
    </div>
    <div class="line">
    </div>
</section>
</template>

<style lang="scss">
@use '@/assets/styles/components/all-works-button';
</style> 