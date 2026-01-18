# Usage

Learn how to effectively use the Verkview Design System components.

## Basic Usage

All components follow a consistent API pattern:

```vue
<script setup lang="ts">
import { DsButton } from '@verkview/design-system'
</script>

<template>
  <DsButton
    variant="primary"
    size="md"
    @click="handleClick"
  >
    Click Me
  </DsButton>
</template>
```

## Component Variants

Most components support a `variant` prop for different visual styles:

<ComponentDemo title="Button Variants">
  <DsButton variant="primary">Primary</DsButton>
  <DsButton variant="secondary">Secondary</DsButton>
  <DsButton variant="ghost">Ghost</DsButton>
</ComponentDemo>

```vue
<DsButton variant="primary">Primary</DsButton>
<DsButton variant="secondary">Secondary</DsButton>
<DsButton variant="ghost">Ghost</DsButton>
```

## Sizes

Components that support sizing use the `size` prop:

<ComponentDemo title="Button Sizes">
  <DsButton size="sm">Small</DsButton>
  <DsButton size="md">Medium</DsButton>
  <DsButton size="lg">Large</DsButton>
</ComponentDemo>

```vue
<DsButton size="sm">Small</DsButton>
<DsButton size="md">Medium</DsButton>
<DsButton size="lg">Large</DsButton>
```

## Form Components

Form components support v-model for two-way binding:

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { DsInput, DsTextarea, DsCheckbox } from '@verkview/design-system'

const email = ref('')
const message = ref('')
const agreed = ref(false)
</script>

<template>
  <DsInput
    v-model="email"
    label="Email"
    type="email"
    placeholder="you@example.com"
  />

  <DsTextarea
    v-model="message"
    label="Message"
    :rows="4"
  />

  <DsCheckbox
    v-model="agreed"
    label="I agree to the terms"
  />
</template>
```

## Validation States

Form components support error and success states:

<ComponentDemo title="Input States">
  <div class="space-y-4 w-full max-w-md">
    <DsInput label="Default" placeholder="Enter text..." />
    <DsInput label="With Error" error="This field is required" />
    <DsInput label="With Success" success="Email is valid" />
    <DsInput label="With Help" help-text="Enter your email address" />
  </div>
</ComponentDemo>

```vue
<DsInput
  label="Email"
  error="This field is required"
/>

<DsInput
  label="Email"
  success="Email is valid"
/>

<DsInput
  label="Email"
  help-text="Enter your email address"
/>
```

## Icons

Components that support icons accept any Lucide Vue component:

```vue
<script setup lang="ts">
import { DsButton } from '@verkview/design-system'
import { Plus, Save, Trash2 } from 'lucide-vue-next'
</script>

<template>
  <DsButton :icon="Plus">Add Task</DsButton>
  <DsButton :icon="Save">Save</DsButton>
  <DsButton :icon="Trash2" variant="ghost">Delete</DsButton>
</template>
```

## Slots

Many components provide slots for custom content:

### Card Slots

```vue
<DsCard title="Task Title">
  <!-- Default slot: main content -->
  <p>Task description goes here</p>

  <!-- Footer slot: actions -->
  <template #footer>
    <DsBadge variant="success">Complete</DsBadge>
    <DsButton size="sm">Edit</DsButton>
  </template>
</DsCard>
```

### Modal Slots

```vue
<DsModal :is-open="open" title="Edit Task" @close="open = false">
  <!-- Default slot: modal content -->
  <DsInput v-model="taskName" label="Task Name" />

  <!-- Footer slot: action buttons -->
  <template #footer>
    <DsButton variant="ghost" @click="open = false">Cancel</DsButton>
    <DsButton @click="save">Save Changes</DsButton>
  </template>
</DsModal>
```

## Accessibility

### Keyboard Navigation

All interactive components support keyboard navigation:

- **Button**: `Enter` or `Space` to activate
- **Modal**: `Escape` to close, `Tab` to navigate focus
- **Checkbox**: `Space` to toggle

### ARIA Labels

Provide `aria-label` for icon-only buttons:

```vue
<DsButton
  variant="icon"
  :icon="Trash2"
  aria-label="Delete task"
/>
```

### Screen Reader Announcements

Use the `AriaManager` utility for dynamic announcements:

```ts
import { AriaManager } from '@verkview/design-system'

// Announce to screen readers
AriaManager.announceToScreenReader('Task saved successfully', 'polite')
```

## Composing Components

Build complex UIs by composing components:

```vue
<template>
  <DsCard title="My Task" variant="elevated">
    <div class="flex items-center gap-2 mb-3">
      <DsBadge variant="warning">In Progress</DsBadge>
      <DsBadge variant="purple">High Priority</DsBadge>
    </div>

    <p class="text-zinc-400 text-sm">
      Complete the design system documentation
    </p>

    <template #footer>
      <span class="text-xs text-zinc-500">Due: Jan 20, 2026</span>
      <div class="flex gap-2">
        <DsButton size="sm" variant="ghost">Archive</DsButton>
        <DsButton size="sm">Edit</DsButton>
      </div>
    </template>
  </DsCard>
</template>
```

## Next Steps

- [Theming](/getting-started/theming) - Customize colors and styles
- [Accessibility](/foundations/accessibility) - Learn about a11y features
- [Components](/components/button) - Explore all components
