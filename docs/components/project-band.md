# Project Band

Absolutely positioned colored band for calendar timeline views. Renders a pill-shaped strip at exact percentage-based horizontal offsets.

<ComponentDemo title="Project Bands">
  <div class="relative w-full h-16 bg-muted/30 rounded-lg border border-border overflow-hidden">
    <DsProjectBand color="#3b82f6" :left-percent="0" :width-percent="40" :top-px="12" :height-px="10" />
    <DsProjectBand color="#22c55e" :left-percent="30" :width-percent="50" :top-px="30" :height-px="10" />
    <DsProjectBand color="#f59e0b" :left-percent="60" :width-percent="35" :top-px="12" :height-px="10" :dimmed="true" />
  </div>
</ComponentDemo>

## Import

```typescript
import { DsProjectBand } from '@verkview/design-system'
```

## Usage

```vue
<template>
  <div class="relative w-full h-12">
    <DsProjectBand
      color="#3b82f6"
      :left-percent="10"
      :width-percent="60"
      :top-px="8"
      :height-px="8"
      :clickable="true"
      @click="openProject"
    />
  </div>
</template>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `color` | `string` | *required* | Band fill color (hex, rgb, or CSS color) |
| `leftPercent` | `number` | *required* | Left offset as a percentage of the parent container |
| `widthPercent` | `number` | *required* | Width as a percentage of the parent container |
| `topPx` | `number` | *required* | Top offset in pixels |
| `heightPx` | `number` | `8` | Band height in pixels |
| `dimmed` | `boolean` | `false` | Reduces opacity to 40% for de-emphasizing overlapping bands |
| `clickable` | `boolean` | `false` | Adds pointer cursor, hover opacity, keyboard support, and `role="button"` |

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `click` | - | Emitted when the band is clicked (requires `clickable: true`) |

## Placement

The parent container **must** have `position: relative` (or `absolute`) for the band to position correctly:

```vue
<div class="relative w-full h-16">
  <DsProjectBand
    color="#3b82f6"
    :left-percent="20"
    :width-percent="50"
    :top-px="28"
  />
</div>
```

## Dimmed state

<ComponentDemo title="Normal vs Dimmed">
  <div class="relative w-full h-16 bg-muted/20 rounded-lg border border-border">
    <DsProjectBand color="#8b5cf6" :left-percent="5" :width-percent="40" :top-px="12" :height-px="10" />
    <DsProjectBand color="#8b5cf6" :left-percent="50" :width-percent="40" :top-px="12" :height-px="10" :dimmed="true" />
  </div>
</ComponentDemo>

Use `dimmed` when a band falls outside the current view window or is filtered out, without removing it from the DOM.

## Examples

### Weekly calendar row

```vue
<script setup>
const projects = [
  { id: 1, name: 'Alpha', color: '#3b82f6', start: 0, end: 40 },
  { id: 2, name: 'Beta',  color: '#22c55e', start: 35, end: 75 },
  { id: 3, name: 'Gamma', color: '#f59e0b', start: 70, end: 100 },
]
</script>

<template>
  <div class="relative w-full h-8">
    <DsProjectBand
      v-for="p in projects"
      :key="p.id"
      :color="p.color"
      :left-percent="p.start"
      :width-percent="p.end - p.start"
      :top-px="8"
      :height-px="16"
      :clickable="true"
      @click="selectProject(p.id)"
    />
  </div>
</template>
```

### Multi-row timeline

Stack multiple bands vertically by varying `topPx`:

```vue
<template>
  <div class="relative w-full h-20">
    <DsProjectBand color="#3b82f6" :left-percent="0"  :width-percent="60" :top-px="4"  :height-px="12" />
    <DsProjectBand color="#22c55e" :left-percent="40" :width-percent="50" :top-px="20" :height-px="12" />
    <DsProjectBand color="#f59e0b" :left-percent="10" :width-percent="30" :top-px="36" :height-px="12" />
  </div>
</template>
```
