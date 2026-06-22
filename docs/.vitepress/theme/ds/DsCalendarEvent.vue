<template>
  <div
    class="absolute inset-x-0 mx-1 rounded-md px-2 py-1 overflow-hidden"
    :style="eventStyle"
  >
    <div class="flex flex-col h-full justify-between gap-0.5">
      <span class="text-xs font-medium text-foreground truncate leading-tight">{{ title }}</span>
      <span class="text-[10px] text-muted-foreground leading-tight">{{ timeLabel }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  title: string
  timeLabel: string
  topPx: number
  heightPx: number
  projectColor: string
}

const props = defineProps<Props>()

const eventStyle = computed(() => ({
  top: `${props.topPx}px`,
  height: `${props.heightPx}px`,
  backgroundColor: `${props.projectColor}26`,
  borderLeft: `3px solid ${props.projectColor}`,
}))
</script>
