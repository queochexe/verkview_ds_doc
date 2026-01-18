<template>
  <div class="form-group">
    <label
      v-if="label"
      :for="inputId"
      class="block text-sm font-medium text-zinc-300 mb-2"
    >
      {{ label }}
      <span v-if="required" class="text-red-400 ml-1" aria-label="required">*</span>
    </label>

    <input
      :id="inputId"
      :type="type"
      :class="inputClasses"
      :placeholder="placeholder"
      :value="modelValue"
      :disabled="disabled"
      :required="required"
      :aria-required="required"
      :aria-invalid="!!error"
      :aria-describedby="describedBy"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />

    <p
      v-if="error"
      :id="errorId"
      class="mt-2 text-xs text-red-400 flex items-center gap-1"
      role="alert"
    >
      <AlertCircle class="w-3 h-3" aria-hidden="true" />
      {{ error }}
    </p>

    <p
      v-else-if="success"
      class="mt-2 text-xs text-green-400 flex items-center gap-1"
      role="status"
    >
      <CheckCircle class="w-3 h-3" aria-hidden="true" />
      {{ success }}
    </p>

    <p v-else-if="helpText" :id="helpId" class="mt-2 text-xs text-zinc-500">
      {{ helpText }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { AlertCircle, CheckCircle } from 'lucide-vue-next';
import { generateUniqueId } from '../utils/accessibility';

interface Props {
  modelValue?: string;
  label?: string;
  type?: string;
  placeholder?: string;
  error?: string;
  success?: string;
  helpText?: string;
  required?: boolean;
  disabled?: boolean;
  id?: string;
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  modelValue: '',
});

defineEmits<{
  'update:modelValue': [value: string];
}>();

const inputId = computed(() => props.id || `input-${generateUniqueId()}`);
const errorId = computed(() => `${inputId.value}-error`);
const helpId = computed(() => `${inputId.value}-help`);

const baseClasses = 'w-full bg-zinc-900 border text-zinc-200 rounded-lg px-4 py-2.5 text-sm transition-all duration-200 focus:outline-none focus:ring-1 disabled:opacity-50 disabled:cursor-not-allowed placeholder:text-zinc-600';

const stateClasses = computed(() => {
  if (props.error) return 'border-red-500 focus:border-red-500 focus:ring-red-500';
  if (props.success) return 'border-green-500 focus:border-green-500 focus:ring-green-500';
  return 'border-zinc-800 focus:border-zinc-700 focus:ring-zinc-700';
});

const inputClasses = computed(() => `${baseClasses} ${stateClasses.value}`);

const describedBy = computed(() => {
  if (props.error) return errorId.value;
  if (props.helpText) return helpId.value;
  return undefined;
});
</script>
