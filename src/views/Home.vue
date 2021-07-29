<template>
    <v-content>
      <div class="row">
        <div class="column a">
          <div class="blog">
            <!-- Put most recent blog post here -->
            This site is still under construction. Please check back soon.
          </div>
        </div>
        <div class="column b">
          <div class="mastodon-feed">
            <Mastodon/>
          </div>
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
.column {
  padding: 10px;
}

.blog {
  margin: 10px;
}

.mastodon-feed {
  margin: 10px;
}

@media screen and (orientation: landscape) {
  .column.a {
    width: 70%;
    float: left;
  }

  .column.b {
    width: 30%;
    float: left;
  }

  .row:after {
    content: "";
    display: table;
    clear: both;
  }

  .mastodon-feed {
    float: right;
  }
}
</style>