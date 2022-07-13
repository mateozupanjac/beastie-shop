<template>
  <section class="container">
    <header class="title">
       <h1>{{label.logo}}</h1>
       <p>{{label.design}}</p>
    </header>
    <picture>
      <!-- <source srcset="src/assets/images/hero-bg-small.jpg" media="(max-width: 640px)"> -->
      <source srcset="src/assets/images/hero-bg-big.jpg">
      <img class="hero-bg" src="src/assets/images/pauline-loroy-U3aF7hgUSrk-unsplash.jpg" alt="hero-image">
    </picture>
    <div class="btn-lead">
      <Button type="success" variant="outline">{{label.leadTheWay}}</Button>
    </div>
  </section>
</template>
<script setup>
import label from '../constants/labels'
import Button from '../UI/Button.vue'
</script>
<style scoped lang="scss">
.container{
  @include grid($align: "unset");
  position: fixed;
  height: 100%;
}
.hero-bg {
  max-width: 100%;
  height: 100%;
  object-position: center;
  object-fit: cover;
}

.title {
  position: absolute;
  @include flexbox($flow: column nowrap);
  padding: 1rem;
  width: 100%;
  font-size: 1.6rem;
  z-index: 10;
  color: var(--color-primary);
  p{
    font-size: 1rem;
    letter-spacing: 0.2rem;
  }
}
.btn-lead {
  position: absolute;
  @include flexbox;
  z-index: 10;
  width: 100%;
  padding: 1rem;
  bottom: 0;
}


</style>