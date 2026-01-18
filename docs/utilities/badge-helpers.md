# Badge Helpers

Utility functions for mapping colors to badge variants.

## Import

```typescript
import { getLabelVariant, ContrastChecker } from '@verkview/design-system'
```

## getLabelVariant

Maps hex color values to appropriate badge variant names.

### Usage

```typescript
import { getLabelVariant } from '@verkview/design-system'

const variant = getLabelVariant('#22c55e')
// Returns: 'success'
```

### Color Mapping Table

| Hex Color | Color Name | Badge Variant |
|-----------|------------|---------------|
| `#ef4444` | Red | `error` |
| `#f59e0b` | Orange | `warning` |
| `#eab308` | Yellow | `warning` |
| `#22c55e` | Green | `success` |
| `#3b82f6` | Blue | `info` |
| `#8b5cf6` | Purple | `purple` |
| `#ec4899` | Pink | `purple` |
| `#6b7280` | Gray | `default` |

### Example with Dynamic Labels

```vue
<script setup>
import { getLabelVariant } from '@verkview/design-system'

const labels = [
  { id: '1', name: 'Bug', color: '#ef4444' },
  { id: '2', name: 'Feature', color: '#3b82f6' },
  { id: '3', name: 'Urgent', color: '#f59e0b' },
  { id: '4', name: 'Done', color: '#22c55e' }
]
</script>

<template>
  <div class="flex gap-1">
    <DsBadge
      v-for="label in labels"
      :key="label.id"
      :variant="getLabelVariant(label.color)"
    >
      {{ label.name }}
    </DsBadge>
  </div>
</template>
```

### Implementation

```typescript
export function getLabelVariant(hexColor: string): string {
  const colorMap: Record<string, string> = {
    '#ef4444': 'error',     // red
    '#f59e0b': 'warning',   // orange
    '#eab308': 'warning',   // yellow
    '#22c55e': 'success',   // green
    '#3b82f6': 'info',      // blue
    '#8b5cf6': 'purple',    // purple
    '#ec4899': 'purple',    // pink
    '#6b7280': 'default'    // gray
  }

  return colorMap[hexColor.toLowerCase()] || 'default'
}
```

## ContrastChecker

Utility class for calculating and verifying color contrast ratios per WCAG guidelines.

### `hexToRGB(hex)`

Converts a hex color to RGB values.

```typescript
ContrastChecker.hexToRGB(hex: string): { r: number; g: number; b: number }
```

**Example:**
```typescript
const rgb = ContrastChecker.hexToRGB('#3b82f6')
// Returns: { r: 59, g: 130, b: 246 }
```

### `getRelativeLuminance(rgb)`

Calculates the relative luminance of a color per WCAG formula.

```typescript
ContrastChecker.getRelativeLuminance(rgb: { r: number; g: number; b: number }): number
```

**Example:**
```typescript
const luminance = ContrastChecker.getRelativeLuminance({ r: 59, g: 130, b: 246 })
// Returns: ~0.21
```

### `calculateContrastRatio(foreground, background)`

Calculates the contrast ratio between two hex colors.

```typescript
ContrastChecker.calculateContrastRatio(foreground: string, background: string): number
```

**Example:**
```typescript
const ratio = ContrastChecker.calculateContrastRatio('#fafafa', '#18181b')
// Returns: ~15.1
```

### `meetsWCAGRequirement(ratio, level, fontSize, isBold)`

Checks if a contrast ratio meets WCAG requirements.

```typescript
ContrastChecker.meetsWCAGRequirement(
  ratio: number,
  level: 'AA' | 'AAA',
  fontSize: number,
  isBold?: boolean
): boolean
```

**Parameters:**
- `ratio` - The contrast ratio to check
- `level` - WCAG level ('AA' or 'AAA')
- `fontSize` - Font size in pixels
- `isBold` - Whether text is bold (optional)

**WCAG Requirements:**

| Level | Normal Text | Large Text |
|-------|-------------|------------|
| AA | 4.5:1 | 3:1 |
| AAA | 7:1 | 4.5:1 |

*Large text = 18px+ or 14px bold*

**Example:**
```typescript
const ratio = ContrastChecker.calculateContrastRatio('#ffffff', '#000000')
// Returns: 21

const passesAA = ContrastChecker.meetsWCAGRequirement(ratio, 'AA', 14)
// Returns: true

const passesAAA = ContrastChecker.meetsWCAGRequirement(ratio, 'AAA', 14)
// Returns: true
```

## Common Patterns

### Label Color Picker

```vue
<script setup>
import { ref } from 'vue'
import { getLabelVariant, ContrastChecker } from '@verkview/design-system'

const availableColors = [
  { hex: '#ef4444', name: 'Red' },
  { hex: '#f59e0b', name: 'Orange' },
  { hex: '#22c55e', name: 'Green' },
  { hex: '#3b82f6', name: 'Blue' },
  { hex: '#8b5cf6', name: 'Purple' }
]

const selectedColor = ref('#3b82f6')

const previewVariant = computed(() => getLabelVariant(selectedColor.value))
</script>

<template>
  <div class="space-y-4">
    <div class="flex gap-2">
      <button
        v-for="color in availableColors"
        :key="color.hex"
        :style="{ backgroundColor: color.hex }"
        :class="[
          'w-8 h-8 rounded-full border-2',
          selectedColor === color.hex ? 'border-white' : 'border-transparent'
        ]"
        :aria-label="`Select ${color.name}`"
        @click="selectedColor = color.hex"
      />
    </div>

    <div>
      <span class="text-sm text-zinc-400">Preview:</span>
      <DsBadge :variant="previewVariant">Label</DsBadge>
    </div>
  </div>
</template>
```

### Contrast Validation

```typescript
import { ContrastChecker } from '@verkview/design-system'

function validateColorCombination(
  textColor: string,
  bgColor: string,
  fontSize: number
): { valid: boolean; ratio: number; message: string } {
  const ratio = ContrastChecker.calculateContrastRatio(textColor, bgColor)
  const valid = ContrastChecker.meetsWCAGRequirement(ratio, 'AA', fontSize)

  return {
    valid,
    ratio: Math.round(ratio * 100) / 100,
    message: valid
      ? `Contrast ratio ${ratio.toFixed(1)}:1 passes WCAG AA`
      : `Contrast ratio ${ratio.toFixed(1)}:1 fails WCAG AA (needs 4.5:1)`
  }
}
```

### Theme Validator

```typescript
import { ContrastChecker } from '@verkview/design-system'

const themeColors = {
  background: '#18181b',
  foreground: '#fafafa',
  muted: '#71717a',
  accent: '#3b82f6'
}

function validateTheme(colors: Record<string, string>) {
  const results: Record<string, { ratio: number; passes: boolean }> = {}

  // Check foreground on background
  const fgRatio = ContrastChecker.calculateContrastRatio(
    colors.foreground,
    colors.background
  )
  results.foreground = {
    ratio: fgRatio,
    passes: ContrastChecker.meetsWCAGRequirement(fgRatio, 'AA', 14)
  }

  // Check muted on background
  const mutedRatio = ContrastChecker.calculateContrastRatio(
    colors.muted,
    colors.background
  )
  results.muted = {
    ratio: mutedRatio,
    passes: ContrastChecker.meetsWCAGRequirement(mutedRatio, 'AA', 14)
  }

  return results
}
```

## Best Practices

1. **Fallback to default** - Unknown colors should map to 'default' variant
2. **Case insensitive** - Handle both uppercase and lowercase hex codes
3. **Validate contrast** - Use ContrastChecker for custom color combinations
4. **Consider context** - Badge variants are designed for dark backgrounds
5. **Test accessibility** - Verify badge colors are readable in all contexts

## Related

- [Badge Component](/components/badge) - Uses these helpers for color mapping
- [Colors Foundation](/foundations/colors) - Full color palette reference
- [Accessibility Guide](/foundations/accessibility) - WCAG compliance details
