<template>
  <v-app id="app">
    <Topbar/>
      <v-content>
        <router-view></router-view>
      </v-content>
  </v-app>
</template>

<script>
import Topbar from '@/components/Topbar.vue'

export default {
  name: 'App',
  components: {
    Topbar
  },
}
</script>

<style>
#app {
  font-family: "Roboto";
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.content {
  margin: 10px;
  margin-top: 5px;
}
</style>
