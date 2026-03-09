<template>
  <component
    :is="cardComponent"
    :class="cardClasses"
    v-bind="cardProps"
    @click="handleClick"
    @keydown="handleKeyDown"
  >
    <h3 v-if="title" class="text-sm font-medium text-foreground mb-2">
      {{ title }}
    </h3>
    <div class="text-xs text-muted-foreground">
      <slot />
    </div>
    <div
      v-if="$slots.footer"
      class="mt-3 pt-3 border-t border-border flex items-center justify-between"
    >
      <slot name="footer" />
    </div>
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  variant?: 'default' | 'interactive' | 'elevated';
  title?: string;
  href?: string;
  className?: string;
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  className: '',
});

const emit = defineEmits<{
  click: [];
}>();

const baseClasses = 'rounded-lg border transition-all p-3';

const variantClasses = {
  default: 'bg-card/40 border-border/60 hover:border-border/80 hover:bg-card/60',
  interactive: 'bg-card/40 border-border/60 hover:border-border/80 hover:bg-card/60 cursor-pointer focus-within:ring-2 focus-within:ring-ring',
  elevated: 'bg-card border-border shadow-lg',
};

const cardComponent = computed(() => {
  if (props.href) return 'a';
  return 'article';
});

const cardClasses = computed(() => {
  const classes = `${baseClasses} ${variantClasses[props.variant]} ${props.className}`;
  if (props.href) return `${classes} block`;
  return classes;
});

const cardProps = computed(() => {
  if (props.href) {
    return { href: props.href };
  }
  return {};
});

const handleClick = () => {
  emit('click');
};

const handleKeyDown = (event: KeyboardEvent) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    emit('click');
  }
};
</script>
