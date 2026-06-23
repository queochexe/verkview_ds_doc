<script setup>
import { Plus, Mic, SlidersHorizontal } from 'lucide-vue-next'
</script>

# FAB

Floating Action Button — a prominent circular button for the primary action on a screen.

As seen in the Verkview app, the bottom-right corner uses two stacked FABs: a large blue **+** for creating tasks, and a smaller gray **mic** for voice notes.

<ComponentDemo title="Production Pair">
  <div class="relative h-28 w-full">
    <div class="absolute bottom-0 right-4 flex flex-col items-center gap-3">
      <DsFab :icon="Mic" variant="surface" size="sm" aria-label="Add voice note" />
      <DsFab :icon="Plus" variant="primary" size="lg" aria-label="Add task" />
    </div>
  </div>
</ComponentDemo>

## Import

```typescript
import { DsFab } from '@verkview/design-system'
import { Plus, Mic } from 'lucide-vue-next'
```

## Usage

```vue
<script setup>
import { Plus, Mic } from 'lucide-vue-next'
</script>

<template>
  <div class="fixed bottom-6 right-6 flex flex-col items-center gap-3">
    <DsFab :icon="Mic" variant="surface" size="sm" aria-label="Add voice note" @click="startVoice" />
    <DsFab :icon="Plus" variant="primary" size="lg" aria-label="Add task" @click="openCreate" />
  </div>
</template>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'surface'` | `'primary'` | Visual style (blue vs zinc) |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Button diameter |
| `icon` | `Component` | `undefined` | Lucide icon component |
| `ariaLabel` | `string` | `undefined` | Accessible label — always required for icon-only buttons |
| `disabled` | `boolean` | `false` | Disabled state |

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `click` | `MouseEvent` | Emitted on click |

---

## Color Variants

### Primary — Info Blue `#3B82F6`

The main action trigger. Always blue, always the most visually prominent element on the screen.

<ComponentDemo>
  <DsFab :icon="Plus" variant="primary" size="lg" aria-label="Add task" />
</ComponentDemo>

```vue
<DsFab :icon="Plus" variant="primary" size="lg" aria-label="Add task" />
```

### Surface — Zinc `#f4f4f5`

Secondary action trigger. Uses zinc-100 (`#f4f4f5`) so it floats above the page without competing with the primary FAB.

<ComponentDemo>
  <DsFab :icon="Mic" variant="surface" size="sm" aria-label="Add voice note" />
</ComponentDemo>

```vue
<DsFab :icon="Mic" variant="surface" size="sm" aria-label="Add voice note" />
```

---

## Icon Variants

### Plus — Add Task

<ComponentDemo title="Plus / Add Task">
  <DsFab :icon="Plus" variant="primary" size="lg" aria-label="Add task" />
</ComponentDemo>

```vue
<script setup>
import { Plus } from 'lucide-vue-next'
</script>
<DsFab :icon="Plus" variant="primary" size="lg" aria-label="Add task" />
```

### Mic — Voice Note

<ComponentDemo title="Mic / Voice Note">
  <DsFab :icon="Mic" variant="surface" size="sm" aria-label="Add voice note" />
</ComponentDemo>

```vue
<script setup>
import { Mic } from 'lucide-vue-next'
</script>
<DsFab :icon="Mic" variant="surface" size="sm" aria-label="Add voice note" />
```

---

## Sizes

<ComponentDemo title="All Sizes">
  <div class="flex items-end gap-6">
    <div class="flex flex-col items-center gap-2">
      <DsFab :icon="Plus" variant="primary" size="sm" aria-label="Small" />
      <span class="text-xs text-muted-foreground">sm</span>
    </div>
    <div class="flex flex-col items-center gap-2">
      <DsFab :icon="Plus" variant="primary" size="md" aria-label="Medium" />
      <span class="text-xs text-muted-foreground">md</span>
    </div>
    <div class="flex flex-col items-center gap-2">
      <DsFab :icon="Plus" variant="primary" size="lg" aria-label="Large" />
      <span class="text-xs text-muted-foreground">lg</span>
    </div>
  </div>
</ComponentDemo>

| Size | Diameter | Icon | Use case |
|------|----------|------|----------|
| `sm` | 44px | 16px | Secondary action (e.g. Mic FAB above primary) |
| `md` | 56px | 20px | Standard single FAB |
| `lg` | 64px | 24px | Primary action when paired with a secondary FAB |

---

## Placement

FABs stack vertically — secondary on top, primary on bottom:

```vue
<template>
  <div class="fixed bottom-6 right-6 z-20 flex flex-col items-center gap-3">
    <DsFab :icon="Mic"  variant="surface" size="sm" aria-label="Add voice note" @click="startVoice" />
    <DsFab :icon="Plus" variant="primary" size="lg" aria-label="Add task"       @click="openCreate" />
  </div>
</template>
```

---

## Accessibility

- Always provide `aria-label` — FABs contain only an icon with no visible text.
- Both play/pause and keyboard activation (Enter/Space) are supported.
- Limit to one primary FAB per screen. Secondary FABs should be visually smaller.
