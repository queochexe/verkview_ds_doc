<script setup lang="ts">
defineProps<{
  name: string
  color: string
  hex: string
  contrast?: string
}>()
</script>

<template>
  <div class="status-card">
    <div class="status-pill" :style="{ backgroundColor: color }">
      {{ name }}
    </div>
    <div class="status-details">
      <span class="status-hex">{{ hex }}</span>
      <span class="status-contrast" v-if="contrast">{{ contrast }}</span>
    </div>
  </div>
</template>

<style scoped>
.status-card {
  @apply flex items-center justify-between p-4 rounded-xl;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
}

.status-pill {
  @apply px-4 py-2 rounded-full text-sm font-medium text-white;
}

.status-details {
  @apply flex flex-col items-end gap-1;
}

.status-hex {
  @apply text-sm font-mono text-zinc-400 uppercase;
}

.status-contrast {
  @apply text-xs text-zinc-500;
}
</style>
