(function(t){function e(e){for(var o,i,s=e[0],l=e[1],c=e[2],u=0,d=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);f&&f(e);while(d.length)d.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,i=1;i<n.length;i++){var s=n[i];0!==r[s]&&(o=!1)}o&&(a.splice(e--,1),t=l(l.s=n[0]))}return t}var o={},i={app:0},r={app:0},a=[];function s(t){return l.p+"js/"+({bloghome:"bloghome","blogitems~viewpost":"blogitems~viewpost",blogitems:"blogitems",viewpost:"viewpost",introduction:"introduction",notfound:"notfound",overview:"overview",portfolio:"portfolio"}[t]||t)+"."+{bloghome:"35a37575","blogitems~viewpost":"457c6988",blogitems:"a67ed1d5",viewpost:"7c32eea4",introduction:"cc3de1ba",notfound:"a71b89e5",overview:"c2799dc3",portfolio:"5fa4fed4"}[t]+".js"}function l(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(t){var e=[],n={"blogitems~viewpost":1,blogitems:1,viewpost:1,introduction:1,notfound:1,overview:1,portfolio:1};i[t]?e.push(i[t]):0!==i[t]&&n[t]&&e.push(i[t]=new Promise((function(e,n){for(var o="css/"+({bloghome:"bloghome","blogitems~viewpost":"blogitems~viewpost",blogitems:"blogitems",viewpost:"viewpost",introduction:"introduction",notfound:"notfound",overview:"overview",portfolio:"portfolio"}[t]||t)+"."+{bloghome:"31d6cfe0","blogitems~viewpost":"32a0fd96",blogitems:"75ea1dc2",viewpost:"3083137c",introduction:"7c7ebef5",notfound:"84d7fa93",overview:"2a82d920",portfolio:"09081052"}[t]+".css",r=l.p+o,a=document.getElementsByTagName("link"),s=0;s<a.length;s++){var c=a[s],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===o||u===r))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){c=d[s],u=c.getAttribute("data-href");if(u===o||u===r)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var o=e&&e.target&&e.target.src||r,a=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=o,delete i[t],f.parentNode.removeChild(f),n(a)},f.href=r;var v=document.getElementsByTagName("head")[0];v.appendChild(f)})).then((function(){i[t]=0})));var o=r[t];if(0!==o)if(o)e.push(o[2]);else{var a=new Promise((function(e,n){o=r[t]=[e,n]}));e.push(o[2]=a);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=s(t);var d=new Error;c=function(e){u.onerror=u.onload=null,clearTimeout(f);var n=r[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",d.name="ChunkLoadError",d.type=o,d.request=i,n[1](d)}r[t]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(e)},l.m=t,l.c=o,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)l.d(n,o,function(e){return t[e]}.bind(null,o));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var f=u;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"05e5":function(t,e,n){},"11be":function(t,e,n){"use strict";var o=n("05e5"),i=n.n(o);i.a},"333f":function(t,e,n){},"3a19":function(t,e,n){t.exports=n.p+"img/profile.030cc9c0.jpg"},"47e2":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),i=(n("73ec"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{"vs-theme":t.$vuetify.theme.dark?"dark":"light"}},[n("v-app",[n("div",{staticClass:"show-myprofile"},[n("profileBoxToggleShow")],1),n("ThemeChanger"),n("vue-page-transition",{attrs:{name:"fade-in-left"}},[n("router-view")],1)],1)],1)}),r=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"setting-changer"},[n("v-btn",{staticClass:"button",class:t.showButton?"night":"day",attrs:{icon:"","x-large":!(t.windowWidth<=425)},on:{click:function(e){return t.clickButton()}}},[t.showButton?n("v-icon",{attrs:{"x-large":!(t.windowWidth<=425)}},[t._v(t._s(t.mdiWeatherSunny))]):n("v-icon",{attrs:{"x-large":!(t.windowWidth<=425)}},[t._v(t._s(t.mdiWeatherNight))])],1)],1)},s=[],l=n("94ed"),c={data:function(){return{showButton:this.$vuetify.theme.dark,mdiWeatherSunny:l["L"],mdiWeatherNight:l["K"],windowWidth:window.innerWidth}},methods:{clickButton:function(){this.showButton=!this.showButton,this.$vuetify.theme.dark=!this.$vuetify.theme.dark,localStorage.setItem("theme-select",this.$vuetify.theme.dark)},onResize:function(){this.windowWidth=window.innerWidth}},mounted:function(){var t=this;this.$nextTick((function(){window.addEventListener("resize",t.onResize)}))},beforeDestroy:function(){window.removeEventListener("resize",this.onResize)}},u=c,d=(n("d9a1"),n("2877")),f=n("6544"),v=n.n(f),h=n("8336"),p=n("132d"),m=Object(d["a"])(u,a,s,!1,null,null,null),w=m.exports;v()(m,{VBtn:h["a"],VIcon:p["a"]});var b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-btn",{staticClass:"button-show-overlay",class:t.$vuetify.theme.dark?"night":"day",attrs:{icon:"","x-large":!(t.windowWidth<=425)},on:{click:function(e){t.overlay=!t.overlay}}},[n("v-icon",{attrs:{"x-large":!(t.windowWidth<=425)}},[t._v(t._s(t.showIcon))])],1),n("div",{class:t.overlay?"show-overlay":"",on:{click:function(e){t.overlay=!t.overlay}}}),n("div",{staticClass:"profile-box-show",style:t.overlay?"margin-left: 0px;":"margin-left: -500px;"},[n("ProfileBox",{attrs:{"full-height":!1},scopedSlots:t._u([{key:"closeButton",fn:function(){return[n("v-btn",{staticStyle:{float:"right"},attrs:{icon:""}},[n("v-icon",{on:{click:function(e){t.overlay=!t.overlay}}},[t._v(t._s(t.closeIcon))])],1)]},proxy:!0}])})],1)],1)},g=[],y=n("a805"),_=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"profile-box"},[o("v-card",{staticClass:"mx-auto profile-card",style:t.fullHeight?"height: 100vh;":"",attrs:{elevation:"0"}},[t._t("closeButton"),o("div",[o("v-card-text",[o("div",{staticClass:"profile-image",staticStyle:{"text-align":"center"}},[o("img",{attrs:{src:n("3a19")}})]),o("div",{staticStyle:{"text-align":"left"}},[o("h3",{staticClass:"headline mb-1 profile-name"},[t._v(t._s(t.name))]),o("h2",[t._v(t._s(t.username))]),o("p",{staticClass:"profile-details"},[t._v(t._s(t.about))])])]),o("div",{staticClass:"profile-links"},t._l(t.links,(function(e,n){return o("span",{key:n},[o("v-icon",{staticClass:"icons",staticStyle:{display:"inline"},attrs:{small:"",color:e.icon_color}},[t._v(t._s(e.icon))]),o("a",{style:t.$vuetify.theme.dark?"color: white":"color: #2b2b2b",attrs:{href:e.link,target:"_blank"}},[t._v(t._s(e.text))])],1)})),0)],1)],2)],1)},x=[],k={name:"Home",props:{show:{type:Boolean,default:!1},fullHeight:{type:Boolean,default:!1}},data:function(){return{name:y["d"],username:y["f"],about:y["a"],links:y["c"],overlay:!1,showIcon:l["a"],closeIcon:l["k"]}},methods:{onResize:function(){this.windowWidth=window.innerWidth}},mounted:function(){var t=this;this.$nextTick((function(){window.addEventListener("resize",t.onResize)}))},beforeDestroy:function(){window.removeEventListener("resize",this.onResize)}},C=k,B=(n("5b7d"),n("b0af")),S=n("99d9"),T=Object(d["a"])(C,_,x,!1,null,null,null),j=T.exports;v()(T,{VCard:B["a"],VCardText:S["a"],VIcon:p["a"]});var O={name:"Home",components:{ProfileBox:j},data:function(){return{name:y["d"],username:y["f"],about:y["a"],links:y["c"],overlay:!1,showIcon:l["a"],closeIcon:l["k"],windowWidth:window.innerWidth}},methods:{onResize:function(){this.windowWidth=window.innerWidth}},mounted:function(){var t=this;this.$nextTick((function(){window.addEventListener("resize",t.onResize)}))},beforeDestroy:function(){window.removeEventListener("resize",this.onResize)}},I=O,$=(n("11be"),Object(d["a"])(I,b,g,!1,null,null,null)),E=$.exports;v()($,{VBtn:h["a"],VIcon:p["a"]});var W={name:"App",components:{ThemeChanger:w,profileBoxToggleShow:E},beforeCreate:function(){var t=localStorage.getItem("theme-select");t&&(this.$vuetify.theme.dark="true"==t)},data:function(){return{}}},P=W,L=n("7496"),V=Object(d["a"])(P,i,r,!1,null,null,null),z=V.exports;v()(V,{VApp:L["a"]});n("d3b7");var D=n("8c4f"),N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content-container"},[n("div",{staticClass:"home"},[n("ShowTabsOnScroll"),n("div",{staticClass:"profile-container"},[n("div",{staticClass:"profile-box-here",staticStyle:{"margin-top":"10px"},style:"Introduction"==t.$route.name?"width: 0%; opacity: 0;":"width: 25%; opacity: 1 !important;"},[n("ProfileBox",{staticClass:"float-right"})],1),n("div",{staticClass:"info-box",style:"Introduction"==t.$route.name?"width: 100%;":"width: 75%;"},[n("v-tabs",{staticClass:"tab-wide"},t._l(t.tabs,(function(e){return n("v-tab",{key:e.text,attrs:{to:e.path}},[n("v-icon",{staticStyle:{"margin-right":"5px"}},[t._v(t._s(e.icon))]),t._v(" "+t._s(e.text)+" ")],1)})),1),n("div",{staticClass:"info-box-page-view"},[n("vue-page-transition",{attrs:{name:"fade-in-up"}},[n("router-view")],1)],1)],1)]),n("div",{staticClass:"bottom-navigations"},[n("BottomNav")],1)],1)])},R=[],M=[{path:"/",icon:l["d"],text:"Introduction"},{path:"/overview",icon:l["F"],text:"Overview"},{path:"portfolio",icon:l["D"],text:"Portfolio"},{path:"/blog",icon:l["e"],text:"Blog"}],A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-bottom-navigation",{attrs:{fixed:!0,color:"primary"}},t._l(t.navs,(function(e){return n("v-btn",{key:e.text,attrs:{value:e.text,to:e.path}},[n("span",[t._v(t._s(e.text))]),n("v-icon",[t._v(t._s(e.icon))])],1)})),1)},H=[],J={data:function(){return{navs:M}}},F=J,G=n("b81c"),q=Object(d["a"])(F,A,H,!1,null,null,null),Y=q.exports;v()(q,{VBottomNavigation:G["a"],VBtn:h["a"],VIcon:p["a"]});var K=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"showOnScroll",class:t.active?"showOnScroll-show":"showOnScroll-hide"},[n("v-tabs",{staticClass:"tab-wide",attrs:{"background-color":t.$vuetify.theme.dark?"#121212":"grey lighten-5",centered:""}},t._l(t.tabs,(function(e){return n("v-tab",{key:e.text,attrs:{to:e.path}},[n("v-icon",{staticStyle:{"margin-right":"5px"}},[t._v(t._s(e.icon))]),t._v(" "+t._s(e.text)+" ")],1)})),1)],1)},U=[],Q={data:function(){return{active:!1,tabs:M}},methods:{},mounted:function(){var t=this;window.document.onscroll=function(){t.active=window.scrollY>40}}},X=Q,Z=(n("f974"),n("71a3")),tt=n("fe57"),et=Object(d["a"])(X,K,U,!1,null,null,null),nt=et.exports;v()(et,{VIcon:p["a"],VTab:Z["a"],VTabs:tt["a"]});var ot={name:"Home",components:{BottomNav:Y,ShowTabsOnScroll:nt,ProfileBox:j},data:function(){return{name:y["d"],username:y["f"],about:y["a"],links:y["c"],tabs:M}},methods:{changeTheme:function(){console.log("button clickd"),this.$vuetify.theme.dark=!this.$vuetify.theme.dark}}},it=ot,rt=(n("d40d"),Object(d["a"])(it,N,R,!1,null,null,null)),at=rt.exports;v()(rt,{VIcon:p["a"],VTab:Z["a"],VTabs:tt["a"]}),o["a"].use(D["a"]);var st=[{path:"/",component:at,children:[{path:"",name:"Introduction",component:function(){return n.e("introduction").then(n.bind(null,"9501"))}},{path:"overview",name:"overview",component:function(){return n.e("overview").then(n.bind(null,"7fa2"))}},{path:"portfolio",name:"Portfolio",component:function(){return n.e("portfolio").then(n.bind(null,"9a81"))}}]},{path:"/blog",component:function(){return n.e("bloghome").then(n.bind(null,"bfc5"))},children:[{path:"",name:"Blog",component:function(){return Promise.all([n.e("blogitems~viewpost"),n.e("blogitems")]).then(n.bind(null,"6e30"))}},{path:"view/:id",name:"viewpost",component:function(){return Promise.all([n.e("blogitems~viewpost"),n.e("viewpost")]).then(n.bind(null,"cbfe"))}}]},{path:"*",component:function(){return n.e("notfound").then(n.bind(null,"4f6d"))}}],lt=new D["a"]({routes:st,scrollBehavior:function(t,e,n){return n||{x:0,y:0}}}),ct=lt,ut=n("f309");o["a"].use(ut["a"]);var dt={icons:{iconfont:"mdi"},theme:{dark:!0}},ft=new ut["a"](dt),vt=n("f0eb");o["a"].use(vt["default"]),o["a"].config.productionTip=!1,new o["a"]({router:ct,vuetify:ft,render:function(t){return t(z)}}).$mount("#app")},"5b7d":function(t,e,n){"use strict";var o=n("333f"),i=n.n(o);i.a},"73ec":function(t,e,n){},a805:function(t,e,n){"use strict";n.d(e,"d",(function(){return a})),n.d(e,"f",(function(){return s})),n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return c})),n.d(e,"e",(function(){return u})),n.d(e,"c",(function(){return d}));var o=n("94ed"),i=n("3a19"),r=n.n(i),a="Jenuel Ganawed",s="Web Developer",l="Hi! I live in La Trinidad, Benguet, Luzon, Philippines. I am a Web Developer. I eat rice and pay bills 👌😁👍😎",c="I'm a Web Developer offering enthusiasm and understanding of various programming languages. Looking to join an industry where the opportunity for growth and professional development is embraced.",u=r.a,d=[{icon:o["C"],text:"Benguet, Luzon, Philippines",link:"https://goo.gl/maps/t8KxqHTGDw7dfFvr8",icon_color:"",tooltip:"My Location"},{icon:o["r"],text:"jenuelganawed936@gmail.com",link:"http://jenuelganawed936@gmail.com",icon_color:"#d44638",tooltip:"Gmail"},{icon:o["M"],text:"Youtube Channel",link:"https://www.youtube.com/channel/UCNANDtTF63UTRcYioVsSCdA",icon_color:"red",tooltip:"Youtube"},{icon:o["B"],text:"jenuelganawed",link:"https://www.linkedin.com/in/jenuelganawed/",icon_color:"#0e76a8",tooltip:"LinkedIn"},{icon:o["q"],text:"MisterJ936",link:"https://github.com/MisterJ936",icon_color:"",tooltip:"GitHub"},{icon:o["o"],text:"Download My Resume",link:"https://github.com/MisterJ936/MyPortFolio/raw/master/jenuelganawed_home/src/assets/pdf/Jenuel-Ganawed.pdf",icon_color:"#01579B",tooltip:"Resume"}]},b35b:function(t,e,n){},d40d:function(t,e,n){"use strict";var o=n("47e2"),i=n.n(o);i.a},d9a1:function(t,e,n){"use strict";var o=n("e7c6"),i=n.n(o);i.a},e7c6:function(t,e,n){},f974:function(t,e,n){"use strict";var o=n("b35b"),i=n.n(o);i.a}});
//# sourceMappingURL=app.8a99d5fd.js.map