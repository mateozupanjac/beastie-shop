<template>
  <Navigation />
  <RouterView />
</template>

<script setup>
import Navigation from "./components/Navigation.vue";
import { RouterView } from "vue-router";
</script>
<style>
@import "@/assets/styles/app.scss";
@import "@/assets/styles/main.scss";
</style>
