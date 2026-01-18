# ARIA Manager

Utility class for managing ARIA attributes and screen reader announcements.

## Import

```typescript
import { AriaManager } from '@verkview/design-system'
```

## Overview

The `AriaManager` provides utilities for:

- Announcing messages to screen readers
- Managing loading states
- Handling expanded/collapsed states
- Setting form error states

## API Reference

### `announceToScreenReader(message, priority)`

Announces a message to screen readers using a live region.

```typescript
AriaManager.announceToScreenReader(
  message: string,
  priority: 'polite' | 'assertive' = 'polite'
): void
```

**Parameters:**
- `message` - The text to announce
- `priority` - Announcement priority
  - `'polite'` (default) - Waits for user to finish current task
  - `'assertive'` - Interrupts immediately (use sparingly)

**Example:**
```typescript
// Polite announcement (default)
AriaManager.announceToScreenReader('Task saved successfully')

// Assertive announcement for errors
AriaManager.announceToScreenReader('Error: Form validation failed', 'assertive')
```

### `setLoadingState(element, isLoading)`

Sets the loading state on an element with proper ARIA attributes.

```typescript
AriaManager.setLoadingState(element: HTMLElement, isLoading: boolean): void
```

**Behavior:**
- Sets `aria-busy` attribute
- Saves original text and replaces with "Loading..."
- Restores original text when loading completes

**Example:**
```typescript
const button = document.getElementById('submit-btn')

// Start loading
AriaManager.setLoadingState(button, true)
// Button shows "Loading..." with aria-busy="true"

await saveData()

// End loading
AriaManager.setLoadingState(button, false)
// Button text restored, aria-busy="false"
```

### `setExpandedState(trigger, target, isExpanded)`

Manages the expanded/collapsed state between a trigger and target element.

```typescript
AriaManager.setExpandedState(
  trigger: HTMLElement,
  target: HTMLElement,
  isExpanded: boolean
): void
```

**Behavior:**
- Sets `aria-expanded` on trigger
- Sets `aria-hidden` on target
- Toggles display property on target

**Example:**
```typescript
const button = document.getElementById('toggle-btn')
const content = document.getElementById('collapsible-content')
let expanded = false

button.addEventListener('click', () => {
  expanded = !expanded
  AriaManager.setExpandedState(button, content, expanded)
})
```

### `setErrorState(input, errorMessage)`

Sets the error state on a form input with proper ARIA attributes.

```typescript
AriaManager.setErrorState(input: HTMLInputElement, errorMessage: string): void
```

**Behavior:**
- Sets `aria-invalid="true"`
- Sets `aria-describedby` pointing to error element
- Creates error element if it doesn't exist
- Error element has `role="alert"`

**Example:**
```typescript
const emailInput = document.getElementById('email') as HTMLInputElement

if (!isValidEmail(emailInput.value)) {
  AriaManager.setErrorState(emailInput, 'Please enter a valid email address')
}
```

### `clearErrorState(input)`

Clears the error state from a form input.

```typescript
AriaManager.clearErrorState(input: HTMLInputElement): void
```

**Behavior:**
- Removes `aria-invalid`
- Removes `aria-describedby`
- Removes error element from DOM

**Example:**
```typescript
const emailInput = document.getElementById('email') as HTMLInputElement

// Clear previous error
AriaManager.clearErrorState(emailInput)
```

## Common Patterns

### Toast Notifications

```typescript
import { AriaManager } from '@verkview/design-system'

function showToast(message: string, type: 'success' | 'error') {
  // Visual toast display...

  // Announce to screen readers
  const priority = type === 'error' ? 'assertive' : 'polite'
  AriaManager.announceToScreenReader(message, priority)
}
```

### Form Validation

```typescript
import { AriaManager } from '@verkview/design-system'

function validateForm(form: HTMLFormElement) {
  const inputs = form.querySelectorAll('input')

  inputs.forEach(input => {
    // Clear previous errors
    AriaManager.clearErrorState(input as HTMLInputElement)

    // Validate and set errors
    const error = validateInput(input)
    if (error) {
      AriaManager.setErrorState(input as HTMLInputElement, error)
    }
  })
}
```

### Async Button

```vue
<script setup>
import { ref } from 'vue'
import { AriaManager } from '@verkview/design-system'

const buttonRef = ref<HTMLButtonElement | null>(null)
const isLoading = ref(false)

const handleClick = async () => {
  if (!buttonRef.value) return

  isLoading.value = true
  AriaManager.setLoadingState(buttonRef.value, true)

  try {
    await saveData()
    AriaManager.announceToScreenReader('Data saved successfully')
  } catch (error) {
    AriaManager.announceToScreenReader('Failed to save data', 'assertive')
  } finally {
    isLoading.value = false
    AriaManager.setLoadingState(buttonRef.value, false)
  }
}
</script>

<template>
  <button ref="buttonRef" @click="handleClick">
    Save
  </button>
</template>
```

### Accordion Component

```typescript
import { AriaManager } from '@verkview/design-system'

function toggleAccordionItem(header: HTMLElement, panel: HTMLElement) {
  const isCurrentlyExpanded = header.getAttribute('aria-expanded') === 'true'
  AriaManager.setExpandedState(header, panel, !isCurrentlyExpanded)
}
```

## Live Region Behavior

The `announceToScreenReader` method creates a live region element:

```html
<div
  id="aria-live-region"
  aria-live="polite"
  aria-atomic="true"
  class="sr-only"
>
  <!-- Message content -->
</div>
```

**Notes:**
- Created once and reused
- Uses `sr-only` class (visually hidden)
- `aria-atomic="true"` ensures full message is read
- Message cleared and reset with delay to ensure re-announcement

## Best Practices

1. **Use polite for most announcements** - Let users finish current task
2. **Use assertive for errors** - Interrupt for critical issues
3. **Keep messages concise** - Short, clear announcements
4. **Avoid over-announcing** - Don't announce every minor change
5. **Test with screen readers** - Verify announcements work correctly

## Related

- [Focus Manager](/utilities/focus-manager) - Focus management utilities
- [Accessibility Guide](/foundations/accessibility) - Comprehensive a11y patterns
- [Modal Component](/components/modal) - Uses AriaManager for announcements
