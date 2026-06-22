# Calendar Event

Timed task block for hour-grid timeline views. Absolutely positioned within a time-slot container, with a colored left border and a 15%-opacity tinted background derived from the project color.

<ComponentDemo title="Calendar Events">
  <div class="relative w-full h-48 bg-muted/20 rounded-lg border border-border overflow-hidden">
    <DsCalendarEvent
      title="Design review"
      time-label="9:00 – 10:30"
      :top-px="8"
      :height-px="80"
      project-color="#3b82f6"
    />
    <DsCalendarEvent
      title="Sprint planning"
      time-label="11:00 – 12:00"
      :top-px="100"
      :height-px="60"
      project-color="#22c55e"
    />
  </div>
</ComponentDemo>

## Import

```typescript
import { DsCalendarEvent } from '@verkview/design-system'
```

## Usage

```vue
<template>
  <!-- Parent must be position:relative with a fixed height -->
  <div class="relative" style="height: 1440px">
    <DsCalendarEvent
      v-for="event in events"
      :key="event.id"
      :title="event.title"
      :time-label="event.timeLabel"
      :top-px="event.topPx"
      :height-px="event.heightPx"
      :project-color="event.color"
    />
  </div>
</template>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | *required* | Event/task title (truncated if too long) |
| `timeLabel` | `string` | *required* | Formatted time range, e.g. `"9:00 – 10:30"` |
| `topPx` | `number` | *required* | Top offset in pixels from the parent container top |
| `heightPx` | `number` | *required* | Event block height in pixels |
| `projectColor` | `string` | *required* | Hex color — used for the left border and tinted background (`color + '26'` = 15% opacity) |

## Color treatment

The component applies the `hex+'26'` opacity trick to derive the background from `projectColor`:

```
background-color: #3b82f626  → blue at ~15% opacity
border-left:      3px solid #3b82f6
```

This keeps events readable in both light and dark mode without needing separate token overrides.

## Layout calculation

Map time to pixels based on your grid's px-per-minute scale:

```typescript
const PX_PER_MINUTE = 1.5  // 1440px ÷ 960min (16h)

function eventLayout(startMinutes: number, durationMinutes: number) {
  return {
    topPx: startMinutes * PX_PER_MINUTE,
    heightPx: Math.max(durationMinutes * PX_PER_MINUTE, 24), // min 24px
  }
}

// 9:00 AM = 540 minutes from midnight
const design = eventLayout(540, 90) // { topPx: 810, heightPx: 135 }
```

## Examples

### Hour-grid calendar

```vue
<script setup>
const PX_PER_MIN = 1.5

const events = [
  { id: 1, title: 'Standup', timeLabel: '9:00 – 9:30', start: 540, duration: 30, color: '#3b82f6' },
  { id: 2, title: 'Design review', timeLabel: '10:00 – 11:30', start: 600, duration: 90, color: '#8b5cf6' },
  { id: 3, title: 'Lunch', timeLabel: '12:00 – 13:00', start: 720, duration: 60, color: '#22c55e' },
]
</script>

<template>
  <div class="relative overflow-y-auto" style="height: 600px">
    <div class="relative" style="height: 1440px">
      <!-- hour lines -->
      <div
        v-for="h in 24"
        :key="h"
        class="absolute inset-x-0 border-t border-border/40 text-[10px] text-muted-foreground pl-1"
        :style="{ top: `${(h - 1) * 60 * PX_PER_MIN}px` }"
      >
        {{ h - 1 }}:00
      </div>

      <!-- events -->
      <DsCalendarEvent
        v-for="e in events"
        :key="e.id"
        :title="e.title"
        :time-label="e.timeLabel"
        :top-px="e.start * PX_PER_MIN"
        :height-px="Math.max(e.duration * PX_PER_MIN, 24)"
        :project-color="e.color"
      />
    </div>
  </div>
</template>
```

### Overlapping events

For side-by-side overlapping events, use a column-based layout and adjust `inset-x` with Tailwind classes on a wrapper, or override with inline styles. `DsCalendarEvent` renders `inset-x-0 mx-1` by default, which fills the column width.
