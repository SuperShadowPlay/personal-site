<template>
  <v-card>
    <v-toolbar color="primary" class="mx-auto overflow-hidden rounded-0" flat extend>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title color=secondary> Trevor's Webspace </v-toolbar-title>
    </v-toolbar>

    <v-navigation-drawer v-model="drawer" color="white" app temporary>
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
          
          <div class="link-list" v-for="link in links" :key="link.name">
            <router-link :to="link.route">
              <v-list-item>
                <v-list-item-title v-text="link.name"></v-list-item-title>
              </v-list-item>
            </router-link>
          </div>
          <v-divider></v-divider>

          <v-list-item @click="drawerClick('https://www.youtube.com/user/SuperShadowP1ay/')">
            <img src="../assets/y-icon.svg" class="icons" alt="YouTube Logo">
            <v-list-item-title>YouTube</v-list-item-title>
          </v-list-item>

          <v-list-item @click="drawerClick('https://github.com/SuperShadowPlay')">
            <img src="../assets/github-icon.svg" class="icons" alt="GitHub Logo"> <br>
            <v-list-item-title>GitHub</v-list-item-title>
          </v-list-item>

        </v-list-item-group>
      </v-list>

      <template v-slot:append>
        <div class="pa-1">
          <v-btn block class="source-button" color="accent" elevation="2"
          @click="drawerClick('https://github.com/SuperShadowPlay/personal-site')"> Source Code </v-btn>
        </div>
      </template>
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
    links: [
      {
        name: "Home",
        route: "/"
      },
      {
        name: "About",
        route: "/about"
      }
    ]
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
  height: 30px;
  margin: 10px;
  margin-right: 20px;
  margin-left: 0px;
}
</style>
