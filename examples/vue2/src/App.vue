<!-- eslint-disable vue/html-self-closing -->
<script setup>
import LinkPreview from "@ashwamegh/vue-link-preview";

const handleClick = preview => {
    console.log(
        "click",
        preview.domain,
        preview.title,
        preview.description,
        preview.img
    );
};
</script>

<template>
    <div id="app">
        <LinkPreview url="https://vuejs.org/" @on-click="handleClick">
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
