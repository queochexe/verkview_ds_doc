<script setup lang="ts">
import { ref } from 'vue'
import { Copy, Check } from 'lucide-vue-next'

const props = defineProps<{
  name: string
  value: string
  cssVar?: string
  textColor?: 'light' | 'dark'
}>()

const copied = ref(false)

async function copyValue() {
  await navigator.clipboard.writeText(props.cssVar || props.value)
  copied.value = true
  setTimeout(() => {
    copied.value = false
  }, 2000)
}
</script>

<template>
  <div class="color-swatch" @click="copyValue">
    <div
      class="swatch-preview"
      :style="{ backgroundColor: value }"
    >
      <span
        class="copy-indicator"
        :class="textColor === 'dark' ? 'text-zinc-900' : 'text-white'"
      >
        <Check v-if="copied" class="w-4 h-4" />
        <Copy v-else class="w-4 h-4" />
      </span>
    </div>
    <div class="swatch-info">
      <span class="swatch-name">{{ name }}</span>
      <code class="swatch-value">{{ cssVar || value }}</code>
    </div>
  </div>
</template>

<style scoped>
.color-swatch {
  @apply flex flex-col rounded-lg border border-border overflow-hidden cursor-pointer hover:border-ring transition-colors;
}

.swatch-preview {
  @apply h-20 relative flex items-center justify-center;
}

.copy-indicator {
  @apply opacity-0 transition-opacity;
}

.color-swatch:hover .copy-indicator {
  @apply opacity-100;
}

.swatch-info {
  @apply p-3 bg-card;
}

.swatch-name {
  @apply block text-sm font-medium text-foreground;
}

.swatch-value {
  @apply block text-xs text-muted-foreground font-mono mt-1;
}
</style>
