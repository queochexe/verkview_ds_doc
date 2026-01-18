<template>
  <aside
    id="sidebar"
    class="w-64 border-r border-zinc-800/60 flex-col bg-zinc-950 flex flex-shrink-0"
    aria-label="Main navigation"
  >
    <!-- Workspace Switcher -->
    <div class="h-14 flex items-center px-4 border-b border-zinc-800/60 flex-shrink-0">
      <button
        class="flex items-center gap-3 text-zinc-100 hover:bg-zinc-800/40 py-1.5 px-2 rounded-lg w-full transition-colors duration-200 group"
        aria-label="Switch workspace"
        aria-expanded="false"
      >
        <div
          class="w-5 h-5 bg-zinc-100 text-black rounded text-xs font-semibold flex items-center justify-center tracking-tighter shadow-sm group-hover:bg-white"
        >
          {{ workspace.initials }}
        </div>
        <span class="text-sm font-medium tracking-tight">{{ workspace.name }}</span>
        <ChevronDown class="w-3.5 h-3.5 ml-auto text-zinc-500" aria-hidden="true" />
      </button>
    </div>

    <!-- Navigation Items -->
    <nav
      class="flex-1 overflow-y-auto py-4 px-2 space-y-6 scrollbar-hide"
      aria-label="Primary navigation"
    >
      <!-- Main Items -->
      <div>
        <ul class="space-y-0.5" role="list">
          <li v-for="item in items" :key="item.label" role="listitem">
            <a
              :href="item.href"
              :class="[
                'flex items-center gap-2.5 px-2 py-1.5 rounded-md text-sm transition-all group',
                item.active
                  ? 'text-zinc-100 bg-zinc-800/40 shadow-sm ring-1 ring-white/5'
                  : 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/40',
              ]"
              :aria-current="item.active ? 'page' : undefined"
              @click="handleItemClick($event, item)"
            >
              <component
                :is="item.icon"
                :class="[
                  'w-4 h-4',
                  item.active ? 'text-blue-400' : 'text-zinc-500 group-hover:text-zinc-300',
                ]"
                aria-hidden="true"
              />
              {{ item.label }}
              <span
                v-if="item.badge"
                class="ml-auto text-xs font-medium text-zinc-500"
                :aria-label="`${item.badge} items`"
              >
                {{ item.badge }}
              </span>
            </a>
          </li>
        </ul>
      </div>

      <!-- Teams Section -->
      <div v-if="teams.length > 0">
        <h3 class="px-2 text-xs font-medium text-zinc-500 mb-2 uppercase tracking-wider">
          Your Teams
        </h3>
        <ul class="space-y-0.5" role="list" aria-label="Teams">
          <li v-for="team in teams" :key="team.name" role="listitem">
            <a
              :href="team.href"
              class="flex items-center gap-2.5 px-2 py-1.5 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/40 rounded-md text-sm transition-all group"
            >
              <div
                :class="`w-4 h-4 rounded flex items-center justify-center border bg-${team.color}-500/10 border-${team.color}-500/20`"
              >
                <span :class="`text-xs font-semibold scale-75 text-${team.color}-400`">
                  {{ team.initial }}
                </span>
              </div>
              {{ team.name }}
            </a>
          </li>
        </ul>
      </div>
    </nav>

    <!-- Bottom Actions -->
    <div v-if="user" class="p-3 border-t border-zinc-800/60 mt-auto">
      <button
        class="flex items-center gap-2.5 px-2 py-1.5 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/40 rounded-md text-sm w-full transition-all text-left"
        aria-label="Help and support"
      >
        <HelpCircle class="w-4 h-4" aria-hidden="true" />
        Help & Support
      </button>

      <button
        class="mt-1 flex items-center gap-2.5 px-2 py-1.5 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/40 rounded-md text-sm w-full transition-all text-left"
        :aria-label="`User account: ${user.name}`"
      >
        <div
          class="w-4 h-4 rounded-full bg-gradient-to-tr from-zinc-500 to-zinc-300"
          aria-hidden="true"
        />
        {{ user.name }}
      </button>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { ChevronDown, HelpCircle } from 'lucide-vue-next';

interface NavItem {
  label: string;
  icon: any;
  href: string;
  active?: boolean;
  badge?: string | number;
}

interface Team {
  name: string;
  initial: string;
  href: string;
  color: string;
}

interface Workspace {
  name: string;
  initials: string;
}

interface User {
  name: string;
}

interface Props {
  workspace?: Workspace;
  items: NavItem[];
  teams?: Team[];
  user?: User;
}

withDefaults(defineProps<Props>(), {
  workspace: () => ({ name: 'OpenProtocol', initials: 'OP' }),
  teams: () => [],
});

const emit = defineEmits<{
  itemClick: [item: NavItem];
}>();

const handleItemClick = (event: Event, item: NavItem) => {
  event.preventDefault();
  emit('itemClick', item);
};
</script>
