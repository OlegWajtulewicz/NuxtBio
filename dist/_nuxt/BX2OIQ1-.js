import{X as N,r as p,_ as x,k as $,n as W,h as P,K as V,l as A,E as j,z as T,o as c,c as _,a as s,t as g,y as m,e as C,F as h,s as y,b as u,w as E,i as v,f as q,g as z,v as B,Y as I,j as M}from"./CRVWSR2J.js";import{_ as Z}from"./Bl4ChSFc.js";import{_ as H}from"./DZ2OU4Sv.js";import{M as F}from"./D5uiDE8a.js";import{w as f}from"./CiKLYgJL.js";import{U as S}from"./B59pZLJY.js";import{f as G}from"./ujgZ7hPi.js";const L=N("gridView",()=>{const d=p("rows");function n(){{const a=localStorage.getItem("gridView");a&&(d.value=a)}}function e(a){d.value=a,localStorage.setItem("gridView",a)}return{view:d,setView:e,loadSavedState:n}}),D={class:"works-switch","data-scroll-section":""},O={class:"works-switch__container"},U={class:"works-switch__title"},X={class:"works-switch__buttons product-header-pr"},Y={__name:"WorksSwitch",props:{isLoading:{type:Boolean,required:!0}},setup(d){const n=L(),e=d;$(async()=>{await W(),n.loadSavedState(),e.isLoading||i()}),P(()=>e.isLoading,t=>{t||i()});const a=V(()=>({"works-switch__grid-wrap":!0,"btn-":!0,"btn-normal":!0,"columns-btn":!0,active:!e.isLoading&&n.view==="columns","not-active":!e.isLoading&&n.view==="rows"})),r=V(()=>({"works-switch__flex-wrap":!0,"btn-":!0,"btn-normal":!0,"rows-btn":!0,active:!e.isLoading&&n.view==="rows","not-active":!e.isLoading&&n.view==="columns"})),w=t=>{setTimeout(()=>{n.setView(t),i()},150)};function i(){window.innerWidth>540&&document.querySelectorAll(".magnetic").forEach(o=>{var k;o.addEventListener("mousemove",l),(k=o.parentNode)==null||k.classList.remove("not-active"),o.addEventListener("mouseleave",function(b){A.to(b.currentTarget,{duration:1.5,x:0,y:0,ease:j.easeOut,clearProps:"all"})})})}function l(t){const o=t.currentTarget,k=o.getBoundingClientRect(),b=o.getAttribute("data-strength")||"70";A.to(o,{duration:1.5,x:((t.clientX-k.left)/o.offsetWidth-.5)*b,y:((t.clientY-k.top)/o.offsetHeight-.5)*b,rotate:"0.001deg",ease:T.easeOut})}return(t,o)=>(c(),_("section",D,[s("div",O,[s("h5",U,g(t.$t("all_works")),1),s("div",X,[s("button",{class:m(a.value),onClick:o[0]||(o[0]=k=>w("columns"))},o[2]||(o[2]=[C('<div class="works-switch__grid btn magnetic" data-strength="70" data-strength-text="40" data-v-8e58cd4b><div class="btn__bg" data-v-8e58cd4b></div><div class="btn__circle-wrap" data-v-8e58cd4b><div class="btn__circle" data-v-8e58cd4b><div class="before__100" data-v-8e58cd4b></div></div></div><span class="btn__text" data-v-8e58cd4b><p class="btn-text-p change" data-v-8e58cd4b><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6" data-v-8e58cd4b><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" data-v-8e58cd4b></path></svg></p></span><div class="btn__border" data-v-8e58cd4b></div></div>',1)]),2),s("button",{class:m(r.value),onClick:o[1]||(o[1]=k=>w("rows"))},o[3]||(o[3]=[C('<div class="works-switch__flex btn magnetic" data-strength="70" data-strength-text="40" data-v-8e58cd4b><div class="btn__bg" data-v-8e58cd4b></div><div class="btn__circle-wrap" data-v-8e58cd4b><div class="btn__circle" data-v-8e58cd4b><div class="before__100" data-v-8e58cd4b></div></div></div><span class="btn__text" data-v-8e58cd4b><p class="btn-text-p change" data-v-8e58cd4b><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-6" data-v-8e58cd4b><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" data-v-8e58cd4b></path></svg></p></span><div class="btn__border" data-v-8e58cd4b></div></div>',1)]),2)])])]))}},K=x(Y,[["__scopeId","data-v-8e58cd4b"]]),R={class:"works-items work-grid small-work-grid grid-fade grid-rows-part"},J={class:"works-items__container color-container"},Q={class:"works-items__items-list work-wrapper"},ss={class:"link-works-items__title"},ts={class:"link-works-items__service"},es={class:"link-works-items__year"},is={__name:"WorksList",props:{works:{type:Array,required:!0}},setup(d){return(n,e)=>{const a=H;return c(),_("section",R,[e[2]||(e[2]=s("div",{class:"works__color"},null,-1)),s("div",J,[s("ul",Q,[(c(!0),_(h,null,y(d.works,r=>(c(),_("li",{key:r.title,class:"works-items__item visible"},[e[0]||(e[0]=s("div",{class:"line"},null,-1)),u(a,{to:`/work/${r.slug}`,class:m(["works-items__link link-works-items"])},{default:E(()=>[s("h4",ss,g(r.title),1),s("div",ts,[s("p",null,g(r.service),1)]),s("div",es,[s("p",null,g(r.year),1)])]),_:2},1032,["to"])]))),128)),e[1]||(e[1]=s("div",{class:"line"},null,-1))])])])}}},os=x(is,[["__scopeId","data-v-8180cfcb"]]),as={class:"works-grid-wrapper"},ns={class:"works-tiles__container"},rs={class:"works-tiles__tiles-list work-tiles-wrapper"},ls={class:"works-tiles__wrapper"},ds={class:"link-works-tiles__images"},cs=["src","alt"],_s={class:"link-works-tiles__title"},us={class:"link-works-tiles__footer"},vs={class:"link-works-tiles__service"},ws={class:"link-works-tiles__year"},ks={__name:"WorksGrid",props:{works:{type:Array,required:!0}},setup(d){const n=L(),e=p(!1),a=p(!1),r=d;return $(()=>{n.loadSavedState(),e.value=!0,Promise.all(r.works.map(w=>new Promise(i=>{if(w.image){const l=new Image;l.onload=i,l.src=w.image}else i()}))).then(()=>{a.value=!0})}),(w,i)=>{const l=H;return c(),_("div",as,[s("section",{class:m(["works-tiles work-tiles",{"grid-fade":!0,"grid-columns-part":!0,"grid-fade-out":e.value,"grid-fade-in":e.value&&a.value,"grid-view":v(n).view==="rows","list-view":v(n).view==="columns"}])},[i[2]||(i[2]=s("div",{class:"works__color"},null,-1)),s("div",ns,[i[1]||(i[1]=s("div",{class:"line"},null,-1)),s("ul",rs,[(c(!0),_(h,null,y(d.works,t=>(c(),_("li",{key:t.title,class:"works-tiles__item"},[s("div",ls,[u(l,{to:`/work/${t.slug}`,class:m(["works-tiles__link link-works-tiles"])},{default:E(()=>[s("div",ds,[s("div",{class:m(["item-latest-work__color",t.color])},null,2),s("img",{src:t.image,alt:t.title,class:"link-works-tiles__image ibg"},null,8,cs)]),s("h4",_s,g(t.title),1),i[0]||(i[0]=s("div",{class:"link-works-tiles__devider"},null,-1)),s("div",us,[s("div",vs,[s("p",null,g(t.service),1)]),s("div",ws,[s("p",null,g(t.year),1)])])]),_:2},1032,["to"])])]))),128))])])],2)])}}},gs=x(ks,[["__scopeId","data-v-f446d805"]]),ms={key:0,class:"works-skeleton"},ps={class:"works-skeleton__content"},bs={__name:"index",setup(d){const{t:n,locale:e}=q(),a=L(),r=p(!0),w=p(!1);return $(()=>{a.loadSavedState(),Promise.all(f.map(i=>new Promise(l=>{if(i.image){const t=new Image;t.onload=l,t.src=i.image}else l()}))).then(()=>{r.value=!1,w.value=!0})}),z(()=>({title:n("meta.work.title")})),P(()=>[M.isTransitionFinish,M.isPreloaderVisible],([i,l])=>{i&&!l&&W(()=>{G({parent:".main"})})}),(i,l)=>(c(),_("div",null,[u(F,{projects:v(f)},null,8,["projects"]),u(Z),u(K,{isLoading:v(r)},null,8,["isLoading"]),v(r)?(c(),_("div",ms,[(c(),_(h,null,y(6,t=>s("div",{key:t,class:"works-skeleton__item"},[u(S,{class:"works-skeleton__image",ui:{background:"skeleton--bg"}}),s("div",ps,[u(S,{class:"works-skeleton__title",ui:{background:"skeleton--bg"}}),u(S,{class:"works-skeleton__text",ui:{background:"skeleton--bg"}})])])),64))])):(c(),_(h,{key:1},[B(u(os,{works:v(f),class:"grid-fade grid-rows-part"},null,8,["works"]),[[I,v(a).view==="rows"]]),B(u(gs,{works:v(f),class:"grid-fade grid-columns-part"},null,8,["works"]),[[I,v(a).view==="columns"]])],64))]))}},Vs=x(bs,[["__scopeId","data-v-00e14801"]]);export{Vs as default};
