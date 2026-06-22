<template>
  <Teleport to="body" :disabled="!mounted">
    <Transition name="ds-overlay">
      <div
        v-if="modelValue"
        class="fixed inset-0 z-40 bg-black/50"
        aria-hidden="true"
        @click="$emit('update:modelValue', false)"
      />
    </Transition>
    <Transition name="ds-sheet">
      <div
        v-if="modelValue"
        class="fixed z-50 bg-card border border-border flex flex-col"
        :class="panelClasses"
        role="dialog"
        :aria-modal="true"
        :aria-label="title"
      >
        <div class="flex justify-center pt-3 pb-1 md:hidden">
          <div class="w-10 h-1 rounded-full bg-muted-foreground/30 flex-shrink-0" />
        </div>
        <div v-if="$slots.header" class="px-4 py-3 border-b border-border flex-shrink-0">
          <slot name="header" />
        </div>
        <div class="px-4 py-4 overflow-y-auto flex-1">
          <slot />
        </div>
        <div v-if="$slots.footer" class="px-4 py-3 border-t border-border flex-shrink-0">
          <slot name="footer" />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface Props {
  modelValue: boolean
  title?: string
}

withDefaults(defineProps<Props>(), {
  title: 'Dialog',
})

defineEmits<{ 'update:modelValue': [value: boolean] }>()

const mounted = ref(false)
onMounted(() => { mounted.value = true })

const panelClasses = 'bottom-0 left-0 right-0 rounded-t-2xl max-h-[85vh] md:left-1/2 md:-translate-x-1/2 md:bottom-auto md:top-1/2 md:-translate-y-1/2 md:w-[480px] md:max-h-[80vh] md:rounded-xl'
</script>

<style scoped>
.ds-overlay-enter-active,
.ds-overlay-leave-active {
  transition: opacity 200ms ease;
}
.ds-overlay-enter-from,
.ds-overlay-leave-to {
  opacity: 0;
}

.ds-sheet-enter-active,
.ds-sheet-leave-active {
  transition: transform 300ms cubic-bezier(0.32, 0.72, 0, 1), opacity 250ms ease;
}
.ds-sheet-enter-from,
.ds-sheet-leave-to {
  transform: translateY(100%);
  opacity: 0;
}

@media (min-width: 768px) {
  .ds-sheet-enter-from,
  .ds-sheet-leave-to {
    transform: translate(-50%, -48%) scale(0.95);
    opacity: 0;
  }
  .ds-sheet-enter-active .ds-sheet-leave-active {
    transform: translate(-50%, -50%) scale(1);
  }
}
</style>
