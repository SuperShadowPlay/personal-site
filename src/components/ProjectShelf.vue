<template>
  <div class="main">
    <Showcase title="Space Race" image_name="space_race.png" website="https://github.com/codi-hacks/space-race">
      Spaceship racer!
      I am, along with the people at <a href="https://github.com/codi-hacks">CodiHacks</a>, created a spaceship racing game with
      Lua framework <a href="https://love2d.org/">Love2D</a>. It is mostly complete, yet it lacks levels!
      If you are interested in helping, please open an issue on our GitHub.
    </Showcase>
    <hr/>
    <Showcase title="Weather Station" image_name="weather_station.png" website="https://weather.codihacks.org/">
      Also in collaboration with my programming co-conspirators, we created a <a href="https://github.com/codi-hacks/weather-station">weather station web app</a>.
      I cannot take the credit for the station itself, but I had a hand in developing the web app and the API server (in Rust, of course).
    </Showcase>
  </div>
</template>

<script setup>
import Showcase from '@/components/ProjectShowcase.vue'
</script>

<style scoped>
.text {
  font-size: 1.5em;
}
</style>