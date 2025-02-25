import{_ as M}from"./nuxt-link.BsOwDrvW.js";import{f as S,o as y,c as w,a as e,b as v,w as f,d as h,t as a,i as _,a7 as O,a6 as j,r as k,k as L,p as T,y as E,F as V,s as F,_ as N,m as P,L as q,a8 as W,h as Z,W as D,l as R,j as A,e as z}from"./entry.D6tLrWNp.js";const H=""+new URL("../assets/sprite.3NLFG0sF.svg",import.meta.url).href,J=H+"#logo",U={class:"header",id:"header","data-scroll-section":"","data-lenis-prevent":""},G={class:"header__container",id:"up"},X={class:"header__header magnetic","data-strength":"20","data-strength-text":"10"},K={class:"header__svg-icon top"},Q={class:"header__menu menu-top-header"},Y={class:"menu-top-header__list"},ee={class:"menu-top-header__item","data-link-update":""},te={class:"menu-top-header__item","data-link-update":""},ne={class:"menu-top-header__item","data-link-update":""},se={type:"button",class:"menu__icon icon-menu"},oe={class:"icon-menu__span-wrap"},ae={class:"icon-menu__menu"},ce={class:"icon-menu__close"},Xe={__name:"TheHeader",setup(x){const{t,locale:c}=S(),n=()=>{const i=document.querySelector("#footer");i&&i.scrollIntoView({behavior:"smooth",block:"start"})};return(i,l)=>{const u=M;return y(),w("header",U,[e("div",G,[e("div",X,[e("div",K,[v(u,{to:"/",class:"header__logo-btn"},{default:f(()=>l[0]||(l[0]=[e("svg",{class:"logo"},[e("use",{"xlink:href":J})],-1),e("span",{class:"header__logo-text logo-text"},[e("div",{class:"logo-text__wrap none-transform"},[e("span",{class:"logo-text__aleh"},"Aleh"),e("span",{class:"logo-text__vait"},"Vaitulevich"),e("p",{hidden:"",class:"btn__text"})])],-1)])),_:1})])]),e("nav",Q,[e("ul",Y,[e("li",ee,[v(u,{to:"/work",class:"menu-top-header__link magnetic","data-strength":"20","data-strength-text":"10"},{default:f(()=>[h(a(_(t)("work")),1),l[1]||(l[1]=e("p",{hidden:"",class:"btn__text"},null,-1))]),_:1})]),e("li",te,[v(u,{to:"/about",class:"menu-top-header__link magnetic","data-strength":"20","data-strength-text":"10"},{default:f(()=>[h(a(_(t)("about")),1),l[2]||(l[2]=e("p",{hidden:"",class:"btn__text"},null,-1))]),_:1})]),e("li",ne,[e("a",{onClick:O(n,["prevent"]),href:"#footer",class:"menu-top-header__link magnetic","data-strength":"20","data-strength-text":"10"},[h(a(_(t)("contact"))+" ",1),l[3]||(l[3]=e("p",{hidden:"",class:"btn__text"},null,-1))])]),e("button",se,[l[4]||(l[4]=e("span",{class:"icon-menu__divider"},"•",-1)),e("div",oe,[e("span",ae,a(_(t)("menu")),1),e("span",ce,a(_(t)("close")),1)])])])])])])}}},ie={class:"language-switcher"},le={class:"btn__text"},re=["onClick"],de={class:"btn__text"},_e={class:"lang-name"},ue={__name:"LanguageSwitcher",setup(x){const{locale:t,setLocale:c}=S();j();const n=[{code:"pl",name:"Polski"},{code:"ru",name:"Русский"},{code:"en",name:"English"}],i=k(!1),l=()=>{i.value=!i.value},u=async o=>{try{if(o===t.value)return;i.value=!1,await c(o),localStorage.setItem("user-locale",o)}catch(r){console.error("Error switching language:",r)}},p=o=>{const r=document.querySelector(".language-switcher");r&&!r.contains(o.target)&&(i.value=!1)};return L(()=>{const o=localStorage.getItem("user-locale");o&&o!==t.value&&c(o),document.addEventListener("click",p)}),T(()=>{document.removeEventListener("click",p)}),(o,r)=>(y(),w("div",ie,[e("button",{class:"language-switcher__button magnetic","data-strength":"25","data-strength-text":"15",onClick:l},[e("span",le,[r[0]||(r[0]=e("div",{class:"globe-icon"},[e("div",{class:"globe-wrapper"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"#000000",viewBox:"0 0 256 256"},[e("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,16a87.5,87.5,0,0,1,48,14.28V74L153.83,99.74,122.36,104l-.31-.22L102.38,90.92A16,16,0,0,0,79.87,95.1L58.93,126.4a16,16,0,0,0-2.7,8.81L56,171.44l-3.27,2.15A88,88,0,0,1,128,40ZM62.29,186.47l2.52-1.65A16,16,0,0,0,72,171.53l.21-36.23L93.17,104a3.62,3.62,0,0,0,.32.22l19.67,12.87a15.94,15.94,0,0,0,11.35,2.77L156,115.59a16,16,0,0,0,10-5.41l22.17-25.76A16,16,0,0,0,192,74V67.67A87.87,87.87,0,0,1,211.77,155l-16.14-14.76a16,16,0,0,0-16.93-3l-30.46,12.65a16.08,16.08,0,0,0-9.68,12.45l-2.39,16.19a16,16,0,0,0,11.77,17.81L169.4,202l2.36,2.37A87.88,87.88,0,0,1,62.29,186.47ZM185,195l-4.3-4.31a16,16,0,0,0-7.26-4.18L152,180.85l2.39-16.19L184.84,152,205,170.48A88.43,88.43,0,0,1,185,195Z"})])])],-1)),e("span",{class:E(["current-lang",{"is-open":i.value}])},a(_(t)),3)])]),e("div",{class:E(["language-switcher__dropdown",{"is-open":i.value}])},[(y(),w(V,null,F(n,m=>e("button",{key:m.code,class:E(["language-option magnetic",{active:_(t)===m.code}]),onClick:$=>u(m.code),"data-strength":"25","data-strength-text":"15"},[e("span",de,[e("span",_e,a(m.name),1)])],10,re)),64))],2)]))}},me={class:"menu__fixed"},pe={class:"menu _dynamic_adapt_"},he={type:"button",class:"menu__icon icon-menu"},ge={class:"icon-menu__span-wrap"},ve={class:"icon-menu__menu"},fe={class:"icon-menu__close"},be={class:"menu__body"},ke={class:"menu__list"},ye={class:"menu__title menu__item"},we={class:"menu__item","data-link-update":""},xe={class:"btn__text"},Le={class:"btn-text-p change"},$e={class:"menu__item","data-link-update":""},Ee={class:"btn__text"},Se={class:"btn-text-p change"},Ie={class:"menu__item","data-link-update":""},Ce={class:"btn__text"},Be={class:"btn-text-p change"},Ae={class:"menu__item","data-link-update":""},Me={class:"btn__text"},Oe={class:"btn-text-p change"},Te={class:"hamburger-wrap not-active"},Ve={type:"button",class:"hamburger magnetic","data-strength":"50","data-strength-text":"30"},Ne={class:"btn__text"},je={class:"btn-text-p change"},Fe={__name:"MenuMobile",setup(x){const{t}=S(),c=k(!1),{$locomotiveScroll:n}=P(),i=o=>{o.target.closest(".menu__icon.icon-menu")||o.target.closest(".hamburger")?(c.value=!c.value,c.value?(document.documentElement.classList.add("menu-open","lock"),n==null||n.stop()):(document.documentElement.classList.remove("menu-open","lock"),n==null||n.start())):o.target.closest(".menu__body a")&&(c.value=!1,document.documentElement.classList.remove("menu-open","lock"),n==null||n.start())},l=()=>{c.value=!1,document.documentElement.classList.remove("menu-open","lock"),n==null||n.start()},u=o=>{o.key==="Escape"&&c.value&&(c.value=!1,document.documentElement.classList.remove("menu-open","lock"),n==null||n.start())};L(()=>{document.addEventListener("keydown",u),document.addEventListener("click",i)}),T(()=>{document.removeEventListener("keydown",u),document.removeEventListener("click",i)});const p=()=>{const o=document.querySelector("#footer");o&&o.scrollIntoView({behavior:"smooth",block:"start"})};return(o,r)=>{const m=M;return y(),w(V,null,[e("div",{class:"menu__overlay",onClick:l}),e("div",me,[e("li",pe,[e("button",he,[r[0]||(r[0]=e("span",{class:"icon-menu__divider"},"•",-1)),e("div",ge,[e("span",ve,a(_(t)("menu")),1),e("span",fe,a(_(t)("close")),1)])]),e("nav",be,[e("ul",ke,[e("h5",ye,a(_(t)("navigation")),1),r[1]||(r[1]=e("div",{class:"line menu__item"},null,-1)),e("li",we,[v(m,{to:"/",class:"menu__link magnetic","data-strength":"25","data-strength-text":"15"},{default:f(()=>[e("span",xe,[e("p",Le,a(_(t)("home")),1)])]),_:1})]),e("li",$e,[v(m,{to:"/work",class:"menu__link magnetic","data-strength":"25","data-strength-text":"15"},{default:f(()=>[e("span",Ee,[e("p",Se,a(_(t)("work")),1)])]),_:1})]),e("li",Ie,[v(m,{to:"/about",class:"menu__link magnetic","data-strength":"25","data-strength-text":"15"},{default:f(()=>[e("span",Ce,[e("p",Be,a(_(t)("about")),1)])]),_:1})]),e("li",Ae,[e("a",{onClick:O(p,["prevent"]),href:"#footer","data-barba-prevent":"self",class:"menu__link magnetic","data-strength":"25","data-strength-text":"15"},[e("span",Me,[e("p",Oe,a(_(t)("contact")),1)])])]),r[2]||(r[2]=e("div",{class:"line menu__item"},null,-1)),v(ue,{class:"menu__item"})])])])]),e("div",Te,[e("button",Ve,[r[3]||(r[3]=e("div",{class:"btn__bg"},null,-1)),e("span",Ne,[e("p",je,a(_(t)("menu")),1)]),r[4]||(r[4]=e("div",{class:"btn__border"},null,-1))])])],64)}}},Ke=N(Fe,[["__scopeId","data-v-aab98c04"]]),Qe=window.setInterval,Pe=Symbol.for("nuxt:client-only"),qe=q({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(x,{slots:t,attrs:c}){const n=k(!1);return L(()=>{n.value=!0}),W(Pe,!0),i=>{var o;if(n.value)return(o=t.default)==null?void 0:o.call(t);const l=t.fallback||t.placeholder;if(l)return l();const u=i.fallback||i.placeholder||"",p=i.fallbackTag||i.placeholderTag||"span";return w(p,c,u)}}}),We={class:"cookie-consent-banner__container"},Ze={class:"cookie-consent-banner__buttons"},De={id:"btn-accept-all",class:"cookie-consent-button btn-success"},Re={id:"btn-accept-some",class:"cookie-consent-button btn-outline"},ze={id:"btn-reject-all",class:"cookie-consent-button btn-grayscale"},He={class:"cookie-consent-options"},Je={__name:"Cookies",setup(x){const{locale:t}=S(),c=k(!1),n=k(!1),i=k(!1);function l(){n.value=!1,i.value=!0;const s=document.getElementById("cookie-consent-banner");s&&s.classList.remove("visible")}function u(){n.value=!0,i.value=!1;const s=document.getElementById("cookie-consent-banner");s&&s.classList.add("visible"),$()}function p(){JSON.parse(localStorage.getItem("consentMode"))?i.value=!0:u()}const o=()=>{I({necessary:!0,analytics:!0,preferences:!0,marketing:!0}),l()},r=()=>{var b,C,B;const s=((b=document.getElementById("consent-analytics"))==null?void 0:b.checked)||!1,d=((C=document.getElementById("consent-preferences"))==null?void 0:C.checked)||!1,g=((B=document.getElementById("consent-marketing"))==null?void 0:B.checked)||!1;I({necessary:!0,analytics:s,preferences:d,marketing:g}),l()},m=()=>{I({necessary:!1,analytics:!1,preferences:!1,marketing:!1}),l()};function $(){const s=document.getElementById("btn-accept-all"),d=document.getElementById("btn-accept-some"),g=document.getElementById("btn-reject-all"),b=document.getElementById("btn-open-consent");s&&(s.removeEventListener("click",o),s.addEventListener("click",o)),d&&(d.removeEventListener("click",r),d.addEventListener("click",r)),g&&(g.removeEventListener("click",m),g.addEventListener("click",m)),b&&(b.removeEventListener("click",u),b.addEventListener("click",u))}function I(s){const d={functionality_storage:s.necessary?"granted":"denied",security_storage:s.necessary?"granted":"denied",ad_storage:s.marketing?"granted":"denied",analytics_storage:s.analytics?"granted":"denied",personalization:s.preferences?"granted":"denied"};window.gtag&&window.gtag("consent","update",d),localStorage.setItem("consentMode",JSON.stringify(d))}return Z(t,()=>{c.value&&n.value&&$()}),L(()=>{c.value=!0,p(),$()}),(s,d)=>{const g=qe;return y(),D(g,null,{default:f(()=>[e("div",null,[e("div",{id:"cookie-consent-banner",class:E(["cookie-consent-banner",{visible:n.value}])},[e("div",We,[e("h3",null,a(s.$t("cookies.title")),1),e("p",null,[h(a(s.$t("cookies.description")),1),d[0]||(d[0]=e("strong",null,[e("a",{href:""}," cookies.")],-1))]),e("div",Ze,[e("button",De,a(s.$t("cookies.accept_all")),1),e("button",Re,a(s.$t("cookies.save")),1),e("button",ze,a(s.$t("cookies.reject")),1)]),e("div",He,[e("label",null,[d[1]||(d[1]=e("input",{id:"consent-necessary",type:"checkbox",value:"Necessary",checked:"",disabled:""},null,-1)),h(" "+a(s.$t("cookies.necessary")),1)]),e("label",null,[d[2]||(d[2]=e("input",{id:"consent-analytics",type:"checkbox",value:"Analytics",checked:""},null,-1)),h(" "+a(s.$t("cookies.analytics")),1)]),e("label",null,[d[3]||(d[3]=e("input",{id:"consent-preferences",type:"checkbox",value:"Preferences",checked:""},null,-1)),h(" "+a(s.$t("cookies.preferences")),1)]),e("label",null,[d[4]||(d[4]=e("input",{id:"consent-marketing",type:"checkbox",value:"Marketing"},null,-1)),h(" "+a(s.$t("cookies.marketing")),1)])])])],2)])]),_:1})}}},Ye=N(Je,[["__scopeId","data-v-81d005b3"]]),et={__name:"ThePreloader",setup(x){return L(()=>{const t=R.timeline({onComplete(){var n;A.isPreloaderVisible=!1,(n=A.scrollLenis)==null||n.start()}});t.set(".wrapper",{opacity:0}),t.set(".transition__screen",{bottom:"-142%",opacity:1}),t.set(".transition__rounded-wrap.top",{opacity:1}),t.set(".transition__fade, .transition__container",{opacity:1}),t.set("html",{cursor:"wait"});const c=window.innerWidth>540?"20vh":"10vh";return t.set(".transition__rounded-wrap.top",{height:c}),t.to(".transition__fade",{duration:.3,opacity:1,ease:"linear"}),t.to(".transition__screen",{duration:.8,bottom:"-30%",opacity:1,ease:"Power2.easeIn"},"+=0.1"),t.to(".transition__rounded-wrap.top",{duration:.8,height:c,ease:"none"},"<"),t.to(".wrapper",{opacity:1},"<"),t.to(".transition__rounded-wrap.top",{duration:.6,height:"1vh",opacity:1,ease:"Expo.easeInOut",delay:.3}),t.to(".transition__screen",{duration:1.6,bottom:"150%",opacity:1,ease:"Expo.easeInOut"},"-=1"),t.to(".transition__fade, .transition__container",{duration:1.8,opacity:0,ease:"linear"},"-=1"),document.querySelector(".home .line")&&t.from(".home .line",{duration:1.5,scaleX:0,ease:"Expo.easeOut",transformOrigin:"left top"},"-=1.2"),t.set("html",{cursor:"auto"}),t.set(".transition__screen",{bottom:"-142%"},"+=0.6"),t.call(()=>{typeof ScrollTrigger<"u"&&ScrollTrigger.refresh()},null,"+=3"),t}),(t,c)=>(y(),w("div",null,c[0]||(c[0]=[z('<div class="transition__container"><div class="transition__fade"></div><div class="transition__screen"><div class="transition__rounded-wrap top"><div class="transition__rounded-div"></div></div><div class="transition__rounded-wrap bottom"><div class="transition__rounded-div"></div></div></div></div>',1)])))}};export{Ye as C,Ke as M,et as _,Xe as a,Qe as s};
