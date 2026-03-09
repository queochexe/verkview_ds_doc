<template>
  <div class="form-group">
    <label
      v-if="label"
      :for="inputId"
      class="block text-sm font-medium text-foreground/80 mb-2"
    >
      {{ label }}
      <span v-if="required" class="text-error ml-1" aria-label="required">*</span>
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
      class="mt-2 text-xs text-error flex items-center gap-1"
      role="alert"
    >
      <AlertCircle class="w-3 h-3" aria-hidden="true" />
      {{ error }}
    </p>

    <p
      v-else-if="success"
      class="mt-2 text-xs text-success flex items-center gap-1"
      role="status"
    >
      <CheckCircle class="w-3 h-3" aria-hidden="true" />
      {{ success }}
    </p>

    <p v-else-if="helpText" :id="helpId" class="mt-2 text-xs text-muted-foreground">
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

const baseClasses = 'w-full bg-secondary border text-foreground rounded-lg px-4 py-2.5 text-sm transition-all duration-200 focus:outline-none focus:ring-1 disabled:opacity-50 disabled:cursor-not-allowed placeholder:text-muted-foreground';

const stateClasses = computed(() => {
  if (props.error) return 'border-error focus:border-error focus:ring-error';
  if (props.success) return 'border-success focus:border-success focus:ring-success';
  return 'border-border focus:border-ring focus:ring-ring';
});

const inputClasses = computed(() => `${baseClasses} ${stateClasses.value}`);

const describedBy = computed(() => {
  if (props.error) return errorId.value;
  if (props.helpText) return helpId.value;
  return undefined;
});
</script>
