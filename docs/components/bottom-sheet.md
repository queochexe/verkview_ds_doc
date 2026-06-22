# Bottom Sheet

Overlay panel that slides up from the bottom on mobile and appears as a centered modal on desktop. Uses `role="dialog"` with named slots for header, body, and footer.

<ComponentDemo title="Bottom Sheet (Preview)">
  <p class="text-muted-foreground text-sm">Bottom sheet renders in a portal overlay. See usage example below.</p>
</ComponentDemo>

## Import

```typescript
import { DsBottomSheet } from '@verkview/design-system'
```

## Usage

```vue
<script setup>
import { ref } from 'vue'

const open = ref(false)
</script>

<template>
  <DsButton @click="open = true">Open Sheet</DsButton>

  <DsBottomSheet v-model="open" title="Task Details">
    <template #header>
      <h2 class="text-base font-semibold">Task Details</h2>
    </template>

    <p>Sheet body content goes here.</p>

    <template #footer>
      <div class="flex gap-2 justify-end">
        <DsButton variant="ghost" @click="open = false">Cancel</DsButton>
        <DsButton @click="save">Save</DsButton>
      </div>
    </template>
  </DsBottomSheet>
</template>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `modelValue` | `boolean` | *required* | Controls visibility via `v-model` |
| `title` | `string` | `'Dialog'` | Sets `aria-label` on the dialog for screen readers |

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `update:modelValue` | `boolean` | Emitted when the overlay is clicked to close |

## Slots

| Slot | Description |
|------|-------------|
| `header` | Top section with border-bottom — use for titles and close buttons |
| `default` | Scrollable body content |
| `footer` | Bottom section with border-top — use for action buttons |

## Behavior

| Breakpoint | Animation |
|------------|-----------|
| Mobile (`< md`) | Slides up from bottom, handle bar visible |
| Desktop (`≥ md`) | Scales in from center as a 480px-wide modal |

Clicking the overlay dismisses the sheet. Programmatic close: `open.value = false`.

## Anatomy

```
┌────────────────────────────┐
│    ─── (handle bar)        │  ← mobile only
├────────────────────────────┤
│  #header slot              │
├────────────────────────────┤
│  default slot (scrollable) │
├────────────────────────────┤
│  #footer slot              │
└────────────────────────────┘
```

## Examples

### Filter panel

```vue
<script setup>
import { ref } from 'vue'

const showFilters = ref(false)
const selectedStatus = ref('all')
</script>

<template>
  <DsButton variant="ghost" @click="showFilters = true">Filters</DsButton>

  <DsBottomSheet v-model="showFilters" title="Filter tasks">
    <template #header>
      <div class="flex items-center justify-between">
        <h2 class="font-semibold">Filters</h2>
        <DsButton variant="ghost" size="sm" @click="showFilters = false">Done</DsButton>
      </div>
    </template>

    <div class="space-y-4">
      <div>
        <p class="text-sm font-medium mb-2">Status</p>
        <div class="flex flex-wrap gap-2">
          <DsFilterChip
            v-for="s in statuses"
            :key="s"
            :label="s"
            :active="selectedStatus === s"
            @click="selectedStatus = s"
          />
        </div>
      </div>
    </div>
  </DsBottomSheet>
</template>
```

### Confirmation sheet

```vue
<template>
  <DsBottomSheet v-model="showConfirm" title="Delete task">
    <template #header>
      <h2 class="font-semibold text-red-500">Delete Task?</h2>
    </template>

    <p class="text-muted-foreground text-sm">
      This action cannot be undone. The task and all its attachments will be permanently deleted.
    </p>

    <template #footer>
      <div class="flex gap-2">
        <DsButton variant="ghost" class="flex-1" @click="showConfirm = false">
          Cancel
        </DsButton>
        <DsButton variant="danger" class="flex-1" @click="deleteTask">
          Delete
        </DsButton>
      </div>
    </template>
  </DsBottomSheet>
</template>
```

## Accessibility

- `role="dialog"` and `aria-modal="true"` trap screen reader context within the sheet.
- `aria-label` is set from the `title` prop.
- Focus management: set initial focus manually if needed using `autofocus` on the first focusable element inside the sheet.
