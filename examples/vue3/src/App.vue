<!-- eslint-disable vue/html-self-closing -->
<script setup>
import LinkPreview from '@ashwamegh/vue-link-preview'

const handleClick = (preview) => {
  console.log('click', preview.domain, preview.title, preview.description, preview.img)
}
</script>

<template>
  <LinkPreview
    url="https://vuejs.org/"
    @on-click="handleClick"
    custom-domain="https://lpdg-server.azurewebsites.net/parse/link"
  >
  </LinkPreview>
</template>
