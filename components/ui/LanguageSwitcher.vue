<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

const { locale: currentLocale, setLocale } = useI18n()
const router = useRouter()

const locales = [
  { code: 'pl', name: 'Polski' },
  { code: 'ru', name: 'Русский' },
  { code: 'en', name: 'English' }
]

const isOpen = ref(false)

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const switchLanguage = async (lang) => {
  try {
    if (lang === currentLocale.value) return // Пропускаем если тот же язык
    
    isOpen.value = false // Сначала закрываем дропдаун
    await setLocale(lang) // Затем меняем язык
    localStorage.setItem('user-locale', lang) // И сохраняем
  } catch (error) {
    console.error('Error switching language:', error)
  }
}

// Закрытие дропдауна при клике вне компонента
const closeDropdown = (e) => {
  const switcher = document.querySelector('.language-switcher')
  if (switcher && !switcher.contains(e.target)) {
    isOpen.value = false
  }
}

onMounted(() => {
  // Восстанавливаем язык при монтировании
  const savedLocale = localStorage.getItem('user-locale')
  if (savedLocale && savedLocale !== currentLocale.value) {
    setLocale(savedLocale)
  }
  document.addEventListener('click', closeDropdown)
})

onUnmounted(() => {
  document.removeEventListener('click', closeDropdown)
})
</script>

<template>
  <div class="language-switcher">
    <button 
      class="language-switcher__button magnetic" 
      data-strength="25" 
      data-strength-text="15"
      @click="toggleDropdown"
    >
      <span class="btn__text">
        <div class="globe-icon">
          <div class="globe-wrapper">
        <!--    <svg class="globe-layer" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M2 12H22" stroke="currentColor" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z" stroke="currentColor" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
             <svg class="globe-layer" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M2 12H22" stroke="currentColor" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z" stroke="currentColor" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <svg class="globe-layer" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M2 12H22" stroke="currentColor" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z" stroke="currentColor" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <svg class="globe-layer" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M2 12H22" stroke="currentColor" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z" stroke="currentColor" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>  --->
            <svg xmlns="http://www.w3.org/2000/svg"  fill="#000000" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,16a87.5,87.5,0,0,1,48,14.28V74L153.83,99.74,122.36,104l-.31-.22L102.38,90.92A16,16,0,0,0,79.87,95.1L58.93,126.4a16,16,0,0,0-2.7,8.81L56,171.44l-3.27,2.15A88,88,0,0,1,128,40ZM62.29,186.47l2.52-1.65A16,16,0,0,0,72,171.53l.21-36.23L93.17,104a3.62,3.62,0,0,0,.32.22l19.67,12.87a15.94,15.94,0,0,0,11.35,2.77L156,115.59a16,16,0,0,0,10-5.41l22.17-25.76A16,16,0,0,0,192,74V67.67A87.87,87.87,0,0,1,211.77,155l-16.14-14.76a16,16,0,0,0-16.93-3l-30.46,12.65a16.08,16.08,0,0,0-9.68,12.45l-2.39,16.19a16,16,0,0,0,11.77,17.81L169.4,202l2.36,2.37A87.88,87.88,0,0,1,62.29,186.47ZM185,195l-4.3-4.31a16,16,0,0,0-7.26-4.18L152,180.85l2.39-16.19L184.84,152,205,170.48A88.43,88.43,0,0,1,185,195Z"></path></svg>
          </div>
        </div>
        <span class="current-lang" :class="{ 'is-open': isOpen }">{{ currentLocale }}</span>
      </span>
    </button>
    <div 
      class="language-switcher__dropdown" 
      :class="{ 'is-open': isOpen }"
    >
      <button 
        v-for="lang in locales" 
        :key="lang.code"
        class="language-option magnetic" 
        :class="{ active: currentLocale === lang.code }"
        @click="switchLanguage(lang.code)"
        data-strength="25" 
        data-strength-text="15"
      >
        <span class="btn__text">
          <span class="lang-name">{{ lang.name }}</span>
        </span>
      </button>
    </div>
  </div>
</template>

<style lang="scss">
.language-switcher {
  position: relative;
  width: fit-content;
  
  &__button {
    display: flex;
    align-items: center;
    gap: toEm(10);
    background: none;
    border: none;
    color: var(--color-text);
    cursor: pointer;
    padding: toEm(10);
    
    .globe-icon {
      width: toEm(34);
      height: toEm(34);
      perspective: 1000px;
      position: relative;
      
      .globe-wrapper {
        width: 100%;
        height: 100%;
        position: relative;
        transform-style: preserve-3d;
      //  animation: rotate3d 15s linear infinite;
        will-change: transform;
        
        &:hover {
          animation-play-state: paused;
        }
      }
      
      .globe-layer {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform-style: preserve-3d;
        backface-visibility: visible;
        transition: opacity 0.3s ease;
        
        &:nth-child(1) {
          transform: translate(-50%, -50%) rotateY(0deg);
          opacity: 1;
        }
        
        &:nth-child(2) {
          transform: translate(-50%, -50%) rotateY(45deg);
          opacity: 1;
        }

        &:nth-child(3) {
          transform: translate(-50%, -50%) rotateY(90deg);
          opacity: 1;
        }
        
        &:nth-child(4) {
          transform: translate(-50%, -50%) rotateY(135deg);
          opacity: 1;
        }
      }
    }
    
    .current-lang {
      text-transform: uppercase;
      font-size: toEm(16);
      font-weight: 600;
      position: relative;
      
      &::after {
        content: '';
        position: absolute;
        right: -1em;
        top: 30%;
       // transform: translateY(-50%);
        width: toEm(8);
        height: toEm(8);
        border: solid var(--color-text);
        border-width: 0 toEm(2) toEm(2) 0;
        transform: translateY(-50%) rotate(45deg);
        transition: transform 0.3s ease;
      }
      
      &.is-open::after {
        transform: translateY(0%) rotate(-135deg);
      }
    }
    
    .btn__text {
      gap: toEm(10);
    }
  }
  
  &__dropdown {
    position: absolute;
    top: calc(100% + #{toEm(5)});
    left: 0;
    background: var(--color-background);
    border-radius: var(--border-radius);
    padding: toEm(10);
    opacity: 0;
    visibility: hidden;
    transform: translateY(toEm(-10));
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    display: flex;
    flex-direction: column;
    gap: toEm(5);
    min-width: toEm(120);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(var(--color-text-rgb), 0.1);
    
    &.is-open {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
      background-color: rgba(252, 240, 255, 0.411);
    }
    
    .language-option {
      background: none;
      border: none;
      color: var(--color-text);
      cursor: pointer;
      padding: toEm(8) toEm(15);
      text-align: left;
      transition: all 0.3s ease;
      border-radius: toEm(4);
      width: 100%;
      
      &:hover {
        background-color: rgba(var(--color-text-rgb), 0.1);
      }
      
      &.active {
        background-color: rgba(var(--color-text-rgb), 0.15);
      }
      
      .lang-name {
        font-size: toEm(14);
      }
    }
  }
}

@keyframes rotate3d {
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(360deg);
  }
}
</style> 