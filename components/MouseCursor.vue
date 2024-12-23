<template>
  <div class="mouse-image" :class="{ visible: isVisible }">
    <div class="mouse-image__bounce overlay">
      <div class="mouse-image__float-wrap">
        <li v-for="project in projects" :key="project.image" class="mouse-image__image-inner visible">
          <div class="item-latest-work__images" v-if="isClient" v-lazy>
            <div class="item-latest-work__color" :class="project.color"></div>
            <img :data-src="project.image" :alt="project.alt" class="tile-image item-latest-work__image ibg">
          </div>            
        </li>
      </div>
    </div>
  </div>

  <div class="mouse-btn no-select" :class="{ visible: isVisible }"></div>
  <div class="mouse-span no-select" :class="{ visible: isVisible }">
    <p class="icon-Right"></p>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

// Определяем пропсы с дефолтными значениями
const props = defineProps({
  projects: {
    type: Array,
    default: () => [
      {
        image: '/img/works/Julia.png',
        color: 'orange',
        alt: 'Julia Maisa'
      },
      {
        image: '/img/works/bwg.png',
        color: 'blue1',
        alt: 'Groove School'
      },
      {
        image: '/img/works/pizza-next.png',
        color: 'yellow',
        alt: 'Pizza Next'
      }
    ]
  }
})

const isClient = ref(false)
const isVisible = ref(false)

onMounted(() => {
  isClient.value = true
  // Небольшая задержка для плавного появления
  setTimeout(() => {
    isVisible.value = true
  }, 100)
})

onBeforeUnmount(() => {
  // Сначала делаем элементы невидимыми
  isVisible.value = false
  
  // Ждем окончания анимации перед полным удалением
  return new Promise(resolve => {
    setTimeout(resolve, 300) // 300ms - это время нашей transition
  })
})
</script>

<style lang="scss">
.mouse-image {
    z-index: 25;
    position: fixed;
    pointer-events: none;
    transform: translate(-50%, -50%);
    display: block;
    left: 0%;
    will-change: transform, width;
    width: 0px;
    height: 0px;
    border-radius: 100%;
    
    &::before {
        display: block;
        content: "";
        padding-top: 100%; 
    }
    
    &.active {
        border-radius: 0;
        width: clamp(10em, 27.5vw, 25em);
        height: auto;
        transition: width .4s cubic-bezier(0.34, 1, 0.64, 1);
    }
    
    &__bounce {
        overflow: hidden;
        transform: scale(1) rotate(.001deg);
        transition: all .5s cubic-bezier(0.65, 0, 0.35, 1);
        will-change: transform;
        
        &.active {
            transform: scale(1) rotate(.001deg);
        }
    }
    
    &__float-wrap {
        width: 100%;
        position: absolute;
        left: 0;
        top: 0;
        display: block;
        will-change: transform;
    }
    
    &__image-inner {
        position: relative;
        width: 100%;
        display: block;
        overflow: hidden;
        
        &::before {
            display: block;
            content: "";
            padding-top: 100%;
        }
        
        &.visible {
            width: 100%;
        }
        
        .item-latest-work__image {
            top: 47%;
        }
        
        .item-latest-work__color {
            border-radius: .5em;
            overflow: hidden;
        }
        
        .item-latest-work__images {
            opacity: 1;
        }
    }
}

.mouse-btn,
.mouse-span {
    width: 0px;
    height: 0px;
    border-radius: 50%;
    border: 0;
    background-color: var(--primary);
    position: fixed;
    z-index: 26;
    pointer-events: none;
    transform: translate(-50%, -70%);
    overflow: hidden;
    display: block;
    transition: width .4s cubic-bezier(0.36, 0, 0.66, 0), height .4s cubic-bezier(0.36, 0, 0.66, 0);
    left: 0%;
    top: 0%;
    will-change: transform, width, height;
    
    &.active {
        width: clamp(2.75em, 5.5vw, 5em);
        height: clamp(2.75em, 5.5vw, 5em);
        transition: width .4s cubic-bezier(0.34, 1, 0.64, 1), height .4s cubic-bezier(0.34, 1, 0.64, 1);
    }
    
    &.active-big {
        width: calc(clamp(2.75em, 5.5vw, 5em) * 1.43);
        height: calc(clamp(2.75em, 5.5vw, 5em) * 1.43);
        transition: width .4s cubic-bezier(0.34, 1, 0.64, 1), height .4s cubic-bezier(0.34, 1, 0.64, 1);
    }
}

.mouse-span {
    background: transparent;
    color: var(--color-white);
    display: flex;
    justify-content: center;
    align-items: center;
    left: 0%;
    top: 0%;
    
    p {
        margin: 0;
        display: flex;
        flex-direction: row-reverse;
        gap: 3px;
        font-size: 0;
        will-change: font-size;
        
        &::before {
            transition: font-size .4s cubic-bezier(0.36, 0, 0.66, 0);
            transform: rotate(-45deg);
            font-size: 0;
            color: var(--color-white);
        }
    }
    
    &.visible p {
        font-size: 18px;
        
        &::before {
            font-size: 24px;
            transition: font-size .4s cubic-bezier(0.34, 1, 0.64, 1);
        }
    }
    
    &.active-big {
        .icon-Right {
            display: none;
        }
    }
}

.overlay {
    position: absolute;
    top: -10%;
    left: 0;
    height: 100%;
    width: 100%;
}

@media screen and (max-width: 768px) {
    .mouse-image,
    .mouse-btn,
    .mouse-span {
        display: none;
    }
}
</style> 