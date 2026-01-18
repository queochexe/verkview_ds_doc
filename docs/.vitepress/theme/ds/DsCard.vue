<template>
  <component
    :is="cardComponent"
    :class="cardClasses"
    v-bind="cardProps"
    @click="handleClick"
    @keydown="handleKeyDown"
  >
    <h3 v-if="title" class="text-sm font-medium text-zinc-200 mb-2">
      {{ title }}
    </h3>
    <div class="text-xs text-zinc-400">
      <slot />
    </div>
    <div
      v-if="$slots.footer"
      class="mt-3 pt-3 border-t border-zinc-800 flex items-center justify-between"
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
  default: 'bg-zinc-900/40 border-zinc-800/60 hover:border-zinc-700/80 hover:bg-zinc-900/60',
  interactive: 'bg-zinc-900/40 border-zinc-800/60 hover:border-zinc-700/80 hover:bg-zinc-900/60 cursor-pointer focus-within:ring-2 focus-within:ring-zinc-700',
  elevated: 'bg-zinc-900 border-zinc-800 shadow-lg',
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
