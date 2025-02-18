import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Copyright start
// © Code by T.RICKS, https://www.tricksdesign.com/
// You have the license to use this code in your projects but not redistribute it to others
// Tutorial: https://www.youtube.com/watch?v=xiAqTu4l3-g&ab_channel=TimothyRicks

export function initTricksWords() {
  // Find all text with .tricks class and break each letter into a span
  var spanWord = document.getElementsByClassName("span-lines");
  for (var i = 0; i < spanWord.length; i++) {
    var wordWrap = spanWord.item(i);
    wordWrap.innerHTML = wordWrap.innerHTML.replace(/(^|<\/?[^>]+>|\s+)([^\s<]+)/g, '$1<span class="span-line"><span class="span-line-inner">$2</span></span>');
  }
}  

export function initSpanLinesAnimation() {
  if (document.querySelector('.span-lines.animate')) {
    document.querySelectorAll('.span-lines.animate').forEach(function(triggerElement) {
      let targetElements = triggerElement.querySelectorAll('.span-line-inner');

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerElement,
          start: "top bottom",
          end: "bottom top",
          toggleActions: "play none none reverse",
        //  markers: true, // Временно включаем маркеры для отладки
        //  onEnter: () => console.log('enter'),
         // onLeave: () => console.log('leave'),
         // onEnterBack: () => console.log('enter back'),
         // onLeaveBack: () => console.log('leave back')
        }
      });

      if (targetElements.length > 0) {
        tl.from(targetElements, {
          y: "100%",
          opacity: 0,
          duration: 1,
          stagger: 0.05,
          ease: "power3.out",
          clearProps: "all"
        });
      }
    });
  }
} 