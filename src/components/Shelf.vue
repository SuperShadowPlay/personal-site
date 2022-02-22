<template>
  <div class="main">
    <Showcase title="Current Project:">
      <a href="https://github.com/codi-hacks/space-race">Spaceship racer!</a>
      I am, along with the people at <a href="https://github.com/codi-hacks">CodiHacks</a>, are creating a spaceship racing game with
      <a href="https://love2d.org/">Love2D</a>. It is still in early development stages, but I am excited to see where it is headed.
    </Showcase>
    <br/>
    <Showcase title="Weather Station:">
      Also in collaboration with my programming co-conspirators, we created a <a href="https://weather.codihacks.org/">weather station web app</a>.
      I cannot take the credit for the station itself, but I had a hand in developing the web app and the API server (in Rust, of course).
    </Showcase>
  </div>
</template>

<script>
import Showcase from '@/components/Showcase.vue'
export default {
  components: {
    Showcase
  }
}
</script>

<style scoped>
.text {
  font-size: 1.5em;
}
</style>