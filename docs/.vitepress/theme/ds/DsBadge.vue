<template>
  <span
    :class="badgeClasses"
    role="status"
    :aria-label="ariaLabel"
  >
    <component
      v-if="icon"
      :is="icon"
      class="w-2.5 h-2.5"
      aria-hidden="true"
    />
    <slot />
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  variant?: 'default' | 'info' | 'success' | 'warning' | 'error' | 'purple';
  size?: 'sm' | 'md' | 'lg';
  icon?: any;
  ariaLabel?: string;
  className?: string;
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  size: 'md',
  className: '',
});

const variantClasses = {
  default: 'bg-zinc-800 text-zinc-400 border-zinc-700/50',
  info: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  success: 'bg-green-500/10 text-green-400 border-green-500/20',
  warning: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
  error: 'bg-red-500/10 text-red-400 border-red-500/20',
  purple: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
};

const sizeClasses = {
  sm: 'text-[9px] px-1.5 py-0.5',
  md: 'text-[10px] px-1.5 py-0.5',
  lg: 'text-xs px-2 py-1',
};

const badgeClasses = computed(() => {
  return `inline-flex items-center gap-1 rounded border font-medium ${variantClasses[props.variant]} ${sizeClasses[props.size]} ${props.className}`;
});
</script>
