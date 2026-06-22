<template>
  <div
    role="status"
    :aria-label="label || 'Loading'"
    class="inline-flex items-center justify-center"
  >
    <Loader2 :class="sizeClass" class="animate-spin text-current" aria-hidden="true" />
    <span v-if="label" class="sr-only">{{ label }}</span>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Loader2 } from 'lucide-vue-next'

interface Props {
  size?: 'sm' | 'md' | 'lg'
  label?: string
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
})

const sizeClass = computed(() =>
  ({ sm: 'w-4 h-4', md: 'w-6 h-6', lg: 'w-8 h-8' }[props.size])
)
</script>
