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
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
}

.component-card:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(139, 92, 246, 0.3);
}

.component-card:hover .card-arrow {
  color: #8b5cf6;
  transform: translateX(4px);
}

.card-content {
  @apply flex flex-col;
}

.card-title {
  @apply text-base font-medium text-zinc-200;
}

.card-count {
  @apply text-sm text-zinc-500;
}

.card-arrow {
  @apply text-zinc-600 transition-all;
}
</style>
