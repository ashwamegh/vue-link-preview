<template>
  <div id="app">
    <no-ssr placeholder="loading...">
      <LinkPreview url="https://vuejs.org/" @on-click="handleClick">
      </LinkPreview>
    </no-ssr>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  components: {
    // Import the component dynamically
    [process.client && 'LinkPreview']: () =>
      import('@ashwamegh/vue-link-preview'),
  },
  methods: {
    handleClick(preview) {
      console.log(
        'click',
        preview.domain,
        preview.title,
        preview.description,
        preview.img
      )
    },
  },
}
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
