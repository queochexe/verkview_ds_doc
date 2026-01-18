# Input

Form input component with label, validation, and help text support.

<ComponentDemo title="Input States">
  <div class="space-y-4 w-full max-w-md">
    <DsInput label="Default" placeholder="Enter text..." />
    <DsInput label="With Error" error="This field is required" />
    <DsInput label="With Success" success="Looks good!" />
  </div>
</ComponentDemo>

## Import

```typescript
import { DsInput } from '@verkview/design-system'
```

## Usage

```vue
<script setup>
import { ref } from 'vue'

const email = ref('')
</script>

<template>
  <DsInput
    v-model="email"
    label="Email"
    type="email"
    placeholder="you@example.com"
  />
</template>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `modelValue` | `string` | `''` | Input value (v-model) |
| `label` | `string` | `undefined` | Label text displayed above input |
| `type` | `string` | `'text'` | HTML input type (text, email, password, etc.) |
| `placeholder` | `string` | `undefined` | Placeholder text |
| `error` | `string` | `undefined` | Error message to display |
| `success` | `string` | `undefined` | Success message to display |
| `helpText` | `string` | `undefined` | Help text below input |
| `required` | `boolean` | `false` | Marks field as required |
| `disabled` | `boolean` | `false` | Disables the input |
| `id` | `string` | `auto-generated` | Custom input ID |

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `update:modelValue` | `string` | Emitted when input value changes |

## States

### Default

<ComponentDemo>
  <DsInput label="Task Name" placeholder="Enter task name..." />
</ComponentDemo>

```vue
<DsInput
  v-model="taskName"
  label="Task Name"
  placeholder="Enter task name..."
/>
```

### With Help Text

<ComponentDemo>
  <DsInput
    label="Email"
    type="email"
    help-text="We'll never share your email address"
  />
</ComponentDemo>

```vue
<DsInput
  v-model="email"
  label="Email"
  type="email"
  help-text="We'll never share your email address"
/>
```

### Error State

<ComponentDemo>
  <DsInput
    label="Username"
    error="Username is already taken"
    model-value="john_doe"
  />
</ComponentDemo>

```vue
<DsInput
  v-model="username"
  label="Username"
  :error="usernameError"
/>
```

### Success State

<ComponentDemo>
  <DsInput
    label="Username"
    success="Username is available"
    model-value="unique_user"
  />
</ComponentDemo>

```vue
<DsInput
  v-model="username"
  label="Username"
  :success="isValid ? 'Username is available' : undefined"
/>
```

### Required Field

<ComponentDemo>
  <DsInput
    label="Email"
    :required="true"
    placeholder="you@example.com"
  />
</ComponentDemo>

```vue
<DsInput
  v-model="email"
  label="Email"
  :required="true"
/>
```

### Disabled

<ComponentDemo>
  <DsInput
    label="Read Only"
    :disabled="true"
    model-value="Cannot edit this"
  />
</ComponentDemo>

```vue
<DsInput
  v-model="value"
  label="Read Only"
  :disabled="true"
/>
```

## Input Types

The component supports all HTML input types:

```vue
<!-- Text (default) -->
<DsInput v-model="name" label="Name" type="text" />

<!-- Email -->
<DsInput v-model="email" label="Email" type="email" />

<!-- Password -->
<DsInput v-model="password" label="Password" type="password" />

<!-- Number -->
<DsInput v-model="age" label="Age" type="number" />

<!-- Date -->
<DsInput v-model="date" label="Due Date" type="date" />

<!-- URL -->
<DsInput v-model="website" label="Website" type="url" />
```

## Validation

### With Vee-Validate

```vue
<script setup>
import { useField } from 'vee-validate'

const { value, errorMessage } = useField('email', validateEmail)
</script>

<template>
  <DsInput
    v-model="value"
    label="Email"
    :error="errorMessage"
  />
</template>
```

### Manual Validation

```vue
<script setup>
import { ref, computed } from 'vue'

const email = ref('')
const touched = ref(false)

const emailError = computed(() => {
  if (!touched.value) return undefined
  if (!email.value) return 'Email is required'
  if (!email.value.includes('@')) return 'Invalid email format'
  return undefined
})
</script>

<template>
  <DsInput
    v-model="email"
    label="Email"
    :error="emailError"
    @blur="touched = true"
  />
</template>
```

## Accessibility

### ARIA Attributes

The component automatically includes:

- `aria-required="true"` when required
- `aria-invalid="true"` when error is present
- `aria-describedby` linking to error/help text
- Properly associated `<label>` element

### Error Announcements

Error messages include `role="alert"` for screen reader announcements:

```html
<p role="alert" class="text-red-400">
  <AlertCircle /> This field is required
</p>
```

### Keyboard Support

| Key | Action |
|-----|--------|
| `Tab` | Focus/blur input |
| Any key | Type in input |

## Styling

### Custom Width

```vue
<DsInput
  v-model="name"
  label="Name"
  class="max-w-xs"
/>
```

### Full Width (Default)

```vue
<div class="w-full">
  <DsInput v-model="name" label="Name" />
</div>
```

## Best Practices

1. **Always use labels**: Don't rely on placeholders alone
2. **Clear error messages**: Be specific about what went wrong
3. **Required indicators**: Use the `required` prop for mandatory fields
4. **Appropriate types**: Use correct `type` for browser validation and keyboard
5. **Help text**: Provide context when the field purpose isn't obvious

## Examples

### Login Form

```vue
<template>
  <form @submit.prevent="login" class="space-y-4">
    <DsInput
      v-model="email"
      label="Email"
      type="email"
      :required="true"
      :error="errors.email"
    />

    <DsInput
      v-model="password"
      label="Password"
      type="password"
      :required="true"
      :error="errors.password"
    />

    <DsButton type="submit" :loading="isLoading">
      Sign In
    </DsButton>
  </form>
</template>
```

### Search Input

```vue
<template>
  <DsInput
    v-model="query"
    placeholder="Search tasks..."
    type="search"
  />
</template>
```
