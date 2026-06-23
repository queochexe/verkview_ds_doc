<template>
  <button
    :class="fabClasses"
    :style="variantStyle"
    :aria-label="ariaLabel"
    :disabled="disabled"
    @click="$emit('click', $event)"
  >
    <component v-if="icon" :is="icon" :class="iconClass" aria-hidden="true" />
    <slot v-else />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  variant?: 'primary' | 'surface'
  size?: 'sm' | 'md' | 'lg'
  icon?: any
  ariaLabel?: string
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  disabled: false,
})

defineEmits<{ click: [event: MouseEvent] }>()

const sizeClasses = {
  sm: 'w-11 h-11',
  md: 'w-14 h-14',
  lg: 'w-16 h-16',
}

const iconSizes = {
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
  lg: 'w-6 h-6',
}

const variantBaseClasses = {
  primary: 'text-white shadow-lg hover:brightness-110 active:brightness-95 focus:ring-blue-500',
  surface: 'shadow-md hover:brightness-95 active:brightness-90 focus:ring-zinc-400 dark:focus:ring-zinc-500',
}

const variantStyle = computed(() => {
  if (props.variant === 'primary') {
    return { backgroundColor: '#3B82F6' }
  }
  return { backgroundColor: '#f4f4f5' }
})

const fabClasses = computed(() =>
  [
    'inline-flex items-center justify-center rounded-full transition-all duration-200',
    'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    variantBaseClasses[props.variant],
    sizeClasses[props.size],
  ].join(' ')
)

const iconClass = computed(() => iconSizes[props.size])
</script>
