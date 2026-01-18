# Table

Data table component with sorting and selection support.

<ComponentDemo title="Table Preview">
  <p class="text-zinc-400 text-sm">Tables display structured data with optional sorting and row selection.</p>
</ComponentDemo>

## Import

```typescript
import { DsTable } from '@verkview/design-system'
```

## Usage

```vue
<script setup>
const columns = [
  { key: 'name', label: 'Name' },
  { key: 'status', label: 'Status' },
  { key: 'date', label: 'Date' }
]

const data = [
  { id: '1', name: 'Task 1', status: 'Done', date: '2025-01-15' },
  { id: '2', name: 'Task 2', status: 'In Progress', date: '2025-01-16' }
]
</script>

<template>
  <DsTable :columns="columns" :data="data" />
</template>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `columns` | `Column[]` | *required* | Column definitions |
| `data` | `any[]` | *required* | Row data (each row must have id) |
| `caption` | `string` | `undefined` | Screen reader table caption |
| `sortable` | `boolean` | `false` | Enable column sorting |
| `selectable` | `boolean` | `false` | Enable row selection |
| `selectedIds` | `Set<string>` | `new Set()` | Selected row IDs |

## Column Definition

```typescript
interface Column {
  key: string           // Data key to display
  label: string         // Column header label
  sortable?: boolean    // Enable sorting (default: true if table sortable)
  render?: (value: any, row: any) => VNode  // Custom render function
}
```

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `sort` | `string` | Column key when sort header clicked |
| `select` | `[id: string \| 'all', checked: boolean]` | Row selection change |

## Basic Table

```vue
<script setup>
const columns = [
  { key: 'name', label: 'Task Name' },
  { key: 'status', label: 'Status' },
  { key: 'priority', label: 'Priority' }
]

const data = [
  { id: '1', name: 'Design review', status: 'Done', priority: 'High' },
  { id: '2', name: 'API integration', status: 'In Progress', priority: 'Medium' },
  { id: '3', name: 'Testing', status: 'Todo', priority: 'Low' }
]
</script>

<template>
  <DsTable :columns="columns" :data="data" caption="Task list" />
</template>
```

## Sortable Table

```vue
<script setup>
import { ref, computed } from 'vue'

const sortKey = ref('name')
const sortOrder = ref<'asc' | 'desc'>('asc')

const columns = [
  { key: 'name', label: 'Name' },
  { key: 'status', label: 'Status' },
  { key: 'date', label: 'Date' }
]

const data = ref([...])

const sortedData = computed(() => {
  return [...data.value].sort((a, b) => {
    const aVal = a[sortKey.value]
    const bVal = b[sortKey.value]
    const order = sortOrder.value === 'asc' ? 1 : -1
    return aVal.localeCompare(bVal) * order
  })
})

const handleSort = (key: string) => {
  if (sortKey.value === key) {
    sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc'
  } else {
    sortKey.value = key
    sortOrder.value = 'asc'
  }
}
</script>

<template>
  <DsTable
    :columns="columns"
    :data="sortedData"
    :sortable="true"
    @sort="handleSort"
  />
</template>
```

## Selectable Table

```vue
<script setup>
import { ref, computed } from 'vue'

const selectedIds = ref(new Set<string>())

const data = ref([
  { id: '1', name: 'Task 1' },
  { id: '2', name: 'Task 2' },
  { id: '3', name: 'Task 3' }
])

const handleSelect = (id: string | 'all', checked: boolean) => {
  if (id === 'all') {
    if (checked) {
      selectedIds.value = new Set(data.value.map(row => row.id))
    } else {
      selectedIds.value = new Set()
    }
  } else {
    if (checked) {
      selectedIds.value.add(id)
    } else {
      selectedIds.value.delete(id)
    }
    selectedIds.value = new Set(selectedIds.value)
  }
}
</script>

<template>
  <DsTable
    :columns="columns"
    :data="data"
    :selectable="true"
    :selected-ids="selectedIds"
    @select="handleSelect"
  />
</template>
```

## Custom Cell Rendering

```vue
<script setup>
import { h } from 'vue'

const columns = [
  { key: 'name', label: 'Name' },
  {
    key: 'status',
    label: 'Status',
    render: (value) => h(DsBadge, {
      variant: value === 'Done' ? 'success' : 'warning'
    }, () => value)
  },
  {
    key: 'actions',
    label: 'Actions',
    sortable: false,
    render: (_, row) => h('div', { class: 'flex gap-2' }, [
      h(DsButton, { size: 'sm', variant: 'ghost' }, () => 'Edit'),
      h(DsButton, { size: 'sm', variant: 'ghost' }, () => 'Delete')
    ])
  }
]
</script>

<template>
  <DsTable :columns="columns" :data="data" />
</template>
```

## Accessibility

### ARIA Roles

The table includes proper semantic roles:

- `role="table"` on table element
- `role="rowgroup"` on thead and tbody
- `role="row"` on tr elements
- `role="columnheader"` on th elements
- `role="cell"` on td elements

### Screen Reader Caption

Provide a `caption` for screen readers:

```vue
<DsTable
  :columns="columns"
  :data="data"
  caption="List of pending tasks"
/>
```

### Selection Accessibility

Checkboxes include proper labels:

- "Select all rows" for header checkbox
- "Select row N" for each row checkbox

## Best Practices

1. **Caption**: Always provide a caption for screen readers
2. **Unique IDs**: Each row must have a unique `id` property
3. **Responsive**: Consider horizontal scroll on mobile
4. **Row actions**: Use icon buttons or dropdowns for actions
5. **Empty state**: Handle empty data gracefully

## Examples

### Task Management Table

```vue
<template>
  <div class="space-y-4">
    <div class="flex justify-between items-center">
      <h2 class="text-lg font-medium text-zinc-100">Tasks</h2>
      <DsButton size="sm" v-if="selectedIds.size > 0">
        Delete Selected ({{ selectedIds.size }})
      </DsButton>
    </div>

    <DsTable
      :columns="columns"
      :data="tasks"
      :selectable="true"
      :sortable="true"
      :selected-ids="selectedIds"
      caption="Task management table"
      @sort="handleSort"
      @select="handleSelect"
    />
  </div>
</template>
```

### User List

```vue
<script setup>
const columns = [
  { key: 'name', label: 'Name' },
  { key: 'email', label: 'Email' },
  { key: 'role', label: 'Role' },
  { key: 'status', label: 'Status' }
]
</script>

<template>
  <DsTable
    :columns="columns"
    :data="users"
    :sortable="true"
    caption="User list"
    @sort="sortUsers"
  />
</template>
```
