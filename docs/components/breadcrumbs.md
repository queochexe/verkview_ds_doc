# Breadcrumbs

Navigation breadcrumbs showing the current page location.

<ComponentDemo title="Breadcrumbs Example">
  <DsBreadcrumbs :items="[
    { label: 'Home', href: '/' },
    { label: 'Projects', href: '/projects' },
    { label: 'Design System', href: '/projects/design-system' }
  ]" />
</ComponentDemo>

## Import

```typescript
import { DsBreadcrumbs } from '@verkview/design-system'
```

## Usage

```vue
<script setup>
const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Tasks', href: '/tasks' },
  { label: 'Task Details', href: '/tasks/123' }
]
</script>

<template>
  <DsBreadcrumbs :items="breadcrumbs" />
</template>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `BreadcrumbItem[]` | *required* | Array of breadcrumb items |

## Item Type

```typescript
interface BreadcrumbItem {
  label: string   // Display text
  href: string    // Link URL
}
```

## Behavior

### Current Page

The last item in the array is treated as the current page:
- Styled differently (white text, font-medium)
- Not a link
- Has `aria-current="page"`

### Previous Items

Items before the last are:
- Clickable links
- Muted text color
- Separated by `/` character

### Responsive

On mobile (< 640px), only the current page is shown:

```css
/* Previous items hidden on mobile */
.breadcrumb-link {
  @apply hidden sm:inline;
}
```

## Accessibility

### ARIA Attributes

- `aria-label="Breadcrumb"` on nav element
- `aria-current="page"` on current page
- `role="list"` and `role="listitem"` for proper list semantics

### Structure

```html
<nav aria-label="Breadcrumb">
  <ol role="list">
    <li role="listitem">
      <a href="/">Home</a>
      <span aria-hidden="true">/</span>
    </li>
    <li role="listitem">
      <span aria-current="page">Current Page</span>
    </li>
  </ol>
</nav>
```

## Best Practices

1. **Start with Home**: Always begin with a root/home link
2. **Match URL structure**: Breadcrumbs should reflect the URL hierarchy
3. **Keep labels short**: Use concise labels for each level
4. **Current page**: The current page should not be a link
5. **Don't overuse**: Skip breadcrumbs on simple pages

## Examples

### Basic Navigation

```vue
<template>
  <DsBreadcrumbs :items="[
    { label: 'Home', href: '/' },
    { label: 'Settings', href: '/settings' }
  ]" />
</template>
```

### Deep Hierarchy

```vue
<template>
  <DsBreadcrumbs :items="[
    { label: 'Home', href: '/' },
    { label: 'Projects', href: '/projects' },
    { label: 'Kanban Board', href: '/projects/kanban' },
    { label: 'Settings', href: '/projects/kanban/settings' }
  ]" />
</template>
```

### Dynamic with Vue Router

```vue
<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const breadcrumbs = computed(() => {
  const crumbs = [{ label: 'Home', href: '/' }]

  const pathSegments = route.path.split('/').filter(Boolean)
  let currentPath = ''

  pathSegments.forEach((segment, index) => {
    currentPath += `/${segment}`
    crumbs.push({
      label: segment.charAt(0).toUpperCase() + segment.slice(1),
      href: currentPath
    })
  })

  return crumbs
})
</script>

<template>
  <DsBreadcrumbs :items="breadcrumbs" />
</template>
```

### Page Header with Breadcrumbs

```vue
<template>
  <header class="border-b border-zinc-800 pb-4 mb-6">
    <DsBreadcrumbs :items="breadcrumbs" class="mb-2" />

    <div class="flex items-center justify-between">
      <h1 class="text-xl font-semibold text-zinc-100">
        {{ pageTitle }}
      </h1>
      <DsButton>Edit</DsButton>
    </div>
  </header>
</template>
```

### With Task Context

```vue
<script setup>
const task = { id: '123', title: 'Update Documentation', project: 'Design System' }

const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: task.project, href: `/projects/${task.project.toLowerCase().replace(' ', '-')}` },
  { label: task.title, href: `/tasks/${task.id}` }
]
</script>

<template>
  <DsBreadcrumbs :items="breadcrumbs" />
</template>
```
