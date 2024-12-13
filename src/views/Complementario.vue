<template lang="pug">
.curso-main-container.complementario
  BannerInterno(icono="far fa-folder-open" titulo="Material complementario")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .table-responsive
      table
        thead
          tr
            th(colspan='3' scope="col") Tema
            th(colspan='5' scope="col") Referencia APA del material
            th(colspan='2' scope="col") Tipo 
            th(colspan='2' scope="col") Enlace
        tbody
          tr(v-for="(item, index) in computedData" :key="'complementario-'+index")
            td.text-start(colspan='3' scope="row" v-html="item.tema")
            td.text-start(colspan='5' scope="row" v-html="item.referencia")
            td(colspan='2' v-html="item.tipo")
            td(colspan='2')
              .complementario__enlaces
                a.complementario__btn(v-for="link of item.link" :href="link" target="_blank")
                  i.fas.fa-external-link-alt

</template>
<script>
export default {
  name: 'MaterialComplementario',
  computed: {
    complementarioData() {
      return [
        {
          tema: 'Configuración del microcontrolador ESP32',
          referencia:
            'DroneBot Workshop. (2020). Getting Started with ESP32. YouTube.',
          tipo: 'Video tutorial',
          link: 'https://www.youtube.com/watch?v=tc3Qnf79Ny8',
        },
        {
          tema: 'Programación con Arduino IDE',
          referencia:
            'Random Nerd Tutorials. (2021). How to Program ESP32 and ESP8266 with Arduino IDE.',
          tipo: 'Tutorial en línea',
          link: 'https://randomnerdtutorials.com/program-esp32-arduino-ide',
        },
        {
          tema: 'Simulador para proyectos IoT',
          referencia: 'Wokwi. (2022). Wokwi IoT Simulator. Wokwi.',
          tipo: 'Simulador en línea',
          link: 'https://wokwi.com/',
        },
        {
          tema: 'AWS IoT en Aplicaciones Industriales',
          referencia:
            'Amazon Web Services. (2019). Introduction to AWS IoT Core. YouTube.',
          tipo: 'Video',
          link:
            'https://www.youtube.com/watch?v=Q89oqK_nzFg&list=PLhr1KZpdzukf3Ohr9eTB3eQlawDT5tHGL',
        },
        {
          tema: 'Casos de Estudio en Agricultura y Manufactura',
          referencia:
            'Lee, J., & Kim, H. (2021). Cloud IoT Applications in Smart Agriculture and Manufacturing. Journal of Industrial IoT, 6(2), 123-138.',
          tipo: 'Artículo de investigación',
          link:
            'Agricultura inteligente habilitada para IoT con Industria 5.0 - Aishita Sharma, Sunil K. Singh, Sudhakar Kumar, Ruchika Thakur, Brij B. Gupta, Varsha Arya, 2024  (journals.sagepub.com)',
        },
      ]
    },
    computedData() {
      const data = this.complementarioData
      return data.map(item => {
        let nuevoLink = []
        if (item.link) {
          if (typeof item.link === 'string') {
            nuevoLink.push(item.link)
          } else {
            nuevoLink = item.link
          }
        } else if (item.descarga) {
          if (typeof item.descarga === 'string') {
            nuevoLink.push(this.obtenerLink(item.descarga))
          } else {
            item.descarga.forEach(link => {
              nuevoLink.push(this.obtenerLink(link))
            })
          }
        }
        return {
          ...item,
          link: nuevoLink,
        }
      })
    },
  },
}
</script>

<style lang="sass">
.complementario
  &__enlaces
    display: flex
    justify-content: center
    flex-wrap: wrap
    a
      margin: 0 5px
  &__btn
    font-size: 1.5em
    line-height: 1em
table
  width: calc(100% - 1px)
  min-width: 800px
  thead
    background-color: $color-sistema-e
    th
      border-color: $color-sistema-e
  th, td
    padding: 25px 20px
    text-align: center
</style>
