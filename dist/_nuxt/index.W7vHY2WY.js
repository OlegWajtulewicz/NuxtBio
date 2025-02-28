import{j as c,S as f,h as P,o as v,c as m,b as V,k as B,W as G,l as b,D as U,C as H,P as I,m as N,M as A,B as R,p as W,q as j,s as K,_ as M,$ as u,u as g,n as L,a as e,t as h,f as p,r as O,v as X,x as J,y as Q,e as _,F as k,z as E,A as q,E as T,G as D,H as S,I as Y,d as Z,w as ee,g as F}from"./entry.QPLu6t18.js";import{M as te}from"./MouseCursor.CS4K7yc-.js";import{w as z}from"./works.CiKLYgJL.js";import{f as se}from"./useFirstScreenAnimation.ujgZ7hPi.js";const ae=`
    float hue2rgb(float f1, float f2, float hue) {
        if (hue < 0.0)
            hue += 1.0;
        else if (hue > 1.0)
            hue -= 1.0;
        float res;
        if ((6.0 * hue) < 1.0)
            res = f1 + (f2 - f1) * 6.0 * hue;
        else if ((2.0 * hue) < 1.0)
            res = f2;
        else if ((3.0 * hue) < 2.0)
            res = f1 + (f2 - f1) * ((2.0 / 3.0) - hue) * 6.0;
        else
            res = f1;
        return res;
    }

    vec3 hsl2rgb(vec3 hsl) {
        vec3 rgb;
        
        if (hsl.y == 0.0) {
            rgb = vec3(hsl.z); // Luminance
        } else {
            float f2;
            
            if (hsl.z < 0.5)
                f2 = hsl.z * (1.0 + hsl.y);
            else
                f2 = hsl.z + hsl.y - hsl.y * hsl.z;
                
            float f1 = 2.0 * hsl.z - f2;
            
            rgb.r = hue2rgb(f1, f2, hsl.x + (1.0/3.0));
            rgb.g = hue2rgb(f1, f2, hsl.x);
            rgb.b = hue2rgb(f1, f2, hsl.x - (1.0/3.0));
        }   
        return rgb;
    }

    vec3 hsl2rgb(float h, float s, float l) {
        return hsl2rgb(vec3(h, s, l));
    }

    vec3 random3(vec3 c) {
        float j = 4096.0*sin(dot(c,vec3(17.0, 59.4, 15.0)));
        vec3 r;
        r.z = fract(512.0*j);
        j *= .125;
        r.x = fract(512.0*j);
        j *= .125;
        r.y = fract(512.0*j);
        return r-0.5;
    }

    const float F3 =  0.3333333;
    const float G3 =  0.1666667;

    float simplex3d(vec3 p) {
        vec3 s = floor(p + dot(p, vec3(F3)));
        vec3 x = p - s + dot(s, vec3(G3));
        
        vec3 e = step(vec3(0.0), x - x.yzx);
        vec3 i1 = e*(1.0 - e.zxy);
        vec3 i2 = 1.0 - e.zxy*(1.0 - e);
            
        vec3 x1 = x - i1 + G3;
        vec3 x2 = x - i2 + 2.0*G3;
        vec3 x3 = x - 1.0 + 3.0*G3;
        
        vec4 w, d;
        
        w.x = dot(x, x);
        w.y = dot(x1, x1);
        w.z = dot(x2, x2);
        w.w = dot(x3, x3);
        
        w = max(0.6 - w, 0.0);
        
        d.x = dot(random3(s), x);
        d.y = dot(random3(s + i1), x1);
        d.z = dot(random3(s + i2), x2);
        d.w = dot(random3(s + 1.0), x3);
        
        w *= w;
        w *= w;
        d *= w;
        
        return dot(d, vec4(52.0));
    }

    float hash(vec2 p) { return fract(1e4 * sin(17.0 * p.x + p.y * 0.1) * (0.1 + abs(sin(p.y * 13.0 + p.x)))); }
    
    varying vec2 vUv;
    uniform float u_progress;
    uniform float u_time;
    
    void main() {    
        float n = simplex3d(vec3(vUv.xy, u_time * 1.0));
        vec3 color = hsl2rgb(
            0.0 + n * 0.1,
            0.0,
            0.03
        );
        
        float val = hash(vUv + u_time);
        
        gl_FragColor = vec4(color + vec3(val / 20.), 1.0);
    }
`,ie=`
    varying vec2 vUv;
    uniform float u_time;
    
    void main() {
        vec3 p = position;
        
        vec4 mvPosition = modelViewMatrix * vec4(p, 1.0);
        gl_PointSize = 10.0 * (1.0 / -mvPosition.z);
        gl_Position = projectionMatrix * mvPosition;
        
        vUv = uv;
    }
`,oe=`
    uniform float u_progress;
    void main() {
        gl_FragColor = vec4(0.4, 0.4, 0.4, u_progress);
    }
`,re=`
    uniform float u_time;
    void main() {
        vec3 p = position;
        
        p.y += 0.25*(sin(p.y * 5.0 + u_time) * 0.5 + 0.5);
        p.z += 0.05*(sin(p.y * 10.0 + u_time) * 0.5 + 0.5);
        
        vec4 mvPosition = modelViewMatrix * vec4(p, 1.0);
        gl_PointSize = 10.0 * (1.0 / -mvPosition.z);
        gl_Position = projectionMatrix * mvPosition;
    }
`,ne=`
    varying vec2 vUv;
    varying vec3 v_color;
    varying vec3 v_normal;

    void main() {
        vec3 light = vec3(0.0);
        vec3 skyColor = vec3(1.000, 1.000, 0.547);
        vec3 groundColor = vec3(0.562, 0.275, 0.111);
        
        vec3 lightDirection = normalize(vec3(0.0, -1.0, -1.0));
        light += dot(lightDirection, v_normal);
        
        light = mix(skyColor, groundColor, dot(lightDirection, v_normal));
        
        gl_FragColor = vec4(light * v_color, 1.0);
    }
`,le=`
    varying vec2 vUv;
    varying vec3 v_color;
    varying vec3 v_normal;
    
    uniform float u_time;
    uniform float u_progress;
    
    vec3 hsv2rgb(vec3 c) {
        vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
        vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
        return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
    }
    
    vec4 permute(vec4 x) { return mod(((x * 34.0) + 1.0) * x, 289.0); }
    vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

    float snoise(vec3 v) {
        const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
        const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

        vec3 i = floor(v + dot(v, C.yyy));
        vec3 x0 = v - i + dot(i, C.xxx);

        vec3 g = step(x0.yzx, x0.xyz);
        vec3 l = 1.0 - g;
        vec3 i1 = min(g.xyz, l.zxy);
        vec3 i2 = max(g.xyz, l.zxy);

        vec3 x1 = x0 - i1 + 1.0 * C.xxx;
        vec3 x2 = x0 - i2 + 2.0 * C.xxx;
        vec3 x3 = x0 - 1. + 3.0 * C.xxx;

        i = mod(i, 289.0);
        vec4 p = permute(permute(permute(
                i.z + vec4(0.0, i1.z, i2.z, 1.0))
            + i.y + vec4(0.0, i1.y, i2.y, 1.0))
            + i.x + vec4(0.0, i1.x, i2.x, 1.0));

        float n_ = 1.0 / 7.0;
        vec3 ns = n_ * D.wyz - D.xzx;

        vec4 j = p - 49.0 * floor(p * ns.z * ns.z);

        vec4 x_ = floor(j * ns.z);
        vec4 y_ = floor(j - 7.0 * x_);

        vec4 x = x_ * ns.x + ns.yyyy;
        vec4 y = y_ * ns.x + ns.yyyy;
        vec4 h = 1.0 - abs(x) - abs(y);

        vec4 b0 = vec4(x.xy, y.xy);
        vec4 b1 = vec4(x.zw, y.zw);

        vec4 s0 = floor(b0) * 2.0 + 1.0;
        vec4 s1 = floor(b1) * 2.0 + 1.0;
        vec4 sh = -step(h, vec4(0.0));

        vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
        vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;

        vec3 p0 = vec3(a0.xy, h.x);
        vec3 p1 = vec3(a0.zw, h.y);
        vec3 p2 = vec3(a1.xy, h.z);
        vec3 p3 = vec3(a1.zw, h.w);

        vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
        p0 *= norm.x;
        p1 *= norm.y;
        p2 *= norm.z;
        p3 *= norm.w;

        vec4 m = max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
        m = m * m;
        return 42.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1),
            dot(p2, x2), dot(p3, x3)));
    }

    void main() {
        vUv = uv;
        float noise = snoise(position * u_progress + u_time / 10.0);
        vec3 newPos = position * (noise + 0.7);
            
        v_color = hsv2rgb(vec3(noise * 0.1 + 0.03, .7, 0.7));
            
        v_normal = normal;

        gl_Position = projectionMatrix * modelViewMatrix * vec4(newPos, 1.0);
    }
`;c.registerPlugin(f);const ce=(s=".home")=>{const a=c.utils.toArray(`${s} .home__text > *`),i=[{y:300},{y:150},{y:550},{y:400}];a.forEach((t,n)=>{c.to(t,{y:i[n].y,ease:"none",scrollTrigger:{trigger:s,start:"top top",end:"bottom top",scrub:1}})})},de={class:"home"},ve={__name:"MainHome",setup(s){P(()=>{a(),ce()});function a(){class i{constructor(l=document.body){this.container=l,this.init()}init(){this.setup(),this.camera(),this.addToScene(),this.createParticles(),this.createBackground(),this.eventListeners(),this.render(),this.animate()}setup(){this.scene=new B,this.renderer=new G({antialias:!0}),this.renderer.setSize(this.viewport.width,this.viewport.height),this.renderer.setPixelRatio(window.devicePixelRatio),this.container.appendChild(this.renderer.domElement),this.material=new b({vertexShader:le,fragmentShader:ne,wireframe:!1,uniforms:{u_time:{value:0},u_progress:{value:0}}}),this.pointsMaterial=new b({vertexShader:re,fragmentShader:oe,wireframe:!1,side:U,transparent:!0,uniforms:{u_time:{value:0},u_progress:{value:0}}}),this.clock=new H}camera(){const o=this.viewport.aspectRatio;this.camera=new I(40,o,.1,1e4),this.camera.position.set(0,0,10)}addToScene(){this.geometry=new N(1,162,162);const l=new A(this.geometry,this.material);this.scene.add(l)}createParticles(){const r=new Float32Array(9e4);this.particleGeometry=new R;let d=Math.PI*(3-Math.sqrt(5)),o=2/3e4,w=2;for(let x=0;x<3e4;x++){let y=x*o-1+o/2,$=Math.sqrt(1-y*y),C=x*d;r[3*x]=w*Math.cos(C)*$,r[3*x+1]=w*y,r[3*x+2]=w*Math.sin(C)*$}this.particleGeometry.setAttribute("position",new W(r,3)),this.points=new j(this.particleGeometry,this.pointsMaterial),this.scene.add(this.points)}createBackground(){const l=new K(100,15,16);this.backgroundMaterial=new b({vertexShader:ie,fragmentShader:ae,wireframe:!1,uniforms:{u_time:{value:0},u_progress:{value:0}}});const r=new A(l,this.backgroundMaterial);r.position.z=-2,this.scene.add(r)}render(){this.camera.lookAt(this.scene.position),this.renderer.render(this.scene,this.camera),this.material.uniforms.u_time.value=this.clock.getElapsedTime(),this.pointsMaterial.uniforms.u_time.value=this.clock.getElapsedTime(),this.backgroundMaterial.uniforms.u_time.value=this.clock.getElapsedTime(),this.points.rotation.y+=.005,requestAnimationFrame(()=>{this.render()})}animate(){c.timeline({repeat:-1,yoyo:!0}).to(this.material.uniforms.u_progress,{value:5,duration:5,ease:"power3.inOut"}).to(this.material.uniforms.u_progress,{value:1,duration:5,ease:"power3.inOut"}),c.to(this.pointsMaterial.uniforms.u_progress,{value:.4,duration:5,ease:"power3.inOut"})}eventListeners(){window.addEventListener("resize",this.onWindowResize.bind(this))}onWindowResize(){this.material.uniforms.u_time.value=this.clock.getElapsedTime(),this.camera.aspect=this.viewport.aspectRatio,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.viewport.width,this.viewport.height)}get viewport(){const l=this.container.clientWidth,r=this.container.clientHeight,d=l/r;return{width:l,height:r,aspectRatio:d}}}const t=document.getElementById("myCanvas");t&&new i(t)}return(i,t)=>(v(),m("section",de,t[0]||(t[0]=[V('<div class="home__bg" data-scroll data-scroll-speed="+1.5"></div><div class="home__container"><div class="home__text" data-scroll data-scroll-speed="-3" data-scroll-position="top"><div class=""><h1 data-value="UI/UX Design" class="home__subtitle text-effect">Creative </h1></div><div class="home__canvas"><div class="home__canvas-wrap" id="myCanvas"></div></div><h1 class="home__subtitle--right" data-scroll data-scroll-speed="-2" data-scroll-position="top"><div class="">web </div></h1><h1 class="home__subtitle--right1"><div class="" data-scroll data-scroll-speed="-2" data-scroll-position="top"> development </div></h1></div></div><div class="line line-main"><div class="line-shadow"></div></div>',3)])))}};c.registerPlugin(f);function me(){u("[data-marquee-target]").each(function(){let s=u(this),a=s.find(".marquee-content").width(),i=s.attr("data-marquee-speed")*(a/u(window).width());u(window).width()<=540?i=i*.25:u(window).width()<=1024&&(i=i*.5);let t=1,n=c.to(s.find(".marquee-content"),{xPercent:-100,repeat:-1,duration:i,ease:"linear",paused:!0}).totalProgress(.5);c.set(s.find(".marquee-content"),{xPercent:50}),f.create({trigger:s,start:"top bottom",end:"bottom top",onUpdate(l){l.direction!==t&&(t*=-1,s.attr("data-marquee-direction")=="right"?c.to([n],{timeScale:t*-1,overwrite:!0}):c.to([n],{timeScale:t,overwrite:!0})),l.direction===-1?s.attr("data-marquee-status","normal"):s.attr("data-marquee-status","inverted")},onEnter:()=>n.play(),onEnterBack:()=>n.play(),onLeave:()=>n.pause(),onLeaveBack:()=>n.pause()}),s.each(function(){let l=u(this),r=u(this).find(".marquee-scroll"),d=u(this).attr("data-marquee-scroll-speed"),o=c.timeline({scrollTrigger:{trigger:u(this),start:"0% 100%",end:"100% 0%",scrub:0}});l.attr("data-marquee-direction")=="left"&&o.fromTo(r,{x:d+"vw"},{x:d*-1+"vw",ease:"none"}),l.attr("data-marquee-direction")=="right"&&o.fromTo(r,{x:d*-1+"vw"},{x:d+"vw",ease:"none"})})})}const ue={mounted(){me()}},pe={class:"section section-home-intro-marquee","data-scroll-section":""};function _e(s,a,i,t,n,l){return v(),m("section",pe,a[0]||(a[0]=[V('<div class="container full" data-v-6cad0709><div class="marquee-group" data-v-6cad0709><div class="marquee" data-marquee-target data-marquee-direction="left" data-marquee-status="inverted" data-marquee-speed="20" data-marquee-scroll-speed="10" data-v-6cad0709><div class="marquee-scroll" data-v-6cad0709><div class="marquee-content" data-v-6cad0709><span class="word" data-v-6cad0709>Aleh Vaitulevich</span><span class="divider" data-v-6cad0709>•</span><span class="word" data-v-6cad0709>Freelance Developer</span><span class="divider" data-v-6cad0709>•</span><span class="word" data-v-6cad0709>Aleh Vaitulevich</span><span class="divider" data-v-6cad0709>•</span><span class="word" data-v-6cad0709>Freelance Developer</span><span class="divider" data-v-6cad0709>•</span><span class="word" data-v-6cad0709>Aleh Vaitulevich</span><span class="divider" data-v-6cad0709>•</span><span class="word" data-v-6cad0709>Freelance Developer</span><span class="divider" data-v-6cad0709>•</span></div><div class="marquee-content" data-v-6cad0709><span class="word" data-v-6cad0709>Aleh Vaitulevich</span><span class="divider" data-v-6cad0709>•</span><span class="word" data-v-6cad0709>Freelance Developer</span><span class="divider" data-v-6cad0709>•</span><span class="word" data-v-6cad0709>Aleh Vaitulevich</span><span class="divider" data-v-6cad0709>•</span><span class="word" data-v-6cad0709>Freelance Developer</span><span class="divider" data-v-6cad0709>•</span><span class="word" data-v-6cad0709>Aleh Vaitulevich</span><span class="divider" data-v-6cad0709>•</span><span class="word" data-v-6cad0709>Freelance Developer</span><span class="divider" data-v-6cad0709>•</span></div></div></div></div></div>',1)]))}const he=M(ue,[["render",_e],["__scopeId","data-v-6cad0709"]]);c.registerPlugin(f);function xe(){for(var s=document.getElementsByClassName("span-lines"),a=0;a<s.length;a++){var i=s.item(a);i.innerHTML=i.innerHTML.replace(/(^|<\/?[^>]+>|\s+)([^\s<]+)/g,'$1<span class="span-line"><span class="span-line-inner">$2</span></span>')}}function fe(){document.querySelector(".span-lines.animate")&&document.querySelectorAll(".span-lines.animate").forEach(function(s){let a=s.querySelectorAll(".span-line-inner"),i=c.timeline({scrollTrigger:{trigger:s,start:"top bottom",end:"bottom top",toggleActions:"play none none reverse"}});a.length>0&&i.from(a,{y:"100%",opacity:0,duration:1,stagger:.05,ease:"power3.out",clearProps:"all"})})}const ge={class:"about","data-scroll-section":""},we={class:"about__container"},ye={class:"about__wrapper"},be={class:"about__body"},ke={class:"about__text"},ze={class:"span-lines animate"},qe={class:"about__kontext"},Se={class:"about__kontext--text"},Pe={__name:"AboutHome",setup(s){const{t:a}=g();return c.registerPlugin(f),P(async()=>{await L(),document.querySelectorAll(".span-lines").length>0&&(xe(),fe())}),(i,t)=>(v(),m("section",ge,[e("div",we,[e("div",ye,[e("div",be,[e("div",ke,[e("p",ze,h(p(a)("about_home.main_text")),1)]),e("div",qe,[e("p",Se,h(p(a)("about_home.context_text")),1),t[0]||(t[0]=e("div",{class:"about__image magnetic","data-scroll":"","data-scroll-speed":"-1.2"},[e("div",{class:"spinner magnetic","data-strength":"70"})],-1))])])])])]))}},Me=M(Pe,[["__scopeId","data-v-a7a0463b"]]),$e={class:"latest-work","data-scroll-section":""},Ce={class:"latest-work__container"},Ae={class:"latest-work__title"},Ee={class:"latest-work__wrapper work-wrapper"},Te={class:"item-latest-work__title"},De={class:"item-latest-work__title--item"},Fe={class:"item-latest-work__body-image"},Ve={key:0,class:"item-latest-work__images"},Le=["data-src","alt"],Be={class:"item-latest-work__descr"},Ge={class:"latest-work__wrapper--tiles"},Ue={key:0,class:"item-latest-work__images"},He=["data-src","alt"],Ie={class:"item-latest-work__title"},Ne={class:"item-latest-work__title--item"},Re={class:"item-latest-work__descr"},We={__name:"LatestWork",setup(s){const{t:a}=g(),i=O(!1),{$locomotiveScroll:t}=X(),n=()=>{t&&setTimeout(()=>{t.update()},100)};return P(()=>{i.value=!0,n(),window.addEventListener("resize",n)}),J(()=>{window.removeEventListener("resize",n)}),(l,r)=>{const d=Q("lazy");return v(),m(k,null,[_(te,{projects:p(z).slice(0,4)},null,8,["projects"]),e("section",$e,[e("div",Ce,[e("h3",Ae,h(p(a)("latest_work.title")),1),e("ul",Ee,[(v(!0),m(k,null,E(p(z).slice(0,4),o=>(v(),m("li",{key:o.image,class:"latest-work__item item-latest-work visible"},[r[0]||(r[0]=e("div",{class:"latest-work__diwider"},null,-1)),_(p(S),{to:`/work/${o.slug}`,class:"item-latest-work__body"},{default:q(()=>[e("div",Te,[e("div",De,h(o.title),1)]),e("div",Fe,[i.value?T((v(),m("div",Ve,[e("img",{"data-src":o.image,alt:o.title,class:"item-latest-work__image ibg"},null,8,Le)])),[[d]]):D("",!0)]),e("div",Be,h(o.service),1)]),_:2},1032,["to"])]))),128)),r[1]||(r[1]=e("div",{class:"latest-work__diwider"},null,-1))]),e("ul",Ge,[(v(!0),m(k,null,E(p(z).slice(0,2),o=>(v(),m("li",{key:o.image,class:"latest-work__item item-latest-work visible"},[_(p(S),{to:`/work/${o.slug}`,class:"item-latest-work__body single-tile-wrap"},{default:q(()=>[i.value?T((v(),m("div",Ue,[e("div",{class:Y(["item-latest-work__color",o.color])},null,2),e("img",{"data-src":o.image,alt:o.title,class:"tile-image item-latest-work__image ibg"},null,8,He)])),[[d]]):D("",!0),e("div",Ie,[e("div",Ne,h(o.title),1)]),r[2]||(r[2]=e("div",{class:"latest-work__diwider"},null,-1)),e("div",Re,h(o.service),1)]),_:2},1032,["to"])]))),128))])])])],64)}}},je={class:"all-works","data-scroll-section":""},Ke={class:"all-works__container"},Oe={class:"btn__text"},Xe={class:"btn-text-p change"},Je={__name:"AllWorksButton",setup(s){const{t:a}=g();return(i,t)=>{const n=S;return v(),m("section",je,[e("div",Ke,[_(n,{to:"/work",class:"all-works__btn btn magnetic","data-btn-hover":"","data-strength":"70","data-strength-text":"40"},{default:q(()=>[t[0]||(t[0]=e("div",{class:"btn__bg"},null,-1)),t[1]||(t[1]=e("div",{class:"btn__circle-wrap"},[e("div",{class:"btn__circle"},[e("div",{class:"before__100"})])],-1)),e("span",Oe,[e("p",Xe,h(p(a)("latest_work.all_works")),1)]),t[2]||(t[2]=e("div",{class:"btn__border"},null,-1))]),_:1})]),t[3]||(t[3]=e("div",{class:"line"},null,-1))])}}},Qe={__name:"index",setup(s){const{t:a,locale:i}=g();return Z(()=>({title:a("meta.home.title")})),ee(()=>[F.isTransitionFinish,F.isPreloaderVisible],([t,n])=>{t&&!n&&L(()=>{se({parent:".main"})})}),(t,n)=>(v(),m("div",null,[_(ve),_(he),_(Me),_(We),_(Je)]))}},st=M(Qe,[["__scopeId","data-v-a0236b8e"]]);export{st as default};
