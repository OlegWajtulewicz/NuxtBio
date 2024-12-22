<script setup>
useHead({
  title: 'About • Aleh Vaitulevich'
})

definePageMeta({
  layout: 'default'
})
</script>

<template>
  <div class="about">
    <!-- Использование компонента с именованными слотами -->
    <SectionLayout>
      <!-- Контент для слота header -->
      <template #header>
        <h1 class="about__title">About Me</h1>
        <p class="about__subtitle">Creative Developer based in Belarus</p>
      </template>

      <!-- Контент для основного слота -->
      <div class="about__content">
        <p>I'm a creative developer who combines code and design to create unique digital experiences.</p>
      </div>

      <!-- Контент для слота footer -->
      <template #footer>
        <div class="about__links">
          <a href="#" class="about__link">GitHub</a>
          <a href="#" class="about__link">LinkedIn</a>
        </div>
      </template>
    </SectionLayout>

    <!-- Использование того же компонента, но с частичным заполнением слотов -->
    <SectionLayout>
      <template #header>
        <h2>My Skills</h2>
      </template>

      <!-- Здесь используется только основной слот -->
      <div class="skills-grid">
        <div class="skill">Frontend Development</div>
        <div class="skill">Creative Coding</div>
        <div class="skill">UI/UX Design</div>
      </div>
    </SectionLayout>
  </div>
</template>

<style lang="scss" scoped>
.about {
  padding-top: 100px;

  &__title {
    font-size: clamp(2rem, 5vw, 4rem);
    margin-bottom: 1rem;
  }

  &__subtitle {
    font-size: clamp(1rem, 2vw, 1.5rem);
    opacity: 0.7;
  }

  &__content {
    font-size: 1.2rem;
    line-height: 1.6;
  }

  &__links {
    display: flex;
    gap: 20px;
  }

  &__link {
    padding: 10px 20px;
    border: 1px solid currentColor;
    border-radius: 4px;
    transition: all 0.3s ease;

    &:hover {
      background-color: currentColor;
      color: white;
    }
  }
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;

  .skill {
    padding: 20px;
    border: 1px solid currentColor;
    border-radius: 4px;
    text-align: center;
  }
}
</style>
