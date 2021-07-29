<template>
    <v-content>
      <div class="row">
        <div class="column blog">
          Placeholder
        </div>
        <div class="column mastodon-feed">
          <Mastodon/>
        </div>
      </div>
    </v-content>
</template>

<script>
import Mastodon from '@/components/Mastodon.vue'
export default {
  components: {
    Mastodon
  },
  metaInfo: {
    title: "Blog | Trevor's Webspace"
  }
}
</script>

<style scoped>
.blog {
  margin: 10px;
  float: left;
}

.mastodon-feed {
  float: right;
  margin-right: 10px;
  margin-top: 10px;
}
</style>