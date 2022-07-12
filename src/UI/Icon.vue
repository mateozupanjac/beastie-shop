<template>
  <component ref="iconRef" :is='loadedIcon' class="icon" :style="computedStyles" @click="$emit('click')">
    <slot></slot>
  </component>
</template>

<script setup>
import { defineAsyncComponent,computed} from 'vue';
const props = defineProps({
  name: String,
  hoverColor: {
    type: String,
    default: 'wheat',
  },
})
defineEmits(['click'])

const iconName = props.name.charAt(0).toUpperCase() + props.name.slice(1);
const loadedIcon = defineAsyncComponent(() => import(`../assets/icons/${iconName}.vue`));
const computedStyles = computed(() => ({
  height: '36',
  width: '36',
  fill: '#C1BFBB',
  onHover: props.hover ? props.hoverColor : ''
}));
</script>

<style scoped lang="scss">
.icon {
  fill: #C1BFBB;
  transition: all 0.2s ease;
  &:hover {
    fill: wheat !important;
  }
}
</style>
