<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Integración de IoT en procesos productivos

    .row.bg6.align-items-center
      .px-lg-5.px-4          
        .row.justify-content-center.mb-4   
          .col-lg-4.my-lg-0.my-3.j1
            p.mb-0 La integración de IoT en los procesos productivos permite mejorar la eficiencia, precisión y sostenibilidad de las operaciones industriales y agroindustriales. Al incorporar tecnologías de IoT, como sensores, actuadores y plataformas de comunicación, los procesos productivos pueden monitorizarse y controlarse en tiempo real, lo cual facilita la toma de decisiones basada en datos y reduce la necesidad de intervención humana. La integración adecuada de IoT en los procesos productivos requiere una comprensión profunda de los componentes del sistema, la arquitectura y los protocolos de comunicación, así como de las herramientas y técnicas necesarias para asegurar una conectividad confiable y continua.

          .col-lg-4.my-lg-0.my-3.j1
            img.img-a.img-t(src='@/assets/curso/temas/52.png' alt='')   

          .col-lg-4.my-lg-0.my-3
            .bg2.p-3.brad.h-100.j1
              p.mb-0 En este capítulo, se exploran las etapas clave para la integración de IoT en sistemas productivos, desde la selección y configuración de los sensores y actuadores hasta la implementación de sistemas de monitoreo y control remoto. También se analizan los desafíos y mejores prácticas para asegurar una integración eficiente que optimice el rendimiento del sistema y garantice la interoperabilidad entre dispositivos.


        Separador 
        #t_4_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
          h2 4.1	 Configuración y puesta a punto de sensores y actuadores

        .row.justify-content-center.mb-4
          .col-lg-7.my-lg-0.my-3.j1
            p La configuración y puesta a punto de sensores y actuadores es un paso esencial en la integración de IoT, ya que estos dispositivos capturan datos críticos de variables como temperatura, humedad, presión y nivel, o ejecutan acciones específicas en función de los datos recibidos. La selección de los sensores y actuadores adecuados dependerá de las variables a monitorizar y de los requisitos del proceso productivo. En este sentido, es importante considerar factores como la precisión, el rango de medición, la resistencia ambiental y el consumo energético.
            .bg1.p-4.brad
              p.mb-0 Una vez seleccionados, los sensores deben configurarse correctamente para garantizar mediciones precisas y transmitir datos en el formato adecuado. En general, la configuración de sensores incluye la calibración y el ajuste de umbrales, como puntos de alarma, que permiten alertar al sistema cuando se detectan desviaciones críticas en las variables de control. Los actuadores, por su parte, requieren una configuración de sus parámetros operativos, como la velocidad, el rango de movimiento o el tiempo de respuesta, para asegurar una respuesta adecuada a las condiciones detectadas por los sensores.  

          .col-lg-5.my-lg-0.my-3
            img.img-a.img-t(src='@/assets/curso/temas/53.png' alt='')    


    Separador 
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 4.2	Configuración de #[i gateways] y envío de datos a la nube

    .row.justify-content-center.mb-4
      .col-lg-5.my-lg-0.my-3
        img.img-a.img-t(src='@/assets/curso/temas/54.png' alt='')               
      .col-lg-7.my-lg-0.my-3.j1
        p Una vez que los sensores y actuadores están configurados, se requiere de una infraestructura de comunicación que permita transmitir los datos hacia una plataforma centralizada en la nube. Aquí es donde entran en juego los gateways IoT, que actúan como intermediarios entre los dispositivos de campo y la red de comunicación. Los gateways recogen los datos de los sensores y los envían a través de un protocolo de comunicación hacia la nube, donde se procesan y almacenan para su análisis.
        .bg1-br.p-4.brad
          p.mb-0 En la configuración de un gateway IoT, es crucial elegir un protocolo de comunicación que sea adecuado para el tipo de sistema y entorno operativo. Los protocolos de comunicación más comunes incluyen LoRaWAN, MQTT y ZigBee, los cuales permiten transmitir datos en redes de baja potencia y largo alcance. Una vez que los datos están en la nube, pueden visualizarse y gestionarse a través de plataformas IoT como ThingSpeak, AWS IoT o Azure IoT Hub, que ofrecen herramientas para el análisis de datos, la creación de paneles de control y la configuración de alertas automáticas en tiempo real. 

    Separador 
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 4.3	Monitoreo y control de sistemas en tiempo real                 
    .row.justify-content-center.mb-4   
      .col-lg-4.my-lg-0.my-3
        p.mb-0 Una de las principales ventajas de la integración de IoT en procesos productivos es la capacidad de monitorear y controlar el sistema en tiempo real. El monitoreo en tiempo real permite observar el estado de las variables de proceso y detectar cualquier anomalía de inmediato, lo que facilita la toma de decisiones rápidas y basadas en datos. Las plataformas IoT permiten visualizar los datos recopilados en tiempo real mediante gráficos y dashboards personalizados, lo que brinda una visión clara de las operaciones y ayuda a identificar patrones y tendencias.

      .col-lg-4.my-lg-0.my-3.j1
        img.img-a.img-t(src='@/assets/curso/temas/55.png' alt='')   

      .col-lg-4.my-lg-0.my-3
        .bgs.p-3.brad.h-100.j1
          p.mb-0 El control en tiempo real, por otro lado, permite ajustar los parámetros de los actuadores automáticamente para mantener las variables dentro de los rangos deseados. Este control puede llevarse a cabo mediante algoritmos de control predefinidos o mediante inteligencia artificial, que ajusta las respuestas del sistema de manera dinámica en función de las condiciones cambiantes del entorno. Por ejemplo, en una operación de riego automatizado, el sistema puede ajustar la cantidad de agua en función de la humedad del suelo y la temperatura ambiente, asegurando un uso eficiente del recurso.

    Separador 
    #t_4_4.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 4.4	Desafíos y mejores prácticas para la integración de iot en procesos productivos

    p La integración de IoT en sistemas productivos plantea ciertos desafíos que deben considerarse para asegurar una implementación exitosa:

    .row.justify-content-center.mb-4
      .col-lg-8.my-lg-0.my-3
        AccordionRED(tipo="a" clase-tarjeta="tarjeta bg7")
          div(titulo="Interoperabilidad entre dispositivos") En un sistema IoT, es común que existan dispositivos de distintos fabricantes y tecnologías. Asegurar que todos los dispositivos puedan comunicarse y trabajar en conjunto es un desafío importante. Las mejores prácticas recomiendan optar por estándares abiertos y protocolos de comunicación compatibles para asegurar la interoperabilidad.    
          div(titulo="Seguridad de datos") La transmisión y almacenamiento de datos en la nube implica riesgos de seguridad que pueden comprometer la integridad del sistema. La encriptación de datos, la autenticación de dispositivos y el monitoreo de amenazas son prácticas esenciales para proteger la infraestructura IoT de posibles ataques.
          div(titulo="Escalabilidad del sistema") A medida que el sistema productivo crece, es probable que se necesite añadir nuevos sensores y actuadores. Implementar una infraestructura escalable que permita integrar nuevos dispositivos sin interrupciones ni modificaciones costosas es clave para asegurar que el sistema pueda adaptarse a las necesidades futuras.
          div(titulo="Gestión de energía") En entornos remotos o de difícil acceso, muchos dispositivos IoT funcionan con baterías de larga duración. Implementar protocolos de comunicación de bajo consumo y optimizar la configuración de los sensores para reducir la transmisión de datos son prácticas importantes para prolongar la vida útil de los dispositivos en el campo.
          div(titulo="Mantenimiento y soporte técnico") Aunque la mayoría de los sistemas IoT están diseñados para operar de manera autónoma, es importante contar con planes de mantenimiento y soporte técnico. La calibración periódica de los sensores y la actualización del firmware de los dispositivos son medidas que ayudan a mantener el sistema operativo y asegurar la precisión de los datos.
      .col-lg-4.my-lg-0.my-3
        img.img-a.img-t(src='@/assets/curso/temas/56.png' alt='')   

    Separador 
    #t_4_5.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 4.5	Aplicación de IoT en procesos productivos

    .row.justify-content-center.mb-4
      .col-lg-5.my-lg-0.my-3
        img.img-a.img-t(src='@/assets/curso/temas/57.png' alt='')               
      .col-lg-7.my-lg-0.my-3.j1
        p La aplicación de IoT en procesos productivos ha revolucionado la manera en que las industrias gestionan y optimizan sus operaciones. IoT permite conectar dispositivos, sensores y sistemas de control, transformando los datos recolectados en información útil para la toma de decisiones. En entornos productivos, como la agricultura de precisión, la manufactura y la gestión de infraestructura, IoT permite monitorear y controlar variables críticas en tiempo real, lo cual mejora la eficiencia, reduce costos y minimiza el impacto ambiental.
        .bg1-br.p-4.brad
          p.mb-0 La capacidad de recopilar datos en tiempo real permite a los operadores no solo identificar y corregir anomalías de inmediato, sino también optimizar recursos y prever fallas en los equipos mediante mantenimiento predictivo. En sectores como la agricultura, por ejemplo, los sensores IoT ofrecen una visión detallada de las condiciones del suelo y el clima, lo que permite a los agricultores ajustar prácticas de riego y fertilización para maximizar la producción y minimizar el desperdicio de recursos. En la industria manufacturera, el monitoreo constante de las máquinas permite reducir los tiempos de inactividad y prolongar la vida útil de los equipos, lo cual es fundamental para la rentabilidad operativa.   

    .row.bg10.align-items-center
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center          
          .col-lg-12
            .bgw.brad.p-5.my-5
              CarouselRED(tipo="b")
                .row.justify-content-center
                  .col-lg-6.my-2
                    h5.mb-4 Agricultura de precisión
                    p En la agricultura de precisión, IoT permite gestionar los recursos de manera eficiente al monitorear el suelo y las condiciones climáticas en tiempo real. Sensores de humedad, temperatura y nutrientes se instalan en el campo y se conectan a una plataforma IoT que permite al agricultor optimizar el riego, la fertilización y otras labores. De esta forma, se logra una mayor productividad y sostenibilidad del cultivo.               
                  .col-lg-5.my-2 
                    img.img-a.img-t(src='@/assets/curso/temas/58.png', alt='') 

                .row.justify-content-center
                  .col-lg-6.my-2
                    h5.mb-4 Industria manufacturera
                    p En la manufactura, IoT permite supervisar el estado de las máquinas y realizar un mantenimiento predictivo. Sensores de vibración y temperatura pueden detectar posibles fallos en los equipos y alertar al sistema antes de que ocurra una avería. Este tipo de monitoreo reduce los tiempos de inactividad y extiende la vida útil de los activos, lo cual resulta en un ahorro significativo de costos y recursos.              
                  .col-lg-5.my-2 
                    img.img-a.img-t(src='@/assets/curso/temas/59.png', alt='') 

                .row.justify-content-center
                  .col-lg-6.my-2
                    h5.mb-4 Gestión de infraestructura y energía
                    p IoT también se aplica en la gestión de infraestructuras, como edificios inteligentes, donde los sensores de luz, temperatura y ocupación ayudan a gestionar el uso de energía de manera eficiente. Por ejemplo, los sensores pueden ajustar automáticamente el sistema de calefacción, ventilación y aire acondicionado (HVAC) en función de la ocupación del edificio, lo que permite reducir el consumo de energía y mejorar el confort de los ocupantes              
                  .col-lg-5.my-2 
                    img.img-a.img-t(src='@/assets/curso/temas/60.png', alt='')   

    Separador 
    #t_4_6.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 4.6	Ventajas de la Integración de IoT en Procesos Productivos
    p La integración de IoT en los procesos productivos ofrece diversas ventajas que impactan positivamente en la eficiencia, sostenibilidad y rentabilidad de las operaciones:
                
    .row.justify-content-center.mb-4.bgs.p-4
      .col-lg-3.my-lg-0.my-3
        img.img-a.img-t(src='@/assets/curso/temas/61.png' alt='')        
      .col-lg-9.my-lg-0.my-3
        ul.lista-ul.fa-ul
          li 
            i.fas.fa-check-circle.color1
            span #[b Optimización de recursos:] el monitoreo en tiempo real permite ajustar los recursos de manera precisa, optimizando el uso de agua, energía y otros insumos, lo que reduce costos y minimiza el impacto ambiental.

          li 
            i.fas.fa-check-circle.color1
            span #[b Mantenimiento predictivo:] la capacidad de detectar fallos potenciales en los equipos permite realizar un mantenimiento preventivo, reduciendo el tiempo de inactividad y prolongando la vida útil de los activos.

          li 
            i.fas.fa-check-circle.color1
            span #[b Toma de decisiones basada en datos:] la recopilación y análisis de datos en tiempo real permite a los operadores tomar decisiones informadas y mejorar continuamente el proceso.

          li 
            i.fas.fa-check-circle.color1
            span #[b Automatización de procesos:] al permitir un control automático de variables, IoT facilita la automatización de tareas, lo cual reduce la dependencia de intervención humana y mejora la precisión y consistencia del proceso.

    .row.justify-content-center
      .col-lg-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 4. 
          span Resumen integración de IoT en procesos productivos.

        .bgfig.p-4.mb-1
          img.img-a.img-t(src='@/assets/curso/temas/62.svg' alt='La Figura 4 se denomina «Resumen integración de IoT en procesos productivos». Presenta un mapa conceptual que se divide en cuatro secciones principales: los beneficios de la integración (que incluye mejora de eficiencia y sostenibilidad), los componentes clave (sensores, actuadores y plataformas de comunicación), las etapas clave para la integración (desde la selección de sensores hasta la toma de decisiones), y los desafíos y mejores prácticas (incluyendo aspectos técnicos, de conectividad y seguridad).')  

        figcaption Fuente: OIT, 2024. 

    p.mt-5 Este capítulo proporciona una guía completa para la integración de IoT en procesos productivos, desde la configuración de dispositivos hasta el monitoreo y control en tiempo real. Estas habilidades permitirán a los estudiantes aplicar IoT en diversos sectores, optimizando recursos y mejorando la eficiencia operativa de los sistemas en los que trabajen.

    p Se recomiendan los siguientes recursos de acceso libre para complementar

    .row.justify-content-center
      .col-lg-4.my-3
        img.img-a.img-t(src='@/assets/curso/temas/30.png' alt='')
      .col-lg-4.my-3
        a.anexo.mb-3(href="https://www.agritechtoday.com/iot-precision-agriculture" target="_blank")
          .anexo__icono
            img(src="@/assets/curso/temas/icono-link.svg")
          .anexo__texto
            p #[b Enlace web.] Artículo técnico - "The Role of IoT in Precision Agriculture"- 

        a.anexo.mb-3(href="https://www.youtube.com/watch?v=b6zAf8kx3o4" target="_blank")
          .anexo__icono
            img(src="@/assets/curso/temas/icono-link.svg")
          .anexo__texto
            p #[b Enlace web.] Video educativo- “How IoT is Revolutionizing Manufacturing and Predictive Maintenance"      

      .col-lg-4.my-3
        a.anexo.mb-3(href="https://www.sensirion.com/en/air-quality-monitoring-industrial" target="_blank")
          .anexo__icono
            img(src="@/assets/curso/temas/icono-link.svg")
          .anexo__texto
            p #[b Enlace web.] Manual técnico- "Air Quality Monitoring with IoT in Industrial Settings"-                                                                     
</template>

<script>
export default {
  name: 'Tema4',
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
