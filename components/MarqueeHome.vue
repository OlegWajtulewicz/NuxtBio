<template>
  <section class="section section-home-intro-marquee" data-scroll-section>
    <div class="container full">
       <div class="marquee-group">
          <div class="marquee" 
               data-marquee-target 
               data-marquee-direction="left" 
               data-marquee-status="inverted" 
               data-marquee-speed="20" 
               data-marquee-scroll-speed="10">
             <div class="marquee-scroll">
                <div class="marquee-content">
                    <span class="word">Aleh Vaitulevich</span><span class="divider">•</span>
                    <span class="word">Freelance Developer</span><span class="divider">•</span>
                    <span class="word">Aleh Vaitulevich</span><span class="divider">•</span>
                    <span class="word">Freelance Developer</span><span class="divider">•</span>
                    <span class="word">Aleh Vaitulevich</span><span class="divider">•</span>
                    <span class="word">Freelance Developer</span><span class="divider">•</span>
                </div>
                <div class="marquee-content">
                  <span class="word">Aleh Vaitulevich</span><span class="divider">•</span>
                  <span class="word">Freelance Developer</span><span class="divider">•</span>
                  <span class="word">Aleh Vaitulevich</span><span class="divider">•</span>
                  <span class="word">Freelance Developer</span><span class="divider">•</span>
                  <span class="word">Aleh Vaitulevich</span><span class="divider">•</span>
                  <span class="word">Freelance Developer</span><span class="divider">•</span>
                </div>
             </div>
          </div>
       </div>
    </div>
  </section>
</template>

<script>
import $ from 'jquery'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function initMarqueeScrollV2() {
  $('[data-marquee-target]').each(function(){
     let marquee = $(this);
     
     let marqueeItemsWidth = marquee.find(".marquee-content").width();
     let marqueeSpeed = marquee.attr('data-marquee-speed') * (marqueeItemsWidth / $(window).width());

     // Speed up Marquee on Tablet & Mobile
     if($(window).width() <= 540){
        marqueeSpeed = marqueeSpeed * 0.25;
     } else if($(window).width() <= 1024){
        marqueeSpeed = marqueeSpeed * 0.5;
     }

     let marqueeDirection = 1;
     let marqueeContent = gsap.to(marquee.find('.marquee-content'), {xPercent: -100, repeat: -1, duration: marqueeSpeed, ease: "linear", paused: true}).totalProgress(0.5);
  
     gsap.set(marquee.find(".marquee-content"), {xPercent: 50});

     ScrollTrigger.create({
        trigger: marquee,
        start: "top bottom",
        end: "bottom top",
        onUpdate(self) {
           if (self.direction !== marqueeDirection) {
              marqueeDirection *= -1;
              if(marquee.attr('data-marquee-direction') == 'right') {
                 gsap.to([marqueeContent], { timeScale: (marqueeDirection * -1), overwrite: true });
              } else {
                 gsap.to([marqueeContent], { timeScale: marqueeDirection, overwrite: true });
              }
           }
           self.direction === -1 ? marquee.attr('data-marquee-status', 'normal') : marquee.attr('data-marquee-status', 'inverted');
        },
        onEnter: () => marqueeContent.play(),
        onEnterBack: () => marqueeContent.play(),
        onLeave: () => marqueeContent.pause(),
        onLeaveBack: () => marqueeContent.pause()
     });

     // Extra speed on scroll
     marquee.each(function () {
        let triggerElement = $(this);
        let targetElement = $(this).find('.marquee-scroll');
        let marqueeScrollSpeed = $(this).attr('data-marquee-scroll-speed');
     
        let tl = gsap.timeline({
           scrollTrigger: {
              trigger: $(this),
              start: "0% 100%",
              end: "100% 0%",
              scrub: 0
           }
        });   

        if(triggerElement.attr('data-marquee-direction') == 'left') {         
           tl.fromTo(targetElement, {
              x: marqueeScrollSpeed + "vw",
           }, {
              x: marqueeScrollSpeed * -1 + "vw",
              ease: "none"
           });
        }

        if(triggerElement.attr('data-marquee-direction') == 'right') {         
           tl.fromTo(targetElement, {
              x: marqueeScrollSpeed * -1 + "vw",
           }, {
              x: marqueeScrollSpeed + "vw",
              ease: "none"
           });
        }
     });
  });
}

export default {
  mounted() {
    initMarqueeScrollV2();
  }
}
</script>

<style scoped lang="scss">
@use '@/assets/styles/components/marquee-home';
</style>



