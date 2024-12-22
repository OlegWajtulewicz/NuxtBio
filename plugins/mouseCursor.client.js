import { gsap, Power2 } from 'gsap'
import jQuery from 'jquery'
const $ = jQuery

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('app:mounted', () => {
    initStickyCursorWithDelay()
  })

  function initStickyCursorWithDelay() {
    // Sticky Cursor with delay
    // https://greensock.com/forums/topic/21161-animated-mouse-cursor/
    const cursorImage = $(".mouse-image")
    const cursorBtn = $(".mouse-btn")
    const cursorSpan = $(".mouse-span")

    let posXImage = 0
    let posYImage = 0
    let posXBtn = 0
    let posYBtn = 0
    let posXSpan = 0
    let posYSpan = 0
    let mouseX = 0
    let mouseY = 0

    if($(".mouse-image, .mouse-btn, .mouse-span").length) {
      gsap.to({}, 0.0083333333, {
        repeat: -1,
        onRepeat: function() {
          if($(".mouse-image").length) {
            posXImage += (mouseX - posXImage) / 12
            posYImage += (mouseY - posYImage) / 12
            gsap.set(cursorImage, {
              css: {
                left: posXImage,
                top: posYImage,
              }
            })
          }
          if($(".mouse-btn").length) {
            posXBtn += (mouseX - posXBtn) / 7
            posYBtn += (mouseY - posYBtn) / 7
            gsap.set(cursorBtn, {
              css: {
                left: posXBtn,
                top: posYBtn
              }
            })
          }
          if($(".mouse-span").length) {
            posXSpan += (mouseX - posXSpan) / 6
            posYSpan += (mouseY - posYSpan) / 6   
            gsap.set(cursorSpan, {
              css: {
                left: posXSpan,
                top: posYSpan
              }
            })
          }
        }
      })
    }

    $(document).on("mousemove", function(e) {
      mouseX = e.clientX
      mouseY = e.clientY
    })

    $('.work-wrapper a').on('mouseenter', function() {
      $('.mouse-image, .mouse-btn, .mouse-span, .mouse-pos-list-span-big').addClass('active')
    })
    $('.work-wrapper a').on('mouseleave', function() {
      $('.mouse-image, .mouse-btn, .mouse-span, .mouse-pos-list-span-big').removeClass('active')
    })

    $('.work-tiles-wrapper a').on('mouseenter', function() {
      $('.mouse-btn, .mouse-span, .mouse-pos-list-span-big').addClass('active')
    })
    $('.work-tiles-wrapper a').on('mouseleave', function() {
      $('.mouse-btn, .mouse-span, .mouse-pos-list-span-big').removeClass('active')
    })

    $('.works-link, .next-case').on('mouseenter', function() {
      $('.mouse-btn, .mouse-span').addClass('active-big')
    })
    $('.works-link, .next-case').on('mouseleave', function() {
      $('.mouse-btn, .mouse-span').removeClass('active-big')
    })

    $('main').on('mousedown', function() {
      $(".mouse-btn, .mouse-span").addClass('pressed')
    })
    $('main').on('mouseup', function() {
      $(".mouse-btn, .mouse-span").removeClass('pressed')
    })

    $('.work-wrapper li.visible').on('mouseenter', function() {
      var $elements = $(".work-wrapper li.visible")
      var index = $elements.index($(this))
      var count = $(".mouse-image li.visible").length

      if($(".mouse-image__float-wrap").length) {
        gsap.to($(".mouse-image__float-wrap"), {
          y: (index*100)/(count*-1) + "%",
          duration: .6,
          ease: Power2.easeInOut
        })
      }

      $(".mouse-image.active .mouse-image__bounce").addClass("active").delay(400).queue(function(next){
        $(this).removeClass("active")
        next()
      })
    })

    $('.archive-work-grid li').on('mouseenter', function() {
      $(".mouse-btn").addClass("hover").delay(100).queue(function(next){
        $(this).removeClass("hover")
        next()
      })
    })
  }
}) 