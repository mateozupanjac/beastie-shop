<template>
  <component :is='isLink'><slot></slot></component>
  <button class="button" :style="addStyle" @mouseover="toggleHover" @click="onClick">
    <slot></slot>
  </button>
</template>

<script setup>
import {computed , ref} from 'vue';
import { RouterLink, useRouter } from 'vue-router';
const router = useRouter();
const hover = ref(false)
const emits = defineEmits('click')
const props = defineProps({
  type: {
    type: String,
    default: 'primary',
    validator: (val) => ['success', 'info', 'error', 'primary', ].includes(val)
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
  }
});

const onClick = () => {

}

const isLink = computed(() => link ? '<router-link></router-link>' : 'button')

const addStyle = computed(() => ({
  width: props.size === 'expand' ? '100%' : '200px',
  background: props.variant === 'outline' ? 'rgba(255,255,255,0.3)' : `var(--color-${props.type})`,
  color: props.variant === 'outline' ? `var(--color-${props.type})` : '#fff'
}))

function toggleHover(){
  hover.value = !hover.value
}
  
</script>

<style scoped lang="scss">
.button {
  @include flexbox;
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
  padding: 0.8rem;
  cursor: pointer;
  border: 2px solid v-bind('`var(--color-${props.type})`');
  border-radius: 5px;
  &:hover {
    background-color: v-bind('`var(--color-${props.variant === "outline" ? props.type : "#fff"})`');
    border-color: v-bind('`var(--color-${props.type}-light)`');
    color: v-bind('`var(--color-${props.variant === "outline" ? "#fff" : props.type})`')
  }
}


</style>
