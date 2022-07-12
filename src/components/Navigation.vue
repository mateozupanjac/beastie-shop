<template>
  <header class="app-header">
    <nav class="main-navigation">
      <div class="brand">
        <router-link to="/">Beastie Dogs</router-link></div>
      <div class="navigation-items">
        <ul v-if="nav.mobile">
          <router-link  :to="{name: 'profile'}"><Icon name="person"/></router-link >
          <router-link  :to="{name: 'contact'}"><Icon name="contact" /></router-link >
          <router-link  :to="{name: 'cart'}"><Icon name="cart" /> <span>1</span></router-link  >
        </ul>
        <div v-if="!nav.mobile">
          <icon name="menu" @click="toggleMenu">Menu</icon>
          <ul v-if="!nav.mobile && nav.toggleMenu" class="menu-navbar">
            <router-link  :to="{name: 'profile'}"><Icon name="person"/></router-link  >
            <router-link  :to="{name: 'contact'}"><Icon name="contact" /></router-link >
            <router-link  :to="{name: 'cart'}"><Icon name="cart" /> <span>1</span></router-link >
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { reactive, onMounted, computed, watchEffect, onUpdated } from "vue";
import { RouterLink } from "vue-router";
import Icon from "../UI/Icon.vue";
const nav = reactive({
  mobile: false,
  toggleMenu: false,
});
onMounted(() => {
  nav.mobile = window.innerWidth > 768
  console.log(nav.mobile)
})
const windowWidth = computed(() => window.innerWidth)

const toggleMenu = () => {
  console.log('toggled')
  nav.toggleMenu = !nav.toggleMenu
}
onUpdated(() => nav.mobile = window.innerWidth > 768)
watchEffect(windowWidth, (newWindowWidth) => nav.mobile = newWindowWidth > 768)
</script>

<style scoped lang="scss">
.app-header {
  width: 100%;
  height: auto;
  margin: 0;
}
.main-navigation {
    width: 100%;
    padding: 1rem;
    @include flexbox($justify: space-between);
    background: #4A3930;
     li, a {
    @include flexbox;
    color: #C1BFBB;
    padding: 0 7px;
   }
}
.brand {}
.navigation-items {
   ul {
    @include flexbox($justify: space-between);
   }
  
   a:hover,
   a.router-link-active,
   a.router-link-exact-active {
    & > * {
      color: wheat !important;
      fill: wheat !important;
    }
   }
}
.menu-navbar{
  @include flexbox($flow: column);
  position: relative;
}
</style>
