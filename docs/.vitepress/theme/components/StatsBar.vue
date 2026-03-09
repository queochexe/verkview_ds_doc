<script setup lang="ts">
</script>

<template>
  <div class="stats-bar">
    <div class="stat-item">
      <span class="stat-value">200+</span>
      <span class="stat-label">Components</span>
    </div>
    <div class="stat-item">
      <span class="stat-value">100%</span>
      <span class="stat-label">WCAG AA</span>
    </div>
    <div class="stat-item">
      <span class="stat-value">11</span>
      <span class="stat-label">Categories</span>
    </div>
    <div class="stat-item">
      <span class="stat-value highlight">TypeScript</span>
      <span class="stat-label">Support</span>
    </div>
  </div>
</template>

<style scoped>
.stats-bar {
  @apply grid grid-cols-2 md:grid-cols-4 gap-4 p-6 md:p-8 rounded-2xl mt-12 mx-auto;
  max-width: 960px;
  background: linear-gradient(135deg, rgba(124, 58, 237, 0.06), rgba(37, 99, 235, 0.06));
  border: 1px solid rgba(124, 58, 237, 0.12);
}

.stat-item {
  @apply flex flex-col items-center text-center;
}

.stat-value {
  @apply text-2xl md:text-3xl font-bold mb-1;
  color: var(--vp-c-text-1);
}

.stat-value.highlight {
  @apply text-xl md:text-2xl;
  background: linear-gradient(135deg, #7c3aed, #2563eb);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.dark .stat-value.highlight {
  background: linear-gradient(135deg, #8b5cf6, #3b82f6);
  -webkit-background-clip: text;
  background-clip: text;
}

.stat-label {
  @apply text-xs md:text-sm;
  color: var(--vp-c-text-2);
}
</style>
