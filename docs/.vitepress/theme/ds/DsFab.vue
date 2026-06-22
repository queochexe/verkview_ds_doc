<template>
  <button
    :class="fabClasses"
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
  size?: 'md' | 'lg'
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

const variantClasses = {
  primary: 'bg-info text-white shadow-lg hover:bg-info/90 focus:ring-blue-500',
  surface: 'bg-secondary text-foreground border border-border shadow-md hover:bg-accent focus:ring-ring',
}

const sizeClasses = {
  md: 'w-14 h-14',
  lg: 'w-16 h-16',
}

const fabClasses = computed(() =>
  `inline-flex items-center justify-center rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed ${variantClasses[props.variant]} ${sizeClasses[props.size]}`
)

const iconClass = computed(() => props.size === 'lg' ? 'w-6 h-6' : 'w-5 h-5')
</script>
