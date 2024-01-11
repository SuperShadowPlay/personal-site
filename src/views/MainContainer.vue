<template>
  <v-app>
    <v-main>
      <TopBar/>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
  import TopBar from '@/components/TopBar.vue';
</script>
