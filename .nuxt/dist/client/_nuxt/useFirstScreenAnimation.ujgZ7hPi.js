const r=({parent:n="body"}={})=>{const o=document.querySelector(n),e=gsap.timeline(),t=o.querySelectorAll(".text-effect");return t.length&&e.from(t,{opacity:1,clearProps:"all"}),e};export{r as f};
