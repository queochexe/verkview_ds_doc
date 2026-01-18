# Typography

The Verkview Design System uses a carefully crafted type system for clarity and readability.

## Font Families

### Sans-Serif (UI Text)

**Inter** is the primary font for all UI text, chosen for excellent legibility at small sizes.

```css
font-family: 'Inter', system-ui, sans-serif;
```

### Monospace (Code)

**JetBrains Mono** is used for code snippets and technical content.

```css
font-family: 'JetBrains Mono', monospace;
```

## Type Scale

| Class | Size | Line Height | Weight | Usage |
|-------|------|-------------|--------|-------|
| `text-2xl` | 24px | 32px | 700 | Page titles |
| `text-xl` | 20px | 28px | 600 | Section headers |
| `text-lg` | 18px | 28px | 500-600 | Subsection headers |
| `text-base` | 16px | 24px | 400 | Primary body text |
| `text-sm` | 14px | 20px | 400-500 | UI text, buttons |
| `text-xs` | 12px | 16px | 400-500 | Captions, badges |
| `text-[10px]` | 10px | 14px | 500 | Small badges |
| `text-[9px]` | 9px | 12px | 500 | Tiny badges |

## Font Weights

| Class | Weight | Usage |
|-------|--------|-------|
| `font-normal` | 400 | Body text |
| `font-medium` | 500 | Buttons, labels |
| `font-semibold` | 600 | Headings, emphasis |
| `font-bold` | 700 | Page titles |

## Heading Hierarchy

```vue
<template>
  <!-- Page title -->
  <h1 class="text-2xl font-bold text-zinc-100 tracking-tight">
    Dashboard
  </h1>

  <!-- Section header -->
  <h2 class="text-xl font-semibold text-zinc-100">
    Recent Tasks
  </h2>

  <!-- Subsection header -->
  <h3 class="text-lg font-medium text-zinc-200">
    In Progress
  </h3>

  <!-- Card title -->
  <h4 class="text-sm font-medium text-zinc-200">
    Task Name
  </h4>
</template>
```

## Body Text

### Primary Body

Used for main content and descriptions:

```html
<p class="text-sm text-zinc-400">
  Complete the design system documentation with all component examples.
</p>
```

### Muted Text

Used for secondary information:

```html
<span class="text-xs text-zinc-500">
  Last updated 2 hours ago
</span>
```

### Placeholder Text

Used for input placeholders:

```html
<input
  class="placeholder:text-zinc-600"
  placeholder="Enter task name..."
/>
```

## Letter Spacing

| Class | Value | Usage |
|-------|-------|-------|
| `tracking-tighter` | -0.05em | Large headings |
| `tracking-tight` | -0.025em | Headings |
| `tracking-normal` | 0 | Body text |
| `tracking-wide` | 0.025em | Uppercase labels |
| `tracking-wider` | 0.05em | Section labels |

### Example: Section Label

```html
<h3 class="text-xs font-medium text-zinc-500 uppercase tracking-wider">
  Your Teams
</h3>
```

## Text Colors

### Light on Dark

For dark backgrounds (most common):

```html
<div class="bg-zinc-900">
  <h1 class="text-zinc-100">High emphasis</h1>
  <h2 class="text-zinc-200">Medium-high emphasis</h2>
  <p class="text-zinc-300">Medium emphasis</p>
  <p class="text-zinc-400">Low emphasis</p>
  <span class="text-zinc-500">Muted</span>
  <span class="text-zinc-600">Disabled</span>
</div>
```

### Status Text

```html
<span class="text-green-400">Success message</span>
<span class="text-orange-400">Warning message</span>
<span class="text-red-400">Error message</span>
<span class="text-blue-400">Info message</span>
```

## Component Typography

### Button Text

```css
/* Small button */
.btn-sm {
  @apply text-xs font-medium;
}

/* Medium button */
.btn-md {
  @apply text-sm font-medium;
}

/* Large button */
.btn-lg {
  @apply text-base font-medium;
}
```

### Badge Text

```css
/* Small badge */
.badge-sm {
  @apply text-[9px] font-medium;
}

/* Medium badge */
.badge-md {
  @apply text-[10px] font-medium;
}

/* Large badge */
.badge-lg {
  @apply text-xs font-medium;
}
```

### Input Labels

```html
<label class="block text-sm font-medium text-zinc-300 mb-2">
  Task Name
  <span class="text-red-400 ml-1">*</span>
</label>
```

### Help Text

```html
<p class="mt-2 text-xs text-zinc-500">
  Enter a descriptive name for your task
</p>
```

### Error Text

```html
<p class="mt-2 text-xs text-red-400 flex items-center gap-1">
  <AlertCircle class="w-3 h-3" />
  This field is required
</p>
```

## Code Typography

### Inline Code

```html
<code class="text-sm font-mono bg-zinc-800 px-1.5 py-0.5 rounded text-zinc-200">
  npm install
</code>
```

### Code Blocks

```html
<pre class="text-sm font-mono bg-zinc-900 p-4 rounded-lg overflow-x-auto">
  <code class="text-zinc-100">
    // Your code here
  </code>
</pre>
```

## Accessibility

### Minimum Font Sizes

- **Body text**: 14px minimum (`text-sm`)
- **Interactive elements**: 14px minimum
- **Captions**: 12px minimum (`text-xs`)

### Line Height

Adequate line height improves readability:

- **Body text**: 1.5 (150%)
- **Headings**: 1.25-1.33 (125-133%)
- **Compact UI**: 1.25 (125%)

### Contrast

All text colors meet WCAG 2.1 AA requirements:

| Text Color | Background | Ratio | Passes |
|------------|------------|-------|--------|
| `zinc-100` | `zinc-900` | 15.1:1 | AAA |
| `zinc-200` | `zinc-900` | 12.1:1 | AAA |
| `zinc-300` | `zinc-900` | 8.5:1 | AAA |
| `zinc-400` | `zinc-900` | 5.4:1 | AA |
| `zinc-500` | `zinc-900` | 3.5:1 | AA Large |

## Best Practices

1. **Use semantic hierarchy**: h1 > h2 > h3 > h4
2. **Limit line length**: 65-75 characters for body text
3. **Consistent spacing**: Use Tailwind's spacing scale
4. **Don't skip heading levels**: Go from h2 to h3, not h2 to h4
5. **Use font weights sparingly**: Regular (400) and Medium (500) cover most cases
