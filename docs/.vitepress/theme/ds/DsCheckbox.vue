<template>
  <div :class="`flex items-center gap-2 ${className}`">
    <input
      :id="checkboxId"
      type="checkbox"
      class="custom-checkbox"
      :checked="modelValue"
      :disabled="disabled"
      :aria-checked="modelValue"
      :aria-disabled="disabled"
      :aria-label="ariaLabel"
      @change="handleChange"
      @keydown="handleKeyDown"
    />
    <label
      v-if="label"
      :for="checkboxId"
      class="text-sm text-zinc-300 cursor-pointer select-none"
    >
      {{ label }}
    </label>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { generateUniqueId } from '../utils/accessibility';

interface Props {
  modelValue?: boolean;
  label?: string;
  disabled?: boolean;
  className?: string;
  id?: string;
  ariaLabel?: string;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
  className: '',
});

const emit = defineEmits<{
  'update:modelValue': [value: boolean];
}>();

const checkboxId = computed(() => props.id || `checkbox-${generateUniqueId()}`);

const handleChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit('update:modelValue', target.checked);
};

const handleKeyDown = (event: KeyboardEvent) => {
  if (event.key === ' ') {
    event.preventDefault();
    const input = event.currentTarget as HTMLInputElement;
    input.click();
  }
};
</script>
