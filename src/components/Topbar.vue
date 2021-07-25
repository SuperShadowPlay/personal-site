<template>
  <v-card>
    <v-app-bar app color="primary" class="mx-auto overflow-hidden" flat extend>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title color=secondary> Trevor's Webspace </v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn class="source-button" color="accent" elevation="2" @click="drawerClick('https://github.com/SuperShadowPlay/personal-site')"> Source Code </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" color="white" app temporary>
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
          <v-list-item @click="drawerClick('https://www.youtube.com/user/SuperShadowP1ay/')">
            <img src="../assets/y-icon.svg" class="icons">
            <v-list-item-title>YouTube</v-list-item-title>
          </v-list-item>

          <v-list-item @click="drawerClick('https://github.com/SuperShadowPlay')">
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
    drawerClick: function (link) {
      window.location.href = link;
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

v-app-bar-title {
  font-size: 1.3em
}
</style>
