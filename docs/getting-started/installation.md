# Installation

Get started with the Verkview Design System in your Vue 3 project.

## Prerequisites

- Node.js 18 or higher
- Vue 3.4 or higher
- Tailwind CSS 3.4 or higher (recommended)

## Package Installation

Install the design system via npm:

```bash
npm install @verkview/design-system
```

Or using yarn:

```bash
yarn add @verkview/design-system
```

Or using pnpm:

```bash
pnpm add @verkview/design-system
```

## Dependencies

The design system has the following peer dependencies:

```json
{
  "vue": "^3.4.0",
  "lucide-vue-next": "^0.316.0"
}
```

Install them if not already present:

```bash
npm install vue@^3.4.0 lucide-vue-next@^0.316.0
```

## CSS Setup

### Option 1: Using Tailwind CSS (Recommended)

If your project uses Tailwind CSS, add the design system's content path to your `tailwind.config.js`:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/@verkview/design-system/**/*.vue'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        zinc: {
          50: '#fafafa',
          100: '#f4f4f5',
          200: '#e4e4e7',
          300: '#d4d4d8',
          400: '#a1a1aa',
          500: '#71717a',
          600: '#52525b',
          700: '#3f3f46',
          800: '#27272a',
          900: '#18181b',
          950: '#09090b'
        }
      }
    }
  }
}
```

### Option 2: Import Pre-built CSS

Import the design system's compiled CSS in your main entry file:

```ts
// main.ts
import '@verkview/design-system/dist/style.css'
```

## Global Registration

### Register All Components

To register all components globally:

```ts
// main.ts
import { createApp } from 'vue'
import App from './App.vue'
import { VerkviewDS } from '@verkview/design-system'

const app = createApp(App)
app.use(VerkviewDS)
app.mount('#app')
```

### Import Individual Components

For better tree-shaking, import components individually:

```vue
<script setup lang="ts">
import { DsButton, DsBadge, DsCard } from '@verkview/design-system'
</script>

<template>
  <DsCard title="Task">
    <DsBadge variant="success">Done</DsBadge>
    <DsButton>Edit</DsButton>
  </DsCard>
</template>
```

## TypeScript Support

The design system includes TypeScript declarations out of the box. No additional configuration is needed.

For IDE support, ensure your `tsconfig.json` includes:

```json
{
  "compilerOptions": {
    "types": ["@verkview/design-system"]
  }
}
```

## Verifying Installation

Create a simple test component to verify everything is working:

```vue
<script setup lang="ts">
import { DsButton } from '@verkview/design-system'
</script>

<template>
  <DsButton variant="primary">
    Installation Successful!
  </DsButton>
</template>
```

If you see a styled button, the installation is complete!

## Next Steps

- [Usage Guide](/getting-started/usage) - Learn how to use components
- [Theming](/getting-started/theming) - Customize the design system
- [Components](/components/button) - Explore all components
