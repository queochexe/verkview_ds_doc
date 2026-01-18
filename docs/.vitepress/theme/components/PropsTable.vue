<script setup lang="ts">
interface PropDefinition {
  name: string
  type: string
  default?: string
  required?: boolean
  description: string
}

defineProps<{
  props: PropDefinition[]
}>()
</script>

<template>
  <div class="props-table-wrapper">
    <table class="props-table">
      <thead>
        <tr>
          <th>Prop</th>
          <th>Type</th>
          <th>Default</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="prop in props" :key="prop.name">
          <td>
            <code class="prop-name">{{ prop.name }}</code>
            <span v-if="prop.required" class="required-badge">Required</span>
          </td>
          <td>
            <code class="prop-type">{{ prop.type }}</code>
          </td>
          <td>
            <code v-if="prop.default !== undefined" class="prop-default">{{ prop.default }}</code>
            <span v-else class="no-default">—</span>
          </td>
          <td class="prop-description">{{ prop.description }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.props-table-wrapper {
  @apply overflow-x-auto my-6;
}

.props-table {
  @apply w-full border-collapse text-sm;
}

.props-table th {
  @apply text-left px-4 py-3 border-b border-border bg-muted/50 font-medium text-foreground;
}

.props-table td {
  @apply px-4 py-3 border-b border-border align-top;
}

.props-table tr:last-child td {
  @apply border-b-0;
}

.prop-name {
  @apply text-primary font-mono text-sm bg-muted px-1.5 py-0.5 rounded;
}

.required-badge {
  @apply ml-2 text-xs bg-destructive/10 text-destructive px-1.5 py-0.5 rounded;
}

.prop-type {
  @apply text-muted-foreground font-mono text-xs bg-muted px-1.5 py-0.5 rounded;
}

.prop-default {
  @apply text-muted-foreground font-mono text-xs bg-muted px-1.5 py-0.5 rounded;
}

.no-default {
  @apply text-muted-foreground/50;
}

.prop-description {
  @apply text-muted-foreground;
}
</style>
