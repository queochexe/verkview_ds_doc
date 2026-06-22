# Filter Chip

Toggle chip for filtering and selection. Communicates active state via `aria-pressed`.

<ComponentDemo title="Filter Chips">
  <DsFilterChip label="All" :active="true" color="#3b82f6" />
  <DsFilterChip label="In Progress" :active="false" />
  <DsFilterChip label="Done" :active="false" />
  <DsFilterChip label="Blocked" :active="false" />
</ComponentDemo>

## Import

```typescript
import { DsFilterChip } from '@verkview/design-system'
```

## Usage

```vue
<script setup>
import { ref } from 'vue'

const activeFilter = ref('all')
</script>

<template>
  <DsFilterChip
    label="All"
    :active="activeFilter === 'all'"
    color="#3b82f6"
    @click="activeFilter = 'all'"
  />
  <DsFilterChip
    label="In Progress"
    :active="activeFilter === 'in-progress'"
    color="#f59e0b"
    @click="activeFilter = 'in-progress'"
  />
</template>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | *required* | Chip label text |
| `active` | `boolean` | `false` | Active/selected state |
| `color` | `string` | `'#3b82f6'` | Background color when active |
| `icon` | `Component` | `undefined` | Lucide icon shown before label |

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `click` | - | Emitted when chip is clicked |

## Active State

<ComponentDemo title="Active vs Inactive">
  <DsFilterChip label="Active" :active="true" color="#3b82f6" />
  <DsFilterChip label="Inactive" :active="false" />
</ComponentDemo>

When `active` is `true`, the chip shows a solid `color` background with white text. When inactive, it uses a transparent background with a border.

## With Icons

<ComponentDemo title="Chips with Icons">
  <DsFilterChip label="High Priority" :active="true" color="#ef4444" />
  <DsFilterChip label="Flagged" :active="false" />
</ComponentDemo>

```vue
<script setup>
import { Flag, AlertCircle } from 'lucide-vue-next'
</script>

<DsFilterChip label="High Priority" :icon="AlertCircle" :active="true" color="#ef4444" />
<DsFilterChip label="Flagged" :icon="Flag" :active="false" />
```

## Color Variants

<ComponentDemo title="Color Examples">
  <DsFilterChip label="Blue" :active="true" color="#3b82f6" />
  <DsFilterChip label="Green" :active="true" color="#22c55e" />
  <DsFilterChip label="Amber" :active="true" color="#f59e0b" />
  <DsFilterChip label="Red" :active="true" color="#ef4444" />
  <DsFilterChip label="Purple" :active="true" color="#8b5cf6" />
</ComponentDemo>

## Accessibility

- `aria-pressed` reflects the active state to screen readers.
- Chips activate via Enter/Space and focus via Tab.
- Keep labels concise — 1–3 words maximum.

## Examples

### Status filter group

```vue
<script setup>
import { ref } from 'vue'

const statuses = [
  { id: 'all', label: 'All', color: '#3b82f6' },
  { id: 'todo', label: 'To Do', color: '#71717a' },
  { id: 'in-progress', label: 'In Progress', color: '#f59e0b' },
  { id: 'done', label: 'Done', color: '#22c55e' },
]

const active = ref('all')
</script>

<template>
  <div class="flex flex-wrap gap-2">
    <DsFilterChip
      v-for="s in statuses"
      :key="s.id"
      :label="s.label"
      :active="active === s.id"
      :color="s.color"
      @click="active = s.id"
    />
  </div>
</template>
```

### Multi-select filter

```vue
<script setup>
import { ref } from 'vue'

const selectedTags = ref<string[]>([])

const toggle = (tag: string) => {
  const i = selectedTags.value.indexOf(tag)
  if (i >= 0) selectedTags.value.splice(i, 1)
  else selectedTags.value.push(tag)
}
</script>

<template>
  <div class="flex flex-wrap gap-2">
    <DsFilterChip
      v-for="tag in tags"
      :key="tag.id"
      :label="tag.name"
      :active="selectedTags.includes(tag.id)"
      :color="tag.color"
      @click="toggle(tag.id)"
    />
  </div>
</template>
```
