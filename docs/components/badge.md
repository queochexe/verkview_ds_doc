# Badge

Status indicator component with color variants.

<ComponentDemo title="Badge Variants">
  <DsBadge variant="default">Default</DsBadge>
  <DsBadge variant="info">Info</DsBadge>
  <DsBadge variant="success">Success</DsBadge>
  <DsBadge variant="warning">Warning</DsBadge>
  <DsBadge variant="error">Error</DsBadge>
  <DsBadge variant="purple">Purple</DsBadge>
</ComponentDemo>

## Import

```typescript
import { DsBadge } from '@verkview/design-system'
```

## Usage

```vue
<template>
  <DsBadge variant="success">Complete</DsBadge>
</template>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'info' \| 'success' \| 'warning' \| 'error' \| 'purple'` | `'default'` | Color variant |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Badge size |
| `icon` | `Component` | `undefined` | Lucide icon component |
| `ariaLabel` | `string` | `undefined` | Accessible label for screen readers |
| `className` | `string` | `''` | Additional CSS classes |

## Variants

### Default

Neutral badge for general labels.

<ComponentDemo>
  <DsBadge variant="default">Label</DsBadge>
</ComponentDemo>

```vue
<DsBadge variant="default">Label</DsBadge>
```

### Info

Blue badge for informational content.

<ComponentDemo>
  <DsBadge variant="info">New</DsBadge>
</ComponentDemo>

```vue
<DsBadge variant="info">New</DsBadge>
```

### Success

Green badge for positive states.

<ComponentDemo>
  <DsBadge variant="success">Complete</DsBadge>
</ComponentDemo>

```vue
<DsBadge variant="success">Complete</DsBadge>
```

### Warning

Orange badge for caution states.

<ComponentDemo>
  <DsBadge variant="warning">In Progress</DsBadge>
</ComponentDemo>

```vue
<DsBadge variant="warning">In Progress</DsBadge>
```

### Error

Red badge for error or destructive states.

<ComponentDemo>
  <DsBadge variant="error">Failed</DsBadge>
</ComponentDemo>

```vue
<DsBadge variant="error">Failed</DsBadge>
```

### Purple

Purple badge for special categories.

<ComponentDemo>
  <DsBadge variant="purple">Premium</DsBadge>
</ComponentDemo>

```vue
<DsBadge variant="purple">Premium</DsBadge>
```

## Sizes

<ComponentDemo title="Size Comparison">
  <DsBadge size="sm">Small</DsBadge>
  <DsBadge size="md">Medium</DsBadge>
  <DsBadge size="lg">Large</DsBadge>
</ComponentDemo>

| Size | Font Size | Padding |
|------|-----------|---------|
| `sm` | 9px | 2px 6px |
| `md` | 10px | 2px 6px |
| `lg` | 12px | 4px 8px |

```vue
<DsBadge size="sm">Small</DsBadge>
<DsBadge size="md">Medium</DsBadge>
<DsBadge size="lg">Large</DsBadge>
```

## With Icons

<ComponentDemo>
  <DsBadge variant="success">
    <span class="mr-1">✓</span> Done
  </DsBadge>
  <DsBadge variant="warning">
    <span class="mr-1">⏱</span> Pending
  </DsBadge>
</ComponentDemo>

```vue
<script setup>
import { Check, Clock } from 'lucide-vue-next'
</script>

<DsBadge variant="success" :icon="Check">Done</DsBadge>
<DsBadge variant="warning" :icon="Clock">Pending</DsBadge>
```

## Color Mapping Utility

The design system provides a helper to map hex colors to badge variants:

```typescript
import { getLabelVariant } from '@verkview/design-system'

// Maps hex colors to badge variants
const variant = getLabelVariant('#22c55e') // Returns 'success'
```

| Hex Color | Variant |
|-----------|---------|
| `#ef4444` | `error` |
| `#f59e0b` | `warning` |
| `#eab308` | `warning` |
| `#22c55e` | `success` |
| `#3b82f6` | `info` |
| `#8b5cf6` | `purple` |
| `#ec4899` | `purple` |
| `#6b7280` | `default` |

## Accessibility

### ARIA Attributes

The badge includes `role="status"` for screen reader announcements.

```vue
<DsBadge variant="error" aria-label="Task status: Failed">
  Failed
</DsBadge>
```

## Best Practices

1. **Consistent meanings**: Use the same variant for the same meaning throughout
2. **Brief text**: Keep badge text short (1-2 words)
3. **Don't overuse**: Limit badges to important status indicators
4. **Color alone**: Don't rely solely on color - include text
5. **Accessibility**: Add aria-label for context when needed

## Examples

### Task Status

```vue
<template>
  <DsBadge :variant="getStatusVariant(task.status)">
    {{ task.status }}
  </DsBadge>
</template>

<script setup>
const getStatusVariant = (status) => {
  const map = {
    'todo': 'default',
    'in-progress': 'warning',
    'review': 'info',
    'done': 'success'
  }
  return map[status] || 'default'
}
</script>
```

### Priority Labels

```vue
<template>
  <div class="flex gap-1">
    <DsBadge variant="error">High</DsBadge>
    <DsBadge variant="warning">Medium</DsBadge>
    <DsBadge variant="default">Low</DsBadge>
  </div>
</template>
```

### Task Card Labels

```vue
<template>
  <div class="flex flex-wrap gap-1">
    <DsBadge
      v-for="label in task.labels"
      :key="label.id"
      :variant="getLabelVariant(label.color)"
    >
      {{ label.name }}
    </DsBadge>
  </div>
</template>
```

### Count Badge

```vue
<template>
  <div class="relative">
    <span>Notifications</span>
    <DsBadge
      v-if="count > 0"
      variant="error"
      size="sm"
      class="absolute -top-1 -right-2"
    >
      {{ count > 99 ? '99+' : count }}
    </DsBadge>
  </div>
</template>
```
