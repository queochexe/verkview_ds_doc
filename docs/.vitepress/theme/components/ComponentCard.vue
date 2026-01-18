<script setup lang="ts">
defineProps<{
  title: string
  count: number
  href: string
}>()
</script>

<template>
  <a :href="href" class="component-card">
    <div class="card-content">
      <h3 class="card-title">{{ title }}</h3>
      <span class="card-count">{{ count }} variants</span>
    </div>
    <div class="card-arrow">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M5 12h14M12 5l7 7-7 7"/>
      </svg>
    </div>
  </a>
</template>

<style scoped>
.component-card {
  @apply flex items-center justify-between p-4 rounded-lg transition-all;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
}

.component-card:hover {
  border-color: var(--vp-c-brand-1);
}

.component-card:hover .card-arrow {
  color: var(--vp-c-brand-1);
  transform: translateX(4px);
}

.card-content {
  @apply flex flex-col;
}

.card-title {
  @apply text-base font-medium;
  color: var(--vp-c-text-1);
}

.card-count {
  @apply text-sm;
  color: var(--vp-c-text-3);
}

.card-arrow {
  @apply transition-all;
  color: var(--vp-c-text-3);
}
</style>
