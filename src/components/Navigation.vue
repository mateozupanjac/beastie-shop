<template>
  <header class="app-header">
    <nav class="main-navigation">
      <div class="brand">
        <router-link to="/">Beastie Dogs</router-link></div>
      <div class="navigation-items">
        <ul v-if="!mobile">
          <router-link  :to="{name: 'profile'}"><Icon name="person"/></router-link >
          <router-link  :to="{name: 'contact'}"><Icon name="contact" /></router-link >
          <router-link  :to="{name: 'cart'}"><Icon name="cart" /> <span class="badge">1</span></router-link  >
        </ul>
        <div v-if="mobile" class="menu-navbar">
          <icon name="menu" @click="onToggleMenu"></icon>
          <transition name="menu">
            <ul v-if="mobile && toggleMenu" class="menu-navbar-links">
              <router-link  :to="{name: 'profile'}"><Icon name="person"/><span>Profile</span></router-link  >
              <router-link  :to="{name: 'contact'}"><Icon name="contact" /><span>Contact</span></router-link >
              <router-link  :to="{name: 'cart'}"><Icon name="cart"/><span>Cart</span> <span class="badge">1</span></router-link >
            </ul>
          </transition>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted} from "vue";
import { RouterLink } from "vue-router";
import Icon from "../UI/Icon.vue";

window.addEventListener('resize', checkWindowSize)
let timer;
const mobile = ref(false);
const toggleMenu = ref(false);

onMounted(() => {
  mobile.value = window.innerWidth < 769
})

function checkWindowSize(){
  clearTimeout(timer);
  timer = setTimeout(() => mobile.value = window.innerWidth < 769, 50) 
}
  
const onToggleMenu = () => {
  console.log('toggled')
  toggleMenu.value = !toggleMenu.value
}
</script>

<style scoped lang="scss">
.app-header {
  width: 100%;
  height: auto;
  margin: 0;
}
.main-navigation {
  position: relative;
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
   ul:not(.menu-navbar-links) {
    @include flexbox($justify: space-between);
   }
  
   a:hover,
   a.router-link-active,
   a.router-link-exact-active {
     > *:not(.badge) {
      color: wheat !important;
      fill: wheat !important;
    }
   }
}
.menu-navbar{
  position: relative;
  transition: all 0.2s ease;
}
.menu-navbar-links {
  @include flexbox($flow: column nowrap, $justify: flex-start ,$align:  space-between);
  position: absolute;
  width: 200px;
  height: 100vh;
  text-align: center;
  background: var(--color-primary);
  left: -148px;
  top: 56px;
  padding: 1rem;
  z-index: 100;
  text-transform: uppercase;
  a:not(:last-child){
    border-bottom: 2px solid var(--color-secondary);
   
  }
  & * {
     width: 100%;
    padding: 6px;
  }
}
.menu-enter-active {
  animation: slide-in 0.2s;
}
.menu-leave-active {
  animation: slide-in 0.2s reverse;
}
.badge {
  @include flexbox;
  padding: 8px;
  background: var(--color-secondary-transparent);
  border: 2px solid var(--color-secondary);
  border-radius: 6px;
  // margin-left: 5px;
  width: 25px;
  height: 25px;
  color: var(--color-cloud);
}

@keyframes slide-in {
  from {
    transform: translateX(100px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
