var V=Object.defineProperty;var I=(r,t,i)=>t in r?V(r,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[t]=i;var p=(r,t,i)=>I(r,typeof t!="symbol"?t+"":t,i);import{j as _}from"./DzKJ9Mj2.js";function O(r,t,i){return Math.max(r,Math.min(t,i))}class j{advance(t){var h;if(!this.isRunning)return;let i=!1;if(this.lerp)this.value=(e=this.value,s=this.to,o=60*this.lerp,l=t,function(n,a,u){return(1-u)*n+u*a}(e,s,1-Math.exp(-o*l))),Math.round(this.value)===this.to&&(this.value=this.to,i=!0);else{this.currentTime+=t;const n=O(0,this.currentTime/this.duration,1);i=n>=1;const a=i?1:this.easing(n);this.value=this.from+(this.to-this.from)*a}var e,s,o,l;(h=this.onUpdate)==null||h.call(this,this.value,i),i&&this.stop()}stop(){this.isRunning=!1}fromTo(t,i,{lerp:e=.1,duration:s=1,easing:o=n=>n,onStart:l,onUpdate:h}){this.from=this.value=t,this.to=i,this.lerp=e,this.duration=s,this.easing=o,this.currentTime=0,this.isRunning=!0,l==null||l(),this.onUpdate=h}}class q{constructor({wrapper:t,content:i,autoResize:e=!0,debounce:s=250}={}){p(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});p(this,"onWrapperResize",()=>{this.wrapper===window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});p(this,"onContentResize",()=>{this.wrapper===window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=t,this.content=i,e&&(this.debouncedResize=function(o,l){let h;return function(){let n=arguments,a=this;clearTimeout(h),h=setTimeout(function(){o.apply(a,n)},l)}}(this.resize,s),this.wrapper===window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var t,i;(t=this.wrapperResizeObserver)==null||t.disconnect(),(i=this.contentResizeObserver)==null||i.disconnect(),window.removeEventListener("resize",this.debouncedResize,!1)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}}class C{constructor(){this.events={}}emit(t,...i){let e=this.events[t]||[];for(let s=0,o=e.length;s<o;s++)e[s](...i)}on(t,i){var e;return(e=this.events[t])!=null&&e.push(i)||(this.events[t]=[i]),()=>{var s;this.events[t]=(s=this.events[t])==null?void 0:s.filter(o=>i!==o)}}off(t,i){var e;this.events[t]=(e=this.events[t])==null?void 0:e.filter(s=>i!==s)}destroy(){this.events={}}}const N=100/6;class B{constructor(t,{wheelMultiplier:i=1,touchMultiplier:e=1}){p(this,"onTouchStart",t=>{const{clientX:i,clientY:e}=t.targetTouches?t.targetTouches[0]:t;this.touchStart.x=i,this.touchStart.y=e,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:t})});p(this,"onTouchMove",t=>{const{clientX:i,clientY:e}=t.targetTouches?t.targetTouches[0]:t,s=-(i-this.touchStart.x)*this.touchMultiplier,o=-(e-this.touchStart.y)*this.touchMultiplier;this.touchStart.x=i,this.touchStart.y=e,this.lastDelta={x:s,y:o},this.emitter.emit("scroll",{deltaX:s,deltaY:o,event:t})});p(this,"onTouchEnd",t=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:t})});p(this,"onWheel",t=>{let{deltaX:i,deltaY:e,deltaMode:s}=t;i*=s===1?N:s===2?this.windowWidth:1,e*=s===1?N:s===2?this.windowHeight:1,i*=this.wheelMultiplier,e*=this.wheelMultiplier,this.emitter.emit("scroll",{deltaX:i,deltaY:e,event:t})});p(this,"onWindowResize",()=>{this.windowWidth=window.innerWidth,this.windowHeight=window.innerHeight});this.element=t,this.wheelMultiplier=i,this.touchMultiplier=e,this.touchStart={x:null,y:null},this.emitter=new C,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,{passive:!1}),this.element.addEventListener("touchstart",this.onTouchStart,{passive:!1}),this.element.addEventListener("touchmove",this.onTouchMove,{passive:!1}),this.element.addEventListener("touchend",this.onTouchEnd,{passive:!1})}on(t,i){return this.emitter.on(t,i)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,{passive:!1}),this.element.removeEventListener("touchstart",this.onTouchStart,{passive:!1}),this.element.removeEventListener("touchmove",this.onTouchMove,{passive:!1}),this.element.removeEventListener("touchend",this.onTouchEnd,{passive:!1})}}class F{constructor({wrapper:t=window,content:i=document.documentElement,wheelEventsTarget:e=t,eventsTarget:s=e,smoothWheel:o=!0,syncTouch:l=!1,syncTouchLerp:h=.075,touchInertiaMultiplier:n=35,duration:a,easing:u=d=>Math.min(1,1.001-Math.pow(2,-10*d)),lerp:c=!a&&.1,infinite:v=!1,orientation:z="vertical",gestureOrientation:D="vertical",touchMultiplier:b=1,wheelMultiplier:W=1,autoResize:k=!0,__experimental__naiveDimensions:X=!1}={}){this.__isSmooth=!1,this.__isScrolling=!1,this.__isStopped=!1,this.__isLocked=!1,this.onVirtualScroll=({deltaX:d,deltaY:S,event:m})=>{if(m.ctrlKey)return;const w=m.type.includes("touch"),x=m.type.includes("wheel");if(this.options.syncTouch&&w&&m.type==="touchstart"&&!this.isStopped&&!this.isLocked)return void this.reset();const Y=d===0&&S===0,A=this.options.gestureOrientation==="vertical"&&S===0||this.options.gestureOrientation==="horizontal"&&d===0;if(Y||A)return;let y=m.composedPath();if(y=y.slice(0,y.indexOf(this.rootElement)),y.find(g=>{var L,T,E,M,R;return((L=g.hasAttribute)===null||L===void 0?void 0:L.call(g,"data-lenis-prevent"))||w&&((T=g.hasAttribute)===null||T===void 0?void 0:T.call(g,"data-lenis-prevent-touch"))||x&&((E=g.hasAttribute)===null||E===void 0?void 0:E.call(g,"data-lenis-prevent-wheel"))||((M=g.classList)===null||M===void 0?void 0:M.contains("lenis"))&&!(!((R=g.classList)===null||R===void 0)&&R.contains("lenis-stopped"))}))return;if(this.isStopped||this.isLocked)return void m.preventDefault();if(this.isSmooth=this.options.syncTouch&&w||this.options.smoothWheel&&x,!this.isSmooth)return this.isScrolling=!1,void this.animate.stop();m.preventDefault();let f=S;this.options.gestureOrientation==="both"?f=Math.abs(S)>Math.abs(d)?S:d:this.options.gestureOrientation==="horizontal"&&(f=d);const U=w&&this.options.syncTouch,H=w&&m.type==="touchend"&&Math.abs(f)>5;H&&(f=this.velocity*this.options.touchInertiaMultiplier),this.scrollTo(this.targetScroll+f,Object.assign({programmatic:!1},U?{lerp:H?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}))},this.onNativeScroll=()=>{if(!this.__preventNextScrollEvent&&!this.isScrolling){const d=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.velocity=0,this.direction=Math.sign(this.animatedScroll-d),this.emit()}},window.lenisVersion="1.0.42",t!==document.documentElement&&t!==document.body||(t=window),this.options={wrapper:t,content:i,wheelEventsTarget:e,eventsTarget:s,smoothWheel:o,syncTouch:l,syncTouchLerp:h,touchInertiaMultiplier:n,duration:a,easing:u,lerp:c,infinite:v,gestureOrientation:D,orientation:z,touchMultiplier:b,wheelMultiplier:W,autoResize:k,__experimental__naiveDimensions:X},this.animate=new j,this.emitter=new C,this.dimensions=new q({wrapper:t,content:i,autoResize:k}),this.toggleClassName("lenis",!0),this.velocity=0,this.isLocked=!1,this.isStopped=!1,this.isSmooth=l||o,this.isScrolling=!1,this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.virtualScroll=new B(s,{touchMultiplier:b,wheelMultiplier:W}),this.virtualScroll.on("scroll",this.onVirtualScroll)}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.toggleClassName("lenis",!1),this.toggleClassName("lenis-smooth",!1),this.toggleClassName("lenis-scrolling",!1),this.toggleClassName("lenis-stopped",!1),this.toggleClassName("lenis-locked",!1)}on(t,i){return this.emitter.on(t,i)}off(t,i){return this.emitter.off(t,i)}setScroll(t){this.isHorizontal?this.rootElement.scrollLeft=t:this.rootElement.scrollTop=t}resize(){this.dimensions.resize()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.velocity=0,this.animate.stop()}start(){this.isStopped&&(this.isStopped=!1,this.reset())}stop(){this.isStopped||(this.isStopped=!0,this.animate.stop(),this.reset())}raf(t){const i=t-(this.time||t);this.time=t,this.animate.advance(.001*i)}scrollTo(t,{offset:i=0,immediate:e=!1,lock:s=!1,duration:o=this.options.duration,easing:l=this.options.easing,lerp:h=!o&&this.options.lerp,onComplete:n,force:a=!1,programmatic:u=!0}={}){if(!this.isStopped&&!this.isLocked||a){if(["top","left","start"].includes(t))t=0;else if(["bottom","right","end"].includes(t))t=this.limit;else{let c;if(typeof t=="string"?c=document.querySelector(t):t!=null&&t.nodeType&&(c=t),c){if(this.options.wrapper!==window){const z=this.options.wrapper.getBoundingClientRect();i-=this.isHorizontal?z.left:z.top}const v=c.getBoundingClientRect();t=(this.isHorizontal?v.left:v.top)+this.animatedScroll}}if(typeof t=="number"){if(t+=i,t=Math.round(t),this.options.infinite?u&&(this.targetScroll=this.animatedScroll=this.scroll):t=O(0,t,this.limit),e)return this.animatedScroll=this.targetScroll=t,this.setScroll(this.scroll),this.reset(),void(n==null||n(this));if(!u){if(t===this.targetScroll)return;this.targetScroll=t}this.animate.fromTo(this.animatedScroll,t,{duration:o,easing:l,lerp:h,onStart:()=>{s&&(this.isLocked=!0),this.isScrolling=!0},onUpdate:(c,v)=>{this.isScrolling=!0,this.velocity=c-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=c,this.setScroll(this.scroll),u&&(this.targetScroll=c),v||this.emit(),v&&(this.reset(),this.emit(),n==null||n(this),this.__preventNextScrollEvent=!0,requestAnimationFrame(()=>{delete this.__preventNextScrollEvent}))}})}}}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.__experimental__naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){return this.isHorizontal?this.rootElement.scrollLeft:this.rootElement.scrollTop}get scroll(){return this.options.infinite?(t=this.animatedScroll,i=this.limit,(t%i+i)%i):this.animatedScroll;var t,i}get progress(){return this.limit===0?1:this.scroll/this.limit}get isSmooth(){return this.__isSmooth}set isSmooth(t){this.__isSmooth!==t&&(this.__isSmooth=t,this.toggleClassName("lenis-smooth",t))}get isScrolling(){return this.__isScrolling}set isScrolling(t){this.__isScrolling!==t&&(this.__isScrolling=t,this.toggleClassName("lenis-scrolling",t))}get isStopped(){return this.__isStopped}set isStopped(t){this.__isStopped!==t&&(this.__isStopped=t,this.toggleClassName("lenis-stopped",t))}get isLocked(){return this.__isLocked}set isLocked(t){this.__isLocked!==t&&(this.__isLocked=t,this.toggleClassName("lenis-locked",t))}get className(){let t="lenis";return this.isStopped&&(t+=" lenis-stopped"),this.isLocked&&(t+=" lenis-locked"),this.isScrolling&&(t+=" lenis-scrolling"),this.isSmooth&&(t+=" lenis-smooth"),t}toggleClassName(t,i){this.rootElement.classList.toggle(t,i),this.emitter.emit("className change",this)}}const G=()=>{_.scrollLenis=new F({duration:1.2,easing:t=>Math.min(1,1.001-Math.pow(2,-10*t)),direction:"vertical",smooth:!0,wheelMultiplier:1,touchMultiplier:2,lerp:.1,smoothTouch:!1,infinite:!1,gestureOrientation:"vertical",normalizeWheel:!0,smoothWheel:!0}),_.scrollLenis.on("scroll",ScrollTrigger.update);const r=t=>{_.scrollLenis.raf(t*1e3)};return gsap.ticker.add(r),gsap.ticker.lagSmoothing(0),_.scrollLenis.scrollTo(0),_.scrollLenis};export{G as u};
