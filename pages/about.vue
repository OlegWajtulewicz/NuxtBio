<script setup>
import PageHead from '@/components/PageHead.vue'
import MouseCursor from '@/components/MouseCursor.vue'
import { works } from '@/data/works'

useHead({
  title: 'About • Aleh Vaitulevich'
})


definePageMeta({
  layout: 'about-layout'
})
</script>

<template>
  <div>
    <MouseCursor  :projects="works" 
      />
    <PageHead />
    <div>
      
      <div class="about__content">

      </div>
      <div class="about__links">
       
      </div>
    </div>

    <div>
      <h2>My Skills</h2>
      <div class="skills-grid">
        
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.about {
  padding-top: 100px;

  

 

 

 
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;

}
</style>
