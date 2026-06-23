<template>
  <button
    class="inline-flex items-center justify-center rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed"
    :class="ringClass"
    :style="buttonStyle"
    :aria-label="ariaLabel"
    :disabled="disabled"
    @click="$emit('click', $event)"
  >
    <component
      v-if="icon"
      :is="icon"
      :style="{ width: iconPx, height: iconPx, color: iconColor }"
      aria-hidden="true"
    />
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

const diameter = computed(() => ({ sm: '44px', md: '56px', lg: '64px' }[props.size]))
const iconPx   = computed(() => ({ sm: '16px', md: '20px', lg: '24px' }[props.size]))

const bgColor   = computed(() => props.variant === 'primary' ? '#3B82F6' : '#f4f4f5')
const iconColor = computed(() => props.variant === 'primary' ? '#ffffff' : '#27272a')
const shadow    = computed(() => props.variant === 'primary'
  ? '0 4px 14px rgba(59,130,246,0.5)'
  : '0 2px 8px rgba(0,0,0,0.15)'
)

const buttonStyle = computed(() => ({
  width: diameter.value,
  height: diameter.value,
  minWidth: diameter.value,
  backgroundColor: bgColor.value,
  boxShadow: shadow.value,
}))

const ringClass = computed(() =>
  props.variant === 'primary' ? 'focus:ring-blue-500' : 'focus:ring-zinc-400'
)
</script>
