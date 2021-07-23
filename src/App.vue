<template>
  <v-app>
  <div id="app">
    <Links/>
  </div>
  </v-app>
</template>

<script>
import Links from './components/Links.vue'

export default {
  name: 'App',
  components: {
    Links
  }
}
</script>

<style>
:root {
  --primary: #16b26a;
  --complimentary: #b2165f;
  --extra-green: #16b21b;
  --extra-blue: #16adb2;
  --outthere-blue: #165fb2;
  --outthere-purple: #6916b2;
}
#app {
  font-family: "Roboto";
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
