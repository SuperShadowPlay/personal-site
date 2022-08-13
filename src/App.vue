<template>
  <v-app id="app">
    <Topbar/>
      <v-main>
        <router-view></router-view>
      </v-main>
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
