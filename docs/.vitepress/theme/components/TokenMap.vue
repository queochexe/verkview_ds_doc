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

      <!-- Token table -->
      <div class="token-table-wrap">
        <table class="token-table">
          <thead>
            <tr>
              <th class="col-part">Part</th>
              <th class="col-component">Component Token</th>
              <th class="col-arrow"></th>
              <th class="col-semantic">Semantic Token</th>
              <th class="col-arrow"></th>
              <th class="col-primitive">Primitive</th>
              <th class="col-swatch">Value</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="token in currentTokens" :key="token.part">
              <td class="col-part">{{ token.part }}</td>
              <td class="col-component">
                <code>{{ token.componentToken }}</code>
              </td>
              <td class="col-arrow">
                <span class="arrow">&larr;</span>
              </td>
              <td class="col-semantic">
                <code>{{ token.semanticToken }}</code>
              </td>
              <td class="col-arrow">
                <span class="arrow">&larr;</span>
              </td>
              <td class="col-primitive">
                <code>{{ token.primitiveToken }}</code>
              </td>
              <td class="col-swatch">
                <span
                  class="swatch"
                  :style="{ background: token.primitiveValue }"
                  :title="token.primitiveValue"
                ></span>
                <span class="hex">{{ token.primitiveValue }}</span>
              </td>
            </tr>
          </tbody>
        </table>
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

.token-table-wrap {
  overflow-x: auto;
}

.token-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.8125rem;
  min-width: 700px;
}

.token-table thead {
  background: rgba(255, 255, 255, 0.03);
}

.token-table th {
  padding: 0.625rem 0.75rem;
  text-align: left;
  font-size: 0.6875rem;
  font-weight: 500;
  color: var(--vp-c-text-3);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.token-table td {
  padding: 0.5rem 0.75rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
  vertical-align: middle;
}

.token-table tr:last-child td {
  border-bottom: none;
}

.token-table tr:hover td {
  background: rgba(255, 255, 255, 0.02);
}

.col-part {
  color: var(--vp-c-text-2);
  font-weight: 500;
  white-space: nowrap;
}

.col-component code,
.col-semantic code,
.col-primitive code {
  font-size: 0.6875rem;
  font-family: var(--vp-font-family-mono);
  padding: 0.125rem 0.375rem;
  border-radius: 0.25rem;
  white-space: nowrap;
}

.col-component code {
  background: rgba(139, 92, 246, 0.1);
  color: #a78bfa;
}

.col-semantic code {
  background: rgba(59, 130, 246, 0.1);
  color: #60a5fa;
}

.col-primitive code {
  background: rgba(34, 197, 94, 0.1);
  color: #4ade80;
}

.col-arrow {
  width: 1.5rem;
  text-align: center;
  padding: 0 0.25rem !important;
}

.arrow {
  color: var(--vp-c-text-3);
  font-size: 0.875rem;
  opacity: 0.5;
}

.col-swatch {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

/* Fix table cell flex */
td.col-swatch {
  display: table-cell;
}

td.col-swatch > * {
  display: inline-block;
  vertical-align: middle;
}

.swatch {
  width: 16px;
  height: 16px;
  border-radius: 3px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  flex-shrink: 0;
  margin-right: 0.5rem;
}

.hex {
  font-size: 0.6875rem;
  font-family: var(--vp-font-family-mono);
  color: var(--vp-c-text-3);
}

.token-map-empty {
  padding: 2rem;
  text-align: center;
  color: var(--vp-c-text-3);
  font-size: 0.875rem;
}
</style>
