# FAB

Floating Action Button — a prominent circular button for the primary action on a screen.

<ComponentDemo title="FAB Variants">
  <DsFab variant="primary" aria-label="Add item">
    <span style="font-size:20px; line-height:1;">+</span>
  </DsFab>
  <DsFab variant="surface" aria-label="More options">
    <span style="font-size:18px; line-height:1;">⋯</span>
  </DsFab>
</ComponentDemo>

## Import

```typescript
import { DsFab } from '@verkview/design-system'
```

## Usage

```vue
<script setup>
import { Plus } from 'lucide-vue-next'
</script>

<template>
  <DsFab :icon="Plus" variant="primary" aria-label="Create task" @click="openCreate" />
</template>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'surface'` | `'primary'` | Visual style |
| `size` | `'md' \| 'lg'` | `'md'` | Button size |
| `icon` | `Component` | `undefined` | Lucide icon component |
| `ariaLabel` | `string` | `undefined` | Accessible label (required for icon-only buttons) |
| `disabled` | `boolean` | `false` | Disabled state |

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `click` | `MouseEvent` | Emitted on button click |

## Variants

### Primary

Blue background — for the main creation or action trigger.

<ComponentDemo>
  <DsFab variant="primary" aria-label="Add">
    <span style="font-size:20px; color:white; line-height:1;">+</span>
  </DsFab>
</ComponentDemo>

```vue
<script setup>
import { Plus } from 'lucide-vue-next'
</script>

<DsFab :icon="Plus" variant="primary" aria-label="Create task" />
```

### Surface

Elevated with border — for secondary actions or when blue would clash with the background.

<ComponentDemo>
  <DsFab variant="surface" aria-label="Filter">
    <span style="font-size:16px; line-height:1;">≡</span>
  </DsFab>
</ComponentDemo>

```vue
<script setup>
import { SlidersHorizontal } from 'lucide-vue-next'
</script>

<DsFab :icon="SlidersHorizontal" variant="surface" aria-label="Filter" />
```

## Sizes

<ComponentDemo title="Size Comparison">
  <DsFab size="md" aria-label="Add (medium)">
    <span style="font-size:18px; color:white; line-height:1;">+</span>
  </DsFab>
  <DsFab size="lg" aria-label="Add (large)">
    <span style="font-size:22px; color:white; line-height:1;">+</span>
  </DsFab>
</ComponentDemo>

| Size | Diameter | Icon |
|------|----------|------|
| `md` | 56px | 20px |
| `lg` | 64px | 24px |

## Placement

FABs are typically positioned fixed at the bottom-right corner of the screen:

```vue
<template>
  <div class="relative min-h-screen">
    <!-- page content -->

    <div class="fixed bottom-6 right-6 z-20">
      <DsFab :icon="Plus" aria-label="Create task" @click="openCreate" />
    </div>
  </div>
</template>
```

## Accessibility

- Always provide `aria-label` — FABs are icon-only and have no visible text.
- FABs receive focus via Tab and activate via Enter/Space.
- Use only one FAB per screen to avoid ambiguity.

## Examples

### Task creation

```vue
<script setup>
import { Plus } from 'lucide-vue-next'
import { ref } from 'vue'

const showCreate = ref(false)
</script>

<template>
  <div class="fixed bottom-6 right-6">
    <DsFab
      :icon="Plus"
      variant="primary"
      aria-label="Create new task"
      @click="showCreate = true"
    />
  </div>

  <DsModal :is-open="showCreate" title="New Task" @close="showCreate = false">
    <!-- form -->
  </DsModal>
</template>
```
