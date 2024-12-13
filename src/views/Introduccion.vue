<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.mb-4   
      .col-lg-9.my-lg-0.my-3
        p El Internet de las Cosas (IoT) se ha convertido en una herramienta esencial para la modernización y automatización de procesos productivos en sectores como la agricultura, la industria y la agroindustria. Esta tecnología permite conectar dispositivos y sensores para recolectar datos en tiempo real, facilitando el monitoreo y control remoto de sistemas. A través de la implementación de IoT, se pueden gestionar variables como la temperatura, humedad, pH y otros factores críticos que impactan la productividad y eficiencia de un proceso productivo.
        .row.justify-content-center.align-items-center.mb-4
          .col-lg-auto
            img.img-a.img-t(src='@/assets/curso/temas/7.png' alt='')        
          .col.pt-lg-0.pt-md-4
            .bg4.p-3.brad
              p.mb-0 La automatización basada en IoT permite optimizar recursos, reducir costos y mejorar la sostenibilidad de las operaciones al tomar decisiones fundamentadas en datos precisos y en tiempo real. Este componente formativo está diseñado para proporcionar a los estudiantes una comprensión integral de IoT aplicada a la gestión de procesos automatizados, con un enfoque particular en el monitoreo y control de variables clave en entornos productivos como la agroindustria y el sector agrícola. Además, se les introducirá a las tecnologías de comunicación de largo alcance, como LoRaWAN, esenciales para operar en zonas rurales y remotas.

      .col-lg-3.my-lg-0.my-3
        img.img-a.img-t(src='@/assets/curso/temas/8.png' alt='')       

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-auto
        img.img-a.img-t(src='@/assets/curso/temas/9.png' alt='')
      .col.pt-lg-0.pt-md-4
        p.mb-0 A través de este componente se aprenderá a configurar y poner a punto sistemas de IoT, desde la instalación de sensores hasta la integración con plataformas en la nube que permiten visualizar y gestionar los datos. A través de actividades prácticas y el uso de protocolos de comunicación como MQTT y LoRa, los aprendices se familiarizarán con herramientas de recolección y análisis de datos que son cruciales en el contexto actual.               

    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/wG0fdlslv1I?si=0OxDo-LplwKhl-ZT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
