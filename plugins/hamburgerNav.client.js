import jQuery from 'jquery'
const $ = jQuery

export default defineNuxtPlugin(() => {
  function initHamburgerNav() {
    $(document).ready(function(){
      let scrollPosition = 0

      $(".hamburger, .icon-menu, .menu__body a").click(function(e){
        e.preventDefault()
        if ($(".hamburger, .icon-menu").hasClass('active')) {
          $(".hamburger, .icon-menu").removeClass('active')
          $("main").removeClass('nav-active')
          $('html').css('overflow-y', '')
          window.scrollTo(0, scrollPosition)
        } else {
          scrollPosition = window.pageYOffset
          $(".hamburger, .icon-menu").addClass('active')
          $("main").addClass('nav-active')
          $('html').css('overflow-y', 'hidden')
        }
      })

      $('.menu__overlay').click(function(e){
        e.preventDefault()
        $(".hamburger, .icon-menu").removeClass('active')
        $("main").removeClass('nav-active')
        $('html').css('overflow-y', '')
        window.scrollTo(0, scrollPosition)
      })

      $(document).keydown(function(e){
        if(e.keyCode == 27) {
          if ($('main').hasClass('nav-active')) {
            $(".hamburger, .icon-menu").removeClass('active')
            $("main").removeClass('nav-active')
            $('html').css('overflow-y', '')
            window.scrollTo(0, scrollPosition)
          } 
        }
      })
    })
  }

  if (process.client) {
    window.addEventListener('load', initHamburgerNav)
  }
}) 