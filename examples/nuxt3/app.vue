<script setup lang="ts">
import LinkPreview from "@ashwamegh/vue-link-preview";

const handleClick = (preview: any) => {
    console.log(
        'click',
        preview.domain,
        preview.title,
        preview.description,
        preview.img
    )
}

</script>

<template>
  <div id="app">
    <LinkPreview url="https://vuejs.org/" custom-domain="https://lpdg-server.azurewebsites.net/parse/link" @on-click="handleClick"/>
  </div>
</template>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  max-width: 1280px;
  margin: 0 auto;
}

</style>
