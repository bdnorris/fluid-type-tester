<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import TypePreview from './components/TypePreview.vue'
</script>

<template>
  <TypePreview />

  <section>
    <h2>Resources</h2>
    https://piccalil.li/tutorial/fluid-typography-with-css-clamp/
    https://adrianroselli.com/2019/12/responsive-type-and-zoom.html

  </section>
</template>

<style>
@import './assets/css/normalize.css';

body {
  font-family: sans-serif;
  font-size: 16 * 1px;
  /* color: rgb(25, 26, 27); */
  color: #323a42;
  padding: 0;
  margin: 0;
  scroll-behavior: smooth;
  /* font weight normalization */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
}
</style>
