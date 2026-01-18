# Card

Content container component with variants and slots.

<ComponentDemo title="Card Variants">
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
    <DsCard title="Default Card">
      This is the default card variant.
    </DsCard>
    <DsCard title="Interactive Card" variant="interactive">
      Hover to see the interactive effect.
    </DsCard>
    <DsCard title="Elevated Card" variant="elevated">
      This card has elevated styling.
    </DsCard>
  </div>
</ComponentDemo>

## Import

```typescript
import { DsCard } from '@verkview/design-system'
```

## Usage

```vue
<template>
  <DsCard title="My Task">
    Task description goes here.
  </DsCard>
</template>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'interactive' \| 'elevated'` | `'default'` | Card style variant |
| `title` | `string` | `undefined` | Optional card title |
| `href` | `string` | `undefined` | Makes card a link |
| `className` | `string` | `''` | Additional CSS classes |

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `click` | - | Emitted when card is clicked |

## Slots

| Slot | Description |
|------|-------------|
| `default` | Main card content |
| `footer` | Footer content (actions, metadata) |

## Variants

### Default

Standard card for displaying content.

<ComponentDemo>
  <DsCard title="Default Card" class="max-w-sm">
    Content displayed in the default card style.
  </DsCard>
</ComponentDemo>

```vue
<DsCard title="Default Card">
  Content displayed in the default card style.
</DsCard>
```

### Interactive

Card with hover effects for clickable content.

<ComponentDemo>
  <DsCard title="Interactive Card" variant="interactive" class="max-w-sm">
    Click or hover to see the interactive effect.
  </DsCard>
</ComponentDemo>

```vue
<DsCard
  title="Interactive Card"
  variant="interactive"
  @click="handleClick"
>
  Click to perform an action.
</DsCard>
```

### Elevated

Card with shadow for prominent content.

<ComponentDemo>
  <DsCard title="Elevated Card" variant="elevated" class="max-w-sm">
    Elevated card with shadow effect.
  </DsCard>
</ComponentDemo>

```vue
<DsCard title="Elevated Card" variant="elevated">
  Important content with visual prominence.
</DsCard>
```

## With Footer

<ComponentDemo>
  <DsCard title="Task Card" class="max-w-sm">
    Complete the design system documentation.
    <template #footer>
      <span class="text-xs text-zinc-500">Due: Jan 20</span>
      <DsButton size="sm">Edit</DsButton>
    </template>
  </DsCard>
</ComponentDemo>

```vue
<DsCard title="Task Card">
  Complete the design system documentation.

  <template #footer>
    <span class="text-xs text-zinc-500">Due: Jan 20</span>
    <DsButton size="sm">Edit</DsButton>
  </template>
</DsCard>
```

## As Link

<ComponentDemo>
  <DsCard
    title="Link Card"
    href="/components/button"
    variant="interactive"
    class="max-w-sm"
  >
    Click to navigate to the Button component.
  </DsCard>
</ComponentDemo>

```vue
<DsCard
  title="Button Component"
  href="/components/button"
  variant="interactive"
>
  Primary action button component.
</DsCard>
```

## Accessibility

### Keyboard Support

| Key | Action |
|-----|--------|
| `Enter` | Activates interactive/link cards |
| `Space` | Activates interactive cards |
| `Tab` | Focuses card (interactive/link only) |

### Focus State

Interactive and link cards receive a focus ring when focused via keyboard:

```css
.card-interactive:focus-within {
  ring: 2px solid var(--ring);
}
```

## Best Practices

1. **Use titles**: Add titles for clarity when appropriate
2. **Consistent variants**: Use the same variant for similar card types
3. **Footer actions**: Place action buttons in the footer slot
4. **Interactive hint**: Use interactive variant only for clickable cards
5. **Link cards**: Use `href` for navigation, not `@click`

## Examples

### Task Card

```vue
<template>
  <DsCard variant="interactive" @click="openTask(task)">
    <div class="flex items-center gap-2 mb-2">
      <DsBadge :variant="getStatusVariant(task.status)">
        {{ task.status }}
      </DsBadge>
    </div>

    <h3 class="text-sm font-medium text-zinc-200">
      {{ task.title }}
    </h3>

    <p class="text-xs text-zinc-400 mt-1">
      {{ task.description }}
    </p>

    <template #footer>
      <span class="text-xs text-zinc-500">
        {{ formatDate(task.dueDate) }}
      </span>
      <div class="flex gap-2">
        <DsButton size="sm" variant="ghost">Archive</DsButton>
        <DsButton size="sm">Edit</DsButton>
      </div>
    </template>
  </DsCard>
</template>
```

### Feature Card Grid

```vue
<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    <DsCard
      v-for="feature in features"
      :key="feature.id"
      :title="feature.name"
      variant="elevated"
    >
      {{ feature.description }}

      <template #footer>
        <DsBadge :variant="feature.status === 'new' ? 'info' : 'default'">
          {{ feature.status }}
        </DsBadge>
      </template>
    </DsCard>
  </div>
</template>
```

### Navigation Cards

```vue
<template>
  <div class="grid grid-cols-2 gap-4">
    <DsCard
      v-for="link in navLinks"
      :key="link.href"
      :title="link.title"
      :href="link.href"
      variant="interactive"
    >
      {{ link.description }}
    </DsCard>
  </div>
</template>
```
