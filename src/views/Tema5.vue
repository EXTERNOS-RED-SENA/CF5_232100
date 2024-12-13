<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Plataformas en la nube para la gestión de datos IoT

    .row.justify-content-center.mb-4   
      .col-lg-9.my-lg-0.my-3
        p Las plataformas en la nube para IoT son esenciales en la arquitectura de sistemas IoT, ya que permiten recopilar, almacenar, procesar y analizar grandes volúmenes de datos generados por dispositivos conectados. Estas plataformas actúan como el núcleo de las soluciones IoT, donde se centralizan los datos de los sensores, se aplican algoritmos de análisis y se crean visualizaciones para el monitoreo y control de sistemas en tiempo real. Gracias a las plataformas en la nube, los usuarios pueden acceder a los datos desde cualquier lugar, tomar decisiones informadas y configurar respuestas automáticas ante cambios en el entorno.
        .row.justify-content-center.mb-4
          .col-lg-auto.j1
            img.img-a.img-t(src='@/assets/curso/temas/64.png' alt='')        
          .col.pt-lg-0.pt-md-4
            .bgs.p-3.brad.h-100.j1
              p.mb-0 Las plataformas en la nube para IoT ofrecen herramientas avanzadas para la gestión de datos, tales como visualización de datos en tiempo real, configuración de alertas, creación de paneles de control personalizados y aplicación de modelos de inteligencia artificial y aprendizaje automático. Este capítulo explora las principales plataformas en la nube utilizadas en IoT, su funcionalidad, ventajas y cómo estas pueden integrarse en sistemas de gestión de procesos productivos.

      .col-lg-3.my-lg-0.my-3
        img.img-a.img-t(src='@/assets/curso/temas/63.png' alt='')   

    Separador 
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 5.1	Introducción a ThingSpeak y otras plataformas de gestión de datos

    .row.justify-content-center.mb-4
      .col-lg-5.my-lg-0.my-3
        img.img-a.img-t(src='@/assets/curso/temas/65.png' alt='')               
      .col-lg-7.my-lg-0.my-3.j1
        p Una plataforma en la nube para IoT es un entorno digital que permite a los usuarios conectar dispositivos, recopilar datos, analizar información y ejecutar controles en un solo lugar. Estas plataformas incluyen servicios de almacenamiento, procesamiento de datos y conectividad, lo que permite a los desarrolladores y operadores integrar y gestionar dispositivos IoT de manera eficiente y escalable. Las plataformas en la nube no solo permiten centralizar la información generada por los sensores, sino que también ofrecen herramientas para analizar esos datos en tiempo real y generar informes detallados que apoyan la toma de decisiones.
        .bg1-br.p-4.brad
          p.mb-0 Las plataformas más utilizadas en IoT incluyen servicios específicos para distintos sectores, como agricultura, manufactura, energía e infraestructura, lo que facilita la adaptación de cada solución a las necesidades del usuario. Entre las plataformas populares se encuentran ThingSpeak, AWS IoT, Google Cloud IoT y Azure IoT Hub, que proporcionan capacidades avanzadas para la gestión de datos, la integración de dispositivos y el análisis en tiempo real.  

    Separador 
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 5.2	Creación de un canal para visualización de datos
    .row.justify-content-center.mb-4
      .col-lg-8.my-lg-0.my-3
        p Las plataformas en la nube para IoT ofrecen una amplia gama de funcionalidades diseñadas para facilitar la recopilación, visualización y análisis de datos, así como la gestión de dispositivos. A continuación, se describen algunas de las principales funcionalidades:
        AccordionRED(tipo="a" clase-tarjeta="tarjeta bg7")
          div(titulo="Recopilación y almacenamiento de datos") La nube permite almacenar grandes volúmenes de datos provenientes de múltiples dispositivos, lo cual es esencial para el análisis de tendencias y el almacenamiento histórico. Este almacenamiento también permite procesar datos históricos para identificar patrones y mejorar la eficiencia del sistema.   
          div(titulo="Visualización de datos en tiempo real") La visualización de datos en tiempo real es fundamental para monitorear el estado de los dispositivos IoT y responder rápidamente a condiciones anómalas. La mayoría de las plataformas ofrecen paneles de control (dashboards) que permiten a los usuarios ver gráficos y métricas clave en un formato comprensible y personalizable.
          div(titulo="Configuración de alertas y notificaciones") Las plataformas en la nube para IoT permiten configurar alertas y notificaciones automáticas basadas en umbrales establecidos. Por ejemplo, en un sistema de monitoreo de temperatura, una alerta puede activarse si la temperatura excede un rango predefinido, permitiendo una respuesta inmediata para prevenir problemas en el proceso productivo.
      .col-lg-4.my-lg-0.my-3
        img.img-a.img-t(src='@/assets/curso/temas/71.png' alt='') 

    .row.justify-content-center.mb-4
      .col-lg-4.my-lg-0.my-3
        img.img-a.img-t(src='@/assets/curso/temas/72.png' alt='')       
      .col-lg-8.my-lg-0.my-3
        AccordionRED(tipo="a" clase-tarjeta="tarjeta bg7")
          div(titulo="Análisis y modelos de inteligencia artificial") Muchas plataformas en la nube ofrecen capacidades de inteligencia artificial y aprendizaje automático (machine learning) que permiten predecir fallos, optimizar procesos y tomar decisiones automatizadas en función de los datos históricos y actuales. Por ejemplo, los modelos de predicción de mantenimiento permiten anticipar cuándo un equipo puede fallar, mejorando la eficiencia y reduciendo costos de mantenimiento.
          div(titulo="Gestión de dispositivos IoT") Las plataformas IoT en la nube permiten administrar y monitorear los dispositivos conectados, incluyendo actualizaciones de firmware, configuraciones y gestión de seguridad. Esto facilita la supervisión y control de los dispositivos a lo largo de su ciclo de vida, manteniéndolos operativos y seguros.

    Separador 
    #t_5_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 5.3	 Configuración de alertas y notificaciones basadas en variables críticas 
    .bg11.mb-4  
      .row.justify-content-center
        .col-lg-8.my-3.j1 
          .p-4
            p.mb-0 La elección de una plataforma en la nube adecuada es fundamental para implementar una solución IoT efectiva, ya que estas plataformas permiten conectar dispositivos, almacenar grandes volúmenes de datos y analizarlos en tiempo real. Las plataformas en la nube para IoT ofrecen distintas funcionalidades que van desde la visualización de datos hasta el uso de herramientas avanzadas de inteligencia artificial y machine learning. Cada plataforma tiene características únicas, por lo que la elección dependerá de las necesidades específicas del proceso productivo, como la escala de implementación, el tipo de análisis requerido y la integración con otros sistemas.
        .col-lg-4
          img.img-a.img-t(src='@/assets/curso/temas/66.png' alt='')          

    p A continuación, se presentan algunas de las plataformas en la nube más utilizadas en el ámbito de IoT, con sus características clave y ventajas en el contexto de gestión de datos para procesos productivos:

    TabsC.color-acento-contenido.mb-5
      .py-3.py-md-4.bg11(titulo="ThingSpeak")
        .row.justify-content-center.py-4
          .col-lg-4.my-lg-0.my-3
            img.img-a.img-t(src='@/assets/curso/temas/67.png' alt='')  
          .col-lg-7.my-lg-0.my-3
            h5 ThingSpeak
            p Es una plataforma en la nube desarrollada por MathWorks, que permite la recolección, análisis y visualización de datos de sensores IoT. ThingSpeak es particularmente popular en proyectos de pequeña escala y aplicaciones educativas, debido a su simplicidad y compatibilidad con el entorno de programación MATLAB. Es ideal para estudiantes y pequeños proyectos, ya que ofrece una interfaz accesible para configurar gráficos en tiempo real, establecer alertas y realizar análisis de datos básicos.

            p Características principales: 

            ul.lista-ul.fa-ul
              li 
                i.fas.fa-check-circle.color1
                span Visualización en tiempo real de datos de sensores.
              li 
                i.fas.fa-check-circle.color1
                span Análisis y procesamiento de datos con MATLAB.
              li 
                i.fas.fa-check-circle.color1
                span Configuración de alertas automáticas y accesibilidad a través de API.  

      .py-3.py-md-4.bg11(titulo="AWS IoT (Amazon Web Services IoT)")
        .row.justify-content-center.py-4
          .col-lg-4.my-lg-0.my-3
            img.img-a.img-t(src='@/assets/curso/temas/68.png' alt='')  
          .col-lg-7.my-lg-0.my-3
            h5 AWS IoT (Amazon Web Services IoT)
            p Es una plataforma robusta que ofrece una amplia gama de servicios para la gestión de dispositivos IoT, almacenamiento de datos y análisis en tiempo real. AWS IoT permite la integración de sistemas complejos, ofreciendo herramientas avanzadas de inteligencia artificial y machine learning, como Amazon SageMaker, que permite entrenar modelos de predicción a partir de los datos recopilados. AWS IoT es ideal para aplicaciones industriales de gran escala, donde se requiere una infraestructura escalable y segura.

            p Características principales: 

            ul.lista-ul.fa-ul
              li 
                i.fas.fa-check-circle.color1
                span Administración avanzada de dispositivos IoT y almacenamiento de datos.
              li 
                i.fas.fa-check-circle.color1
                span Herramientas de inteligencia artificial y machine learning integradas.
              li 
                i.fas.fa-check-circle.color1
                span Alta escalabilidad y seguridad para aplicaciones industriales.  

      .py-3.py-md-4.bg11(titulo="Google Cloud IoT")
        .row.justify-content-center.py-4
          .col-lg-4.my-lg-0.my-3
            img.img-a.img-t(src='@/assets/curso/temas/69.png' alt='')  
          .col-lg-7.my-lg-0.my-3
            h5 Google Cloud IoT
            p Es una plataforma en la nube que facilita la conectividad y gestión de dispositivos IoT. Incluye Google Cloud IoT Core, un servicio gestionado que permite conectar, administrar y recibir datos de forma segura desde millones de dispositivos IoT. Google Cloud IoT está diseñado para aplicaciones de análisis avanzado, ofreciendo integración con herramientas como BigQuery y Google Data Studio, que facilitan el análisis de grandes volúmenes de datos y la creación de visualizaciones detalladas.

            p Características principales: 

            ul.lista-ul.fa-ul
              li 
                i.fas.fa-check-circle.color1
                span Conectividad segura y escalabilidad para millones de dispositivos.
              li 
                i.fas.fa-check-circle.color1
                span Análisis de datos avanzado con BigQuery y Data Studio.
              li 
                i.fas.fa-check-circle.color1
                span Integración con otras soluciones de Google para inteligencia artificial  

      .py-3.py-md-4.bg11(titulo="Azure IoT Hub (Microsoft)")
        .row.justify-content-center.py-4
          .col-lg-4.my-lg-0.my-3
            img.img-a.img-t(src='@/assets/curso/temas/70.png' alt='')  
          .col-lg-7.my-lg-0.my-3
            h5 Azure IoT Hub (Microsoft)
            p Azure IoT Hub es una plataforma en la nube de Microsoft que permite la conectividad, monitoreo y control de dispositivos IoT de manera segura y escalable. Azure IoT Hub ofrece servicios adicionales como Azure Digital Twins y Azure Machine Learning, que permiten crear representaciones digitales de dispositivos y aplicar modelos predictivos para optimizar la operación. Es ideal para industrias que requieren una integración fluida con otros servicios de Microsoft.

            p Características principales: 

            ul.lista-ul.fa-ul
              li 
                i.fas.fa-check-circle.color1
                span Soporte para millones de dispositivos y conectividad segura.
              li 
                i.fas.fa-check-circle.color1
                span Herramientas avanzadas para gemelos digitales e inteligencia artificial.
              li 
                i.fas.fa-check-circle.color1
                span Integración con servicios de Microsoft, como Power BI, para visualización avanzada. 

    Separador 
    #t_5_4.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 5.4	Ventajas de utilizar plataformas en la nube para IoT
    .row.justify-content-center.mb-4
      .col-lg-8.my-lg-0.my-3
        p La implementación de plataformas en la nube para IoT ofrece diversas ventajas en la gestión de datos y dispositivos en procesos productivos:
        AccordionRED(tipo="a" clase-tarjeta="tarjeta bg7")
          div(titulo="Acceso y gestión remota") La conectividad en la nube permite a los usuarios acceder y gestionar datos desde cualquier lugar, facilitando la supervisión y control de los sistemas IoT en tiempo real. sistema.   
          div(titulo="Escalabilidad") Las plataformas en la nube pueden manejar grandes volúmenes de datos y un número elevado de dispositivos, adaptándose a las necesidades de crecimiento del sistema.
          div(titulo="Reducción de costos") La nube elimina la necesidad de infraestructura física costosa, reduciendo los costos de implementación y mantenimiento del sistema.
          div(titulo="Análisis avanzado y predicción") Las herramientas de análisis de datos y machine learning integradas permiten optimizar procesos, predecir fallos y mejorar la eficiencia operativa.
          div(titulo="Actualización continua") Las plataformas en la nube suelen recibir actualizaciones regulares, asegurando la disponibilidad de las últimas tecnologías y mejoras en seguridad y rendimiento.
      .col-lg-4.my-lg-0.my-3
        img.img-a.img-t(src='@/assets/curso/temas/71.png' alt='')                                                                

    Separador 
    #t_5_5.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 5.5	Aplicación de plataformas en la nube en procesos productivos
                
    .row.justify-content-center.mb-4.bgs.p-4
      .col-lg-3.my-lg-0.my-3
        img.img-a.img-t(src='@/assets/curso/temas/73.png' alt='')        
      .col-lg-9.my-lg-0.my-3
        p La implementación de plataformas en la nube en procesos productivos permite transformar los datos generados por dispositivos IoT en información valiosa para la toma de decisiones y la optimización de recursos. Mediante el uso de plataformas como AWS IoT, Google Cloud IoT y Azure IoT Hub, los datos capturados en tiempo real se pueden procesar y analizar para mejorar la eficiencia, reducir costos y anticipar problemas en distintos sectores, desde la agricultura hasta la manufactura.

        ul.lista-ul.fa-ul
          li 
            i.fas.fa-check-circle.color1
            span #[b Agricultura de precisión:] los datos de humedad, temperatura y nutrientes del suelo capturados por sensores IoT en el campo son enviados a una plataforma como ThingSpeak o Google Cloud IoT. En esta plataforma, los datos se procesan y se visualizan en tiempo real, permitiendo que los agricultores ajusten el riego y la fertilización para mejorar la eficiencia y el rendimiento del cultivo.

          li 
            i.fas.fa-check-circle.color1
            span #[b Mantenimiento predictivo en manufactura:] las plataformas en la nube como AWS IoT permiten recopilar datos de sensores de vibración y temperatura instalados en máquinas industriales. Estos datos se analizan mediante algoritmos de machine learning para detectar patrones de desgaste y predecir fallas antes de que ocurran, lo cual minimiza el tiempo de inactividad y reduce los costos de mantenimiento.

    .row.justify-content-center
      .col-lg-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 5. 
          span Resumen plataformas en la nube para la gestión de datos IoT

        .bgfig.p-4.mb-1
          img.img-a.img-t(src='@/assets/curso/temas/74.svg' alt='La Figura 5 se denomina «Resumen plataformas en la nube para la gestión de datos IoT». Presenta un mapa conceptual que se divide en cuatro secciones principales: la importancia de las plataformas en la nube (incluyendo recopilación y procesamiento de datos), las funcionalidades de las plataformas (como centralización de datos y toma de decisiones), las herramientas avanzadas ofrecidas (que incluyen visualización en tiempo real y modelos de IA), y la integración de las plataformas en sistemas de gestión de procesos productivos.')  

        figcaption Fuente: OIT, 2024. 



    .row.justify-content-center.mt-5
      .col-lg-4.my-3.j1
        img.img-a.img-t(src='@/assets/curso/temas/75.png' alt='')
      .col-lg-8.my-3

        p Las plataformas en la nube para IoT ofrecen un recurso invaluable para la gestión eficiente y avanzada de los datos en los sistemas productivos. Facilitan una visión integral y en tiempo real de los procesos, lo que permite una administración proactiva y basada en datos. A medida que la tecnología avanza y las empresas se vuelven cada vez más digitales, el dominio de estas plataformas se convierte en una competencia esencial para cualquier profesional que desee optimizar y modernizar procesos mediante IoT. En definitiva, estas plataformas no solo representan una herramienta tecnológica, sino también una oportunidad para crear procesos productivos más inteligentes, sostenibles y resilientes.

        p Se recomienda para profundizar consultar el siguiente material
        .row.justify-content-center        
          .col-lg-6.my-3
            a.anexo.mb-3(href="https://www.youtube.com/watch?v=YjAQ3L5uC5g" target="_blank")
              .anexo__icono
                img(src="@/assets/curso/temas/icono-link.svg")
              .anexo__texto
                p #[b Enlace web.] Video: “Introduction to AWS IoT Core” 
            a.anexo.mb-3(href="https://cloud.google.com/iot-core/docs/quickstart" target="_blank")
              .anexo__icono
                img(src="@/assets/curso/temas/icono-link.svg")
              .anexo__texto
                p #[b Enlace web.] Tutoriales en línea: "Getting Started with Google Cloud IoT Core"   

          .col-lg-6.my-3
            a.anexo.mb-3(href="https://www.mathworks.com/help/thingspeak/getting-started.html" target="_blank")
              .anexo__icono
                img(src="@/assets/curso/temas/icono-link.svg")
              .anexo__texto
                p #[b Enlace web.] “Getting Started with ThingSpeak"         
                


</template>

<script>
export default {
  name: 'Tema5',
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
