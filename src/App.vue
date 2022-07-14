<template>
  <Navigation v-if="route.path !== '/'"/>
  <main>
    <RouterView />
  </main>
</template>

<script setup>
import { useRoute } from "vue-router";
import Navigation from "./components/Navigation.vue";
import { RouterView } from "vue-router";
const route = useRoute();
</script>
<style>
@import "@/assets/styles/main.scss";
</style>
