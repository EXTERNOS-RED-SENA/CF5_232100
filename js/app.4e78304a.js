(function(e){function n(n){for(var o,a,s=n[0],c=n[1],u=n[2],l=0,d=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&d.push(i[a][0]),i[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);m&&m(n);while(d.length)d.shift()();return r.push.apply(r,u||[]),t()}function t(){for(var e,n=0;n<r.length;n++){for(var t=r[n],o=!0,a=1;a<t.length;a++){var s=t[a];0!==i[s]&&(o=!1)}o&&(r.splice(n--,1),e=c(c.s=t[0]))}return e}var o={},a={app:0},i={app:0},r=[];function s(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-2038c0b6":"4329e1d8","chunk-220a7745":"32bdb3ec","chunk-3221757c":"c5e1828d","chunk-3375741c":"355ea6d2","chunk-4ee70bdc":"8b701deb","chunk-5c4f1ff4":"787471be","chunk-62f71dec":"4b671703","chunk-70b22e4b":"e2177203","chunk-78e74396":"ac37816f","chunk-9595e50c":"86c3da96","chunk-96cba512":"7cb879dd","chunk-a7a870fe":"cbae2681","chunk-d6c7bb5e":"98af2eb7"}[e]+".js"}function c(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.e=function(e){var n=[],t={"chunk-2038c0b6":1,"chunk-220a7745":1,"chunk-d6c7bb5e":1};a[e]?n.push(a[e]):0!==a[e]&&t[e]&&n.push(a[e]=new Promise((function(n,t){for(var o="css/"+({}[e]||e)+"."+{"chunk-2038c0b6":"c3b8dbbc","chunk-220a7745":"cc1d5b81","chunk-3221757c":"31d6cfe0","chunk-3375741c":"31d6cfe0","chunk-4ee70bdc":"31d6cfe0","chunk-5c4f1ff4":"31d6cfe0","chunk-62f71dec":"31d6cfe0","chunk-70b22e4b":"31d6cfe0","chunk-78e74396":"31d6cfe0","chunk-9595e50c":"31d6cfe0","chunk-96cba512":"31d6cfe0","chunk-a7a870fe":"31d6cfe0","chunk-d6c7bb5e":"be5d5608"}[e]+".css",i=c.p+o,r=document.getElementsByTagName("link"),s=0;s<r.length;s++){var u=r[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===o||l===i))return n()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){u=d[s],l=u.getAttribute("data-href");if(l===o||l===i)return n()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=n,m.onerror=function(n){var o=n&&n.target&&n.target.src||i,r=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=o,delete a[e],m.parentNode.removeChild(m),t(r)},m.href=i;var p=document.getElementsByTagName("head")[0];p.appendChild(m)})).then((function(){a[e]=0})));var o=i[e];if(0!==o)if(o)n.push(o[2]);else{var r=new Promise((function(n,t){o=i[e]=[n,t]}));n.push(o[2]=r);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(e);var d=new Error;u=function(n){l.onerror=l.onload=null,clearTimeout(m);var t=i[e];if(0!==t){if(t){var o=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",d.name="ChunkLoadError",d.type=o,d.request=a,t[1](d)}i[e]=void 0}};var m=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(n)},c.m=e,c.c=o,c.d=function(e,n,t){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)c.d(t,o,function(n){return e[n]}.bind(null,o));return t},c.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=n,u=u.slice();for(var d=0;d<u.length;d++)n(u[d]);var m=l;r.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},1430:function(e,n,t){e.exports=t.p+"img/cc.58a75e32.svg"},"48d9":function(e,n,t){},"4c29":function(e,n,t){e.exports=t.p+"img/2.a63334b7.png"},"56d7":function(e,n,t){"use strict";t.r(n);var o=t("2b0e"),a=function(){var e=this,n=e._self._c;return n("div",{staticClass:"app",attrs:{id:"app"}},[n("Header"),n("div",{staticClass:"contenedor-principal"},[n("aside",[n("transition",{attrs:{name:"main-menu",duration:"295"}},[e.menuOpen?n("div",{staticClass:"aside-menu"},[n("div",{staticClass:"aside-menu__black-background",on:{click:function(n){return e.toggleMenu(!1)}}}),n("nav",{staticClass:"aside-menu__content"},[n("div",{staticClass:"aside-menu__header"},[n("h4",[e._v("Desarrollo de contenidos")])]),n("ul",{staticClass:"aside-menu__menu"},[e._l(e.menuData,(function(t,o){return[n("li",{key:"menu-item-"+o,staticClass:"aside-menu__menu__item",class:{"aside-menu__menu__item--active":e.$route.name==t.nombreRuta}},[n("router-link",{staticClass:"aside-menu__menu__item__lnk",attrs:{to:{name:t.nombreRuta}},nativeOn:{click:function(n){return e.toggleMenu(!1)}}},[t.hasOwnProperty("numero")?n("span",{domProps:{innerHTML:e._s(t.numero)}}):e._e(),t.icono?n("i",{class:t.icono}):e._e(),n("span",{domProps:{innerHTML:e._s(t.titulo)}})])],1),t.hasOwnProperty("subMenu")&&t.subMenu.length?e._l(t.subMenu,(function(a,i){return n("li",{key:`submenu-item-${o}-${i}`,staticClass:"aside-menu__menu__item--sub-menu",class:{"aside-menu__menu__item--sub-menu--active":e.$route.hash=="#"+a.hash}},[n("router-link",{staticClass:"aside-menu__menu__item__lnk",attrs:{to:{name:t.nombreRuta,hash:"#"+a.hash}},nativeOn:{click:function(n){return e.toggleMenu(!1)}}},[a.icono?n("i",{class:a.icono}):e._e(),a.numero?n("span",{domProps:{innerHTML:e._s(a.numero)}}):e._e(),n("span",{domProps:{innerHTML:e._s(a.titulo)}})])],1)})):e._e()]}))],2),n("ul",{staticClass:"aside-menu__sec-menu"},[e._l(e.subMenuData,(function(t,o){return[n("li",{key:"secMenu-item-"+o,staticClass:"aside-menu__sec-menu__item",class:{"d-none":t.titulo.includes("material")&&e.isLocal()}},[t.hasOwnProperty("download")?n("a",{staticClass:"aside-menu__sec-menu__item__lnk",attrs:{href:e.obtenerLink(t.download),target:"_blank"}},[t.icono?n("i",{class:t.icono}):e._e(),n("span",{domProps:{innerHTML:e._s(t.titulo)}})]):n("router-link",{staticClass:"aside-menu__sec-menu__item__lnk",attrs:{to:{name:t.nombreRuta}},nativeOn:{click:function(n){return e.toggleMenu(!1)}}},[t.icono?n("i",{class:t.icono}):e._e(),n("span",{domProps:{innerHTML:e._s(t.titulo)}})])],1)]}))],2)])]):e._e()])],1),n("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[n("router-view")],1)]),n("BarraAvance")],1)},i=[],r={name:"App",computed:{menuState(){return this.$store.getters.isMenuOpen},menuData(){return this.$config.menuPrincipal.menu},subMenuData(){return this.$config.menuPrincipal.subMenu},menuOpen(){return this.$store.getters.isMenuOpen}},watch:{$route(e){("inicio"===e.name||window.innerWidth<=991)&&this.toggleMenu(!1)}},mounted(){this.$aos.init({offset:100})},methods:{toggleMenu(e){this.$store.dispatch("toggleMenu",e)},isLocal(){return"file:"===window.location.protocol}}},s=r,c=(t("f877"),t("2877")),u=Object(c["a"])(s,a,i,!1,null,null,null),l=u.exports,d=t("8c4f"),m=t("db44"),p=function(){var e=this,n=e._self._c;return n("div",{staticClass:"curso",attrs:{id:"curso"}},[n("router-view")],1)},h=[],f={name:"Curso"},b=f,_=Object(c["a"])(b,p,h,!1,null,null,null),g=_.exports;o["a"].use(d["a"]);const v=new d["a"]({routes:[{path:"/",name:"inicio",component:m["a"]},{path:"/introduccion",name:"introduccion",component:()=>t.e("chunk-3375741c").then(t.bind(null,"5167"))},{path:"/curso",name:"curso",component:g,redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:()=>t.e("chunk-5c4f1ff4").then(t.bind(null,"02c8"))},{path:"tema2",name:"tema2",component:()=>t.e("chunk-4ee70bdc").then(t.bind(null,"fd11"))},{path:"tema3",name:"tema3",component:()=>t.e("chunk-a7a870fe").then(t.bind(null,"eb46"))},{path:"tema4",name:"tema4",component:()=>t.e("chunk-9595e50c").then(t.bind(null,"3eb5"))},{path:"tema5",name:"tema5",component:()=>t.e("chunk-70b22e4b").then(t.bind(null,"5029"))},{path:"tema6",name:"tema6",component:()=>t.e("chunk-62f71dec").then(t.bind(null,"92ea"))}]},{path:"/actividad",name:"actividad",component:()=>t.e("chunk-3221757c").then(t.bind(null,"4298"))},{path:"/glosario",name:"glosario",component:()=>t.e("chunk-220a7745").then(t.bind(null,"c92c"))},{path:"/complementario",name:"complementario",component:()=>t.e("chunk-d6c7bb5e").then(t.bind(null,"dbb5"))},{path:"/referencias",name:"referencias",component:()=>t.e("chunk-2038c0b6").then(t.bind(null,"7c1e"))},{path:"/sintesis",name:"sintesis",component:()=>t.e("chunk-78e74396").then(t.bind(null,"15a3"))},{path:"/creditos",name:"creditos",component:()=>t.e("chunk-96cba512").then(t.bind(null,"ef72"))}],scrollBehavior(e,n){if(e.hash){const t={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===n.name?t:new Promise(e=>{setTimeout(()=>{e(t)},500)})}setTimeout(()=>{window.scrollTo({left:0,top:0,behavior:"auto"})},100)}});var k=v,y=t("2f62");o["a"].use(y["a"]);var C=new y["a"].Store({state:{loading:0,menuOpen:!1},getters:{isLoading:e=>!!e.loading,isMenuOpen:e=>e.menuOpen},mutations:{toggleMenu(e,n){e.menuOpen=n},increment(e){e.loading++},decrease(e){e.loading--}},actions:{toggleMenu({commit:e},n){e("toggleMenu",n)},increment({commit:e}){e("increment")},decrease({commit:e}){e("decrease")}}}),w=t("e5d5"),M=(t("a3a0"),{menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"introduccion",icono:"fas fa-info-circle",titulo:"Introducción",desarrolloContenidos:!0},{nombreRuta:"tema1",numero:"1",titulo:"Fundamentos de IoT en la gestión de procesos productivos",desarrolloContenidos:!0,subMenu:[{numero:"1.1",titulo:"Conceptos básicos de IoT",hash:"t_1_1"},{numero:"1.2",titulo:"Arquitectura de un sistema IoT",hash:"t_1_2"},{numero:"1.3",titulo:"Sensores y actuadores en IoT",hash:"t_1_3"},{numero:"1.4",titulo:"Aplicaciones en la agroindustria y agricultura",hash:"t_1_4"},{numero:"1.5",titulo:"Ventajas de IoT en la gestión de procesos productivos",hash:"t_1_5"}]},{nombreRuta:"tema2",numero:"2",titulo:"Control de variables en procesos productivos automatizados",desarrolloContenidos:!0,subMenu:[{numero:"2.1",titulo:"Principales variables de control en procesos productivos",hash:"t_2_1"},{numero:"2.2",titulo:"Herramientas para el monitoreo de variables en tiempo real",hash:"t_2_2"},{numero:"2.3",titulo:"Ventajas del control de variables en sistemas automatizados",hash:"t_2_3"}]},{nombreRuta:"tema3",numero:"3",titulo:"Tecnologías de comunicación para IoT",desarrolloContenidos:!0,subMenu:[{numero:"3.1",titulo:"Protocolos de comunicación IoT",hash:"t_3_1"},{numero:"3.2",titulo:"Comparación de protocolos de comunicación: alcances y limitaciones",hash:"t_3_2"},{numero:"3.3",titulo:"Aplicación de tecnologías de comunicación en procesos productivos",hash:"t_3_3"},{numero:"3.4",titulo:"Ventajas de una conectividad eficiente en sistemas IoT",hash:"t_3_4"}]},{nombreRuta:"tema4",numero:"4",titulo:"Integración de IoT en procesos productivos",desarrolloContenidos:!0,subMenu:[{numero:"4.1",titulo:"Configuración y puesta a punto de sensores y actuadores",hash:"t_4_1"},{numero:"4.2",titulo:"Configuración de <i>gateways</i> y envío de datos a la nube",hash:"t_4_2"},{numero:"4.3",titulo:"Monitoreo y control de sistemas en tiempo real",hash:"t_4_3"},{numero:"4.4",titulo:"Desafíos y mejores prácticas para la integración de iot en procesos productivos",hash:"t_4_4"},{numero:"4.5",titulo:"Aplicación de IoT en procesos productivos",hash:"t_4_5"},{numero:"4.6",titulo:"Ventajas de la Integración de IoT en Procesos Productivos",hash:"t_4_6"}]},{nombreRuta:"tema5",numero:"5",titulo:"Plataformas en la nube para la gestión de datos IoT",desarrolloContenidos:!0,subMenu:[{numero:"5.1",titulo:"Introducción a ThingSpeak y otras plataformas de gestión de datos",hash:"t_5_1"},{numero:"5.2",titulo:"Creación de un canal para visualización de datos",hash:"t_5_2"},{numero:"5.3",titulo:"Configuración de alertas y notificaciones basadas en variables críticas",hash:"t_5_3"},{numero:"5.4",titulo:"Ventajas de utilizar plataformas en la nube para IoT",hash:"t_5_4"},{numero:"5.5",titulo:"Aplicación de plataformas en la nube en procesos productivos",hash:"t_5_5"}]},{nombreRuta:"tema6",numero:"6",titulo:"Implementación Práctica de un Sistema IoT Básico",desarrolloContenidos:!0,subMenu:[{numero:"6.1",titulo:"Materiales y componentes necesarios",hash:"t_6_1"},{numero:"6.2",titulo:"Configuración de <i>hardware</i> y <i>software</i>",hash:"t_6_2"},{numero:"6.3",titulo:"Programación del microcontrolador y envío de datos",hash:"t_6_3"},{numero:"6.4",titulo:"Visualización y análisis de los datos en la nube",hash:"t_6_4"},{numero:"6.5",titulo:"Implementación de un sistema de alertas básico",hash:"t_6_5"},{numero:"6.6",titulo:"Evaluación del sistema IoT y mejores prácticas",hash:"t_6_6"}]}],subMenu:[{icono:"fas fa-sitemap",titulo:"Síntesis",nombreRuta:"sintesis",desarrolloContenidos:!0},{nombreRuta:"actividad",icono:"far fa-question-circle",titulo:"Actividad didáctica",desarrolloContenidos:!0},{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-file-pdf",titulo:"Descargar PDF",download:"downloads/228136_CF01_DU.pdf"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},global:{Name:"Implementación de IoT en la gestión de procesos productivos automatizados",Description:"Este componente formativo introduce el uso del IoT en procesos productivos automatizados para agroindustria y agricultura. Cubre tecnologías clave para recopilar, monitorear y analizar datos en tiempo real mediante sensores IoT, configurando sistemas, integrando LoRaWAN y aplicando protocolos de comunicación en la nube. Combina teoría y práctica para mejorar eficiencia y sostenibilidad en estos entornos.",imagenBannerPrincipal:t("74b5"),fondoBannerPrincipal:t("ce7c"),imagenesDecorativasBanner:[{clases:["banner-principal-decorativo-1","d-none","d-lg-block"],imagen:t("c9c7")},{clases:["banner-principal-decorativo-2"],imagen:t("4c29")},{clases:["banner-principal-decorativo-3"],imagen:t("cd2b")}]}});const T=t("9224");o["a"].use(w["a"],{config:M,packageJson:T}),new o["a"]({router:k,store:C,render:e=>e(l)}).$mount("#app")},"74b5":function(e,n,t){e.exports=t.p+"img/banner-princiapal.38c597a9.png"},"7a82":function(e,n,t){e.exports=t.p+"img/aumentar.4890ae42.svg"},9224:function(e){e.exports=JSON.parse('{"name":"oit-2024","version":"1.0.0","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"@fortawesome/fontawesome-free":"^6.5.1","@popperjs/core":"^2.11.8","aos":"^2.3.4","bootstrap":"^5.3.2","font-awesome":"^4.7.0","legored":"0.0.4","vue":"^2.7.14","vue-router":"^3.6.5","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.19","@vue/cli-plugin-eslint":"^4.5.19","@vue/cli-plugin-router":"^4.5.19","@vue/cli-plugin-vuex":"^4.5.19","@vue/cli-service":"^4.5.19","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.4.1","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.7.14"}}')},a3a0:function(e,n,t){},a724:function(e,n,t){e.exports=t.p+"img/reducir.68fb49e8.svg"},c9c7:function(e,n,t){e.exports=t.p+"img/1.0934dd19.png"},cd2b:function(e,n,t){e.exports=t.p+"img/3.c2705c5e.png"},ce7c:function(e,n,t){e.exports=t.p+"img/fondo-banner-principal.ae6a1a13.png"},f5ad:function(e,n,t){e.exports=t.p+"img/logo-sena.47d29d11.svg"},f877:function(e,n,t){"use strict";t("48d9")}});
//# sourceMappingURL=app.4e78304a.js.map