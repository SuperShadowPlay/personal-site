<template>
  <v-card>
    <v-app-bar color="primary" class="mx-auto overflow-hidden rounded-0"
    elevate-on-scroll extend>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title color=secondary> Trevor's Webspace </v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app temporary>
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
          
          <div class="link-list" v-for="link in links" :key="link.name">
            <router-link :to="link.route" class="link-text">
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
          <v-switch class="contrast-switch" v-model="switch1" @click="contraster(this.switch1.toString())" inset color=secondary></v-switch>
          <v-btn block class="robux-button" color="accent" elevation="2"
          @click="drawerClick('https://www.youtube.com/watch?v=dQw4w9WgXcQ')">Free Robux</v-btn>
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
      //window.location.href = link;
      window.open(link, '_blank');
    },
    contraster: function (state) {
      state
      alert("hi")
    }
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
        name: "Blog",
        route: "blog"
      },
      {
        name: "About",
        route: "/about"
      }
    ],
    switch1: false
  }),
  watch: {
    group () {
      this.drawer = false
    },
  },
}
</script>

<style scoped>
a.link-text {
  text-decoration: none;
}

img.icons {
  height: 30px;
  margin: 10px;
  margin-right: 20px;
  margin-left: 0px;
}
</style>
