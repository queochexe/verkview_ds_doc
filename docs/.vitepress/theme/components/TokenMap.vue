<template>
  <div class="token-map">
    <div v-if="group" class="token-map-inner">
      <!-- Variant tabs -->
      <div v-if="group.variants.length > 1" class="variant-tabs">
        <button
          v-for="variant in group.variants"
          :key="variant.name"
          :class="['variant-tab', { active: activeVariant === variant.name }]"
          @click="activeVariant = variant.name"
        >
          {{ variant.name }}
        </button>
      </div>

      <!-- Token rows -->
      <div class="token-rows">
        <div v-for="token in currentTokens" :key="token.part" class="token-row">
          <div class="token-part">{{ token.part }}</div>
          <div class="token-chain">
            <span class="hex-group">
              <span
                class="swatch"
                :style="{ background: token.primitiveValue }"
                :title="token.primitiveValue"
              ></span>
              <span class="hex">{{ token.primitiveValue }}</span>
            </span>
            <span class="arrow">&rarr;</span>
            <code class="chip chip-primitive">{{ token.primitiveToken }}</code>
            <span class="arrow">&rarr;</span>
            <code class="chip chip-semantic">{{ token.semanticToken }}</code>
            <span class="arrow">&rarr;</span>
            <code class="chip chip-component">{{ token.componentToken }}</code>
          </div>
        </div>
      </div>

      <!-- Legend -->
      <div class="token-legend">
        <span class="legend-item"><span class="legend-dot dot-primitive"></span>Primitive</span>
        <span class="legend-item"><span class="legend-dot dot-semantic"></span>Semantic</span>
        <span class="legend-item"><span class="legend-dot dot-component"></span>Component</span>
      </div>
    </div>
    <div v-else class="token-map-empty">
      No token mapping found for "{{ component }}".
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { getComponentTokens, type ComponentTokenGroup } from '../tokens'

const props = defineProps<{
  component: string
  variant?: string
}>()

const group = computed<ComponentTokenGroup | undefined>(() =>
  getComponentTokens(props.component)
)

const activeVariant = ref(props.variant || group.value?.variants[0]?.name || '')

watch(group, (g) => {
  if (g && !g.variants.find(v => v.name === activeVariant.value)) {
    activeVariant.value = g.variants[0]?.name || ''
  }
})

const currentTokens = computed(() => {
  if (!group.value) return []
  const v = group.value.variants.find(v => v.name === activeVariant.value)
  return v?.tokens ?? []
})
</script>

<style scoped>
.token-map {
  margin: 1.5rem 0;
  border-radius: 0.75rem;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.06);
  background: rgba(255, 255, 255, 0.02);
}

.variant-tabs {
  display: flex;
  gap: 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  padding: 0 1rem;
  overflow-x: auto;
}

.variant-tab {
  padding: 0.625rem 1rem;
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--vp-c-text-3);
  background: none;
  border: none;
  border-bottom: 2px solid transparent;
  cursor: pointer;
  transition: all 0.15s ease;
  white-space: nowrap;
  font-family: var(--vp-font-family-mono);
}

.variant-tab:hover {
  color: var(--vp-c-text-2);
}

.variant-tab.active {
  color: var(--vp-c-text-1);
  border-bottom-color: var(--vp-c-brand-1, #3b82f6);
}

.token-rows {
  padding: 0.5rem 0;
}

.token-row {
  padding: 0.5rem 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
}

.token-row:last-child {
  border-bottom: none;
}

.token-row:hover {
  background: rgba(255, 255, 255, 0.02);
}

.token-part {
  font-size: 0.8125rem;
  font-weight: 500;
  color: var(--vp-c-text-2);
  margin-bottom: 0.375rem;
}

.token-chain {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  flex-wrap: wrap;
}

.chip {
  font-size: 0.625rem;
  font-family: var(--vp-font-family-mono);
  padding: 0.125rem 0.375rem;
  border-radius: 0.25rem;
  white-space: nowrap;
}

.chip-component {
  background: rgba(139, 92, 246, 0.1);
  color: #a78bfa;
}

.chip-semantic {
  background: rgba(59, 130, 246, 0.1);
  color: #60a5fa;
}

.chip-primitive {
  background: rgba(34, 197, 94, 0.1);
  color: #4ade80;
}

.arrow {
  color: var(--vp-c-text-3);
  font-size: 0.75rem;
  opacity: 0.4;
  flex-shrink: 0;
}

.hex-group {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  margin-left: 0.25rem;
}

.swatch {
  width: 12px;
  height: 12px;
  border-radius: 2px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  flex-shrink: 0;
}

.hex {
  font-size: 0.625rem;
  font-family: var(--vp-font-family-mono);
  color: var(--vp-c-text-2);
}

.token-legend {
  display: flex;
  gap: 1rem;
  padding: 0.5rem 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  font-size: 0.625rem;
  color: var(--vp-c-text-2);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.legend-dot {
  width: 8px;
  height: 8px;
  border-radius: 2px;
}

.dot-component {
  background: rgba(139, 92, 246, 0.5);
}

.dot-semantic {
  background: rgba(59, 130, 246, 0.5);
}

.dot-primitive {
  background: rgba(34, 197, 94, 0.5);
}

.token-map-empty {
  padding: 2rem;
  text-align: center;
  color: var(--vp-c-text-3);
  font-size: 0.875rem;
}
</style>
