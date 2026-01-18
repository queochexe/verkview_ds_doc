# Checkbox

Form checkbox component with label support.

<ComponentDemo title="Checkbox Examples">
  <div class="space-y-3">
    <DsCheckbox label="Accept terms and conditions" />
    <DsCheckbox label="Subscribe to newsletter" :model-value="true" />
    <DsCheckbox label="Disabled option" :disabled="true" />
  </div>
</ComponentDemo>

## Import

```typescript
import { DsCheckbox } from '@verkview/design-system'
```

## Usage

```vue
<script setup>
import { ref } from 'vue'

const agreed = ref(false)
</script>

<template>
  <DsCheckbox
    v-model="agreed"
    label="I agree to the terms of service"
  />
</template>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `modelValue` | `boolean` | `false` | Checkbox checked state (v-model) |
| `label` | `string` | `undefined` | Label text displayed next to checkbox |
| `disabled` | `boolean` | `false` | Disables the checkbox |
| `id` | `string` | `auto-generated` | Custom checkbox ID |
| `ariaLabel` | `string` | `undefined` | Accessible label when no visible label |
| `className` | `string` | `''` | Additional CSS classes |

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `update:modelValue` | `boolean` | Emitted when checkbox state changes |

## States

### Unchecked

<ComponentDemo>
  <DsCheckbox label="Unchecked option" />
</ComponentDemo>

```vue
<DsCheckbox v-model="checked" label="Unchecked option" />
```

### Checked

<ComponentDemo>
  <DsCheckbox label="Checked option" :model-value="true" />
</ComponentDemo>

```vue
<DsCheckbox v-model="checked" label="Checked option" />
<!-- When checked = true -->
```

### Disabled

<ComponentDemo>
  <div class="space-y-2">
    <DsCheckbox label="Disabled unchecked" :disabled="true" />
    <DsCheckbox label="Disabled checked" :disabled="true" :model-value="true" />
  </div>
</ComponentDemo>

```vue
<DsCheckbox
  v-model="checked"
  label="Disabled"
  :disabled="true"
/>
```

### Without Label

When no visible label is needed, provide `aria-label`:

<ComponentDemo>
  <DsCheckbox aria-label="Select this item" />
</ComponentDemo>

```vue
<DsCheckbox
  v-model="selected"
  aria-label="Select this item"
/>
```

## Accessibility

### ARIA Attributes

The component automatically includes:

- `aria-checked` reflecting the current state
- `aria-disabled` when disabled
- Properly associated `<label>` element

### Keyboard Support

| Key | Action |
|-----|--------|
| `Space` | Toggle checkbox |
| `Tab` | Focus/blur checkbox |

### Without Visible Label

Always provide `aria-label` when there's no visible label:

```vue
<DsCheckbox
  v-model="selected"
  aria-label="Select row"
/>
```

## Best Practices

1. **Clear labels**: Use descriptive labels that explain the option
2. **Positive phrasing**: Phrase labels so checked = positive action
3. **Accessible labels**: Always include a label or aria-label
4. **Logical grouping**: Group related checkboxes together
5. **Default states**: Consider whether options should be pre-checked

## Examples

### Terms Agreement

```vue
<template>
  <DsCheckbox
    v-model="agreed"
    label="I agree to the terms of service and privacy policy"
    :required="true"
  />
</template>
```

### Feature Toggles

```vue
<template>
  <div class="space-y-3">
    <h3 class="text-sm font-medium text-zinc-300">Notifications</h3>
    <DsCheckbox
      v-model="settings.emailNotifications"
      label="Email notifications"
    />
    <DsCheckbox
      v-model="settings.pushNotifications"
      label="Push notifications"
    />
    <DsCheckbox
      v-model="settings.weeklyDigest"
      label="Weekly digest"
    />
  </div>
</template>
```

### Table Selection

```vue
<template>
  <table>
    <thead>
      <tr>
        <th>
          <DsCheckbox
            :model-value="allSelected"
            aria-label="Select all"
            @update:model-value="toggleAll"
          />
        </th>
        <th>Name</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in items" :key="item.id">
        <td>
          <DsCheckbox
            :model-value="selected.has(item.id)"
            :aria-label="`Select ${item.name}`"
            @update:model-value="(v) => toggleItem(item.id, v)"
          />
        </td>
        <td>{{ item.name }}</td>
      </tr>
    </tbody>
  </table>
</template>
```

### Label Selection

```vue
<template>
  <div class="space-y-2">
    <p class="text-sm text-zinc-400">Select labels:</p>
    <div class="flex flex-wrap gap-2">
      <DsCheckbox
        v-for="label in availableLabels"
        :key="label.id"
        v-model="selectedLabels[label.id]"
        :label="label.name"
      />
    </div>
  </div>
</template>
```
