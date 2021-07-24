<template>
  <v-app id="app">
    <Topbar/>
    <h1>Hi, I'm Trevor.</h1>
    <p>This site is still under construction. Please check back soon!</p>
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
