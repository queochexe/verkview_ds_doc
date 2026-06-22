# Progress Bar

Horizontal progress indicator from 0 to 100. Uses `role="progressbar"` for full accessibility support.

<ComponentDemo title="Progress Variants">
  <div class="w-full space-y-4">
    <DsProgressBar :value="25" aria-label="Step 1 of 4" />
    <DsProgressBar :value="50" color="#8b5cf6" aria-label="50% complete" />
    <DsProgressBar :value="75" color="#22c55e" aria-label="75% complete" />
    <DsProgressBar :value="100" color="#3b82f6" aria-label="Complete" />
  </div>
</ComponentDemo>

## Import

```typescript
import { DsProgressBar } from '@verkview/design-system'
```

## Usage

```vue
<template>
  <DsProgressBar :value="taskProgress" aria-label="Task completion" />
</template>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `number` | *required* | Progress value, clamped to 0–100 |
| `color` | `string` | `hsl(var(--info))` | Fill color (any CSS color) |
| `size` | `'sm' \| 'md'` | `'md'` | Track height |
| `ariaLabel` | `string` | `undefined` | Label for screen readers |

## Sizes

<ComponentDemo title="Size Comparison">
  <div class="w-full space-y-3">
    <div class="flex items-center gap-3">
      <span class="text-xs text-muted-foreground w-6">sm</span>
      <DsProgressBar :value="60" size="sm" class="flex-1" />
    </div>
    <div class="flex items-center gap-3">
      <span class="text-xs text-muted-foreground w-6">md</span>
      <DsProgressBar :value="60" size="md" class="flex-1" />
    </div>
  </div>
</ComponentDemo>

```vue
<DsProgressBar :value="60" size="sm" />
<DsProgressBar :value="60" size="md" />
```

## Colors

<ComponentDemo title="Custom Colors">
  <div class="w-full space-y-3">
    <DsProgressBar :value="40" color="#3b82f6" />
    <DsProgressBar :value="65" color="#22c55e" />
    <DsProgressBar :value="80" color="#f59e0b" />
    <DsProgressBar :value="55" color="#8b5cf6" />
    <DsProgressBar :value="90" color="#ef4444" />
  </div>
</ComponentDemo>

```vue
<DsProgressBar :value="40" color="#3b82f6" />
<DsProgressBar :value="65" color="#22c55e" />
<DsProgressBar :value="80" color="#f59e0b" />
```

## Accessibility

- `role="progressbar"` with `aria-valuenow`, `aria-valuemin`, and `aria-valuemax` attributes.
- Always provide a meaningful `ariaLabel` so screen readers can announce what is progressing.

```vue
<DsProgressBar
  :value="uploadProgress"
  aria-label="File upload progress"
/>
```

## Examples

### Task completion

```vue
<script setup>
import { computed } from 'vue'

const props = defineProps<{ tasks: { done: boolean }[] }>()

const progress = computed(() => {
  const done = props.tasks.filter(t => t.done).length
  return Math.round((done / props.tasks.length) * 100)
})
</script>

<template>
  <div class="space-y-1">
    <div class="flex justify-between text-xs text-muted-foreground">
      <span>Progress</span>
      <span>{{ progress }}%</span>
    </div>
    <DsProgressBar :value="progress" aria-label="Task completion" />
  </div>
</template>
```

### Upload progress

```vue
<template>
  <div class="space-y-2">
    <DsProgressBar
      :value="uploadPercent"
      color="#3b82f6"
      aria-label="Upload progress"
    />
    <p class="text-xs text-muted-foreground">
      Uploading {{ fileName }} — {{ uploadPercent }}%
    </p>
  </div>
</template>
```

### Indeterminate loading

For unknown duration loading states, use `DsSpinner` instead of a progress bar.
