<template>
  <div
    role="progressbar"
    :aria-valuenow="clampedValue"
    aria-valuemin="0"
    aria-valuemax="100"
    :aria-label="ariaLabel"
    :class="['w-full rounded-full overflow-hidden', trackClass]"
    style="background-color: hsl(var(--muted))"
  >
    <div
      :class="['h-full rounded-full transition-all duration-300 ease-out', trackClass]"
      :style="{ width: `${clampedValue}%`, backgroundColor: color || 'hsl(var(--info))' }"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  value: number
  color?: string
  size?: 'sm' | 'md'
  ariaLabel?: string
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
})

const clampedValue = computed(() => Math.min(100, Math.max(0, props.value)))
const trackClass = computed(() => props.size === 'sm' ? 'h-1' : 'h-2')
</script>
