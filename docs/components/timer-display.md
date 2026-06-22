# Timer Display

Token-aware timer widget with start, pause, and stop controls. Formats elapsed time as `MM:SS` or `H:MM:SS`.

<ComponentDemo title="Timer States">
  <DsTimerDisplay timer-state="idle" :time-tracked="0" />
  <DsTimerDisplay timer-state="running" :time-tracked="183000" />
  <DsTimerDisplay timer-state="paused" :time-tracked="3723000" />
</ComponentDemo>

## Import

```typescript
import { DsTimerDisplay } from '@verkview/design-system'
```

## Usage

```vue
<script setup>
import { ref } from 'vue'

type TimerState = 'idle' | 'running' | 'paused'

const state = ref<TimerState>('idle')
const tracked = ref(0)
const startedAt = ref<number | null>(null)

const start = () => {
  startedAt.value = Date.now()
  state.value = 'running'
}

const pause = () => {
  if (startedAt.value) tracked.value += Date.now() - startedAt.value
  startedAt.value = null
  state.value = 'paused'
}

const stop = () => {
  if (startedAt.value) tracked.value += Date.now() - startedAt.value
  startedAt.value = null
  tracked.value = 0
  state.value = 'idle'
}
</script>

<template>
  <DsTimerDisplay
    :timer-state="state"
    :time-tracked="tracked"
    :timer-started-at="startedAt"
    @start="start"
    @pause="pause"
    @stop="stop"
  />
</template>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `timerState` | `'idle' \| 'running' \| 'paused'` | *required* | Current state of the timer |
| `timeTracked` | `number` | *required* | Accumulated time in **milliseconds** (not including the current running segment) |
| `timerStartedAt` | `number \| null` | `null` | `Date.now()` value when the current running segment started — used to compute live elapsed time |

## Events

| Event | Description |
|-------|-------------|
| `start` | User pressed the play button |
| `pause` | User pressed the pause button |
| `stop` | User pressed the stop button |

## States

### Idle

No time recorded. Only a play button is shown.

<ComponentDemo>
  <DsTimerDisplay timer-state="idle" :time-tracked="0" />
</ComponentDemo>

### Running

Timer is active. Shows a pause button and stop button.

<ComponentDemo>
  <DsTimerDisplay timer-state="running" :time-tracked="90000" />
</ComponentDemo>

### Paused

Timer is paused. Shows a play button (to resume) and stop button.

<ComponentDemo>
  <DsTimerDisplay timer-state="paused" :time-tracked="3723000" />
</ComponentDemo>

## Time format

| Duration | Format | Example |
|----------|--------|---------|
| Under 1 hour | `MM:SS` | `04:37` |
| 1 hour or more | `H:MM:SS` | `1:02:15` |

`timeTracked` is in milliseconds — pass `Date.now() - startedAt` as the running segment offset via `timerStartedAt`.

## Examples

### Task timer in a card

```vue
<script setup>
import { ref } from 'vue'

const state = ref<'idle' | 'running' | 'paused'>('idle')
const tracked = ref(0)
const startedAt = ref<number | null>(null)
</script>

<template>
  <DsCard class="flex items-center justify-between p-4">
    <div>
      <p class="font-medium">Design review</p>
      <DsBadge variant="info">In Progress</DsBadge>
    </div>

    <DsTimerDisplay
      :timer-state="state"
      :time-tracked="tracked"
      :timer-started-at="startedAt"
      @start="() => { startedAt = Date.now(); state = 'running' }"
      @pause="() => { tracked += Date.now() - startedAt!; startedAt = null; state = 'paused' }"
      @stop="() => { tracked = 0; startedAt = null; state = 'idle' }"
    />
  </DsCard>
</template>
```
