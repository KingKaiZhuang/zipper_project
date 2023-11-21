<template>
  <v-app>
    <Nav/>
    <v-main>
      <router-view></router-view>
    </v-main>
    <Footer/>
  </v-app>

</template>

<script>
import Nav from './layouts/header_footer/Header.vue';
import Footer from './layouts/header_footer/Footer.vue'

export default {
  name: 'App',
  data () {
    return {
      //
    }
  },
  components: {
    Nav,
    Footer
  }
}
</script>