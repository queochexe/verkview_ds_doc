<script setup lang="ts">
import { ref, useSlots } from 'vue'
import { Copy, Check } from 'lucide-vue-next'

const props = defineProps<{
  code?: string
  title?: string
  description?: string
}>()

const slots = useSlots()
const showCode = ref(false)
const copied = ref(false)

async function copyCode() {
  if (props.code) {
    await navigator.clipboard.writeText(props.code)
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
  }
}
</script>

<template>
  <div class="component-demo">
    <div v-if="title" class="demo-header">
      <h3 class="demo-title">{{ title }}</h3>
      <p v-if="description" class="demo-description">{{ description }}</p>
    </div>

    <div class="demo-preview">
      <slot />
    </div>

    <div v-if="code" class="demo-actions">
      <button
        class="toggle-code-btn"
        @click="showCode = !showCode"
      >
        {{ showCode ? 'Hide Code' : 'Show Code' }}
      </button>
      <button
        class="copy-btn"
        @click="copyCode"
        :title="copied ? 'Copied!' : 'Copy code'"
      >
        <Check v-if="copied" class="icon" />
        <Copy v-else class="icon" />
      </button>
    </div>

    <div v-if="code && showCode" class="demo-code">
      <pre><code class="language-vue">{{ code }}</code></pre>
    </div>
  </div>
</template>

<style scoped>
.component-demo {
  @apply border border-border rounded-lg overflow-hidden my-6;
}

.demo-header {
  @apply px-4 py-3 border-b border-border bg-muted/30;
}

.demo-title {
  @apply text-sm font-medium text-foreground m-0;
}

.demo-description {
  @apply text-sm text-muted-foreground mt-1 mb-0;
}

.demo-preview {
  @apply p-6 flex flex-wrap items-center gap-4 bg-background;
}

.demo-actions {
  @apply flex items-center justify-between px-4 py-2 border-t border-border bg-muted/30;
}

.toggle-code-btn {
  @apply text-sm text-muted-foreground hover:text-foreground transition-colors px-3 py-1.5 rounded-md hover:bg-muted;
}

.copy-btn {
  @apply p-2 text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted;
}

.icon {
  @apply w-4 h-4;
}

.demo-code {
  @apply border-t border-border;
}

.demo-code pre {
  @apply m-0 p-4 text-sm overflow-x-auto bg-zinc-900;
}

.demo-code code {
  @apply text-zinc-100;
}
</style>
