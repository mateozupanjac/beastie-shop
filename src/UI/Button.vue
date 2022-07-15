<template>
    <router-link v-if="link" :to="{name: to}" :style="addStyle" class="button" @mouseover.stop="toggleHover" @mouseleave.stop="toggleHover">
      <slot></slot>
    </router-link>
    <button  v-else class="button" :style="addStyle" @click="$emit('onClick')" @mouseover.self="toggleHover" @mouseleave.self="toggleHover">
      <slot></slot>
    </button>
</template>

<script setup>
import {computed, ref} from 'vue';
import { RouterLink } from 'vue-router'
import Icon from '../UI/Icon.vue'
defineEmits('onClick')
const props = defineProps({
  type: {
    type: String,
    default: 'primary',
    validator: (val) => ['success', 'error', 'primary', 'secondary', 'ternary', 'octet'].includes(val)
  },
  variant: {
    type: String,
    default: 'normal',
    validator: (val) => ['normal', 'outline'].includes(val)
  },
  size: {
    type: String,
    default: 'normal',
    validator: (val) => ['normal', 'expand'].includes(val)
  },
  link: {
    type: Boolean,
    default: false
  },
  to: {
    type: String,
  },
});

const hover = ref(false)


const addStyle = computed(() => {
  const notHovered = {
    minWidth: props.size === 'expand' ? '100%' : '30%',
    background: props.variant === 'outline' ? 'rgba(255,255,255,0.3)' : `var(--color-${props.type})`,
    color: props.variant === 'outline' ? `var(--color-${props.type})` : '#fff'
  }
  const hovered = {
      minWidth: props.size === 'expand' ? '100%' : '30%',
      background: props.variant === 'outline' ?  `var(--color-${props.type})` : 'rgba(255,255,255,0.3)',
      borderColor: props.variant === 'outline' ? 'none' : `var(--color-${props.type})`,
      color: props.variant === 'outline' ? '#fff' : `var(--color-${props.type})`,
  }

  return hover.value ? hovered : notHovered
})

function toggleHover(event){
  if(event.type === "mouseover" && hover.value) return
    hover.value = !hover.value
}
  
</script>

<style scoped lang="scss">
.button {
  @include flexbox;
  // gap: 8px;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: 700;
  padding: 0.8rem;
  cursor: pointer;
  border: 2px solid v-bind('`var(--color-${props.type})`');
  border-radius: 5px;
  transition: all 0.3s ease;
}

</style>
