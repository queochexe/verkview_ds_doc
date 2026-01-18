# Modal

Accessible dialog component with focus trapping and keyboard support.

<ComponentDemo title="Modal Preview">
  <p class="text-zinc-400 text-sm">Modal opens in a portal overlay. See examples below for usage.</p>
</ComponentDemo>

## Import

```typescript
import { DsModal } from '@verkview/design-system'
```

## Usage

```vue
<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
</script>

<template>
  <DsButton @click="isOpen = true">Open Modal</DsButton>

  <DsModal
    :is-open="isOpen"
    title="Edit Task"
    @close="isOpen = false"
  >
    <p>Modal content goes here.</p>

    <template #footer>
      <DsButton variant="ghost" @click="isOpen = false">Cancel</DsButton>
      <DsButton @click="save">Save</DsButton>
    </template>
  </DsModal>
</template>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `isOpen` | `boolean` | *required* | Controls modal visibility |
| `title` | `string` | *required* | Modal title displayed in header |
| `closeOnOverlay` | `boolean` | `true` | Close when clicking overlay |
| `closeOnEscape` | `boolean` | `true` | Close when pressing Escape |

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `close` | - | Emitted when modal should close |

## Slots

| Slot | Description |
|------|-------------|
| `default` | Main modal content |
| `footer` | Footer with action buttons |

## Features

### Focus Trapping

The modal automatically traps focus within its content:

- Focus moves to the first focusable element when opened
- Tab cycles through focusable elements
- Focus is restored to the trigger element when closed

### Scroll Locking

When the modal opens:
- Background scroll is disabled
- Modal content can scroll independently

### Screen Reader Support

The modal announces to screen readers:
- "Modal opened" when opened
- "Modal closed" when closed

## Behavior Options

### Close on Overlay Click

By default, clicking the overlay closes the modal:

```vue
<DsModal
  :is-open="isOpen"
  title="Standard Modal"
  :close-on-overlay="true"
  @close="isOpen = false"
>
  Click outside to close.
</DsModal>
```

### Prevent Overlay Close

For critical modals, prevent closing on overlay click:

```vue
<DsModal
  :is-open="isOpen"
  title="Confirmation Required"
  :close-on-overlay="false"
  @close="isOpen = false"
>
  You must confirm or cancel.
</DsModal>
```

### Prevent Escape Close

Disable Escape key closing:

```vue
<DsModal
  :is-open="isOpen"
  title="Processing..."
  :close-on-escape="false"
  @close="isOpen = false"
>
  Please wait...
</DsModal>
```

## Accessibility

### ARIA Attributes

The modal includes:

- `role="dialog"`
- `aria-modal="true"`
- `aria-labelledby` linked to title

### Keyboard Support

| Key | Action |
|-----|--------|
| `Escape` | Close modal (when enabled) |
| `Tab` | Navigate focus forward |
| `Shift + Tab` | Navigate focus backward |

### Focus Management

```typescript
// Internal implementation uses FocusManager
FocusManager.saveFocus()      // Saves current focus
FocusManager.trapFocus(modal) // Traps focus in modal
FocusManager.restoreFocus()   // Restores focus on close
```

## Responsive Design

The modal is fully responsive:

- **Mobile**: Full screen, no border radius
- **Desktop**: Centered with max-width, rounded corners

```css
/* Mobile */
.modal {
  width: 100vw;
  height: 100vh;
  border-radius: 0;
}

/* Desktop (md+) */
@media (min-width: 768px) {
  .modal {
    max-width: 672px;
    max-height: 90vh;
    border-radius: 8px;
  }
}
```

## Best Practices

1. **Clear titles**: Use descriptive titles that indicate purpose
2. **Action buttons**: Place primary action on the right in footer
3. **Escape hatch**: Always provide a way to close (X button, Cancel)
4. **Focus first input**: For forms, focus moves to first input
5. **Prevent data loss**: Warn before closing with unsaved changes

## Examples

### Edit Form Modal

```vue
<template>
  <DsModal
    :is-open="isOpen"
    title="Edit Task"
    @close="handleClose"
  >
    <div class="space-y-4">
      <DsInput
        v-model="task.title"
        label="Task Name"
        :required="true"
      />

      <DsTextarea
        v-model="task.description"
        label="Description"
        :rows="4"
      />
    </div>

    <template #footer>
      <DsButton variant="ghost" @click="handleClose">
        Cancel
      </DsButton>
      <DsButton @click="save" :loading="isSaving">
        Save Changes
      </DsButton>
    </template>
  </DsModal>
</template>
```

### Confirmation Dialog

```vue
<template>
  <DsModal
    :is-open="showConfirm"
    title="Delete Task?"
    @close="showConfirm = false"
  >
    <p class="text-zinc-400">
      Are you sure you want to delete this task?
      This action cannot be undone.
    </p>

    <template #footer>
      <DsButton variant="ghost" @click="showConfirm = false">
        Cancel
      </DsButton>
      <DsButton
        class="bg-red-500 hover:bg-red-600"
        @click="confirmDelete"
      >
        Delete
      </DsButton>
    </template>
  </DsModal>
</template>
```

### Loading Modal

```vue
<template>
  <DsModal
    :is-open="isProcessing"
    title="Processing..."
    :close-on-overlay="false"
    :close-on-escape="false"
    @close="() => {}"
  >
    <div class="flex flex-col items-center py-8">
      <div class="animate-spin w-8 h-8 border-2 border-zinc-700 border-t-zinc-200 rounded-full" />
      <p class="mt-4 text-zinc-400">Please wait...</p>
    </div>
  </DsModal>
</template>
```

### Nested Content

```vue
<template>
  <DsModal
    :is-open="isOpen"
    title="Task Details"
    @close="isOpen = false"
  >
    <div class="space-y-4">
      <DsCard title="Subtasks">
        <ul class="space-y-2">
          <li v-for="subtask in subtasks" :key="subtask.id">
            <DsCheckbox v-model="subtask.done" :label="subtask.title" />
          </li>
        </ul>
      </DsCard>

      <DsCard title="Labels">
        <div class="flex gap-1">
          <DsBadge
            v-for="label in labels"
            :key="label.id"
            :variant="getLabelVariant(label.color)"
          >
            {{ label.name }}
          </DsBadge>
        </div>
      </DsCard>
    </div>

    <template #footer>
      <DsButton @click="isOpen = false">Close</DsButton>
    </template>
  </DsModal>
</template>
```
