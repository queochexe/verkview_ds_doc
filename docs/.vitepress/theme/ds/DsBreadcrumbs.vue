<template>
  <nav
    aria-label="Breadcrumb"
    class="flex items-center gap-2 text-sm text-muted-foreground"
  >
    <ol class="flex items-center gap-2" role="list">
      <li
        v-for="(item, index) in items"
        :key="index"
        class="flex items-center gap-2"
        role="listitem"
      >
        <span
          v-if="index === items.length - 1"
          class="text-foreground font-medium"
          aria-current="page"
        >
          {{ item.label }}
        </span>
        <template v-else>
          <a
            :href="item.href"
            class="hover:text-foreground/80 cursor-pointer transition-colors hidden sm:inline"
          >
            {{ item.label }}
          </a>
          <span class="text-border hidden sm:inline" aria-hidden="true">/</span>
        </template>
      </li>
    </ol>
  </nav>
</template>

<script setup lang="ts">
interface BreadcrumbItem {
  label: string;
  href: string;
}

interface Props {
  items: BreadcrumbItem[];
}

defineProps<Props>();
</script>
