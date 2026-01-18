<script setup lang="ts">
import { Shield, Palette, Code2 } from 'lucide-vue-next'
import { computed } from 'vue'

const props = defineProps<{
  icon: 'accessibility' | 'tokens' | 'production'
  title: string
  description: string
}>()

const iconComponent = computed(() => {
  switch (props.icon) {
    case 'accessibility': return Shield
    case 'tokens': return Palette
    case 'production': return Code2
    default: return Shield
  }
})

const iconColor = computed(() => {
  switch (props.icon) {
    case 'accessibility': return '#22c55e'
    case 'tokens': return '#8b5cf6'
    case 'production': return '#3b82f6'
    default: return '#8b5cf6'
  }
})
</script>

<template>
  <div class="feature-card">
    <div class="icon-wrapper" :style="{ '--icon-color': iconColor }">
      <component :is="iconComponent" class="w-6 h-6" />
    </div>
    <h3 class="feature-title">{{ title }}</h3>
    <p class="feature-description">{{ description }}</p>
  </div>
</template>

<style scoped>
.feature-card {
  @apply p-6 rounded-xl;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
  transition: all 0.3s ease;
}

.feature-card:hover {
  background: rgba(255, 255, 255, 0.04);
  border-color: rgba(255, 255, 255, 0.1);
  transform: translateY(-4px);
}

.icon-wrapper {
  @apply w-12 h-12 rounded-lg flex items-center justify-center mb-4;
  background: color-mix(in srgb, var(--icon-color) 15%, transparent);
  color: var(--icon-color);
}

.feature-title {
  @apply text-lg font-semibold text-zinc-100 mb-2;
}

.feature-description {
  @apply text-sm text-zinc-400 leading-relaxed;
}
</style>
