import{_ as j}from"./DBwxWTXB.js";import{w as N}from"./CiKLYgJL.js";import{p as R}from"./B9Njdixb.js";import{_ as E,k as L,l as v,E as A,P,z as B,o as c,c as _,a as t,t as d,e as k,F as I,s as V,d as H,y as O,S as M,f as T,i as e,A as p,B as U,C as X,r as S,D as Y,G as D,g as F,h as W,b as u,x as w,H as q,w as G,n as J,j as C}from"./DzKJ9Mj2.js";import{_ as K}from"./CG-8FcJl.js";import{U as f}from"./DAXo6UH2.js";import{M as Q}from"./Dn9EEbxI.js";import{f as Z}from"./ujgZ7hPi.js";const tt={class:"product__header"},st={class:"product__title"},et=["href"],it={__name:"ProductHeader",props:{link:{type:String,required:!0},subtitle:{type:String,required:!0}},setup(a){L(()=>{document.querySelectorAll(".magnetic").forEach(r=>{r.addEventListener("mousemove",n),r.addEventListener("mouseleave",function(l){v.to(l.currentTarget,{duration:1.5,x:0,y:0,ease:A.easeOut,clearProps:"all"});const g=l.currentTarget.querySelector(".btn__text");g&&v.to(g,{duration:1.5,x:0,y:0,ease:A.easeOut,clearProps:"all"})})}),document.querySelectorAll("[data-btn-hover]").forEach(r=>{r.addEventListener("mouseenter",i),r.addEventListener("mouseleave",i)})});function i(s){const r=s.currentTarget,l=r.querySelector(".btn__circle"),g=r.querySelector(".btn-text-p.change");if(!l)return;const h=r.getBoundingClientRect(),o=s.clientX-h.left,z=s.clientY-h.top;s.type==="mouseenter"?(v.set(l,{left:o+"px",top:z+"px",width:"0%",height:"0%"}),v.to(l,{width:"250%",height:"250%",x:"-50%",y:"-50%",duration:.4,ease:P.easeOut}),g&&v.to(g,{duration:.2,color:"#000000",ease:P.easeOut})):(v.to(l,{width:"0%",height:"0%",duration:.3,ease:P.easeIn}),g&&v.to(g,{duration:.2,color:r.classList.contains("footer__mail")?"#000000":"#0c1725",ease:P.easeIn}))}function n(s){const r=s.currentTarget,l=r.getBoundingClientRect(),g=r.getAttribute("data-strength"),h=r.getAttribute("data-strength-text");v.to(r,{duration:1.5,x:((s.clientX-l.left)/r.offsetWidth-.5)*g,y:((s.clientY-l.top)/r.offsetHeight-.5)*g,rotate:"0.001deg",ease:B.easeOut});const o=r.querySelector(".btn__text");o&&v.to(o,{duration:1.5,x:((s.clientX-l.left)/r.offsetWidth-.5)*h,y:((s.clientY-l.top)/r.offsetHeight-.5)*h,rotate:"0.001deg",ease:B.easeOut})}return(s,r)=>(c(),_("div",tt,[t("h5",st,d(a.subtitle),1),t("a",{href:a.link,target:"_blank",class:"product__button product-header-pr"},r[0]||(r[0]=[k('<div class="product__btn footer__mail btn magnetic" data-btn-hover data-strength="25" data-strength-text="15" data-v-253ba7d8><div class="btn__bg" data-v-253ba7d8></div><div class="btn__circle-wrap" data-v-253ba7d8><div class="btn__circle" data-v-253ba7d8><div class="before__100" data-v-253ba7d8></div></div></div><span class="btn__text" data-v-253ba7d8><p class="btn-text-p change" data-v-253ba7d8>Live Site</p></span><div class="btn__border" data-v-253ba7d8></div></div>',1)]),8,et)]))}},ot=E(it,[["__scopeId","data-v-253ba7d8"]]),rt={class:"product__image-wrap","data-scroll-section":""},dt={class:"product__image"},at=["src","alt"],ct={__name:"ProductImage",props:{image:{type:String,required:!0},title:{type:String,required:!0}},setup(a){return(i,n)=>(c(),_("div",rt,[t("div",dt,[t("img",{src:a.image,"data-scroll":"","data-scroll-speed":"-1","data-scroll-position":"top",class:"ibg",alt:a.title,loading:"lazy",decoding:"async",fetchpriority:"high"},null,8,at)])]))}},lt={class:"product__info info-product"},nt={class:"info-product__left"},_t={class:"info-product__list"},ut={class:"info-product__right"},pt={class:"info-product__title-big"},gt={class:"info-product__text"},mt={__name:"ProductInfo",props:{stack:{type:Array,required:!0},title:{type:String,required:!0},description:{type:String,required:!0}},setup(a){return(i,n)=>(c(),_("div",lt,[t("div",nt,[n[1]||(n[1]=t("h5",{class:"info-product__title"},"stack",-1)),t("ul",_t,[(c(!0),_(I,null,V(a.stack,s=>(c(),_("li",{class:"info-product__item",key:s},[n[0]||(n[0]=t("span",{class:"info-product__divider"},"•",-1)),H(d(s),1)]))),128))])]),t("div",ut,[t("h3",pt,d(a.title),1),t("div",gt,d(a.description),1)])]))}},vt=E(mt,[["__scopeId","data-v-f867ece8"]]),ht={class:"video-wrap-product__container"},bt={class:"video-wrap-product__body"},ft={class:"video-wrap-product__video-overlay playpauze"},kt=["src"],xt={__name:"ProductVideo",props:{video:{type:String,required:!0},color:{type:String,required:!0}},setup(a){return(i,n)=>(c(),_("div",{class:O(["product__video-wrap video-wrap-product",a.color])},[t("div",ht,[t("div",bt,[t("figure",null,[t("div",ft,[t("video",{playsinline:"",autoplay:"",muted:"",loop:"",src:a.video,frameborder:"0",allowfullscreen:""},null,8,kt)])])])])],2))}},$t=E(xt,[["__scopeId","data-v-4bc565c8"]]),yt={class:"product__device-wrap device-wrap-product"},wt={class:"device-wrap-product__container"},zt={class:"device-wrap-product__item-wrap","data-scroll":"","data-scroll-speed":"-1"},Pt={class:"device-wrap-product__item"},St=["src","alt"],qt={class:"device-wrap-product__item-wrap"},It={class:"device-wrap-product__item"},Et=["src","alt"],Lt={class:"device-wrap-product__item-wrap","data-scroll":"","data-scroll-speed":"1"},Tt={class:"device-wrap-product__item"},At=["src","alt"],Bt={__name:"ProductDevices",props:{devices:{type:Array,required:!0},title:{type:String,required:!0}},setup(a){return v.registerPlugin(M),(i,n)=>(c(),_("div",yt,[t("div",wt,[t("div",zt,[t("div",Pt,[t("img",{src:a.devices[0],class:"ibg",alt:`${a.title} device 1`},null,8,St)])]),t("div",qt,[t("div",It,[t("img",{src:a.devices[1],class:"ibg",alt:`${a.title} device 2`},null,8,Et)])]),t("div",Lt,[t("div",Tt,[t("img",{src:a.devices[2],class:"ibg",alt:`${a.title} device 3`},null,8,At)])])])]))}},Ct={class:"product-page-button"},Vt={class:"product-page-button__container"},Ht={href:"mailto:vaitulevichaleh@gmail.com",class:"footer__mail product__btn btn magnetic","data-btn-hover":"","data-strength":"70","data-strength-text":"40"},Ot={class:"btn__text"},jt={class:"btn-text-p change"},Nt={__name:"ProductButton",setup(a){const{t:i}=T();return(n,s)=>(c(),_("div",Ct,[t("div",Vt,[t("a",Ht,[s[0]||(s[0]=t("div",{class:"btn__bg"},null,-1)),s[1]||(s[1]=t("div",{class:"btn__circle-wrap"},[t("div",{class:"btn__circle"},[t("div",{class:"before__100"})])],-1)),t("span",Ot,[t("p",jt,d(e(i)("want_same")||"I want the same"),1)]),s[2]||(s[2]=t("div",{class:"btn__border"},null,-1))])])]))}},Rt=p("/img/product/search.png"),Mt=p("/img/product/filters.png"),Ut=p("/img/product/login.png"),Xt=p("/img/product/acc.png"),Yt=p("/img/product/modal.png"),Dt=p("/img/product/toast.png"),Ft=p("/img/product/cart.png"),Wt=p("/img/product/pay.png"),Gt=p("/img/product/drawer.png"),Jt=p("/img/product/check.png"),Kt=p("/img/product/admin.png"),Qt=p("/img/product/product-page.png"),Zt=p("/img/product/role.png"),ts=p("/img/product/dashboard.png"),ss={class:"prod_container"},es={class:"product__items-grid items-grid-product"},is={class:"items-grid-product__card-title","data-scroll":""},os={class:"items-grid-product__item item-grid-product"},rs={class:"item-grid-product__title"},ds={class:"item-grid-product__text"},as={class:"items-grid-product__group1"},cs={class:"items-grid-product__card","data-scroll":""},ls={class:"items-grid-product__item item-grid-product"},ns={class:"item-grid-product__title"},_s={class:"item-grid-product__text"},us={class:"items-grid-product__card","data-scroll":""},ps={class:"items-grid-product__item item-grid-product"},gs={class:"item-grid-product__title"},ms={class:"item-grid-product__text"},vs={class:"items-grid-product__card","data-scroll":""},hs={class:"items-grid-product__item item-grid-product"},bs={class:"item-grid-product__title"},fs={class:"item-grid-product__text"},ks={class:"items-grid-product__card","data-scroll":""},xs={class:"items-grid-product__item item-grid-product"},$s={class:"item-grid-product__title"},ys={class:"item-grid-product__text"},ws={class:"items-grid-product__card","data-scroll":""},zs={class:"items-grid-product__item item-grid-product"},Ps={class:"item-grid-product__title"},Ss={class:"item-grid-product__text"},qs={class:"items-grid-product__card-title","data-scroll":""},Is={class:"items-grid-product__item item-grid-product"},Es={class:"item-grid-product__title"},Ls={class:"item-grid-product__text"},Ts={class:"items-grid-product__group2"},As={class:"items-grid-product__card","data-scroll":""},Bs={class:"items-grid-product__item item-grid-product"},Cs={class:"item-grid-product__title"},Vs={class:"item-grid-product__text"},Hs={class:"items-grid-product__card","data-scroll":""},Os={class:"items-grid-product__item item-grid-product"},js={class:"item-grid-product__text"},Ns={class:"items-grid-product__card","data-scroll":""},Rs={class:"items-grid-product__item item-grid-product"},Ms={class:"item-grid-product__title"},Us={class:"item-grid-product__text"},Xs={class:"items-grid-product__card","data-scroll":""},Ys={class:"items-grid-product__item item-grid-product"},Ds={class:"item-grid-product__text"},Fs={__name:"ProductGrid",setup(a){const{t:i}=T();return L(()=>{const n=new IntersectionObserver(s=>{s.forEach(r=>{r.isIntersecting&&r.target.classList.add("is-inview")})},{threshold:.1});document.querySelectorAll(".items-grid-product__card").forEach(s=>{n.observe(s)})}),(n,s)=>(c(),_("div",ss,[t("div",es,[t("div",is,[t("div",os,[t("strong",rs,d(e(i)("productPizza.search.title")),1),s[0]||(s[0]=t("br",null,null,-1)),t("p",ds,d(e(i)("productPizza.search.text")),1)])]),t("div",as,[s[6]||(s[6]=t("div",{class:"items-grid-product__card","data-scroll":""},[t("div",{class:"items-grid-product__image"},[t("img",{src:Rt,"data-scroll":"","data-scroll-speed":"-0.5",class:"ibg",alt:"search"})])],-1)),t("div",cs,[t("div",ls,[t("strong",ns,d(e(i)("productPizza.profile.title")),1),s[1]||(s[1]=t("br",null,null,-1)),t("p",_s,d(e(i)("productPizza.profile.text")),1)])]),s[7]||(s[7]=k('<div class="items-grid-product__card" data-scroll><div class="items-grid-product__image"><img src="'+Mt+'" data-scroll data-scroll-speed="-0.5" class="ibg" alt="filters"></div></div><div class="items-grid-product__card" data-scroll><div class="items-grid-product__image"><img src="'+Ut+'" data-scroll data-scroll-speed="-0.5" class="ibg" alt="login"></div></div>',2)),t("div",us,[t("div",ps,[t("strong",gs,d(e(i)("productPizza.filtration.title")),1),s[2]||(s[2]=t("br",null,null,-1)),t("p",ms,d(e(i)("productPizza.filtration.text")),1)])]),t("div",vs,[t("div",hs,[t("strong",bs,d(e(i)("productPizza.routes.title")),1),s[3]||(s[3]=t("br",null,null,-1)),t("p",fs,d(e(i)("productPizza.routes.text")),1)])]),s[8]||(s[8]=k('<div class="items-grid-product__card" data-scroll><div class="items-grid-product__image"><img src="'+Xt+'" data-scroll data-scroll-speed="-0.5" class="ibg" alt="acc"></div></div><div class="items-grid-product__card" data-scroll><div class="items-grid-product__image"><img src="'+Yt+'" data-scroll data-scroll-speed="-0.5" class="ibg" alt="modal"></div></div>',2)),t("div",ks,[t("div",xs,[t("strong",$s,d(e(i)("productPizza.auth.title")),1),s[4]||(s[4]=t("br",null,null,-1)),t("p",ys,d(e(i)("productPizza.auth.text")),1)])]),s[9]||(s[9]=t("div",{class:"items-grid-product__card","data-scroll":""},[t("div",{class:"items-grid-product__image"},[t("img",{src:Dt,"data-scroll":"","data-scroll-speed":"-0.5",class:"ibg",alt:"toast"})])],-1)),t("div",ws,[t("div",zs,[t("strong",Ps,d(e(i)("productPizza.alerts.title")),1),s[5]||(s[5]=t("br",null,null,-1)),t("p",Ss,d(e(i)("productPizza.alerts.text")),1)])])]),t("div",qs,[t("div",Is,[t("strong",Es,d(e(i)("productPizza.basket.title")),1),s[10]||(s[10]=t("br",null,null,-1)),t("p",Ls,d(e(i)("productPizza.basket.text")),1)])]),t("div",Ts,[s[13]||(s[13]=k('<div class="items-grid-product__card" data-scroll><div class="items-grid-product__image"><img src="'+Ft+'" data-scroll data-scroll-speed="-0.5" class="ibg" alt="cart"></div></div><div class="items-grid-product__card" data-scroll><div class="items-grid-product__image"><img src="'+Wt+'" data-scroll data-scroll-speed="-0.5" class="ibg" alt="pay"></div></div>',2)),t("div",As,[t("div",Bs,[t("strong",Cs,d(e(i)("productPizza.purchase.title")),1),s[11]||(s[11]=t("br",null,null,-1)),t("p",Vs,d(e(i)("productPizza.purchase.text")),1)])]),s[14]||(s[14]=t("div",{class:"items-grid-product__card","data-scroll":""},[t("div",{class:"items-grid-product__image"},[t("img",{src:Gt,"data-scroll":"","data-scroll-speed":"-0.5",class:"ibg",alt:"drawer"})])],-1)),t("div",Hs,[t("div",Os,[t("p",js,d(e(i)("productPizza.email.text")),1)])]),s[15]||(s[15]=k('<div class="items-grid-product__card" data-scroll><div class="items-grid-product__image"><img src="'+Jt+'" data-scroll data-scroll-speed="-0.5" class="ibg" alt="check"></div></div><div class="items-grid-product__card" data-scroll><div class="items-grid-product__image"><img src="'+Kt+'" data-scroll data-scroll-speed="-0.5" class="ibg" alt="admin"></div></div>',2)),t("div",Ns,[t("div",Rs,[t("strong",Ms,d(e(i)("productPizza.dashboard.title")),1),s[12]||(s[12]=t("br",null,null,-1)),t("p",Us,d(e(i)("productPizza.dashboard.text")),1)])]),s[16]||(s[16]=k('<div class="items-grid-product__card" data-scroll><div class="items-grid-product__image"><img src="'+Qt+'" data-scroll data-scroll-speed="-0.5" class="ibg" alt="product-page"></div></div><div class="items-grid-product__card" data-scroll><div class="items-grid-product__image"><img src="'+Zt+'" data-scroll data-scroll-speed="-0.5" class="ibg" alt="role"></div></div><div class="items-grid-product__card" data-scroll><div class="items-grid-product__image"><img src="'+ts+'" data-scroll data-scroll-speed="-0.5" class="ibg" alt="dashboard"></div></div>',3)),t("div",Xs,[t("div",Ys,[t("p",Ds,d(e(i)("productPizza.admin.text")),1)])])])])]))}},Ws={key:0,class:"loading-skeleton"},Gs={class:"skeleton-container"},Js={class:"skeleton-header-wrap"},Ks={class:"skeleton-info-wrap"},Qs={class:"skeleton-info-left"},Zs={class:"skeleton-stack"},te={class:"skeleton-info-right"},se={class:"product"},ee={class:"product__container"},ie={key:2,class:"error-container"},ue={__name:"[slug]",setup(a){var z;const i=U(),n=X(),{t:s,locale:r}=T(),l=S(!0),g=S(!1),h=S(""),o=Y(()=>{var m;const b=(m=i.params.slug)==null?void 0:m.toString().toLowerCase();return R[b]});return D(()=>{!l.value&&!o.value&&(g.value=!0,h.value=s("project_not_found")||"Проект не найден",n.push("/work"))}),L(async()=>{var b;try{if(!o.value)return;const m=[o.value.mainImage,...o.value.devices||[],...((b=o.value.features)==null?void 0:b.map(x=>x.image))||[]].filter(Boolean);await Promise.all(m.map(x=>new Promise($=>{const y=new Image;y.onload=$,y.onerror=$,y.src=x})))}catch(m){console.error("Error loading images:",m),g.value=!0,h.value=s("error_loading_images")||"Ошибка при загрузке изображений"}finally{l.value=!1}}),F({title:o.value?`${o.value.title} • Aleh Vaitulevich`:s("project_not_found")||"Проект не найден",meta:[{name:"description",content:((z=o.value)==null?void 0:z.description)||""}]}),W(()=>[C.isTransitionFinish,C.isPreloaderVisible],([b,m])=>{b&&!m&&J(()=>{Z({parent:".main"})})}),(b,m)=>{var $;const x=j;return c(),_("div",null,[u(Q,{projects:e(N)},null,8,["projects"]),u(K),e(l)?(c(),_("div",Ws,[t("div",Gs,[t("div",Js,[u(f,{class:"skeleton-title",ui:{background:"skeleton--bg"}}),u(f,{class:"skeleton-button",ui:{background:"skeleton--bg"}})]),u(f,{class:"skeleton-main-image",ui:{background:"skeleton--bg"}}),t("div",Ks,[t("div",Qs,[u(f,{class:"skeleton-subtitle",ui:{background:"skeleton--bg"}}),t("div",Zs,[(c(),_(I,null,V(6,y=>u(f,{key:y,class:"skeleton-stack-item",ui:{background:"skeleton--bg"}})),64))])]),t("div",te,[u(f,{class:"skeleton-project-title",ui:{background:"skeleton--bg"}}),u(f,{class:"skeleton-description",ui:{background:"skeleton--bg"}})])])])])):w("",!0),e(o)&&!e(l)?(c(),_("section",{key:1,class:O(["product-wrap",`gradient-${e(o).color}`]),"data-scroll-section":""},[t("div",se,[t("div",ee,[u(ot,{link:e(o).liveUrl,subtitle:e(o).subtitle},null,8,["link","subtitle"]),u(ct,{image:e(o).mainImage,title:e(o).title},null,8,["image","title"]),u(vt,{stack:e(o).stack,title:e(o).title,description:e(o).description},null,8,["stack","title","description"]),m[0]||(m[0]=t("div",{class:"section-padding"},null,-1))])]),e(o).slug!=="pizza-next"?(c(),_(I,{key:0},[e(o).video?(c(),q($t,{key:0,video:e(o).video,color:e(o).color},null,8,["video","color"])):w("",!0),($=e(o).devices)!=null&&$.length?(c(),q(Bt,{key:1,devices:e(o).devices,title:e(o).title},null,8,["devices","title"])):w("",!0)],64)):w("",!0),e(o).slug==="pizza-next"?(c(),q(Fs,{key:1})):w("",!0),u(Nt)],2)):(c(),_("div",ie,[t("p",null,d(e(h)),1),u(x,{to:"/work",class:"back-link"},{default:G(()=>[H(d(e(s)("back_to_works")||"Вернуться к работам"),1)]),_:1})]))])}}};export{ue as default};
