(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-220a7745"],{"13d5":function(e,i,a){"use strict";var o=a("23e7"),n=a("d58f").left,t=a("a640"),r=a("1212"),s=a("9adc"),c=!s&&r>79&&r<83,d=c||!t("reduce");o({target:"Array",proto:!0,forced:d},{reduce:function(e){var i=arguments.length;return n(this,e,i,i>1?arguments[1]:void 0)}})},"2b25":function(e,i,a){"use strict";a("e030")},"4e3e":function(e,i,a){"use strict";a("7d54")},"7d54":function(e,i,a){"use strict";var o=a("23e7"),n=a("2266"),t=a("59ed"),r=a("825a"),s=a("46c4");o({target:"Iterator",proto:!0,real:!0},{forEach:function(e){r(this),t(e);var i=s(this),a=0;n(i,(function(i){e(i,a++)}),{IS_RECORD:!0})}})},8558:function(e,i,a){"use strict";var o=a("cfe9"),n=a("b5db"),t=a("c6b6"),r=function(e){return n.slice(0,e.length)===e};e.exports=function(){return r("Bun/")?"BUN":r("Cloudflare-Workers")?"CLOUDFLARE":r("Deno/")?"DENO":r("Node.js/")?"NODE":o.Bun&&"string"==typeof Bun.version?"BUN":o.Deno&&"object"==typeof Deno.version?"DENO":"process"===t(o.process)?"NODE":o.window&&o.document?"BROWSER":"REST"}()},9485:function(e,i,a){"use strict";var o=a("23e7"),n=a("2266"),t=a("59ed"),r=a("825a"),s=a("46c4"),c=TypeError;o({target:"Iterator",proto:!0,real:!0},{reduce:function(e){r(this),t(e);var i=s(this),a=arguments.length<2,o=a?void 0:arguments[1],d=0;if(n(i,(function(i){a?(a=!1,o=i):o=e(o,i,d),d++}),{IS_RECORD:!0}),a)throw new c("Reduce of empty iterator with no initial value");return o}})},"9adc":function(e,i,a){"use strict";var o=a("8558");e.exports="NODE"===o},"9d4a":function(e,i,a){"use strict";a("9485")},a640:function(e,i,a){"use strict";var o=a("d039");e.exports=function(e,i){var a=[][e];return!!a&&o((function(){a.call(null,i||function(){return 1},1)}))}},c92c:function(e,i,a){"use strict";a.r(i);var o=function(){var e=this,i=e._self._c;return i("div",{staticClass:"curso-main-container glosario"},[i("BannerInterno",{attrs:{icono:"fas fa-atlas",titulo:"Glosario"}}),i("div",{staticClass:"container tarjeta tarjeta--blanca p-4 p-md-5 mb-5"},e._l(e.orderedData,(function(a){return i("div",{key:"letra-"+a.letra,staticClass:"glosario__letra-item mb-2"},[i("div",{staticClass:"glosario__letra-item__letra me-4"},[i("div",{staticClass:"glosario__letra-item__letra__icono"},[i("span",[e._v(e._s(a.letra))])])]),i("div",{staticClass:"glosario__letra-item__texto"},e._l(a.terminos,(function(a){return i("p",{staticClass:"mb-3"},[e._m(0,!0),i("strong",{domProps:{innerHTML:e._s(a.terminoHtml||a.termino)}}),i("strong",[e._v(": ")]),i("span",{domProps:{innerHTML:e._s(a.significado)}})])})),0)])})),0)],1)},n=[function(){var e=this,i=e._self._c;return i("strong",[i("i",{staticClass:"lista-ul__vineta"})])}],t=(a("14d9"),a("13d5"),a("0643"),a("fffc"),a("4e3e"),a("a573"),a("9d4a"),{computed:{menuData(){return this.$config.menuPrincipal.menu},iniciarLnk(){const e=this.menuData.find(e=>"introduccion"===e.nombreRuta),i=this.menuData.find(e=>"tema1"===e.nombreRuta);return e||i}},methods:{quitarAcentos(e){const i=e.replace(/<\/?[^>]+(>|$)/g,""),a={"á":"a","é":"e","í":"i","ó":"o","ú":"u","Á":"A","É":"E","Í":"I","Ó":"O","Ú":"U"};return i.split("").map(e=>a[e]||e).join("").toString()}}}),r={name:"Glosario",mixins:[t],data(){return{glosarioData:[{termino:"Actuador",significado:"Dispositivo que recibe señales de control y realiza una acción física, como abrir una válvula o activar un motor, en función de los datos recibidos de un sistema IoT"},{termino:"AWS IoT",significado:"Plataforma de Amazon Web Services para gestionar y analizar dispositivos IoT a escala industrial, con capacidades avanzadas de machine learning e inteligencia artificial."},{termino:"Big Data",significado:"Conjunto de datos masivos generados por dispositivos IoT, que requieren procesamiento avanzado y análisis para extraer información valiosa."},{termino:"Calibración de Sensores",significado:"Proceso de ajuste de los sensores para que sus mediciones sean precisas y confiables, crucial en sistemas IoT para garantizar la calidad de los datos."},{termino:"Eficiencia Energética",significado:"Optimización del consumo de energía en dispositivos IoT, fundamental para extender la vida útil de dispositivos alimentados por batería en entornos remotos."},{termino:"Gemelos Digitales",significado:"Representación digital de un dispositivo o sistema físico, que permite simular su comportamiento en tiempo real, facilitando el monitoreo y análisis sin interferir en el sistema real."},{termino:"Inteligencia Artificial (IA)",significado:"Técnica que utiliza datos IoT para anticipar fallos en equipos, permitiendo realizar mantenimiento antes de que ocurra una avería, mejorando la eficiencia operativa"},{termino:"Internet de las Cosas (IoT)",significado:"Conjunto de dispositivos físicos conectados a Internet, que recopilan, comparten y analizan datos para automatizar procesos y facilitar la toma de decisiones en tiempo real."},{termino:"LoRaWAN",significado:"Protocolo de comunicación de largo alcance y bajo consumo de energía, ideal para conectar dispositivos IoT en áreas extensas, como campos agrícolas."},{termino:"Mantenimiento Predictivo",significado:"Tipo de red en la cual cada dispositivo IoT se conecta con otros dispositivos cercanos, ampliando la cobertura y aumentando la fiabilidad de la comunicación, típico en ZigBee."},{termino:"Microcontrolador (MCU)",significado:"Circuito integrado que funciona como el cerebro de un sistema IoT, procesando los datos de los sensores y transmitiéndolos a plataformas en la nube. Ejemplos: ESP32, ESP8266."},{termino:"MQTT",significado:"Protocolo ligero de mensajería que facilita la comunicación entre dispositivos IoT y plataformas en la nube mediante un modelo de publicación/suscripción."},{termino:"Plataforma en la Nube",significado:"Entorno digital en línea donde se almacenan, procesan y visualizan los datos de los dispositivos IoT, permitiendo el acceso y gestión remota del sistema."},{termino:"Protocolo de Comunicación",significado:"Conjunto de reglas que permiten la transmisión de datos entre dispositivos IoT y plataformas en la nube, asegurando una comunicación efectiva y segura."},{termino:"Sensor",significado:"Dispositivo que detecta y mide variables físicas como temperatura, humedad, presión, y las convierte en datos digitales para su procesamiento y análisis en sistemas IoT."},{termino:"Simulador IoT",significado:"Herramienta virtual para probar y configurar sistemas IoT sin necesidad de <i>Hardware</i> físico, útil para verificar configuraciones y programación de sensores y actuadores."},{termino:"ThingSpeak",significado:"Plataforma en la nube popular para proyectos IoT pequeños, que permite almacenar y visualizar datos de sensores en tiempo real, y configurar alertas automáticas."},{termino:"Visualización de Datos",significado:"Presentación gráfica de los datos de IoT en tiempo real, facilitando el análisis y la toma de decisiones, común en plataformas como ThingSpeak y Google Cloud IoT."}]}},computed:{orderedData(){const e=[...this.glosarioData];e.forEach(e=>{e.significado=e.significado.charAt(0).toLowerCase()+e.significado.slice(1)});const i=[...e].reduce((e,i)=>{const a=this.quitarAcentos(i.termino.toLowerCase())[0];return e[a]?e[a].terminos.push(i):e[a]={letra:a,terminos:[i]},e},{}),a=Object.keys(i).sort(),o=[];return a.forEach(e=>{const a=i[e];let n=a.terminos;if(n.length>1){const e=[],i=a.terminos.map(e=>e.termino).sort((e,i)=>{const a=this.quitarAcentos(e).toLowerCase(),o=this.quitarAcentos(i).toLowerCase();return a<o?-1:o<a?1:0});i.forEach(i=>{e.push(n.find(e=>e.termino===i))}),n=e}o.push({letra:a.letra.toUpperCase(),terminos:n})}),o}}},s=r,c=(a("2b25"),a("2877")),d=Object(c["a"])(s,o,n,!1,null,null,null);i["default"]=d.exports},d58f:function(e,i,a){"use strict";var o=a("59ed"),n=a("7b0b"),t=a("44ad"),r=a("07fa"),s=TypeError,c="Reduce of empty array with no initial value",d=function(e){return function(i,a,d,l){var u=n(i),m=t(u),f=r(u);if(o(a),0===f&&d<2)throw new s(c);var p=e?f-1:0,g=e?-1:1;if(d<2)while(1){if(p in m){l=m[p],p+=g;break}if(p+=g,e?p<0:f<=p)throw new s(c)}for(;e?p>=0:f>p;p+=g)p in m&&(l=a(l,m[p],p,u));return l}};e.exports={left:d(!1),right:d(!0)}},e030:function(e,i,a){}}]);
//# sourceMappingURL=chunk-220a7745.32bdb3ec.js.map