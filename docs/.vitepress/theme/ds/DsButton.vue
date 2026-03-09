<template>
  <button
    :type="type"
    :class="buttonClasses"
    :disabled="disabled || loading"
    :aria-busy="loading"
    :aria-disabled="disabled || loading"
    :aria-label="ariaLabel"
    @click="$emit('click', $event)"
  >
    <Loader2
      v-if="loading"
      :class="iconClasses"
      class="animate-spin"
      aria-hidden="true"
    />
    <span v-if="loading" class="sr-only">Loading</span>

    <template v-if="!loading">
      <component
        v-if="icon"
        :is="icon"
        :class="iconClasses"
        aria-hidden="true"
      />
      <slot />
    </template>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { Loader2 } from 'lucide-vue-next';

interface Props {
  variant?: 'primary' | 'secondary' | 'ghost' | 'icon';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  icon?: any;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  ariaLabel?: string;
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  loading: false,
  type: 'button',
  disabled: false,
});

defineEmits<{
  click: [event: MouseEvent];
}>();

const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-200 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed';

const variantClasses = {
  primary: 'bg-primary text-primary-foreground hover:bg-foreground focus:ring-ring shadow-[0_0_15px_rgba(255,255,255,0.1)]',
  secondary: 'bg-secondary text-secondary-foreground border border-border hover:border-muted-foreground focus:ring-ring',
  ghost: 'text-muted-foreground hover:text-foreground hover:bg-accent/40 focus:ring-ring',
  icon: 'p-1.5 text-muted-foreground hover:text-foreground hover:bg-accent rounded-md focus:ring-ring',
};

const sizeClasses = {
  sm: 'text-xs px-3 py-1.5 min-h-[36px]',
  md: 'text-sm px-5 py-2.5 min-h-[44px]',
  lg: 'text-base px-6 py-3 min-h-[48px]',
};

const iconSizeClasses = {
  sm: 'w-3 h-3',
  md: 'w-4 h-4',
  lg: 'w-5 h-5',
};

const buttonClasses = computed(() => {
  return `${baseClasses} ${variantClasses[props.variant]} ${props.variant !== 'icon' ? sizeClasses[props.size] : ''}`;
});

const iconClasses = computed(() => {
  const hasSlot = !!props.icon;
  return `${iconSizeClasses[props.size]} ${hasSlot ? 'mr-2' : ''}`;
});
</script>
