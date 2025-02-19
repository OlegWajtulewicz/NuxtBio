import{s as C,_ as w,a as q,M as T,C as P}from"./ThePreloader.BTg2CK7-.js";import{_ as E}from"./nuxt-link.JJt9uy5M.js";import{_ as V,a6 as $,f as I,Z as M,K as m,l as N,S as B,k as L,p as j,o as _,c as u,a as t,i as a,b as s,w as d,t as f,y as A,x as D,e as F,d as g,h as W,n as R,j as v,O as z}from"./entry.C9Qtx27F.js";import{p as K}from"./product.B9Njdixb.js";import{f as O}from"./useFirstScreenAnimation.ujgZ7hPi.js";const U={id:"footer",class:"footer footer-product","data-scroll-section":""},Z={class:"footer-product__container"},G={key:0,class:"footer__wrapper footer-product__wrapper-top"},H={class:"footer-product__title"},J={class:"footer-product__image-wrap","data-scroll":"","data-scroll-speed":"3","data-scroll-position":"bottom"},Q={class:"footer-product__image-body"},X=["src","alt"],Y={class:"footer-product__wrapper-bottom"},tt={class:"btn__text"},ot={class:"btn-text-p change"},et={class:"footer__copyright"},st={class:"footer__cookie magnetic","data-strength":"20","data-strength-text":"10"},at={class:"magnetic footer__privacy","data-strength":"20","data-strength-text":"10"},rt={__name:"FooterWork",setup(b){const l=$(),{t:i}=I(),h=M(),y=m(()=>h.params.slug),r=m(()=>{const e=K[y.value];return(e==null?void 0:e.nextProject)||null});N.registerPlugin(B);let c;function k(){const e=document.querySelector(".time-millisec");if(!e)return;const n=new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",second:"2-digit",fractionalSecondDigits:"1"});e.innerText=n}function x(){document.querySelectorAll(".footer-product__link-item").forEach(e=>{e.addEventListener("mouseenter",()=>{const o=e.querySelector(".footer-product__image-color");if(!o)return;const p=window.getComputedStyle(o).backgroundColor.replace("rgb","rgba").replace(")",", 0.05)");document.querySelector(".footer").style.setProperty("--footer-before-color",p),document.querySelector(".footer").style.backgroundColor=p,o.style.opacity="0"}),e.addEventListener("mouseleave",()=>{document.querySelector(".footer").style.setProperty("--footer-before-color","transparent"),document.querySelector(".footer").style.backgroundColor="";const o=e.querySelector(".footer-product__image-color");o&&(o.style.opacity="0.05")})})}L(()=>{document.querySelector(".time-millisec")&&(c=C(k,100)),x()}),j(()=>{c&&clearInterval(c)});function S(){l.back()}return(e,o)=>{const n=E;return _(),u("div",null,[t("footer",U,[t("div",Z,[a(r)?(_(),u("div",G,[s(n,{to:`/work/${a(r).slug}`,class:"footer-product__link-item next-case"},{default:d(()=>[t("div",H,[t("h2",null,f(a(r).title),1)]),t("div",J,[t("div",Q,[t("div",{class:A(["footer-product__image-color",a(r).color])},null,2),t("img",{src:a(r).image,class:"footer-product__image ibg",alt:a(r).title},null,8,X)])])]),_:1},8,["to"])])):D("",!0),t("div",Y,[o[3]||(o[3]=t("div",{class:"footer__line"},null,-1)),t("button",{onClick:S,class:"footer__mail btn magnetic","data-btn-hover":"","data-strength":"70","data-strength-text":"40"},[o[0]||(o[0]=t("div",{class:"btn__bg"},null,-1)),o[1]||(o[1]=t("div",{class:"btn__circle-wrap"},[t("div",{class:"btn__circle"},[t("div",{class:"before__100"})])],-1)),t("span",tt,[t("p",ot,f(a(i)("back")),1)]),o[2]||(o[2]=t("div",{class:"btn__border"},null,-1))])]),t("div",et,[o[6]||(o[6]=F('<div class="header__header magnetic" data-strength="20" data-strength-text="10" data-v-33d175a0><div class="header__svg-icon top" data-v-33d175a0><a href="https://vaitulevichaleh.com" class="header__logo-btn" data-v-33d175a0><p class="logo" data-v-33d175a0>© 2024</p><span class="header__logo-text logo-text" data-v-33d175a0><span class="logo-text__code" data-v-33d175a0>Coded by</span><div class="logo-text__wrap" data-v-33d175a0><span class="logo-text__aleh" data-v-33d175a0>Aleh</span><span class="logo-text__vait" data-v-33d175a0>Vaitulevich</span></div></span></a></div></div>',1)),t("div",st,[s(n,{to:"/cookie",class:"footer__cookie"},{default:d(()=>o[4]||(o[4]=[g("Cookie Policy"),t("p",{hidden:"",class:"btn__text"},null,-1)])),_:1})]),t("div",at,[s(n,{to:"/privacy",class:"footer__cookie"},{default:d(()=>o[5]||(o[5]=[g("Privacy Policy"),t("p",{hidden:"",class:"btn__text"},null,-1)])),_:1})]),o[7]||(o[7]=t("div",{class:"footer__time-component"},[t("h5",{class:"footer__time-label"},"TIME"),t("p",{class:"time-millisec"})],-1))])])])])}}},nt=V(rt,[["__scopeId","data-v-33d175a0"]]),lt={class:"wrapper work-slug"},it={class:"main"},mt={__name:"slug-layout",setup(b){return W(()=>[v.isTransitionStart,v.isPreloaderVisible],([l,i])=>{l&&!i&&R(()=>{O({parent:".main"})})}),(l,i)=>(_(),u("div",lt,[s(w),s(q),s(T),t("main",it,[z(l.$slots,"default")]),s(nt),s(P)]))}};export{mt as default};
