<template>
  <ClientOnly>
    <Teleport to="body">
      <Transition name="modal">
        <div
          v-if="isOpen"
          class="fixed inset-0 bg-black/60 z-40 flex items-center justify-center p-0 md:p-4"
          @click="handleOverlayClick"
        >
          <div
            ref="modalRef"
            class="bg-zinc-900 border-0 md:border md:border-zinc-800 rounded-none md:rounded-lg shadow-2xl w-screen h-screen md:w-full md:max-w-2xl md:h-auto md:max-h-[90vh] flex flex-col"
            role="dialog"
            aria-modal="true"
            :aria-labelledby="titleId"
            @click.stop
          >
            <!-- Header -->
            <div class="flex items-center justify-between p-4 md:p-6 border-b border-zinc-800">
              <h2 :id="titleId" class="text-base md:text-lg font-medium text-zinc-100">
                {{ title }}
              </h2>
              <DsButton
                variant="icon"
                size="sm"
                :icon="X"
                aria-label="Close modal"
                @click="handleClose"
                class="min-w-[44px] min-h-[44px]"
              />
            </div>

            <!-- Content -->
            <div class="p-4 md:p-6 overflow-y-auto flex-1">
              <slot />
            </div>

            <!-- Footer -->
            <div
              v-if="$slots.footer"
              class="p-4 md:p-6 border-t border-zinc-800 flex items-center justify-end gap-3"
            >
              <slot name="footer" />
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </ClientOnly>
</template>

<script setup lang="ts">
import { ref, watch, onBeforeUnmount, nextTick } from 'vue';
import { X } from 'lucide-vue-next';
import { FocusManager, AriaManager, generateUniqueId } from '../utils/accessibility';
import DsButton from './DsButton.vue';

// SSR guard
const isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';

interface Props {
  isOpen: boolean;
  title: string;
  closeOnOverlay?: boolean;
  closeOnEscape?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  closeOnOverlay: true,
  closeOnEscape: true,
});

const emit = defineEmits<{
  close: [];
}>();

const modalRef = ref<HTMLElement | null>(null);
const titleId = `modal-title-${generateUniqueId()}`;

const handleClose = () => {
  emit('close');
};

const handleOverlayClick = () => {
  if (props.closeOnOverlay) {
    handleClose();
  }
};

const handleEscape = (event: KeyboardEvent) => {
  if (props.closeOnEscape && event.key === 'Escape') {
    handleClose();
  }
};

watch(() => props.isOpen, async (newValue) => {
  if (!isBrowser) return;

  if (newValue) {
    // Save current focus
    FocusManager.saveFocus();

    // Disable background scrolling
    document.body.style.overflow = 'hidden';

    // Wait for modal to render
    await nextTick();

    // Trap focus
    if (modalRef.value) {
      FocusManager.trapFocus(modalRef.value);
    }

    // Announce to screen readers
    AriaManager.announceToScreenReader('Modal opened', 'polite');

    // Add escape listener
    document.addEventListener('keydown', handleEscape);
  } else {
    // Re-enable background scrolling
    document.body.style.overflow = '';

    // Restore focus
    FocusManager.restoreFocus();

    // Announce to screen readers
    AriaManager.announceToScreenReader('Modal closed', 'polite');

    // Remove escape listener
    document.removeEventListener('keydown', handleEscape);
  }
});

onBeforeUnmount(() => {
  if (!isBrowser) return;
  document.removeEventListener('keydown', handleEscape);
  document.body.style.overflow = '';
});
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.2s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>
