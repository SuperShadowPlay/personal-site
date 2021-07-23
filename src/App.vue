<template>
  <v-app id="app">
    <Topbar/>
    <h1>what's up</h1>
  </v-app>
</template>

<script>
import Topbar from './components/Topbar.vue'

export default {
  name: 'App',
  components: {
    Topbar
  },
  metaInfo: {
    title: "Trevor's Webspace"
  }
}
</script>

<style>
#app {
  font-family: "Roboto";
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
