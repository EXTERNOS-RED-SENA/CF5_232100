<template lang="pug">
.curso-main-container.referencias
  BannerInterno(icono="fas fa-book" titulo="Referencias bibliográficas")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .referencias__item(v-for="ref in orderedData" :key="ref.link")
      span(v-html="ref.referencia")
      a.ms-1(v-if="ref.link" :href="ref.link" target="_blank")
        span(v-html="ref.link")
        i.ms-1.fas.fa-external-link-alt
      hr.my-3
</template>
<script>
export default {
  name: 'Referencias',
  data: () => ({
    referencias: [
      {
        referencia:
          'Amazon Web Services. (2019). <i>Introduction to AWS IoT Core</i>. YouTube. ',
        link: 'https://www.youtube.com/watch?v=YjAQ3L5uC5g',
      },
      {
        referencia:
          'Beebom. (2019). <i>What is LoRa and LoRaWAN?</i> YouTube. ',
        link: 'https://www.youtube.com/watch?v=efU-6qzGKTc',
      },
      {
        referencia:
          'Baker, M. (2020). <i>Cloud Platforms for IoT: An Overview</i>. IoT World Today. ',
        link: 'https://www.iotworldtoday.com/',
      },
      {
        referencia:
          'Digi-Key Electronics. (2019). <i>Power Saving Techniques for IoT Devices</i>. Digi-Key. ',
        link: 'https://www.digikey.com/',
      },
      {
        referencia:
          'DroneBot Workshop. (2020). <i>Getting Started with ESP32</i>. YouTube. ',
        link: 'https://www.youtube.com/watch?v=MLaPp9gJfYY',
      },
      {
        referencia:
          'EdX. (2020). <i>IoT for Smart Buildings and Energy Management</i>. EdX. ',
        link:
          'https://www.edx.org/course/iot-smart-buildings-energy-management',
      },
      {
        referencia:
          'Google Cloud. (2021). <i>Getting Started with Google Cloud IoT Core</i>. Google Cloud. ',
        link: 'https://cloud.google.com/iot-core/docs/quickstart',
      },
      {
        referencia:
          'IBM Think Academy. (2019). <i>How IoT is Revolutionizing Manufacturing and Predictive Maintenance</i>. YouTube. ',
        link: 'https://www.youtube.com/watch?v=b6zAf8kx3o4',
      },
      {
        referencia:
          'IoT Projects. (2020). <i>How to Set Up Alerts in ThingSpeak Using IFTTT</i>. IoT Projects. ',
        link: 'https://www.iotprojects.com/alerts-thingspeak-ifttt',
      },
      {
        referencia:
          'Lee, J., & Kim, H. (2021). <i>Cloud IoT Applications in Smart Agriculture and Manufacturing. Journal of Industrial IoT, 6</i>(2), 123-138. ',
        link: 'https://www.journalindustriot.com/cloud-applications',
      },
      {
        referencia:
          'MathWorks. (2021). <i>Visualizing IoT Data with ThingSpeak</i>. MathWorks. ',
        link: 'https://www.mathworks.com/help/thingspeak',
      },
      {
        referencia:
          'Random Nerd Tutorials. (2021). <i>How to Program ESP32 and ESP8266 with Arduino IDE</i>. Random Nerd Tutorials. ',
        link: 'https://randomnerdtutorials.com/',
      },
      {
        referencia:
          'SparkFun. (2021). <i>DHT11 and DHT22 Sensors Explained</i>. SparkFun. ',
        link: 'https://learn.sparkfun.com/tutorials/',
      },
      {
        referencia:
          'White, A. (2021). <i>Understanding IoT Communication Protocols: MQTT, CoAP, LoRa, and Others</i>. IoT For All. ',
        link: 'https://www.iotforall.com/',
      },
    ],
  }),
  computed: {
    orderedData() {
      return [...this.referencias].sort((a, b) => {
        const afl = this.quitarAcentos(a.referencia.split(' ')[0].toLowerCase())
        const bfl = this.quitarAcentos(b.referencia.split(' ')[0].toLowerCase())
        if (afl < bfl) return -1
        if (afl > bfl) return 1
        return 0
      })
    },
  },
  methods: {
    quitarAcentos(str) {
      return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    },
  },
}
</script>

<style lang="sass">
.referencias
  &__item
    &:last-child
      hr
        display: none
    a
      color: $blue
      text-decoration: underline
      overflow-wrap: break-word
</style>
