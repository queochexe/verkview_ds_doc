# Textarea

Multi-line text input component with label and validation support.

<ComponentDemo title="Textarea Example">
  <div class="w-full max-w-md">
    <DsTextarea
      label="Description"
      placeholder="Enter task description..."
      :rows="4"
    />
  </div>
</ComponentDemo>

## Import

```typescript
import { DsTextarea } from '@verkview/design-system'
```

## Usage

```vue
<script setup>
import { ref } from 'vue'

const description = ref('')
</script>

<template>
  <DsTextarea
    v-model="description"
    label="Description"
    placeholder="Enter description..."
    :rows="4"
  />
</template>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `modelValue` | `string` | `''` | Textarea value (v-model) |
| `label` | `string` | `undefined` | Label text displayed above textarea |
| `placeholder` | `string` | `undefined` | Placeholder text |
| `rows` | `number` | `4` | Number of visible text rows |
| `error` | `string` | `undefined` | Error message to display |
| `success` | `string` | `undefined` | Success message to display |
| `helpText` | `string` | `undefined` | Help text below textarea |
| `required` | `boolean` | `false` | Marks field as required |
| `disabled` | `boolean` | `false` | Disables the textarea |
| `id` | `string` | `auto-generated` | Custom textarea ID |

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `update:modelValue` | `string` | Emitted when textarea value changes |

## States

### Default

<ComponentDemo>
  <div class="w-full max-w-md">
    <DsTextarea label="Notes" placeholder="Add notes..." />
  </div>
</ComponentDemo>

```vue
<DsTextarea
  v-model="notes"
  label="Notes"
  placeholder="Add notes..."
/>
```

### With Help Text

<ComponentDemo>
  <div class="w-full max-w-md">
    <DsTextarea
      label="Description"
      help-text="Markdown formatting is supported"
    />
  </div>
</ComponentDemo>

```vue
<DsTextarea
  v-model="description"
  label="Description"
  help-text="Markdown formatting is supported"
/>
```

### Error State

<ComponentDemo>
  <div class="w-full max-w-md">
    <DsTextarea
      label="Description"
      error="Description must be at least 10 characters"
      model-value="Short"
    />
  </div>
</ComponentDemo>

```vue
<DsTextarea
  v-model="description"
  label="Description"
  :error="descriptionError"
/>
```

### Success State

<ComponentDemo>
  <div class="w-full max-w-md">
    <DsTextarea
      label="Description"
      success="Description saved"
      model-value="This is a valid description with enough content."
    />
  </div>
</ComponentDemo>

```vue
<DsTextarea
  v-model="description"
  label="Description"
  :success="isSaved ? 'Description saved' : undefined"
/>
```

### Custom Rows

<ComponentDemo>
  <div class="w-full max-w-md space-y-4">
    <DsTextarea label="Short (2 rows)" :rows="2" />
    <DsTextarea label="Tall (8 rows)" :rows="8" />
  </div>
</ComponentDemo>

```vue
<DsTextarea v-model="short" label="Short" :rows="2" />
<DsTextarea v-model="tall" label="Tall" :rows="8" />
```

### Disabled

<ComponentDemo>
  <div class="w-full max-w-md">
    <DsTextarea
      label="Read Only"
      :disabled="true"
      model-value="This content cannot be edited."
    />
  </div>
</ComponentDemo>

```vue
<DsTextarea
  v-model="value"
  label="Read Only"
  :disabled="true"
/>
```

## Accessibility

### ARIA Attributes

The component automatically includes:

- `aria-required="true"` when required
- `aria-invalid="true"` when error is present
- `aria-describedby` linking to error/help text
- Properly associated `<label>` element

### Keyboard Support

| Key | Action |
|-----|--------|
| `Tab` | Focus/blur textarea |
| Any key | Type in textarea |

## Styling Notes

The textarea uses `resize-none` by default for consistent height. To allow resizing:

```vue
<DsTextarea
  v-model="content"
  label="Resizable"
  class="resize-y"
/>
```

## Best Practices

1. **Appropriate rows**: Set initial `rows` based on expected content length
2. **Character limits**: Add help text to indicate limits if applicable
3. **Placeholder text**: Use to show example content format
4. **Required fields**: Use `required` prop for mandatory textareas
5. **Error messages**: Be specific about validation requirements

## Examples

### Task Description

```vue
<template>
  <DsTextarea
    v-model="task.description"
    label="Task Description"
    placeholder="What needs to be done?"
    :rows="4"
    help-text="Be specific about deliverables and deadlines"
  />
</template>
```

### Feedback Form

```vue
<template>
  <form @submit.prevent="submit" class="space-y-4">
    <DsTextarea
      v-model="feedback"
      label="Your Feedback"
      placeholder="Tell us what you think..."
      :rows="6"
      :required="true"
      :error="errors.feedback"
    />

    <DsButton type="submit">
      Submit Feedback
    </DsButton>
  </form>
</template>
```

### Comment Box

```vue
<template>
  <div class="space-y-2">
    <DsTextarea
      v-model="comment"
      placeholder="Add a comment..."
      :rows="3"
    />
    <div class="flex justify-end">
      <DsButton size="sm" :disabled="!comment.trim()">
        Post Comment
      </DsButton>
    </div>
  </div>
</template>
```
