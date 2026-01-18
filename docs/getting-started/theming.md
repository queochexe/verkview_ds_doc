# Theming

Customize the Verkview Design System to match your brand.

## Color System

The design system uses CSS custom properties (variables) for theming. Override these variables to customize colors.

### CSS Variables

```css
:root {
  /* Background and Foreground */
  --background: 0 0% 100%;
  --foreground: 240 10% 3.9%;

  /* Card */
  --card: 0 0% 100%;
  --card-foreground: 240 10% 3.9%;

  /* Muted */
  --muted: 240 4.8% 95.9%;
  --muted-foreground: 240 3.8% 46.1%;

  /* Primary */
  --primary: 240 5.9% 10%;
  --primary-foreground: 0 0% 98%;

  /* Secondary */
  --secondary: 240 4.8% 95.9%;
  --secondary-foreground: 240 5.9% 10%;

  /* Destructive */
  --destructive: 0 84.2% 60.2%;
  --destructive-foreground: 0 0% 98%;

  /* Border and Input */
  --border: 240 5.9% 90%;
  --input: 240 5.9% 90%;
  --ring: 240 5.9% 10%;

  /* Radius */
  --radius: 0.5rem;
}
```

### Dark Mode Variables

```css
.dark {
  --background: 240 10% 3.9%;
  --foreground: 0 0% 98%;

  --card: 240 10% 3.9%;
  --card-foreground: 0 0% 98%;

  --muted: 240 3.7% 15.9%;
  --muted-foreground: 240 5% 64.9%;

  --primary: 0 0% 98%;
  --primary-foreground: 240 5.9% 10%;

  --secondary: 240 3.7% 15.9%;
  --secondary-foreground: 0 0% 98%;

  --destructive: 0 62.8% 30.6%;
  --destructive-foreground: 0 0% 98%;

  --border: 240 3.7% 15.9%;
  --input: 240 3.7% 15.9%;
  --ring: 240 4.9% 83.9%;
}
```

## Zinc Color Palette

The design system is built on the zinc color palette for a modern, neutral aesthetic:

| Token | Value | Usage |
|-------|-------|-------|
| `zinc-50` | `#fafafa` | Lightest backgrounds |
| `zinc-100` | `#f4f4f5` | Light backgrounds |
| `zinc-200` | `#e4e4e7` | Borders (light mode) |
| `zinc-300` | `#d4d4d8` | Disabled text (light) |
| `zinc-400` | `#a1a1aa` | Muted text |
| `zinc-500` | `#71717a` | Secondary text |
| `zinc-600` | `#52525b` | Primary text (light) |
| `zinc-700` | `#3f3f46` | Borders (dark mode) |
| `zinc-800` | `#27272a` | Card backgrounds |
| `zinc-900` | `#18181b` | Page backgrounds |
| `zinc-950` | `#09090b` | Darkest backgrounds |

## Tailwind Configuration

### Extending the Color Palette

Add custom colors in your `tailwind.config.js`:

```js
/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      colors: {
        // Brand colors
        brand: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
        },
        // Semantic colors
        success: {
          light: '#22c55e',
          DEFAULT: '#16a34a',
          dark: '#15803d',
        },
        warning: {
          light: '#f59e0b',
          DEFAULT: '#d97706',
          dark: '#b45309',
        },
        error: {
          light: '#ef4444',
          DEFAULT: '#dc2626',
          dark: '#b91c1c',
        }
      }
    }
  }
}
```

### Custom Border Radius

Adjust the border radius scale:

```js
theme: {
  extend: {
    borderRadius: {
      lg: '0.75rem',  // Larger corners
      md: '0.5rem',
      sm: '0.25rem',
    }
  }
}
```

## Component-Level Theming

### Using className Prop

Some components accept a `className` prop for custom styling:

```vue
<DsBadge
  variant="default"
  class-name="bg-brand-500 text-white border-brand-600"
>
  Custom Badge
</DsBadge>
```

### Variant Override

Create custom variants by extending component styles:

```css
/* Custom button variant */
.btn-brand {
  @apply bg-brand-500 text-white hover:bg-brand-600;
  @apply focus:ring-brand-500 focus:ring-offset-zinc-900;
}
```

```vue
<DsButton class="btn-brand">Brand Button</DsButton>
```

## Dark Mode

### Toggle Implementation

```vue
<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isDark = ref(true)

const toggleDarkMode = () => {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark', isDark.value)
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}

onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  isDark.value = savedTheme === 'dark' ||
    (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)
  document.documentElement.classList.toggle('dark', isDark.value)
})
</script>

<template>
  <DsButton @click="toggleDarkMode">
    {{ isDark ? 'Light Mode' : 'Dark Mode' }}
  </DsButton>
</template>
```

### System Preference Detection

```ts
// Detect system preference
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)')

prefersDark.addEventListener('change', (e) => {
  document.documentElement.classList.toggle('dark', e.matches)
})
```

## Typography

### Font Configuration

The design system uses Inter for UI text and JetBrains Mono for code:

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
```

```js
// tailwind.config.js
theme: {
  extend: {
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
      mono: ['JetBrains Mono', 'monospace']
    }
  }
}
```

### Type Scale

| Class | Size | Weight | Usage |
|-------|------|--------|-------|
| `text-xs` | 12px | 400 | Badges, captions |
| `text-sm` | 14px | 400-500 | Body text, buttons |
| `text-base` | 16px | 400 | Primary body |
| `text-lg` | 18px | 500-600 | Subheadings |
| `text-xl` | 20px | 600 | Section titles |
| `text-2xl` | 24px | 700 | Page titles |

## Spacing & Layout

### Touch Targets

All interactive elements meet WCAG 2.1 AA touch target requirements:

```css
.touch-target {
  min-height: 44px;
  min-width: 44px;
}

.touch-target-sm {
  min-height: 24px;
  min-width: 24px;
}
```

### Consistent Spacing

Use Tailwind's spacing scale for consistent layout:

| Token | Value | Usage |
|-------|-------|-------|
| `gap-1` | 4px | Tight spacing |
| `gap-2` | 8px | Default element gap |
| `gap-3` | 12px | Medium spacing |
| `gap-4` | 16px | Section spacing |
| `gap-6` | 24px | Large spacing |

## Next Steps

- [Colors](/foundations/colors) - Full color reference
- [Typography](/foundations/typography) - Type scale details
- [Accessibility](/foundations/accessibility) - A11y guidelines
