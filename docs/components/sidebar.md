# Sidebar

Navigation sidebar component with workspace switcher and team sections.

<ComponentDemo title="Sidebar Preview">
  <p class="text-zinc-400 text-sm">The sidebar provides main navigation with workspace context, nav items, and team sections.</p>
</ComponentDemo>

## Import

```typescript
import { DsSidebar } from '@verkview/design-system'
```

## Usage

```vue
<script setup>
import { Home, CheckSquare, Calendar, Settings } from 'lucide-vue-next'

const items = [
  { label: 'Home', icon: Home, href: '/', active: true },
  { label: 'Tasks', icon: CheckSquare, href: '/tasks', badge: '12' },
  { label: 'Calendar', icon: Calendar, href: '/calendar' },
  { label: 'Settings', icon: Settings, href: '/settings' }
]
</script>

<template>
  <DsSidebar
    :items="items"
    :workspace="{ name: 'My Workspace', initials: 'MW' }"
    :user="{ name: 'John Doe' }"
    @item-click="handleNavigation"
  />
</template>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `NavItem[]` | *required* | Navigation items array |
| `workspace` | `Workspace` | `{ name: 'OpenProtocol', initials: 'OP' }` | Workspace info |
| `teams` | `Team[]` | `[]` | Team items array |
| `user` | `User` | `undefined` | Current user info |

## Type Definitions

```typescript
interface NavItem {
  label: string
  icon: Component    // Lucide icon component
  href: string
  active?: boolean
  badge?: string | number
}

interface Workspace {
  name: string
  initials: string   // 2 characters for avatar
}

interface Team {
  name: string
  initial: string    // Single character
  href: string
  color: string      // Tailwind color name (blue, green, etc.)
}

interface User {
  name: string
}
```

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `itemClick` | `NavItem` | Emitted when nav item is clicked |

## Sections

### Workspace Switcher

The top section displays the current workspace with a dropdown trigger:

```vue
<DsSidebar
  :workspace="{
    name: 'Verkview',
    initials: 'VK'
  }"
  :items="items"
/>
```

### Navigation Items

Main navigation links with optional badges:

```vue
<script setup>
import { Home, Inbox, Calendar, Settings } from 'lucide-vue-next'

const items = [
  { label: 'Home', icon: Home, href: '/', active: true },
  { label: 'Inbox', icon: Inbox, href: '/inbox', badge: '5' },
  { label: 'Calendar', icon: Calendar, href: '/calendar' },
  { label: 'Settings', icon: Settings, href: '/settings' }
]
</script>
```

### Teams Section

Optional team shortcuts:

```vue
<script setup>
const teams = [
  { name: 'Engineering', initial: 'E', href: '/teams/eng', color: 'blue' },
  { name: 'Design', initial: 'D', href: '/teams/design', color: 'purple' },
  { name: 'Marketing', initial: 'M', href: '/teams/marketing', color: 'green' }
]
</script>

<template>
  <DsSidebar :items="items" :teams="teams" />
</template>
```

### User Section

Bottom section with help and user profile:

```vue
<DsSidebar
  :items="items"
  :user="{ name: 'John Doe' }"
/>
```

## Accessibility

### ARIA Attributes

- `aria-label="Main navigation"` on aside element
- `aria-label="Primary navigation"` on nav element
- `aria-current="page"` on active item
- `role="list"` and `role="listitem"` on navigation lists

### Keyboard Support

| Key | Action |
|-----|--------|
| `Tab` | Navigate between interactive elements |
| `Enter` | Activate focused item |

## Styling

### Fixed Width

The sidebar has a fixed width of 256px (`w-64`):

```css
.sidebar {
  width: 256px;
  flex-shrink: 0;
}
```

### Custom Scrollbar

Navigation area includes hidden scrollbar styling:

```css
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
```

## Best Practices

1. **Active state**: Mark the current page as active
2. **Icons**: Use consistent Lucide icons
3. **Badges**: Show counts for actionable items
4. **Teams**: Limit to most relevant teams
5. **Mobile**: Consider responsive sidebar (collapsible)

## Examples

### Application Sidebar

```vue
<script setup>
import {
  Home, CheckSquare, Calendar,
  Users, Settings, Bell
} from 'lucide-vue-next'

const items = [
  { label: 'Dashboard', icon: Home, href: '/', active: true },
  { label: 'Tasks', icon: CheckSquare, href: '/tasks', badge: '12' },
  { label: 'Calendar', icon: Calendar, href: '/calendar' },
  { label: 'Team', icon: Users, href: '/team' },
  { label: 'Notifications', icon: Bell, href: '/notifications', badge: '3' },
  { label: 'Settings', icon: Settings, href: '/settings' }
]

const teams = [
  { name: 'Product', initial: 'P', href: '/teams/product', color: 'blue' },
  { name: 'Engineering', initial: 'E', href: '/teams/eng', color: 'green' }
]

const handleNavigation = (item) => {
  router.push(item.href)
}
</script>

<template>
  <DsSidebar
    :items="items"
    :teams="teams"
    :workspace="{ name: 'Acme Inc', initials: 'AI' }"
    :user="{ name: 'Jane Smith' }"
    @item-click="handleNavigation"
  />
</template>
```

### With Vue Router

```vue
<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const items = computed(() => [
  {
    label: 'Dashboard',
    icon: Home,
    href: '/',
    active: route.path === '/'
  },
  {
    label: 'Tasks',
    icon: CheckSquare,
    href: '/tasks',
    active: route.path.startsWith('/tasks')
  }
])
</script>
```

### Responsive Layout

```vue
<template>
  <div class="flex h-screen">
    <!-- Sidebar (hidden on mobile) -->
    <DsSidebar
      :items="items"
      class="hidden md:flex"
    />

    <!-- Mobile menu button -->
    <button
      class="md:hidden fixed top-4 left-4 z-50"
      @click="mobileMenuOpen = true"
    >
      <Menu class="w-6 h-6" />
    </button>

    <!-- Main content -->
    <main class="flex-1 overflow-auto">
      <slot />
    </main>
  </div>
</template>
```
