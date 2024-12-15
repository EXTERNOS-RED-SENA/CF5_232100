<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Gestión de bases de datos

    .bg11.mb-4  
      .row.justify-content-center
        .col-lg-8.my-3.j1 
          .p-4
            p.mb-0 Las tecnologías de comunicación son el núcleo que permite que los sistemas IoT funcionen de manera efectiva, ya que facilitan la transmisión de datos desde los sensores hacia las plataformas de gestión y análisis de información. En la gestión de procesos productivos, la elección de la tecnología de comunicación adecuada es fundamental para asegurar la precisión, confiabilidad y eficiencia del sistema IoT, ya que cada tipo de red tiene distintas características en términos de alcance, velocidad de transmisión, consumo de energía y costos operativos.
        .col-lg-4
          img.img-a.img-t(src='@/assets/curso/temas/43.png' alt='') 

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-auto
        img.img-a.img-t(src='@/assets/curso/temas/44.png' alt='')
      .col.pt-lg-0.pt-md-4
        p.mb-0 Este capítulo explora las principales tecnologías de comunicación utilizadas en IoT, detalla sus características y discute su aplicabilidad en diferentes entornos productivos. Se pone especial énfasis en los protocolos más relevantes, como LoRaWAN, MQTT y ZigBee, los cuales son ampliamente empleados en sistemas IoT para la industria y la agroindustria debido a su flexibilidad y eficiencia.  

    Separador 
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 3.1	Protocolos de comunicación IoT                    
    p Los protocolos de comunicación en IoT determinan cómo se envían y reciben los datos entre dispositivos. La elección de un protocolo adecuado depende de varios factores, como el tipo de datos, la distancia entre dispositivos, el consumo de energía y la infraestructura disponible. A continuación, se describen algunos de los protocolos más comunes en sistemas IoT para la gestión de procesos productivos:

    TabsC.color-acento-contenido.mb-5
      .py-3.py-md-4.bg11(titulo="LoRa y LoRaWAN")
        .row.justify-content-center.py-4
          .col-lg-4.my-lg-0.my-3
            img.img-a.img-t(src='@/assets/curso/temas/45.png' alt='')  
          .col-lg-7.my-lg-0.my-3
            h5 LoRaWAN (#[i Long Range Wide Area Network]) 
            p Es un protocolo de comunicación diseñado para aplicaciones IoT de largo alcance y bajo consumo de energía. Utiliza modulación LoRa, que permite enviar datos a distancias extremadamente largas (hasta 15 km en entornos rurales) y operar con muy baja potencia, lo cual es ideal para dispositivos con baterías de larga duración. LoRaWAN es ampliamente utilizado en entornos donde los dispositivos están distribuidos en áreas extensas, como la agricultura, ya que permite monitorear variables de campo, como la humedad del suelo y la temperatura, en tiempo real sin necesidad de infraestructura costosa.

            p Características principales: 

            ul.lista-ul.fa-ul
              li 
                i.fas.fa-check-circle.color1
                span #[b Rango de comunicación:] hasta 15 km en áreas rurales y 5 km en entornos urbanos.
              li 
                i.fas.fa-check-circle.color1
                span #[b Consumo de energía:] extremadamente bajo, lo que permite que los dispositivos funcionen por años con una sola batería.
              li 
                i.fas.fa-check-circle.color1
                span #[b Aplicaciones típicas:] monitoreo de cultivos, gestión de recursos hídricos, control de variables en áreas remotas.            

      .py-3.py-md-4.bg11(titulo="MQTT")
        .row.justify-content-center.py-4
          .col-lg-4.my-lg-0.my-3
            img.img-a.img-t(src='@/assets/curso/temas/46.png' alt='')  
          .col-lg-7.my-lg-0.my-3
            h5 MQTT  
            p Es un protocolo ligero de mensajería diseñado específicamente para redes de baja ancho de banda y dispositivos de bajo consumo. MQTT emplea un modelo de comunicación de publicación/suscripción, en el cual los dispositivos publican datos a un servidor (broker) que los distribuye a los dispositivos que están suscritos a esos datos. Este modelo es altamente escalable y confiable, lo que lo hace adecuado para aplicaciones de IoT en entornos productivos donde se requiere una transmisión de datos eficiente y control de dispositivos en tiempo real.

            p Características principales: 
            ul.lista-ul.fa-ul
              li 
                i.fas.fa-check-circle.color1
                span Bajo consumo de ancho de banda, adecuado para redes de comunicación limitadas.
              li 
                i.fas.fa-check-circle.color1
                span Escalabilidad y fiabilidad en el envío de mensajes.
              li 
                i.fas.fa-check-circle.color1
                span #[b Aplicaciones típicas:] gestión de datos en plataformas en la nube, automatización industrial, monitoreo en tiempo rea

      .py-3.py-md-4.bg11(titulo="ZigBee")
        .row.justify-content-center.py-4
          .col-lg-4.my-lg-0.my-3
            img.img-a.img-t(src='@/assets/curso/temas/47.png' alt='')  
          .col-lg-7.my-lg-0.my-3
            h5 ZigBee
            p Es un protocolo de comunicación de corto alcance y bajo consumo de energía, diseñado para redes de sensores de IoT. Opera en la banda de frecuencia de 2.4 GHz y permite la creación de redes de malla, en las cuales los dispositivos pueden comunicarse entre sí para extender el rango de cobertura. ZigBee es ideal para aplicaciones de IoT en entornos industriales y de edificios inteligentes, donde se requiere una comunicación confiable entre dispositivos a corta distancia, como sensores de temperatura, iluminación y actuadores de control de acceso.

            p Características principales:
            ul.lista-ul.fa-ul
              li 
                i.fas.fa-check-circle.color1
                span #[b Rango de comunicación:] de 10 a 100 metros en interiores.
              li 
                i.fas.fa-check-circle.color1
                span Bajo consumo de energía y alta confiabilidad en redes de malla.
              li 
                i.fas.fa-check-circle.color1
                span #[b Aplicaciones típicas:] automatización de edificios, control de iluminación y sistemas de sensores en áreas industriales.

      .py-3.py-md-4.bg11(titulo="Wi-Fi")
        .row.justify-content-center.py-4
          .col-lg-4.my-lg-0.my-3
            img.img-a.img-t(src='@/assets/curso/temas/48.png' alt='')  
          .col-lg-7.my-lg-0.my-3
            h5 Wi-Fi
            p Aunque el Wi-Fi es ampliamente utilizado en redes domésticas y comerciales, también se utiliza en aplicaciones de IoT donde el consumo de energía no es una limitación y se requiere una alta tasa de transferencia de datos. En procesos productivos, el Wi-Fi permite conectar dispositivos IoT a una red local o a Internet para gestionar grandes volúmenes de datos en tiempo real. No obstante, el Wi-Fi tiene un rango de cobertura más limitado y consume más energía, por lo que su uso en IoT está generalmente restringido a entornos donde hay disponibilidad de energía continua, como plantas industriales o sistemas de monitoreo en interiores.

            p Características principales: 
            ul.lista-ul.fa-ul
              li 
                i.fas.fa-check-circle.color1
                span #[b Rango de comunicación:] hasta 100 metros en interiores.
              li 
                i.fas.fa-check-circle.color1
                span Alta velocidad de transferencia de datos, ideal para aplicaciones que requieren gran ancho de banda.
              li 
                i.fas.fa-check-circle.color1
                span #[b Aplicaciones típicas:] monitoreo en interiores, transmisión de datos en tiempo real en procesos de manufactura.


    Separador 
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 3.2 Comparación de protocolos de comunicación: alcances y limitaciones             
    p La elección de un protocolo de comunicación adecuado para un sistema IoT depende de varios factores, tales como el alcance necesario, el consumo de energía, la cantidad de datos a transmitir y el entorno en el cual se despliega el sistema. A continuación, se presenta una comparación de los protocolos mencionados: 

    .row.justify-content-center
      .col-lg-8
        .titulo-sexto.color-acento-contenido
          h5 Tabla 2. 
          span Comparación de protocolos de comunicación
        .tabla-a.color-acento-botones.mb-5
          table
            caption Fuente: OIT, 2024.
            thead
              tr
                th Protocolo 
                th Alcance
                th Consumo de energía
                th Ancho de banda
                th Aplicaciones principales
            tbody
              tr
                td LoRaWAN
                td Hasta 15 km
                td Muy bajo
                td Bajo
                td Monitoreo en áreas rurales, agricultura, gestión de recursos

              tr
                td MQTT
                td Variable
                td Bajo
                td Bajo
                td Plataformas en la nube, automatización industrial, IoT general 

              tr
                td ZigBee
                td 10-100 metros
                td Muy bajo
                td Medio
                td Automatización de edificios, redes de sensores locales 

              tr
                td Wi-Fi
                td Hasta 100 m
                td Alto
                td Alto
                td Monitoreo en interiores, transmisión de grandes volúmenes de datos 

    p Cada protocolo tiene fortalezas y limitaciones que se deben considerar en función de los requerimientos específicos del sistema IoT. Por ejemplo, LoRaWAN es ideal para áreas rurales y dispositivos de bajo consumo energético, mientras que Wi-Fi es más adecuado para entornos donde se necesita transmitir grandes volúmenes de datos y la energía es accesible.    

    Separador 
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 3.3	Aplicación de tecnologías de comunicación en procesos productivos
    .row.justify-content-center.mb-4
      .col-lg-8.my-lg-0.my-3
        p La implementación de tecnologías de comunicación en IoT para procesos productivos permite mejorar la eficiencia y precisión en la gestión de variables clave. A continuación, se destacan algunas aplicaciones típicas de estas tecnologías en diferentes sectores productivos:
        AccordionRED(tipo="a" clase-tarjeta="tarjeta bg7")
          div(titulo="Agricultura de precisión") En la agricultura, los sensores de humedad, temperatura y nutrientes se distribuyen en grandes extensiones de terreno y envían datos a través de LoRaWAN hacia una plataforma central. Esta tecnología permite a los agricultores recibir información en tiempo real y optimizar el riego y fertilización de los cultivos, reduciendo así el uso de recursos y aumentando la productividad de las tierras.     
          div(titulo="Automatización industrial") En entornos industriales, el uso de MQTT facilita la transmisión de datos entre sensores, actuadores y sistemas de control en tiempo real. Los datos sobre variables como temperatura y presión se transmiten a un sistema SCADA (supervisión, control y adquisición de datos) que permite a los operadores supervisar y ajustar el proceso sin intervención directa.     
          div(titulo="Monitoreo de infraestructura y energía") Las redes de sensores ZigBee se utilizan en edificios inteligentes para controlar la iluminación, la climatización y los sistemas de acceso, reduciendo el consumo de energía y mejorando el confort de los usuarios. ZigBee es ideal para estas aplicaciones por su capacidad para crear redes de malla que cubren edificios completos y su bajo consumo energético.     
      .col-lg-4.my-lg-0.my-3
        img.img-a.img-t(src='@/assets/curso/temas/49.png' alt='')   


    Separador 
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 3.4	Ventajas de una conectividad eficiente en sistemas IoT
    p La implementación de tecnologías de comunicación eficientes en sistemas IoT ofrece diversas ventajas en la gestión de procesos productivos:
                
    .row.justify-content-center.mb-4.bg2.p-4
      .col-lg-3.my-lg-0.my-3
        img.img-a.img-t(src='@/assets/curso/temas/50.png' alt='')        
      .col-lg-9.my-lg-0.my-3
        ul.lista-ul.fa-ul
          li 
            i.fas.fa-check-circle.color1
            span #[b Optimización del consumo energético:] protocolos como LoRaWAN y ZigBee permiten que los dispositivos funcionen con baterías durante años, lo cual es ideal para entornos sin acceso a energía continua.

          li 
            i.fas.fa-check-circle.color1
            span #[b Escalabilidad:] las redes IoT pueden expandirse fácilmente al añadir nuevos dispositivos que se conectan al sistema sin necesidad de infraestructura adicional.

          li 
            i.fas.fa-check-circle.color1
            span #[b Reducción de costos operativos:] una conectividad eficiente permite reducir la intervención manual y optimizar el uso de recursos, disminuyendo así los costos de operación.

          li 
            i.fas.fa-check-circle.color1
            span #[b Toma de decisiones en tiempo real:] la disponibilidad de datos en tiempo real permite tomar decisiones informadas de manera inmediata, mejorando la eficiencia y adaptabilidad de los procesos productivos.

    .row.justify-content-center
      .col-lg-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 3. 
          span Resumen tecnologías de comunicación utilizadas en IoT

        .bgfig.p-4.mb-1
          img.img-a.img-t(src='@/assets/curso/temas/51.svg' alt='La Figura 3 se denomina «Resumen tecnologías de comunicación utilizadas en IoT». Presenta un mapa conceptual que se divide en cinco secciones principales: la importancia de las tecnologías de comunicación (que facilitan la transmisión de datos y aseguran la precisión), la elección de la tecnología adecuada (considerando alcance, velocidad, consumo y costos), las principales tecnologías utilizadas (como LoRaWAN, MQTT y ZigBee), énfasis en los protocolos más relevantes, y el uso común de estas tecnologías en la industria y agroindustria. ')  

        figcaption Fuente: OIT, 2024. 

    p.mt-5 Se recomiendan los siguientes recursos de acceso libre para complementar

    .row.justify-content-center
      .col-lg-4.my-3
        img.img-a.img-t(src='@/assets/curso/temas/30.png' alt='')
      .col-lg-4.my-3
        a.anexo.mb-3(href="https://www.youtube.com/watch?v=efU-6qzGKTc" target="_blank")
          .anexo__icono
            img(src="@/assets/curso/temas/icono-link.svg")
          .anexo__texto
            p #[b Enlace web.] Video “What is LoRa and LoRaWAN” 

        a.anexo.mb-3(href="https://www.digi.com/resources/documentation/digidocs/pdfs/zigbee-standard" target="_blank")
          .anexo__icono
            img(src="@/assets/curso/temas/icono-link.svg")
          .anexo__texto
            p #[b Enlace web.] Manual técnico - ZigBee Wireless Standard: Applications and Benefits".       

      .col-lg-4.my-3
        a.anexo.mb-3(href="https://www.iot-times.com/blog/using-wifi-iot" target="_blank")
          .anexo__icono
            img(src="@/assets/curso/temas/icono-link.svg")
          .anexo__texto
            p #[b Enlace web.] Blog técnico- "Using Wi-Fi in IoT: Pros and Cons"       


</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
