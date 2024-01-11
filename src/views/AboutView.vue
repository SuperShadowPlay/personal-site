<template>
  <v-content>
    <div class="content">
      <h2>About this site</h2>
      <hr>
      <p/>
      <p>This site is currently a space on the web for me to showcase projects I create or had a hand in.</p>
      <p>This website's code is open-source and is available on GitHub:</p>
      <a href="https://github.com/SuperShadowPlay/personal-site">
      <v-btn x-large class="source-button" color="accent" elevation="2"> Source Code </v-btn>
      </a>
    </div>
  </v-content>
</template>

<script>
export default {
  metaInfo: {
    title: "About | Trevor's Webspace"
  }
}
</script>

<style scoped>
.content {
  font-size: 1.5em;
}
</style>