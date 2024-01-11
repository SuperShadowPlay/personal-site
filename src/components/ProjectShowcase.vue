<template>
  <div class="main">

    <img :src="require(`@/assets/${image_name}`)"/> 

    <div class="body">
      <h2> {{ title }} </h2>
      <slot></slot>
      <br/>
      <v-btn x-large color="info" elevation="2"
        @click=redirectNewTab()>
        <span class="btn-text">Project Website</span>
      </v-btn>
    </div>
    <br/>
  </div>
</template>

<script>
export default {
  name: "ProjectShowcase",
  props: ["title", "image_name", "website"],
  methods: {
    redirectNewTab: function () {
      if (this.website) {
        window.open(this.website, '_blank');
      }
    }
  }
}
</script>

<style scoped>
.main {
  margin: 15px;
}
.btn-text {
  font-size: 1.5em;
}

.body {
  font-size: 1.5em;
}

@media screen and (orientation: landscape) {
  .main {
    min-height: 40vh;
  }

  .body {
    float: left;
    max-width: 60vw;
  }

  img {
    float: right;
    height: 40vh;
    max-width: 30vw;
  }
}

@media screen and (orientation: portrait) {
  img {
    max-height: 50vh;
    max-width: 80vw;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>