<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'
import { Elastic, Power4, Power3 } from 'gsap'

defineProps({
  link: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    required: true
  }
})

onMounted(() => {
  if (process.client) {
    const magnets = document.querySelectorAll('.magnetic')
    magnets.forEach((magnet) => {
      magnet.addEventListener('mousemove', moveMagnet)
      magnet.addEventListener('mouseleave', function(event) {
        gsap.to(event.currentTarget, {
          duration: 1.5,
          x: 0,
          y: 0,
          ease: Elastic.easeOut,
          clearProps: "all"
        })

        const btnText = event.currentTarget.querySelector('.btn__text')
        if (btnText) {
          gsap.to(btnText, {
            duration: 1.5,
            x: 0,
            y: 0,
            ease: Elastic.easeOut,
            clearProps: "all"
          })
        }
      })
    })

    // Добавляем обработчики для hover эффекта кнопки
    document.querySelectorAll('[data-btn-hover]').forEach(button => {
      button.addEventListener('mouseenter', handleButtonHover)
      button.addEventListener('mouseleave', handleButtonHover)
    })
  }
})

function handleButtonHover(event) {
  const button = event.currentTarget
  const circle = button.querySelector('.btn__circle')
  const btnTextInner = button.querySelector('.btn-text-p.change')
  
  if (!circle) return

  const buttonRect = button.getBoundingClientRect()
  const mouseX = event.clientX - buttonRect.left
  const mouseY = event.clientY - buttonRect.top

  if (event.type === 'mouseenter') {
    gsap.set(circle, {
      left: mouseX + 'px',
      top: mouseY + 'px',
      width: '0%',
      height: '0%'
    })

    gsap.to(circle, {
      width: '250%',
      height: '250%',
      x: '-50%',
      y: '-50%',
      duration: 0.4,
      ease: Power3.easeOut
    })

    if (btnTextInner) {
      gsap.to(btnTextInner, {
        duration: 0.2,
        color: "#000000",
        ease: Power3.easeOut
      })
    }
  } else {
    gsap.to(circle, {
      width: '0%',
      height: '0%',
      duration: 0.3,
      ease: Power3.easeIn
    })

    if (btnTextInner) {
      gsap.to(btnTextInner, {
        duration: 0.2,
        color: button.classList.contains('footer__mail') ? "#000000" : "#0c1725",
        ease: Power3.easeIn
      })
    }
  }
}

function moveMagnet(event) {
  const magnetButton = event.currentTarget
  const bounding = magnetButton.getBoundingClientRect()
  const magnetsStrength = magnetButton.getAttribute("data-strength")
  const magnetsStrengthText = magnetButton.getAttribute("data-strength-text")
  
  gsap.to(magnetButton, {
    duration: 1.5,
    x: (((event.clientX - bounding.left) / magnetButton.offsetWidth) - 0.5) * magnetsStrength,
    y: (((event.clientY - bounding.top) / magnetButton.offsetHeight) - 0.5) * magnetsStrength,
    rotate: "0.001deg",
    ease: Power4.easeOut
  })
  
  const btnText = magnetButton.querySelector(".btn__text")
  if (btnText) {
    gsap.to(btnText, {
      duration: 1.5,
      x: (((event.clientX - bounding.left) / magnetButton.offsetWidth) - 0.5) * magnetsStrengthText,
      y: (((event.clientY - bounding.top) / magnetButton.offsetHeight) - 0.5) * magnetsStrengthText,
      rotate: "0.001deg",
      ease: Power4.easeOut
    })
  }
}
</script>

<template>
  <div class="product__header">
    <h5 class="product__title">{{ subtitle }}</h5>
    <a :href="link" target="_blank" class="product__button product-header-pr">
      <div class="product__btn footer__mail btn magnetic" data-btn-hover data-strength="25" data-strength-text="15">
        <div class="btn__bg"></div>
        <div class="btn__circle-wrap">
          <div class="btn__circle">
            <div class="before__100"></div>
          </div>
        </div>
        <span class="btn__text">
          <p class="btn-text-p change">Live Site</p>
        </span>
        <div class="btn__border"></div>
      </div>
    </a>
  </div>
</template> 

<style scoped lang="scss">
@use '~/assets/styles/components/product.scss';
</style>