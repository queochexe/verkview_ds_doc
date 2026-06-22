# Spinner

Loading indicator using a spinning icon. Accessible with `role="status"` and optional visible label.

<ComponentDemo title="Sizes">
  <DsSpinner size="sm" />
  <DsSpinner size="md" />
  <DsSpinner size="lg" />
</ComponentDemo>

## Import

```typescript
import { DsSpinner } from '@verkview/design-system'
```

## Usage

```vue
<template>
  <DsSpinner size="md" label="Loading tasks…" />
</template>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Icon size |
| `label` | `string` | `undefined` | Screen-reader label (renders as `sr-only`). Defaults to `"Loading"` |

## Sizes

<ComponentDemo title="Small — 16px">
  <DsSpinner size="sm" />
</ComponentDemo>

```vue
<DsSpinner size="sm" />
```

<ComponentDemo title="Medium — 24px (default)">
  <DsSpinner size="md" />
</ComponentDemo>

```vue
<DsSpinner size="md" />
```

<ComponentDemo title="Large — 32px">
  <DsSpinner size="lg" />
</ComponentDemo>

```vue
<DsSpinner size="lg" />
```

## Color

The spinner inherits `currentColor`, so it picks up whatever text color is in scope:

```vue
<span class="text-blue-500">
  <DsSpinner size="md" />
</span>

<span class="text-muted-foreground">
  <DsSpinner size="sm" />
</span>
```

## Accessibility

- `role="status"` announces loading state to screen readers.
- The icon has `aria-hidden="true"` so it is skipped.
- Provide a `label` for meaningful context — e.g. `"Loading tasks"` instead of `"Loading"`.

```vue
<DsSpinner label="Saving changes" />
```

## Examples

### Button loading state

```vue
<script setup>
import { ref } from 'vue'
const saving = ref(false)

const save = async () => {
  saving.value = true
  await api.save()
  saving.value = false
}
</script>

<template>
  <DsButton @click="save" :disabled="saving">
    <DsSpinner v-if="saving" size="sm" class="mr-2" />
    {{ saving ? 'Saving…' : 'Save' }}
  </DsButton>
</template>
```

### Full-page loader

```vue
<template>
  <div v-if="loading" class="fixed inset-0 flex items-center justify-center bg-background/80 z-50">
    <DsSpinner size="lg" label="Loading page" />
  </div>
</template>
```

### Inline content loader

```vue
<template>
  <div class="flex items-center gap-2 text-muted-foreground text-sm">
    <DsSpinner size="sm" />
    <span aria-live="polite">Fetching results…</span>
  </div>
</template>
```
