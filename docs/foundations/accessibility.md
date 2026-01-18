# Accessibility

The Verkview Design System is built with WCAG 2.1 Level AA compliance as a core requirement.

## Overview

Every component in the design system includes:

- Proper ARIA attributes
- Keyboard navigation support
- Focus management
- Screen reader compatibility
- Sufficient color contrast
- Touch target sizing

## Focus Management

### Focus Visible

All interactive elements show a visible focus indicator:

```css
:focus-visible {
  outline: none;
  ring: 2px solid var(--ring);
  ring-offset: 2px;
  ring-offset-color: var(--background);
}
```

### Focus Trapping

Modals and dialogs trap focus to prevent users from tabbing outside:

```typescript
import { FocusManager } from '@verkview/design-system'

// Trap focus within a container
FocusManager.trapFocus(modalElement)

// Save current focus before opening modal
FocusManager.saveFocus()

// Restore focus when modal closes
FocusManager.restoreFocus()
```

### Focus Manager API

```typescript
class FocusManager {
  // Trap focus within a container element
  static trapFocus(container: HTMLElement): void

  // Save the currently focused element
  static saveFocus(): void

  // Restore focus to the previously saved element
  static restoreFocus(): void

  // Get all focusable elements within a container
  static getFocusableElements(container: HTMLElement): NodeListOf<Element>

  // Move focus to the first error in a form
  static moveFocusToFirstError(form: HTMLElement): void
}
```

## ARIA Support

### ARIA Manager

The `AriaManager` class provides utilities for screen reader announcements:

```typescript
import { AriaManager } from '@verkview/design-system'

// Announce a message to screen readers
AriaManager.announceToScreenReader('Task saved successfully', 'polite')

// Announce urgent messages
AriaManager.announceToScreenReader('Error: Please fix the form', 'assertive')
```

### ARIA Manager API

```typescript
class AriaManager {
  // Announce message to screen readers
  static announceToScreenReader(
    message: string,
    priority: 'polite' | 'assertive'
  ): void

  // Set loading state with aria-busy
  static setLoadingState(element: HTMLElement, isLoading: boolean): void

  // Set expanded state for collapsibles
  static setExpandedState(
    trigger: HTMLElement,
    target: HTMLElement,
    isExpanded: boolean
  ): void

  // Set error state on form inputs
  static setErrorState(input: HTMLInputElement, errorMessage: string): void

  // Clear error state from form inputs
  static clearErrorState(input: HTMLInputElement): void
}
```

### Common ARIA Patterns

#### Buttons with Icons Only

```vue
<DsButton
  variant="icon"
  :icon="Trash2"
  aria-label="Delete task"
/>
```

#### Loading States

```vue
<DsButton :loading="isLoading" aria-busy="true">
  {{ isLoading ? 'Saving...' : 'Save' }}
</DsButton>
```

#### Form Validation

```vue
<DsInput
  v-model="email"
  label="Email"
  :error="emailError"
  :aria-invalid="!!emailError"
  aria-describedby="email-error"
/>
```

## Keyboard Navigation

### Standard Patterns

| Component | Key | Action |
|-----------|-----|--------|
| Button | `Enter`, `Space` | Activate |
| Checkbox | `Space` | Toggle |
| Modal | `Escape` | Close |
| Modal | `Tab` | Navigate focus |
| Menu | `Arrow Up/Down` | Navigate items |
| Menu | `Enter` | Select item |

### Keyboard Navigation Utility

```typescript
import { KeyboardNavigation } from '@verkview/design-system'

// Handle arrow key navigation in a list
const newIndex = KeyboardNavigation.handleArrowNavigation(
  items,        // Array of focusable elements
  currentIndex, // Current focused index
  event.key     // 'ArrowUp', 'ArrowDown', etc.
)

// Manage roving tabindex
KeyboardNavigation.handleRovingTabIndex(items, activeIndex)
```

## Color Contrast

### Minimum Requirements

| Context | Ratio | Level |
|---------|-------|-------|
| Normal text | 4.5:1 | AA |
| Large text (18px+ or 14px bold) | 3:1 | AA |
| UI components | 3:1 | AA |

### Contrast Checker

```typescript
import { ContrastChecker } from '@verkview/design-system'

// Calculate contrast ratio
const ratio = ContrastChecker.calculateContrastRatio('#fafafa', '#18181b')
// Returns: 15.1

// Check if it meets WCAG requirements
const passes = ContrastChecker.meetsWCAGRequirement(
  ratio,
  'AA',    // 'AA' or 'AAA'
  14,      // font size in pixels
  false    // is bold
)
// Returns: true
```

### Design System Compliance

All text/background combinations in the design system meet AA requirements:

| Combination | Ratio | Status |
|-------------|-------|--------|
| `zinc-100` on `zinc-900` | 15.1:1 | Passes AAA |
| `zinc-200` on `zinc-900` | 12.1:1 | Passes AAA |
| `zinc-400` on `zinc-900` | 5.4:1 | Passes AA |
| `green-400` on `zinc-900` | 6.2:1 | Passes AA |
| `red-400` on `zinc-900` | 4.8:1 | Passes AA |

## Touch Targets

### Size Requirements

All interactive elements meet WCAG 2.1 touch target requirements:

| Target Type | Minimum Size |
|-------------|--------------|
| Primary actions | 44 x 44 pixels |
| Secondary actions | 24 x 24 pixels |

### Implementation

```css
/* Touch target utility classes */
.touch-target {
  min-height: 44px;
  min-width: 44px;
}

.touch-target-sm {
  min-height: 24px;
  min-width: 24px;
}
```

```vue
<!-- Button with proper touch target -->
<DsButton size="md">  <!-- 44px min-height -->
  Save
</DsButton>

<!-- Icon button with explicit touch target -->
<DsButton variant="icon" class="min-w-[44px] min-h-[44px]">
  <X class="w-4 h-4" />
</DsButton>
```

## Screen Reader Support

### Skip Links

Create skip links for main content:

```typescript
import { createSkipLink } from '@verkview/design-system'

const skipLink = createSkipLink('main-content', 'Skip to main content')
document.body.prepend(skipLink)
```

### Screen Reader Only Content

```typescript
import { createSROnlyElement } from '@verkview/design-system'

const srText = createSROnlyElement('Opens in new window')
linkElement.appendChild(srText)
```

### CSS for Screen Reader Only

```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
```

## Component Accessibility

### Button

```vue
<DsButton
  variant="primary"
  :disabled="isDisabled"
  :loading="isLoading"
  :aria-label="isLoading ? 'Saving...' : 'Save task'"
  :aria-busy="isLoading"
  :aria-disabled="isDisabled"
>
  Save
</DsButton>
```

### Modal

```vue
<DsModal
  :is-open="isOpen"
  title="Edit Task"
  @close="isOpen = false"
>
  <!-- Modal includes:
    - role="dialog"
    - aria-modal="true"
    - aria-labelledby (linked to title)
    - Focus trapping
    - Escape key to close
  -->
  <DsInput v-model="taskName" label="Task Name" />
</DsModal>
```

### Form Input

```vue
<DsInput
  v-model="email"
  label="Email Address"
  type="email"
  :required="true"
  :error="emailError"
  help-text="We'll never share your email"
/>
<!-- Includes:
  - Linked label via for/id
  - aria-required
  - aria-invalid when error
  - aria-describedby for error/help text
  - role="alert" on error message
-->
```

### Table

```vue
<DsTable
  :columns="columns"
  :data="data"
  caption="Task list"
  selectable
/>
<!-- Includes:
  - role="table", "rowgroup", "row", "columnheader", "cell"
  - Screen reader only caption
  - Proper scope attributes on headers
  - Labeled checkboxes for selection
-->
```

## Testing Accessibility

### Automated Testing

1. **Lighthouse**: Run accessibility audits in Chrome DevTools
2. **axe-core**: Integrate with testing frameworks
3. **pa11y**: CLI tool for accessibility testing

### Manual Testing Checklist

- [ ] Navigate using keyboard only (Tab, Shift+Tab, Enter, Space, Arrow keys)
- [ ] Test with screen reader (VoiceOver, NVDA, JAWS)
- [ ] Check focus visibility on all interactive elements
- [ ] Verify color contrast meets requirements
- [ ] Test at 200% zoom level
- [ ] Ensure touch targets are at least 44x44px
- [ ] Verify form errors are announced to screen readers

## Best Practices

1. **Always provide labels**: Use visible labels or `aria-label` for all inputs
2. **Use semantic HTML**: Prefer native elements over ARIA when possible
3. **Test with real users**: Include users with disabilities in testing
4. **Don't remove focus outlines**: Customize them instead of hiding them
5. **Announce dynamic changes**: Use `aria-live` regions for updates
6. **Support keyboard navigation**: Every mouse action should have a keyboard equivalent
7. **Provide text alternatives**: All images and icons need alt text or aria-label
