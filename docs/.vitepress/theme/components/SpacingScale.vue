<script setup lang="ts">
const spacingItems = [
  { name: 'space-0', value: '0px', size: 0 },
  { name: 'space-1', value: '4px', size: 4 },
  { name: 'space-2', value: '8px', size: 8 },
  { name: 'space-3', value: '12px', size: 12 },
  { name: 'space-4', value: '16px', size: 16 },
  { name: 'space-5', value: '20px', size: 20 },
  { name: 'space-6', value: '24px', size: 24 },
  { name: 'space-8', value: '32px', size: 32 },
  { name: 'space-10', value: '40px', size: 40 },
  { name: 'space-12', value: '48px', size: 48 },
  { name: 'space-16', value: '64px', size: 64 },
]
</script>

<template>
  <div class="spacing-scale">
    <div
      v-for="item in spacingItems"
      :key="item.name"
      class="spacing-item"
    >
      <div
        class="spacing-box"
        :style="{ width: `${Math.max(item.size, 8)}px`, height: `${Math.max(item.size, 8)}px` }"
      ></div>
      <span class="spacing-name">{{ item.name }}</span>
      <span class="spacing-value">{{ item.value }}</span>
    </div>
  </div>
</template>

<style scoped>
.spacing-scale {
  @apply flex flex-wrap gap-3;
}

.spacing-item {
  @apply flex flex-col items-center justify-end p-3 rounded-lg;
  min-width: 70px;
  min-height: 100px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
}

.spacing-box {
  @apply rounded mb-3;
  background: linear-gradient(135deg, #3b82f6, #6366f1);
  min-width: 8px;
  min-height: 8px;
}

.spacing-name {
  @apply text-xs font-mono mb-0.5;
  color: var(--vp-c-text-2);
}

.spacing-value {
  @apply text-xs;
  color: var(--vp-c-text-3);
}
</style>
