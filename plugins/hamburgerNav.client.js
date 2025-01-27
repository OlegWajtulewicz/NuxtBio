import jQuery from 'jquery'
const $ = jQuery

export default defineNuxtPlugin((nuxtApp) => {
  function initHamburgerNav() {
    // Open/close navigation when clicked .btn-hamburger
    $(document).ready(function(){
      $(".hamburger, .icon-menu, .menu__body a").click(function(){
        if ($(".hamburger, .icon-menu").hasClass('active')) {
            $(".hamburger, .icon-menu").removeClass('active');
            $("main").removeClass('nav-active');
            $('html').css('overflow-y', '');
        } else {
            $(".hamburger, .icon-menu").addClass('active');
            $("main").addClass('nav-active');
            $('html').css('overflow-y', 'hidden');
        }
      });
      $('.menu__overlay').click(function(){
        $(".hamburger, .icon-menu").removeClass('active');
        $("main").removeClass('nav-active');
        $('html').css('overflow-y', '');
      });
    });
    $(document).keydown(function(e){
      if(e.keyCode == 27) {
        if ($('main').hasClass('nav-active')) {
            $(".hamburger, .icon-menu").removeClass('active');
            $("main").removeClass('nav-active');
            $('html').css('overflow-y', '');
        } 
      }
    });
  }

  if (process.client) {
    window.addEventListener('load', initHamburgerNav)
  }
})