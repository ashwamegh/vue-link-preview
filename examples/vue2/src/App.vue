<!-- eslint-disable vue/html-self-closing -->
<script setup>
import LinkPreview from "@ashwamegh/vue-link-preview";
</script>

<template>
    <div id="app">
        <LinkPreview url="https://vuejs.org/" @click="handleClick">
        </LinkPreview>
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
}
</style>
