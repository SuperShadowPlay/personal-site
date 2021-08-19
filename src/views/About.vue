<template>
  <v-content>
    <div class="content">
      <h1>About this site</h1>
      <hr>
      <p>This site is a space on the web for me to unload anything that I feel like.
        Please check back every so often and see what's new!</p>
      <br>
      <p>This website's code is open-source and is available on GitHub:</p>
      <a href="https://github.com/SuperShadowPlay/personal-site">
      <v-btn x-large class="source-button" color="accent" elevation="2"> Source Code </v-btn>
      </a>
      <v-btn x-large class="source-button" color="warning" elevation="2"
      @click="yeet()"> Dark </v-btn>
      <v-btn x-large class="source-button" color="error" elevation="2"
      @click="yote()"> Light </v-btn>
    </div>
  </v-content>
</template>

<script>
import vuetify from '@/plugins/vuetify'

export default {
  metaInfo: {
    title: "About | Trevor's Webspace"
  },
  methods: {
    yeet () {
      vuetify.framework.theme.dark = true
    },
    yote () {
      vuetify.framework.theme.dark = false
    }
  }
}
</script>