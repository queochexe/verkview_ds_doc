# Spacing

Consistent spacing creates visual harmony and improves usability.

## Spacing Scale

The design system uses Tailwind's default spacing scale (4px base unit):

| Token | Value | Pixels | Usage |
|-------|-------|--------|-------|
| `0` | 0 | 0px | No spacing |
| `0.5` | 0.125rem | 2px | Hairline gaps |
| `1` | 0.25rem | 4px | Tight spacing |
| `1.5` | 0.375rem | 6px | Very small |
| `2` | 0.5rem | 8px | Default small |
| `2.5` | 0.625rem | 10px | Medium-small |
| `3` | 0.75rem | 12px | Medium |
| `4` | 1rem | 16px | Default |
| `5` | 1.25rem | 20px | Medium-large |
| `6` | 1.5rem | 24px | Large |
| `8` | 2rem | 32px | Extra large |
| `10` | 2.5rem | 40px | Section spacing |
| `12` | 3rem | 48px | Major sections |

## Component Spacing

### Buttons

```css
/* Small */
.btn-sm {
  padding: 6px 12px;  /* py-1.5 px-3 */
}

/* Medium */
.btn-md {
  padding: 10px 20px;  /* py-2.5 px-5 */
}

/* Large */
.btn-lg {
  padding: 12px 24px;  /* py-3 px-6 */
}
```

### Cards

```css
.card {
  padding: 12px;  /* p-3 */
}

/* Card with sections */
.card-header {
  padding: 16px 24px;  /* p-4 md:p-6 */
  border-bottom: 1px solid;
}

.card-content {
  padding: 16px 24px;  /* p-4 md:p-6 */
}

.card-footer {
  padding: 16px 24px;  /* p-4 md:p-6 */
  border-top: 1px solid;
}
```

### Form Fields

```css
/* Input */
.input {
  padding: 10px 16px;  /* py-2.5 px-4 */
}

/* Label margin */
.label {
  margin-bottom: 8px;  /* mb-2 */
}

/* Help text margin */
.help-text {
  margin-top: 8px;  /* mt-2 */
}

/* Field group spacing */
.field-group {
  margin-bottom: 16px;  /* mb-4 */
}
```

### Modals

```css
/* Modal padding (mobile) */
.modal-mobile {
  padding: 16px;  /* p-4 */
}

/* Modal padding (desktop) */
.modal-desktop {
  padding: 24px;  /* p-6 */
}
```

## Touch Targets

### WCAG 2.1 Requirements

Interactive elements must meet minimum touch target sizes:

| Target | Minimum Size | CSS |
|--------|--------------|-----|
| Primary actions | 44 x 44px | `min-h-[44px] min-w-[44px]` |
| Secondary actions | 24 x 24px | `min-h-[24px] min-w-[24px]` |

### Implementation

```vue
<!-- Primary button -->
<DsButton size="md" class="min-h-[44px]">
  Save Changes
</DsButton>

<!-- Icon button -->
<DsButton
  variant="icon"
  class="min-w-[44px] min-h-[44px]"
  aria-label="Close"
>
  <X class="w-4 h-4" />
</DsButton>
```

## Gap Utilities

Use `gap` for flexbox and grid layouts:

```html
<!-- Tight gap -->
<div class="flex gap-1">...</div>  <!-- 4px -->

<!-- Default gap -->
<div class="flex gap-2">...</div>  <!-- 8px -->

<!-- Medium gap -->
<div class="flex gap-3">...</div>  <!-- 12px -->

<!-- Large gap -->
<div class="flex gap-4">...</div>  <!-- 16px -->

<!-- Grid with gap -->
<div class="grid grid-cols-3 gap-4">...</div>
```

## Section Spacing

### Vertical Rhythm

```html
<!-- Page sections -->
<section class="space-y-8">
  <div class="space-y-4">
    <h2>Section Title</h2>
    <p>Section content...</p>
  </div>

  <div class="space-y-4">
    <h2>Another Section</h2>
    <p>More content...</p>
  </div>
</section>
```

### Container Padding

```html
<!-- Mobile: 16px, Desktop: 24px -->
<div class="p-4 md:p-6">
  Content
</div>

<!-- Full bleed on mobile -->
<div class="p-0 md:p-4">
  Content
</div>
```

## Sidebar Spacing

```css
/* Sidebar container */
.sidebar {
  width: 256px;  /* w-64 */
}

/* Sidebar header */
.sidebar-header {
  height: 56px;  /* h-14 */
  padding: 0 16px;  /* px-4 */
}

/* Sidebar navigation */
.sidebar-nav {
  padding: 16px 8px;  /* py-4 px-2 */
}

/* Navigation item */
.nav-item {
  padding: 6px 8px;  /* py-1.5 px-2 */
  gap: 10px;  /* gap-2.5 */
}

/* Section heading */
.nav-section-heading {
  padding: 0 8px;  /* px-2 */
  margin-bottom: 8px;  /* mb-2 */
}
```

## Badge Spacing

```css
/* Small badge */
.badge-sm {
  padding: 2px 6px;  /* py-0.5 px-1.5 */
}

/* Medium badge */
.badge-md {
  padding: 2px 6px;  /* py-0.5 px-1.5 */
}

/* Large badge */
.badge-lg {
  padding: 4px 8px;  /* py-1 px-2 */
}

/* Badge with icon */
.badge-icon {
  gap: 4px;  /* gap-1 */
}
```

## Table Spacing

```css
/* Table header cell */
.th {
  padding: 10px 16px;  /* py-2.5 px-4 */
}

/* Table body cell */
.td {
  padding: 12px 16px;  /* py-3 px-4 */
}
```

## Responsive Spacing

### Mobile-First Pattern

```html
<!-- Smaller on mobile, larger on desktop -->
<div class="p-3 md:p-4 lg:p-6">
  Content
</div>

<div class="gap-2 md:gap-3 lg:gap-4">
  Items
</div>
```

### Common Breakpoints

| Breakpoint | Width | Usage |
|------------|-------|-------|
| `sm` | 640px | Large phones |
| `md` | 768px | Tablets |
| `lg` | 1024px | Laptops |
| `xl` | 1280px | Desktops |

## Best Practices

1. **Use consistent scale**: Stick to the spacing scale values
2. **Group related elements**: Use tighter spacing within groups
3. **Separate unrelated elements**: Use larger spacing between groups
4. **Consider touch targets**: Ensure 44px minimum for primary actions
5. **Test on mobile**: Spacing that looks good on desktop may be too large on mobile
6. **Use gap over margins**: Prefer `gap` for flexbox/grid layouts
