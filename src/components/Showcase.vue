<template>
  <div class="main">
    <h1>{{ title }}</h1>
    <div class="text">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title"]
}
</script>

<style scoped>
.text {
  font-size: 1.5em;
}
</style>