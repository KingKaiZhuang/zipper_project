(function(){"use strict";var n={4022:function(n,e,t){var r=t(9242),o=t(3396);const a={class:"navbar navbar-expand-lg bg-body-tertiary"},i={class:"container-fluid"},u=(0,o._)("a",{class:"navbar-brand",href:"#"},"拉鍊損壞偵測",-1),c=(0,o._)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,o._)("span",{class:"navbar-toggler-icon"})],-1),l={class:"collapse navbar-collapse",id:"navbarNav"},s={class:"navbar-nav"},f={class:"nav-item"},p={class:"nav-item"},d={class:"nav-item"};function v(n,e){const t=(0,o.up)("router-link"),r=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("nav",a,[(0,o._)("div",i,[u,c,(0,o._)("div",l,[(0,o._)("ul",s,[(0,o._)("li",f,[(0,o.Wm)(t,{to:"/",class:"nav-link"},{default:(0,o.w5)((()=>[(0,o.Uk)("首頁")])),_:1})]),(0,o._)("li",p,[(0,o.Wm)(t,{to:"/about",class:"nav-link"},{default:(0,o.w5)((()=>[(0,o.Uk)("關於")])),_:1})]),(0,o._)("li",d,[(0,o.Wm)(t,{to:"/zipperWatch",class:"nav-link"},{default:(0,o.w5)((()=>[(0,o.Uk)("數量監控")])),_:1})])])])])]),(0,o.Wm)(r)],64)}var b=t(89);const m={},g=(0,b.Z)(m,[["render",v]]);var h=g,y=t(2483);const _={class:"home"};function w(n,e,t,r,a,i){const u=(0,o.up)("HelloWorld");return(0,o.wg)(),(0,o.iD)("div",_,[(0,o.Wm)(u,{msg:"Zipper Watch"})])}var k=t(7139);const j={class:"hello"},O={class:"wrapper"},W={x:"50%",y:"50%",dy:".35em","text-anchor":"middle"};function x(n,e,t,r,a,i){return(0,o.wg)(),(0,o.iD)("div",j,[(0,o._)("div",O,[((0,o.wg)(),(0,o.iD)("svg",null,[(0,o._)("text",W,(0,k.zw)(t.msg),1)]))])])}var T={name:"HelloWorld",props:{msg:String}};const z=(0,b.Z)(T,[["render",x],["__scopeId","data-v-3375691d"]]);var C=z,E={name:"HomeView",components:{HelloWorld:C}};const N=(0,b.Z)(E,[["render",w]]);var P=N;const S=[{path:"/",name:"home",component:P},{path:"/about",name:"about",component:()=>t.e(833).then(t.bind(t,833))},{path:"/zipperWatch",name:"zipperWatch",component:()=>t.e(834).then(t.bind(t,3834))}],H=(0,y.p7)({history:(0,y.r5)(),routes:S});var A=H;(0,r.ri)(h).use(A).mount("#app")}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={exports:{}};return n[r].call(a.exports,a,a.exports,t),a.exports}t.m=n,function(){var n=[];t.O=function(e,r,o,a){if(!r){var i=1/0;for(s=0;s<n.length;s++){r=n[s][0],o=n[s][1],a=n[s][2];for(var u=!0,c=0;c<r.length;c++)(!1&a||i>=a)&&Object.keys(t.O).every((function(n){return t.O[n](r[c])}))?r.splice(c--,1):(u=!1,a<i&&(i=a));if(u){n.splice(s--,1);var l=o();void 0!==l&&(e=l)}}return e}a=a||0;for(var s=n.length;s>0&&n[s-1][2]>a;s--)n[s]=n[s-1];n[s]=[r,o,a]}}(),function(){t.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return t.d(e,{a:e}),e}}(),function(){t.d=function(n,e){for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})}}(),function(){t.f={},t.e=function(n){return Promise.all(Object.keys(t.f).reduce((function(e,r){return t.f[r](n,e),e}),[]))}}(),function(){t.u=function(n){return"js/"+n+"."+{833:"26af5419",834:"a5d2540a"}[n]+".js"}}(),function(){t.miniCssF=function(n){}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)}}(),function(){var n={},e="zipper_project:";t.l=function(r,o,a,i){if(n[r])n[r].push(o);else{var u,c;if(void 0!==a)for(var l=document.getElementsByTagName("script"),s=0;s<l.length;s++){var f=l[s];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==e+a){u=f;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,t.nc&&u.setAttribute("nonce",t.nc),u.setAttribute("data-webpack",e+a),u.src=r),n[r]=[o];var p=function(e,t){u.onerror=u.onload=null,clearTimeout(d);var o=n[r];if(delete n[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(n){return n(t)})),e)return e(t)},d=setTimeout(p.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=p.bind(null,u.onerror),u.onload=p.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){t.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})}}(),function(){t.p="/"}(),function(){var n={143:0};t.f.j=function(e,r){var o=t.o(n,e)?n[e]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(t,r){o=n[e]=[t,r]}));r.push(o[2]=a);var i=t.p+t.u(e),u=new Error,c=function(r){if(t.o(n,e)&&(o=n[e],0!==o&&(n[e]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;u.message="Loading chunk "+e+" failed.\n("+a+": "+i+")",u.name="ChunkLoadError",u.type=a,u.request=i,o[1](u)}};t.l(i,c,"chunk-"+e,e)}},t.O.j=function(e){return 0===n[e]};var e=function(e,r){var o,a,i=r[0],u=r[1],c=r[2],l=0;if(i.some((function(e){return 0!==n[e]}))){for(o in u)t.o(u,o)&&(t.m[o]=u[o]);if(c)var s=c(t)}for(e&&e(r);l<i.length;l++)a=i[l],t.o(n,a)&&n[a]&&n[a][0](),n[a]=0;return t.O(s)},r=self["webpackChunkzipper_project"]=self["webpackChunkzipper_project"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(4022)}));r=t.O(r)})();
//# sourceMappingURL=app.ab2463b1.js.map