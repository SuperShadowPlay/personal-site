<template>
  <div class="bar">
    <div class="text"> 
      <v-btn class="source-button" color="secondary" elevation="2">Source Code</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Links'
}
</script>

<style scoped>
.bar {
  background-color: var(--primary);
  text-align: center;
  padding: 20px;
  position: absolute;
  top: 0%;
  left: 0%;
  right: 0%;
}

.source-button {
  /*background-color: var(--complimentary);*/
  float: right;
}
</style>
