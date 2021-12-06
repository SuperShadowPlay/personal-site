<template>
    <v-content>
      <div class="row">
        <div class="column a">
          <div class="blog">
            <!-- Put most recent blog post here -->
            <h1>Current Project:</h1>
            <div class="text">
              <a href="https://github.com/codi-hacks/space-race">Spaceship racer!</a>
              I am, along with my programming club at John Tyler Community College, creating a spaceship racing game with
              <a href="https://love2d.org/">Love2D</a>. It is still in early development stages, but I am excited to see where it is headed.
            </div>
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

.text {
  font-size: 1.5em;
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