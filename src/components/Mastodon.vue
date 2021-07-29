<template>
  <iframe allowfullscreen sandbox="allow-top-navigation allow-scripts"
  src="https://www.mastofeed.com/apiv2/feed?userurl=https%3A%2F%2Fsocial.linux.pizza%2Fusers%2Ffactcore
  &theme=light&size=100&header=true&replies=false&boosts=false"/>
</template>

<style scoped>
iframe {
  height: 90vh;
  width: 55vh;
}

@media screen and (max-width: 900px) {
  iframe {
    max-width: 100% !important;
  }
}
</style>