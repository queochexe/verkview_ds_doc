<template>
  <button
    :class="chipClasses"
    :style="activeStyle"
    :aria-pressed="active"
    @click="$emit('click')"
  >
    <component v-if="icon" :is="icon" class="w-3.5 h-3.5 flex-shrink-0" aria-hidden="true" />
    <span>{{ label }}</span>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  label: string
  active?: boolean
  color?: string
  icon?: any
}

const props = withDefaults(defineProps<Props>(), {
  active: false,
  color: '#3b82f6',
})

defineEmits<{ click: [] }>()

const chipClasses = computed(() => {
  const base = 'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border transition-all duration-150 cursor-pointer focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-1'
  return props.active
    ? `${base} text-white border-transparent`
    : `${base} bg-transparent border-border text-muted-foreground hover:border-muted-foreground hover:text-foreground`
})

const activeStyle = computed(() =>
  props.active && props.color ? { backgroundColor: props.color } : {}
)
</script>
