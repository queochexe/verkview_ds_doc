<script setup lang="ts">
import { ref } from 'vue'
import { Copy, Check } from 'lucide-vue-next'

const props = defineProps<{
  code: string
  language?: string
  filename?: string
}>()

const copied = ref(false)

async function copyCode() {
  await navigator.clipboard.writeText(props.code)
  copied.value = true
  setTimeout(() => {
    copied.value = false
  }, 2000)
}
</script>

<template>
  <div class="code-block">
    <div class="code-header">
      <span v-if="filename" class="filename">{{ filename }}</span>
      <span v-else class="language">{{ language || 'code' }}</span>
      <button
        class="copy-btn"
        @click="copyCode"
        :title="copied ? 'Copied!' : 'Copy code'"
      >
        <Check v-if="copied" class="w-4 h-4" />
        <Copy v-else class="w-4 h-4" />
      </button>
    </div>
    <pre class="code-content"><code :class="`language-${language || 'text'}`">{{ code }}</code></pre>
  </div>
</template>

<style scoped>
.code-block {
  @apply border border-border rounded-lg overflow-hidden my-4;
}

.code-header {
  @apply flex items-center justify-between px-4 py-2 bg-zinc-800 border-b border-zinc-700;
}

.filename {
  @apply text-sm text-zinc-300 font-mono;
}

.language {
  @apply text-sm text-zinc-400 uppercase tracking-wide;
}

.copy-btn {
  @apply p-1.5 text-zinc-400 hover:text-zinc-200 transition-colors rounded hover:bg-zinc-700;
}

.code-content {
  @apply m-0 p-4 text-sm overflow-x-auto bg-zinc-900;
}

.code-content code {
  @apply text-zinc-100 font-mono;
}
</style>
