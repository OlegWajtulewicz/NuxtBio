<script setup>
// Здесь можно добавить необходимую логику
</script>

<template>
    <section class="home" data-scroll-section>
        <div class="home__bg" data-scroll data-scroll-speed="-4.5" ></div>
        <div class="home__container overlay">
            <div class="home__text" data-scroll data-scroll-speed="-3" data-scroll-position="top"> 
                <div class="span-lines animate">
                    <h1 data-value="UI/UX Design" class="home__subtitle text-effect">Creative </h1>
                </div>
                <div class="home__canvas">
                    <div class="home__canvas-wrap" id="myCanvas"></div>
                </div>
                <h1 class="home__subtitle--right" data-scroll data-scroll-speed="-2" data-scroll-position="top"> 
                    <div class="span-lines animate">web </div> 
                </h1>
                <h1 class="home__subtitle--right1" >  
                    <div class="span-lines animate" data-scroll data-scroll-speed="-2" data-scroll-position="top">
                        Development
                    </div>
                </h1>
            </div>
        </div>
        <div class="line line-main">
            <div class="line-shadow"></div>
        </div>
    </section>
</template>

<style lang="scss">
@use '@/assets/styles/components/main-home';
</style> 