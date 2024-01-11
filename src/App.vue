<template>
  <div id="app" class="content">
    <TopBar/>
    <ProjectShelf/>
  </div>
</template>

<script setup>
import TopBar from './components/TopBar.vue';
import ProjectShelf from './components/ProjectShelf.vue';
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
