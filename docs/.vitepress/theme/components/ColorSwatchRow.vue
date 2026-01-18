<script setup lang="ts">
import { ref } from 'vue'
import { Check, Copy } from 'lucide-vue-next'

const props = defineProps<{
  name: string
  variable: string
  hex: string
  contrast?: string
}>()

const copied = ref(false)

const copyToClipboard = async () => {
  await navigator.clipboard.writeText(props.hex)
  copied.value = true
  setTimeout(() => copied.value = false, 2000)
}
</script>

<template>
  <div class="color-row" @click="copyToClipboard">
    <div
      class="color-swatch"
      :style="{ backgroundColor: hex }"
      :class="{ 'swatch-border': hex === '#09090b' || hex === '#18181b' || hex === '#27272a' }"
    ></div>
    <div class="color-name">{{ name }}</div>
    <div class="color-hex">{{ hex }}</div>
    <div class="color-variable">{{ variable }}</div>
    <div class="color-contrast" v-if="contrast">{{ contrast }}</div>
    <div class="copy-indicator">
      <Check v-if="copied" class="w-4 h-4 text-green-400" />
      <Copy v-else class="w-4 h-4 text-zinc-600 hover:text-zinc-400" />
    </div>
  </div>
</template>

<style scoped>
.color-row {
  @apply flex items-center gap-4 py-3 px-4 rounded-lg cursor-pointer transition-all;
  background: rgba(255, 255, 255, 0.02);
}

.color-row:hover {
  background: rgba(255, 255, 255, 0.05);
}

.color-swatch {
  @apply w-16 h-10 rounded-md flex-shrink-0;
}

.swatch-border {
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.color-name {
  @apply w-24 text-sm font-medium text-zinc-200;
}

.color-hex {
  @apply w-20 text-sm font-mono text-zinc-400 uppercase;
}

.color-variable {
  @apply flex-1 text-sm font-mono text-zinc-500;
}

.color-contrast {
  @apply w-16 text-sm text-zinc-500 text-right;
}

.copy-indicator {
  @apply w-8 flex justify-center;
}
</style>
