# Focus Manager

Utility class for managing keyboard focus in accessible interfaces.

## Import

```typescript
import { FocusManager } from '@verkview/design-system'
```

## Overview

The `FocusManager` provides utilities for:

- Trapping focus within containers (modals, dialogs)
- Saving and restoring focus state
- Finding focusable elements
- Moving focus to form errors

## API Reference

### `trapFocus(container)`

Traps keyboard focus within a container element. Tab and Shift+Tab cycle through focusable elements without leaving the container.

```typescript
FocusManager.trapFocus(container: HTMLElement): void
```

**Parameters:**
- `container` - The HTML element to trap focus within

**Behavior:**
1. Finds all focusable elements in the container
2. Focuses the first element
3. Handles Tab/Shift+Tab to cycle focus

**Example:**
```typescript
const modal = document.getElementById('modal')
FocusManager.trapFocus(modal)
```

### `saveFocus()`

Saves the currently focused element so it can be restored later.

```typescript
FocusManager.saveFocus(): void
```

**Example:**
```typescript
// Before opening modal
FocusManager.saveFocus()
```

### `restoreFocus()`

Restores focus to the previously saved element.

```typescript
FocusManager.restoreFocus(): void
```

**Example:**
```typescript
// After closing modal
FocusManager.restoreFocus()
```

### `getFocusableElements(container)`

Returns all focusable elements within a container.

```typescript
FocusManager.getFocusableElements(container: HTMLElement): NodeListOf<Element>
```

**Focusable elements include:**
- `a[href]`
- `button:not([disabled])`
- `textarea:not([disabled])`
- `input:not([disabled])`
- `select:not([disabled])`
- `[tabindex]:not([tabindex="-1"])`

**Example:**
```typescript
const form = document.getElementById('my-form')
const focusables = FocusManager.getFocusableElements(form)
console.log(`Found ${focusables.length} focusable elements`)
```

### `moveFocusToFirstError(form)`

Moves focus to the first element with `aria-invalid="true"` in a form.

```typescript
FocusManager.moveFocusToFirstError(form: HTMLElement): void
```

**Behavior:**
1. Finds first element with `aria-invalid="true"`
2. Focuses that element
3. Scrolls element into view smoothly

**Example:**
```typescript
const form = document.getElementById('my-form')

const onSubmit = () => {
  if (!validate()) {
    FocusManager.moveFocusToFirstError(form)
  }
}
```

## Common Patterns

### Modal Focus Management

```typescript
import { FocusManager } from '@verkview/design-system'

function openModal(modalElement: HTMLElement) {
  // Save current focus before opening
  FocusManager.saveFocus()

  // Show the modal
  modalElement.style.display = 'block'

  // Trap focus inside modal
  FocusManager.trapFocus(modalElement)
}

function closeModal(modalElement: HTMLElement) {
  // Hide the modal
  modalElement.style.display = 'none'

  // Restore focus to trigger element
  FocusManager.restoreFocus()
}
```

### Vue Composable

```typescript
// composables/useFocusTrap.ts
import { ref, onMounted, onUnmounted } from 'vue'
import { FocusManager } from '@verkview/design-system'

export function useFocusTrap(containerRef: Ref<HTMLElement | null>) {
  const isTrapped = ref(false)

  const trap = () => {
    if (containerRef.value) {
      FocusManager.saveFocus()
      FocusManager.trapFocus(containerRef.value)
      isTrapped.value = true
    }
  }

  const release = () => {
    FocusManager.restoreFocus()
    isTrapped.value = false
  }

  onUnmounted(() => {
    if (isTrapped.value) {
      release()
    }
  })

  return { trap, release, isTrapped }
}
```

### Form Validation

```vue
<script setup>
import { ref } from 'vue'
import { FocusManager } from '@verkview/design-system'

const formRef = ref<HTMLFormElement | null>(null)
const errors = ref<Record<string, string>>({})

const validate = () => {
  errors.value = {}

  if (!email.value) {
    errors.value.email = 'Email is required'
  }

  if (!password.value) {
    errors.value.password = 'Password is required'
  }

  return Object.keys(errors.value).length === 0
}

const handleSubmit = () => {
  if (!validate() && formRef.value) {
    // Focus the first field with an error
    FocusManager.moveFocusToFirstError(formRef.value)
    return
  }

  // Submit form...
}
</script>

<template>
  <form ref="formRef" @submit.prevent="handleSubmit">
    <DsInput
      v-model="email"
      label="Email"
      :error="errors.email"
    />
    <DsInput
      v-model="password"
      type="password"
      label="Password"
      :error="errors.password"
    />
    <DsButton type="submit">Sign In</DsButton>
  </form>
</template>
```

## Best Practices

1. **Always save focus** before trapping it in a modal or dialog
2. **Always restore focus** when the modal closes
3. **Use for modals/dialogs** - Any overlay that blocks interaction should trap focus
4. **Test with keyboard** - Ensure Tab cycles correctly
5. **Consider screen readers** - Focus management improves screen reader experience

## Related

- [ARIA Manager](/utilities/aria-manager) - Screen reader announcements
- [Modal Component](/components/modal) - Uses FocusManager internally
- [Accessibility Guide](/foundations/accessibility) - Comprehensive a11y patterns
