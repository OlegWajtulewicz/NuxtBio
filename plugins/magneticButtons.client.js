import { gsap, Power3, Power4, Elastic } from 'gsap'

export default defineNuxtPlugin((nuxtApp) => {
  function initMagneticButtons() {
    // Magnetic Buttons
    const magnets = document.querySelectorAll('.magnetic')
    
    // START : If screen is bigger as 540 px do magnetic
    if (window.innerWidth > 540) {
      // Mouse Reset
      magnets.forEach((magnet) => {
        magnet.addEventListener('mousemove', moveMagnet)
      //  magnet.parentNode.classList.remove('not-active')
        
        magnet.addEventListener('mouseleave', function(event) {
          gsap.to(event.currentTarget, {
            duration: 1.5,
            x: 0,
            y: 0,
            ease: Elastic.easeOut,
            clearProps: "all",
          })
      
          const btnText = magnet.querySelector('.btn__text')
          if (btnText) {
            gsap.to(btnText, {
              duration: 1.5,
              x: 0,
              y: 0,
              ease: Elastic.easeOut,
              clearProps: "all",
            })
          }
        })
      })

      // Mouse move
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
        
        gsap.to(magnetButton.querySelector(".btn__text"), {
          duration: 1.5,
          x: (((event.clientX - bounding.left) / magnetButton.offsetWidth) - 0.5) * magnetsStrengthText,
          y: (((event.clientY - bounding.top) / magnetButton.offsetHeight) - 0.5) * magnetsStrengthText,
          rotate: "0.001deg",
          ease: Power4.easeOut
        })
      }
    }

    // Button hover effects
    document.querySelectorAll('.btn.magnetic, .hamburger.magnetic').forEach(function(btn) {
      btn.addEventListener('mouseenter', function() {
        const btnTextInner = btn.querySelector('.btn-text-p.change')
        if (btnTextInner) {
          gsap.to(btnTextInner, {
            duration: 0.3,
            startAt: { color: "#0c1725" },
            color: "#000000",
            ease: Power3.easeIn,
          })
        }
        btn.parentNode.classList.add('not-active')
      })

      btn.addEventListener('mouseleave', function() {
        const btnTextInner = btn.querySelector('.btn-text-p.change')
        if (btnTextInner) {
          gsap.to(btnTextInner, {
            duration: 0.3,
            color: btn.classList.contains('footer__mail') ? "#000000" : "#0c1725",
            ease: Power3.easeOut,
            delay: 0.1,
          })
        }
        btn.parentNode.classList.add('not-active')
      })
    })

    // Button hover animation
    document.querySelectorAll('[data-btn-hover]').forEach(button => {
      button.addEventListener('mouseenter', handleButtonHover)
      button.addEventListener('mouseleave', handleButtonHover)
    })

    function handleButtonHover(event) {
      const button = event.currentTarget
      const circle = button.querySelector('.btn__circle')
      if (!circle) return

      const buttonRect = button.getBoundingClientRect()
      const buttonWidth = buttonRect.width
      const buttonHeight = buttonRect.height

      if (event.type === 'mouseenter') {
        const mouseX = event.clientX - buttonRect.left
        const mouseY = event.clientY - buttonRect.top

        gsap.set(circle, {
          left: mouseX + 'px',
          top: mouseY + 'px',
          width: '0%',
          height: '0%'
        })

        gsap.to(circle, {
          width: '350%',
          height: '350%',
          x: '-50%',
          y: '-50%',
          duration: 0.8,
          ease: "power3.out"
        })
      } else {
        gsap.to(circle, {
          width: '0%',
          height: '0%',
          duration: 0.8,
          ease: "power3.out"
        })
      }
    }
  }

  if (process.client) {
    // При первой загрузке
    window.addEventListener('load', initMagneticButtons)
    
    // При переходах между страницами
    nuxtApp.hook('page:finish', () => {
      initMagneticButtons()
    })
  }

  // Инициализация при монтировании
  if (process.client) {
    window.addEventListener('load', initMagneticButtons)
  }
}) 