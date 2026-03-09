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
  default: 'bg-secondary text-muted-foreground border-border/50',
  info: 'bg-info/10 text-info-foreground border-info/20',
  success: 'bg-success/10 text-success-foreground border-success/20',
  warning: 'bg-warning/10 text-warning-foreground border-warning/20',
  error: 'bg-error/10 text-error-foreground border-error/20',
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
