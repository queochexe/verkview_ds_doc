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
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
}

.status-pill {
  @apply px-4 py-2 rounded-full text-sm font-medium text-white;
}

.status-details {
  @apply flex flex-col items-end gap-1;
}

.status-hex {
  @apply text-sm font-mono uppercase;
  color: var(--vp-c-text-2);
}

.status-contrast {
  @apply text-xs;
  color: var(--vp-c-text-3);
}
</style>
