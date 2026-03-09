<template>
  <Transition name="toast">
    <div
      v-if="visible"
      :class="toastClasses"
      role="alert"
    >
      <component :is="iconComponent" :class="`w-5 h-5 flex-shrink-0 ${iconColor}`" aria-hidden="true" />
      <p class="text-sm text-foreground flex-1">{{ message }}</p>
      <button
        v-if="dismissible"
        type="button"
        class="text-muted-foreground hover:text-foreground transition-colors"
        aria-label="Dismiss notification"
        @click="handleDismiss"
      >
        <X class="w-4 h-4" aria-hidden="true" />
      </button>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import { Info, CheckCircle, AlertTriangle, AlertCircle, X } from 'lucide-vue-next';

interface Props {
  type?: 'info' | 'success' | 'warning' | 'error';
  message: string;
  duration?: number;
  dismissible?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  type: 'info',
  duration: 5000,
  dismissible: true,
});

const emit = defineEmits<{
  dismiss: [];
}>();

const visible = ref(false);
let timer: number | null = null;

const typeConfig = {
  info: {
    icon: Info,
    borderClass: 'border-info/20',
    iconColor: 'text-info',
  },
  success: {
    icon: CheckCircle,
    borderClass: 'border-success/20',
    iconColor: 'text-success',
  },
  warning: {
    icon: AlertTriangle,
    borderClass: 'border-warning/20',
    iconColor: 'text-warning',
  },
  error: {
    icon: AlertCircle,
    borderClass: 'border-error/20',
    iconColor: 'text-error',
  },
};

const config = computed(() => typeConfig[props.type]);
const iconComponent = computed(() => config.value.icon);
const iconColor = computed(() => config.value.iconColor);

const toastClasses = computed(() => {
  return `bg-card border rounded-lg shadow-xl p-4 flex items-start gap-3 ${config.value.borderClass}`;
});

const handleDismiss = () => {
  visible.value = false;
  setTimeout(() => {
    emit('dismiss');
  }, 300);
};

onMounted(() => {
  // Animate in
  setTimeout(() => {
    visible.value = true;
  }, 10);

  // Auto-dismiss
  if (props.duration > 0) {
    timer = window.setTimeout(() => {
      handleDismiss();
    }, props.duration);
  }
});

onBeforeUnmount(() => {
  if (timer) {
    clearTimeout(timer);
  }
});
</script>

<style scoped>
.toast-enter-active,
.toast-leave-active {
  transition: all 0.3s ease;
}

.toast-enter-from {
  transform: translateX(100%);
  opacity: 0;
}

.toast-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>
