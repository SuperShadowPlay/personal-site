<template>
  <v-app>
    <v-app-bar color="primary" class="mx-auto overflow-hidden rounded-0"
    elevate-on-scroll extend>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title color=secondary> Trevor's Webspace </v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" color="white" app temporary>
      <v-list nav dense>
          
        <div class="link-list" v-for="link in links" :key="link.name">
          <router-link :to="link.route" class="link-text">
            <v-list-item>
              <v-list-item-title v-model="link.name"></v-list-item-title>
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

      </v-list>

      <template v-slot:append>
        <div class="pa-1">
          <v-btn block class="robux-button" color="accent" elevation="2"
          @click="drawerClick('https://www.youtube.com/watch?v=dQw4w9WgXcQ')">Free Robux</v-btn>
        </div>
      </template>
    </v-navigation-drawer>
  </v-app>
</template>

<script setup>
import { ref } from 'vue';

function drawerClick(link) {
  window.open(link, '_blank');
}

const drawer = ref(false);

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
