<template>
  <v-card>
    <v-toolbar color="primary" class="mx-auto overflow-hidden" extend app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title color=secondary> Trevor's Webspace </v-toolbar-title>
      <v-spacer></v-spacer>
      <a href="https://github.com/SuperShadowPlay/personal-site">
      <v-btn class="source-button" color="accent" elevation="2"> Source Code </v-btn>
      </a>
    </v-toolbar>

    <v-navigation-drawer v-model="drawer" color="white" app temporary>
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
          <v-list-item>
            <img src="../assets/youtube-icon.svg" class="icons">
            <v-list-item-title>YouTube</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <img src="../assets/github-icon.svg" class="icons"> <br>
            <v-list-item-title>GitHub</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
export default {
  name: 'Topbar',
  methods: {
    navBarClick(link) {
      alert(link);
    },
  },
  data: () => ({
    drawer: false,
    group: null,
  }),
  watch: {
    group () {
      this.drawer = false
    },
  },
}
</script>

<style scoped>
img.icons {
  height: 25px;
  margin: 15px;
}
</style>
