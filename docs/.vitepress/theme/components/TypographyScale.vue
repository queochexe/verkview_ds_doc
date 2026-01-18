<script setup lang="ts">
const typographyItems = [
  { name: 'Text (size-3xl)', class: 'text-3xl', size: '32px', lineHeight: '40px', sample: 'The quick brown fox jumps over the lazy dog' },
  { name: 'Text (size-2xl)', class: 'text-2xl', size: '24px', lineHeight: '32px', sample: 'The quick brown fox jumps over the lazy dog' },
  { name: 'Text (size-xl)', class: 'text-xl', size: '20px', lineHeight: '28px', sample: 'The quick brown fox jumps over the lazy dog' },
  { name: 'Text (size-lg)', class: 'text-lg', size: '16px', lineHeight: '24px', sample: 'The quick brown fox jumps over the lazy dog' },
  { name: 'Text (size-md)', class: 'text-md', size: '14px', lineHeight: '20px', sample: 'The quick brown fox jumps over the lazy dog' },
  { name: 'Text (size-base)', class: 'text-base', size: '13px', lineHeight: '20px', sample: 'The quick brown fox jumps over the lazy dog' },
  { name: 'Text (size-sm)', class: 'text-sm', size: '12px', lineHeight: '16px', sample: 'The quick brown fox jumps over the lazy dog' },
  { name: 'Text (size-xs)', class: 'text-xs', size: '10px', lineHeight: '14px', sample: 'The quick brown fox jumps over the lazy dog' },
]
</script>

<template>
  <div class="typography-scale">
    <div
      v-for="item in typographyItems"
      :key="item.name"
      class="typography-item"
    >
      <div class="type-meta">
        <span class="type-name">{{ item.name }}</span>
        <span class="type-specs">{{ item.size }} line-height: {{ item.lineHeight }}</span>
      </div>
      <p
        class="type-sample"
        :style="{ fontSize: item.size, lineHeight: item.lineHeight }"
      >
        {{ item.sample }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.typography-scale {
  @apply space-y-1;
}

.typography-item {
  @apply py-4 border-b border-zinc-800/50;
}

.typography-item:last-child {
  border-bottom: none;
}

.type-meta {
  @apply flex items-center gap-4 mb-2;
}

.type-name {
  @apply text-sm font-medium text-zinc-400;
}

.type-specs {
  @apply text-xs font-mono text-zinc-600;
}

.type-sample {
  @apply text-zinc-200;
}
</style>
