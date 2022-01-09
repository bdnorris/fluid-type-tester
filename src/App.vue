<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import TypePreview from './components/TypePreview.vue'
</script>

<template>
  <TypePreview />
</template>

<style>
@import './assets/css/normalize.css';

body {
  font-family: sans-serif;
  font-size: 16 * 1px;
  color: rgb(25, 26, 27);
  padding: 0;
  margin: 0;
  scroll-behavior: smooth;
  /* font weight normalization */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
