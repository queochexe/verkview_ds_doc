# Toast

Notification toast component with auto-dismiss and type variants.

<ComponentDemo title="Toast Types">
  <div class="space-y-2 w-full max-w-md">
    <div class="bg-zinc-900 border border-blue-500/20 rounded-lg p-4 flex items-start gap-3">
      <span class="text-blue-400">ℹ</span>
      <p class="text-sm text-zinc-200">Info notification message</p>
    </div>
    <div class="bg-zinc-900 border border-green-500/20 rounded-lg p-4 flex items-start gap-3">
      <span class="text-green-400">✓</span>
      <p class="text-sm text-zinc-200">Success notification message</p>
    </div>
    <div class="bg-zinc-900 border border-orange-500/20 rounded-lg p-4 flex items-start gap-3">
      <span class="text-orange-400">⚠</span>
      <p class="text-sm text-zinc-200">Warning notification message</p>
    </div>
    <div class="bg-zinc-900 border border-red-500/20 rounded-lg p-4 flex items-start gap-3">
      <span class="text-red-400">✕</span>
      <p class="text-sm text-zinc-200">Error notification message</p>
    </div>
  </div>
</ComponentDemo>

## Import

```typescript
import { DsToast } from '@verkview/design-system'
```

## Usage

```vue
<script setup>
import { ref } from 'vue'

const showToast = ref(false)
</script>

<template>
  <DsButton @click="showToast = true">Show Toast</DsButton>

  <DsToast
    v-if="showToast"
    type="success"
    message="Task saved successfully!"
    @dismiss="showToast = false"
  />
</template>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | `'info' \| 'success' \| 'warning' \| 'error'` | `'info'` | Toast type/variant |
| `message` | `string` | *required* | Toast message content |
| `duration` | `number` | `5000` | Auto-dismiss duration in ms (0 = no auto-dismiss) |
| `dismissible` | `boolean` | `true` | Show dismiss button |

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `dismiss` | - | Emitted when toast is dismissed |

## Types

### Info

For general information and tips:

```vue
<DsToast type="info" message="New feature available!" />
```

### Success

For successful operations:

```vue
<DsToast type="success" message="Task saved successfully!" />
```

### Warning

For warnings that need attention:

```vue
<DsToast type="warning" message="Your session expires in 5 minutes" />
```

### Error

For errors and failures:

```vue
<DsToast type="error" message="Failed to save task. Please try again." />
```

## Behavior

### Auto-Dismiss

Toasts auto-dismiss after `duration` milliseconds:

```vue
<!-- Dismisses after 5 seconds (default) -->
<DsToast message="Quick notification" />

<!-- Dismisses after 10 seconds -->
<DsToast message="Longer notification" :duration="10000" />

<!-- Never auto-dismisses -->
<DsToast message="Persistent notification" :duration="0" />
```

### Manual Dismiss

Users can click the X button to dismiss:

```vue
<DsToast
  message="Dismissible toast"
  :dismissible="true"
  @dismiss="handleDismiss"
/>
```

### Non-Dismissible

For critical notifications:

```vue
<DsToast
  type="error"
  message="Critical error occurred"
  :dismissible="false"
  :duration="0"
/>
```

## Animation

The toast animates in from the right and out to the right:

```css
.toast-enter-from {
  transform: translateX(100%);
  opacity: 0;
}

.toast-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
```

## Accessibility

### ARIA Attributes

- `role="alert"` for screen reader announcement
- Automatic focus management

### Best Practices

- Use appropriate type for message severity
- Keep messages concise
- Provide dismiss option for non-critical toasts
- Use longer duration for important messages

## Toast Container

For multiple toasts, create a container:

```vue
<script setup>
import { ref } from 'vue'

interface Toast {
  id: string
  type: 'info' | 'success' | 'warning' | 'error'
  message: string
}

const toasts = ref<Toast[]>([])

const addToast = (toast: Omit<Toast, 'id'>) => {
  const id = Date.now().toString()
  toasts.value.push({ ...toast, id })
}

const removeToast = (id: string) => {
  toasts.value = toasts.value.filter(t => t.id !== id)
}

// Expose for global use
provide('toast', { addToast })
</script>

<template>
  <div class="fixed top-4 right-4 z-50 space-y-2">
    <DsToast
      v-for="toast in toasts"
      :key="toast.id"
      :type="toast.type"
      :message="toast.message"
      @dismiss="removeToast(toast.id)"
    />
  </div>
</template>
```

## Examples

### Form Submission

```vue
<script setup>
import { ref } from 'vue'

const toast = ref<{ type: string; message: string } | null>(null)

const submitForm = async () => {
  try {
    await saveData()
    toast.value = {
      type: 'success',
      message: 'Form submitted successfully!'
    }
  } catch (error) {
    toast.value = {
      type: 'error',
      message: 'Failed to submit form. Please try again.'
    }
  }
}
</script>

<template>
  <form @submit.prevent="submitForm">
    <!-- form fields -->
    <DsButton type="submit">Submit</DsButton>
  </form>

  <DsToast
    v-if="toast"
    :type="toast.type"
    :message="toast.message"
    @dismiss="toast = null"
  />
</template>
```

### Composable Toast Service

```typescript
// composables/useToast.ts
import { ref, readonly } from 'vue'

interface Toast {
  id: string
  type: 'info' | 'success' | 'warning' | 'error'
  message: string
}

const toasts = ref<Toast[]>([])

export function useToast() {
  const show = (type: Toast['type'], message: string) => {
    const id = Date.now().toString()
    toasts.value.push({ id, type, message })
    return id
  }

  const dismiss = (id: string) => {
    toasts.value = toasts.value.filter(t => t.id !== id)
  }

  const success = (message: string) => show('success', message)
  const error = (message: string) => show('error', message)
  const warning = (message: string) => show('warning', message)
  const info = (message: string) => show('info', message)

  return {
    toasts: readonly(toasts),
    show,
    dismiss,
    success,
    error,
    warning,
    info
  }
}
```

### Usage with Composable

```vue
<script setup>
import { useToast } from '@/composables/useToast'

const toast = useToast()

const saveTask = async () => {
  try {
    await api.saveTask(task)
    toast.success('Task saved!')
  } catch (e) {
    toast.error('Failed to save task')
  }
}
</script>
```
