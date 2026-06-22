<template>
  <div
    :class="bandClasses"
    :style="bandStyle"
    :role="clickable ? 'button' : undefined"
    :tabindex="clickable ? 0 : undefined"
    @click="clickable && $emit('click')"
    @keydown.enter="clickable && $emit('click')"
    @keydown.space.prevent="clickable && $emit('click')"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  color: string
  leftPercent: number
  widthPercent: number
  topPx: number
  heightPx?: number
  dimmed?: boolean
  clickable?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  heightPx: 8,
  dimmed: false,
  clickable: false,
})

defineEmits<{ click: [] }>()

const bandClasses = computed(() => {
  const base = 'absolute rounded-sm transition-opacity'
  const cursor = props.clickable ? 'cursor-pointer hover:opacity-80' : ''
  const opacity = props.dimmed ? 'opacity-40' : 'opacity-100'
  return [base, cursor, opacity].filter(Boolean).join(' ')
})

const bandStyle = computed(() => ({
  backgroundColor: props.color,
  left: `${props.leftPercent}%`,
  width: `${props.widthPercent}%`,
  top: `${props.topPx}px`,
  height: `${props.heightPx}px`,
}))
</script>
