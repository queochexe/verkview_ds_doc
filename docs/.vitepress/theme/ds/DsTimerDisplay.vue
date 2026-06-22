<template>
  <div class="inline-flex flex-col items-center gap-3 p-4 rounded-xl border border-border bg-card min-w-[160px]">
    <div class="text-2xl font-mono font-semibold tabular-nums text-foreground">
      {{ formattedTime }}
    </div>
    <div class="flex items-center gap-2">
      <button
        v-if="timerState !== 'running'"
        class="inline-flex items-center justify-center w-9 h-9 rounded-full bg-info text-white hover:bg-info/90 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        aria-label="Start timer"
        @click="$emit('start')"
      >
        <Play class="w-4 h-4" />
      </button>
      <button
        v-else
        class="inline-flex items-center justify-center w-9 h-9 rounded-full bg-secondary border border-border text-foreground hover:bg-accent transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        aria-label="Pause timer"
        @click="$emit('pause')"
      >
        <Pause class="w-4 h-4" />
      </button>
      <button
        v-if="timerState !== 'idle'"
        class="inline-flex items-center justify-center w-9 h-9 rounded-full bg-secondary border border-border text-muted-foreground hover:bg-accent hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        aria-label="Stop timer"
        @click="$emit('stop')"
      >
        <Square class="w-4 h-4" />
      </button>
    </div>
    <span class="text-xs text-muted-foreground">
      <template v-if="timerState === 'running'">Running</template>
      <template v-else-if="timerState === 'paused'">Paused</template>
      <template v-else>Ready</template>
    </span>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Play, Pause, Square } from 'lucide-vue-next'

type TimerState = 'idle' | 'running' | 'paused'

interface Props {
  timerState: TimerState
  timeTracked: number
  timerStartedAt?: number | null
}

const props = withDefaults(defineProps<Props>(), {
  timerStartedAt: null,
})

defineEmits<{ start: []; pause: []; stop: [] }>()

const totalSeconds = computed(() => {
  if (props.timerState === 'running' && props.timerStartedAt) {
    return Math.floor((props.timeTracked + (Date.now() - props.timerStartedAt)) / 1000)
  }
  return Math.floor(props.timeTracked / 1000)
})

const formattedTime = computed(() => {
  const s = totalSeconds.value
  const h = Math.floor(s / 3600)
  const m = Math.floor((s % 3600) / 60)
  const sec = s % 60
  return h > 0
    ? `${h}:${String(m).padStart(2, '0')}:${String(sec).padStart(2, '0')}`
    : `${String(m).padStart(2, '0')}:${String(sec).padStart(2, '0')}`
})
</script>
