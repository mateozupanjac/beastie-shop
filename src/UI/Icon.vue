<template>
  <component ref="iconRef" :is='loadedIcon' class="icon" :style="computedStyles" @click="$emit('click')" @mouseover.self="hover && toggleHover" @mouseleave.self="hover && toggleHover">
  </component>
</template>

<script setup>
import { defineAsyncComponent,computed, ref} from 'vue';
const props = defineProps({
  name: String,
  color: {
    type: String,
    default: 'var(--color-secondary)'
  },
  hoverColor: {
    type: String,
    default: 'wheat',
  },
  hover: {
    type: Boolean,
    default: true
  }
})
defineEmits(['click'])

const isHovered = ref(false)

const iconName = props.name.charAt(0).toUpperCase() + props.name.slice(1);
const loadedIcon = defineAsyncComponent(() => import(`../assets/icons/${iconName}.vue`));
const computedStyles = computed(() => ({
  height: '36',
  width: '36',
  fill: isHovered.value ? props.hoverColor : props.color,
}));

function toggleHover(){
  console.log('icon hover')
  isHovered.value = !isHovered.value
}
</script>

<style scoped lang="scss">
.icon {
  fill: v-bind('props.color') !important;
  transition: all 0.2s ease;
  // &:hover {
  //   fill: v-bind('props.hover ? props.hoverColor : "none"') !important;
  // }
}
</style>
