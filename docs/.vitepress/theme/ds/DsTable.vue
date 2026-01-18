<template>
  <div class="border border-zinc-800/60 rounded-lg overflow-hidden bg-zinc-900/20">
    <div class="overflow-x-auto">
      <table class="w-full min-w-[800px]" role="table">
        <caption v-if="caption" class="sr-only">{{ caption }}</caption>

        <thead role="rowgroup">
          <tr class="bg-zinc-900/50 border-b border-zinc-800/60" role="row">
            <th
              v-if="selectable"
              class="px-4 py-2.5 text-left"
              scope="col"
              role="columnheader"
            >
              <DsCheckbox
                :model-value="allSelected"
                aria-label="Select all rows"
                @update:model-value="handleSelectAll"
              />
            </th>

            <th
              v-for="column in columns"
              :key="column.key"
              class="px-4 py-2.5 text-left text-xs font-medium text-zinc-500"
              scope="col"
              role="columnheader"
            >
              <button
                v-if="sortable && column.sortable !== false"
                type="button"
                class="flex items-center gap-2 hover:text-zinc-300 transition-colors"
                :aria-label="`Sort by ${column.label}`"
                @click="$emit('sort', column.key)"
              >
                {{ column.label }}
                <ArrowUpDown class="w-3 h-3" aria-hidden="true" />
              </button>
              <template v-else>{{ column.label }}</template>
            </th>
          </tr>
        </thead>

        <tbody role="rowgroup">
          <tr
            v-for="(row, rowIndex) in data"
            :key="row.id"
            class="border-b border-zinc-800/40 hover:bg-zinc-800/40 transition-colors"
            role="row"
          >
            <td v-if="selectable" class="px-4 py-3" role="cell">
              <DsCheckbox
                :model-value="selectedIds.has(row.id)"
                :aria-label="`Select row ${rowIndex + 1}`"
                @update:model-value="(checked) => handleSelect(row.id, checked)"
              />
            </td>

            <td
              v-for="column in columns"
              :key="column.key"
              class="px-4 py-3 text-sm text-zinc-300"
              role="cell"
            >
              <component
                v-if="column.render"
                :is="column.render(row[column.key], row)"
              />
              <template v-else>{{ row[column.key] }}</template>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { ArrowUpDown } from 'lucide-vue-next';
import DsCheckbox from './DsCheckbox.vue';

interface Column {
  key: string;
  label: string;
  sortable?: boolean;
  render?: (value: any, row: any) => any;
}

interface Props {
  columns: Column[];
  data: any[];
  caption?: string;
  sortable?: boolean;
  selectable?: boolean;
  selectedIds?: Set<string>;
}

const props = withDefaults(defineProps<Props>(), {
  sortable: false,
  selectable: false,
  selectedIds: () => new Set(),
});

const emit = defineEmits<{
  sort: [key: string];
  select: [id: string | 'all', checked: boolean];
}>();

const allSelected = computed(() => {
  return props.data.length > 0 && props.data.every((row) => props.selectedIds.has(row.id));
});

const handleSelectAll = (checked: boolean) => {
  emit('select', 'all', checked);
};

const handleSelect = (id: string, checked: boolean) => {
  emit('select', id, checked);
};
</script>
