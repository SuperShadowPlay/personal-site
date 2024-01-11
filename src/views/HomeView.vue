<template>
    <v-main>
      <div class="body">
        <Shelf/>
        <br/>
        <!-- <img src="https://ghchart.rshah.org/SuperShadowPlay" alt="2016rshah's Github chart" /> -->
      </div>
    </v-main>
</template>

<script>
import Shelf from '@/components/ProjectShelf.vue'
export default {
  components: {
    Shelf
  },
  metaInfo: {
    title: "Home | Trevor's Webspace"
  }
}
</script>

<style scoped>
.body {
  float: center;
  margin-left: 30px;
  margin-right: 30px;
  margin-top: 10px;
  margin-bottom:50px;

}
</style>