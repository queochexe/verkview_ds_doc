/**
 * Verkview Design System — Token Architecture
 *
 * Three-layer token system:
 *   Primitive  → raw values (colors, sizes, weights)
 *   Semantic   → intent-based aliases (--primary, --destructive, etc.)
 *   Component  → per-component, per-variant mappings
 *
 * This file is the single source of truth consumed by both
 * runtime components (via CSS custom properties) and
 * documentation (via the TokenMap component).
 */

// ─── Primitive Tokens ────────────────────────────────────────────

export const primitives = {
  colors: {
    zinc: {
      50:  { value: '#fafafa',  css: '--zinc-50' },
      100: { value: '#f4f4f5',  css: '--zinc-100' },
      200: { value: '#e4e4e7',  css: '--zinc-200' },
      300: { value: '#d4d4d8',  css: '--zinc-300' },
      400: { value: '#a1a1aa',  css: '--zinc-400' },
      500: { value: '#71717a',  css: '--zinc-500' },
      600: { value: '#52525b',  css: '--zinc-600' },
      700: { value: '#3f3f46',  css: '--zinc-700' },
      800: { value: '#27272a',  css: '--zinc-800' },
      900: { value: '#18181b',  css: '--zinc-900' },
      950: { value: '#09090b',  css: '--zinc-950' },
    },
    blue: {
      400: { value: '#60a5fa', css: '--blue-400' },
      500: { value: '#3b82f6', css: '--blue-500' },
    },
    green: {
      400: { value: '#4ade80', css: '--green-400' },
      500: { value: '#22c55e', css: '--green-500' },
    },
    red: {
      400: { value: '#f87171', css: '--red-400' },
      500: { value: '#ef4444', css: '--red-500' },
    },
    orange: {
      400: { value: '#fb923c', css: '--orange-400' },
      500: { value: '#f97316', css: '--orange-500' },
    },
    purple: {
      400: { value: '#a78bfa', css: '--purple-400' },
      500: { value: '#8b5cf6', css: '--purple-500' },
    },
    black: { value: '#000000', css: '--black' },
    white: { value: '#ffffff', css: '--white' },
  },
  spacing: {
    0:  '0px',
    1:  '4px',
    2:  '8px',
    3:  '12px',
    4:  '16px',
    5:  '20px',
    6:  '24px',
    8:  '32px',
    10: '40px',
    12: '48px',
    16: '64px',
  },
  radius: {
    none: '0px',
    sm:   '2px',
    md:   '4px',
    lg:   '8px',
    xl:   '12px',
    full: '9999px',
  },
  typography: {
    family: {
      sans: 'Inter, system-ui, sans-serif',
      mono: 'JetBrains Mono, monospace',
    },
    size: {
      '2xs': '9px',
      xs:    '10px',
      sm:    '12px',
      base:  '14px',
      lg:    '16px',
      xl:    '20px',
      '2xl': '24px',
      '3xl': '32px',
    },
    weight: {
      normal:   '400',
      medium:   '500',
      semibold: '600',
      bold:     '700',
    },
    leading: {
      tight:  '1.25',
      normal: '1.5',
      relaxed: '1.75',
    },
  },
} as const

// ─── Semantic Tokens ─────────────────────────────────────────────

export const semantics = {
  background:               { css: '--background',               dark: 'zinc.950', light: 'white' },
  foreground:               { css: '--foreground',               dark: 'zinc.50',  light: 'zinc.950' },
  primary:                  { css: '--primary',                  dark: 'zinc.100', light: 'zinc.950' },
  'primary-foreground':     { css: '--primary-foreground',       dark: 'zinc.950', light: 'zinc.50' },
  secondary:                { css: '--secondary',                dark: 'zinc.800', light: 'zinc.200' },
  'secondary-foreground':   { css: '--secondary-foreground',     dark: 'zinc.100', light: 'zinc.900' },
  muted:                    { css: '--muted',                    dark: 'zinc.800', light: 'zinc.200' },
  'muted-foreground':       { css: '--muted-foreground',         dark: 'zinc.400', light: 'zinc.500' },
  accent:                   { css: '--accent',                   dark: 'zinc.800', light: 'zinc.200' },
  'accent-foreground':      { css: '--accent-foreground',        dark: 'zinc.100', light: 'zinc.900' },
  destructive:              { css: '--destructive',              dark: 'red.500',  light: 'red.500' },
  'destructive-foreground': { css: '--destructive-foreground',   dark: 'zinc.50',  light: 'zinc.50' },
  border:                   { css: '--border',                   dark: 'zinc.800', light: 'zinc.200' },
  input:                    { css: '--input',                    dark: 'zinc.800', light: 'zinc.200' },
  ring:                     { css: '--ring',                     dark: 'zinc.700', light: 'zinc.400' },
  success:                  { css: '--success',                  dark: 'green.500', light: 'green.500' },
  'success-foreground':     { css: '--success-foreground',       dark: 'zinc.50',  light: 'zinc.50' },
  warning:                  { css: '--warning',                  dark: 'orange.500', light: 'orange.500' },
  'warning-foreground':     { css: '--warning-foreground',       dark: 'zinc.50',  light: 'zinc.50' },
  info:                     { css: '--info',                     dark: 'blue.500', light: 'blue.500' },
  'info-foreground':        { css: '--info-foreground',          dark: 'zinc.50',  light: 'zinc.50' },
  error:                    { css: '--error',                    dark: 'red.500',  light: 'red.500' },
  'error-foreground':       { css: '--error-foreground',         dark: 'zinc.50',  light: 'zinc.50' },
} as const

// ─── Component Tokens ────────────────────────────────────────────
// Each entry maps: component part → semantic token → primitive value

export interface ComponentTokenEntry {
  part: string
  componentToken: string
  semanticToken: string
  primitiveToken: string
  primitiveValue: string
}

export interface ComponentTokenGroup {
  component: string
  description: string
  variants: {
    name: string
    tokens: ComponentTokenEntry[]
  }[]
}

export const componentTokens: ComponentTokenGroup[] = [
  {
    component: 'Button',
    description: 'Interactive elements for actions and navigation.',
    variants: [
      {
        name: 'primary',
        tokens: [
          { part: 'Background',    componentToken: '--button-primary-bg',       semanticToken: '--primary',              primitiveToken: 'zinc-100',  primitiveValue: '#f4f4f5' },
          { part: 'Text',          componentToken: '--button-primary-text',     semanticToken: '--primary-foreground',   primitiveToken: 'zinc-950',  primitiveValue: '#09090b' },
          { part: 'Hover bg',      componentToken: '--button-primary-hover',    semanticToken: '--foreground',           primitiveToken: 'white',     primitiveValue: '#ffffff' },
          { part: 'Focus ring',    componentToken: '--button-primary-ring',     semanticToken: '--ring',                 primitiveToken: 'zinc-700',  primitiveValue: '#3f3f46' },
          { part: 'Ring offset',   componentToken: '--button-primary-ring-offset', semanticToken: '--background',        primitiveToken: 'zinc-950',  primitiveValue: '#09090b' },
        ],
      },
      {
        name: 'secondary',
        tokens: [
          { part: 'Background',    componentToken: '--button-secondary-bg',     semanticToken: '--secondary',            primitiveToken: 'zinc-900',  primitiveValue: '#18181b' },
          { part: 'Text',          componentToken: '--button-secondary-text',   semanticToken: '--secondary-foreground', primitiveToken: 'zinc-100',  primitiveValue: '#f4f4f5' },
          { part: 'Border',        componentToken: '--button-secondary-border', semanticToken: '--border',               primitiveToken: 'zinc-800',  primitiveValue: '#27272a' },
          { part: 'Hover border',  componentToken: '--button-secondary-hover-border', semanticToken: '--muted-foreground', primitiveToken: 'zinc-600', primitiveValue: '#52525b' },
          { part: 'Focus ring',    componentToken: '--button-secondary-ring',   semanticToken: '--ring',                 primitiveToken: 'zinc-700',  primitiveValue: '#3f3f46' },
        ],
      },
      {
        name: 'ghost',
        tokens: [
          { part: 'Text',          componentToken: '--button-ghost-text',       semanticToken: '--muted-foreground',     primitiveToken: 'zinc-400',  primitiveValue: '#a1a1aa' },
          { part: 'Hover text',    componentToken: '--button-ghost-hover-text', semanticToken: '--foreground',           primitiveToken: 'zinc-100',  primitiveValue: '#f4f4f5' },
          { part: 'Hover bg',      componentToken: '--button-ghost-hover-bg',   semanticToken: '--accent',               primitiveToken: 'zinc-800/40', primitiveValue: '#27272a66' },
          { part: 'Focus ring',    componentToken: '--button-ghost-ring',       semanticToken: '--ring',                 primitiveToken: 'zinc-700',  primitiveValue: '#3f3f46' },
        ],
      },
      {
        name: 'icon',
        tokens: [
          { part: 'Text',          componentToken: '--button-icon-text',       semanticToken: '--muted-foreground',      primitiveToken: 'zinc-400',  primitiveValue: '#a1a1aa' },
          { part: 'Hover text',    componentToken: '--button-icon-hover-text', semanticToken: '--foreground',            primitiveToken: 'zinc-100',  primitiveValue: '#f4f4f5' },
          { part: 'Hover bg',      componentToken: '--button-icon-hover-bg',   semanticToken: '--accent',                primitiveToken: 'zinc-800',  primitiveValue: '#27272a' },
          { part: 'Focus ring',    componentToken: '--button-icon-ring',       semanticToken: '--ring',                  primitiveToken: 'zinc-700',  primitiveValue: '#3f3f46' },
        ],
      },
    ],
  },
  {
    component: 'Badge',
    description: 'Status indicators and labels.',
    variants: [
      {
        name: 'default',
        tokens: [
          { part: 'Background', componentToken: '--badge-default-bg',     semanticToken: '--secondary',            primitiveToken: 'zinc-800',      primitiveValue: '#27272a' },
          { part: 'Text',       componentToken: '--badge-default-text',   semanticToken: '--muted-foreground',     primitiveToken: 'zinc-400',      primitiveValue: '#a1a1aa' },
          { part: 'Border',     componentToken: '--badge-default-border', semanticToken: '--border',               primitiveToken: 'zinc-700/50',   primitiveValue: '#3f3f4680' },
        ],
      },
      {
        name: 'info',
        tokens: [
          { part: 'Background', componentToken: '--badge-info-bg',     semanticToken: '--info / 10%',     primitiveToken: 'blue-500/10',   primitiveValue: '#3b82f61a' },
          { part: 'Text',       componentToken: '--badge-info-text',   semanticToken: '--info-foreground', primitiveToken: 'blue-400',      primitiveValue: '#60a5fa' },
          { part: 'Border',     componentToken: '--badge-info-border', semanticToken: '--info / 20%',     primitiveToken: 'blue-500/20',   primitiveValue: '#3b82f633' },
        ],
      },
      {
        name: 'success',
        tokens: [
          { part: 'Background', componentToken: '--badge-success-bg',     semanticToken: '--success / 10%',     primitiveToken: 'green-500/10',  primitiveValue: '#22c55e1a' },
          { part: 'Text',       componentToken: '--badge-success-text',   semanticToken: '--success-foreground', primitiveToken: 'green-400',     primitiveValue: '#4ade80' },
          { part: 'Border',     componentToken: '--badge-success-border', semanticToken: '--success / 20%',     primitiveToken: 'green-500/20',  primitiveValue: '#22c55e33' },
        ],
      },
      {
        name: 'warning',
        tokens: [
          { part: 'Background', componentToken: '--badge-warning-bg',     semanticToken: '--warning / 10%',     primitiveToken: 'orange-500/10', primitiveValue: '#f973161a' },
          { part: 'Text',       componentToken: '--badge-warning-text',   semanticToken: '--warning-foreground', primitiveToken: 'orange-400',    primitiveValue: '#fb923c' },
          { part: 'Border',     componentToken: '--badge-warning-border', semanticToken: '--warning / 20%',     primitiveToken: 'orange-500/20', primitiveValue: '#f9731633' },
        ],
      },
      {
        name: 'error',
        tokens: [
          { part: 'Background', componentToken: '--badge-error-bg',     semanticToken: '--error / 10%',     primitiveToken: 'red-500/10',    primitiveValue: '#ef44441a' },
          { part: 'Text',       componentToken: '--badge-error-text',   semanticToken: '--error-foreground', primitiveToken: 'red-400',       primitiveValue: '#f87171' },
          { part: 'Border',     componentToken: '--badge-error-border', semanticToken: '--error / 20%',     primitiveToken: 'red-500/20',    primitiveValue: '#ef444433' },
        ],
      },
      {
        name: 'purple',
        tokens: [
          { part: 'Background', componentToken: '--badge-purple-bg',     semanticToken: '—',              primitiveToken: 'purple-500/10', primitiveValue: '#8b5cf61a' },
          { part: 'Text',       componentToken: '--badge-purple-text',   semanticToken: '—',              primitiveToken: 'purple-400',    primitiveValue: '#a78bfa' },
          { part: 'Border',     componentToken: '--badge-purple-border', semanticToken: '—',              primitiveToken: 'purple-500/20', primitiveValue: '#8b5cf633' },
        ],
      },
    ],
  },
  {
    component: 'Input',
    description: 'Text input fields with label, validation, and help text.',
    variants: [
      {
        name: 'default',
        tokens: [
          { part: 'Background',    componentToken: '--input-bg',           semanticToken: '--secondary',          primitiveToken: 'zinc-900',  primitiveValue: '#18181b' },
          { part: 'Text',          componentToken: '--input-text',         semanticToken: '--foreground',         primitiveToken: 'zinc-200',  primitiveValue: '#e4e4e7' },
          { part: 'Border',        componentToken: '--input-border',       semanticToken: '--border',             primitiveToken: 'zinc-800',  primitiveValue: '#27272a' },
          { part: 'Placeholder',   componentToken: '--input-placeholder',  semanticToken: '--muted-foreground',   primitiveToken: 'zinc-600',  primitiveValue: '#52525b' },
          { part: 'Focus border',  componentToken: '--input-focus-border', semanticToken: '--ring',               primitiveToken: 'zinc-700',  primitiveValue: '#3f3f46' },
          { part: 'Focus ring',    componentToken: '--input-focus-ring',   semanticToken: '--ring',               primitiveToken: 'zinc-700',  primitiveValue: '#3f3f46' },
          { part: 'Label',         componentToken: '--input-label',        semanticToken: '--foreground',         primitiveToken: 'zinc-300',  primitiveValue: '#d4d4d8' },
        ],
      },
      {
        name: 'error',
        tokens: [
          { part: 'Border',        componentToken: '--input-error-border', semanticToken: '--error',              primitiveToken: 'red-500',   primitiveValue: '#ef4444' },
          { part: 'Focus ring',    componentToken: '--input-error-ring',   semanticToken: '--error',              primitiveToken: 'red-500',   primitiveValue: '#ef4444' },
          { part: 'Message',       componentToken: '--input-error-text',   semanticToken: '--error-foreground',   primitiveToken: 'red-400',   primitiveValue: '#f87171' },
        ],
      },
      {
        name: 'success',
        tokens: [
          { part: 'Border',        componentToken: '--input-success-border', semanticToken: '--success',          primitiveToken: 'green-500', primitiveValue: '#22c55e' },
          { part: 'Focus ring',    componentToken: '--input-success-ring',   semanticToken: '--success',          primitiveToken: 'green-500', primitiveValue: '#22c55e' },
          { part: 'Message',       componentToken: '--input-success-text',   semanticToken: '--success-foreground', primitiveToken: 'green-400', primitiveValue: '#4ade80' },
        ],
      },
    ],
  },
  {
    component: 'Textarea',
    description: 'Multi-line text input with validation states.',
    variants: [
      {
        name: 'default',
        tokens: [
          { part: 'Background',    componentToken: '--textarea-bg',           semanticToken: '--secondary',        primitiveToken: 'zinc-900',  primitiveValue: '#18181b' },
          { part: 'Text',          componentToken: '--textarea-text',         semanticToken: '--foreground',       primitiveToken: 'zinc-200',  primitiveValue: '#e4e4e7' },
          { part: 'Border',        componentToken: '--textarea-border',       semanticToken: '--border',           primitiveToken: 'zinc-800',  primitiveValue: '#27272a' },
          { part: 'Placeholder',   componentToken: '--textarea-placeholder',  semanticToken: '--muted-foreground', primitiveToken: 'zinc-600',  primitiveValue: '#52525b' },
          { part: 'Focus border',  componentToken: '--textarea-focus-border', semanticToken: '--ring',             primitiveToken: 'zinc-700',  primitiveValue: '#3f3f46' },
          { part: 'Label',         componentToken: '--textarea-label',        semanticToken: '--foreground',       primitiveToken: 'zinc-300',  primitiveValue: '#d4d4d8' },
        ],
      },
    ],
  },
  {
    component: 'Checkbox',
    description: 'Selection control for binary choices.',
    variants: [
      {
        name: 'default',
        tokens: [
          { part: 'Border',         componentToken: '--checkbox-border',        semanticToken: '--ring',            primitiveToken: 'zinc-700',  primitiveValue: '#3f3f46' },
          { part: 'Checked bg',     componentToken: '--checkbox-checked-bg',    semanticToken: '--info',            primitiveToken: 'blue-500',  primitiveValue: '#3b82f6' },
          { part: 'Checked border', componentToken: '--checkbox-checked-border', semanticToken: '--info',           primitiveToken: 'blue-500',  primitiveValue: '#3b82f6' },
          { part: 'Checkmark',      componentToken: '--checkbox-checkmark',     semanticToken: '--foreground',      primitiveToken: 'white',     primitiveValue: '#ffffff' },
          { part: 'Label',          componentToken: '--checkbox-label',         semanticToken: '--foreground',      primitiveToken: 'zinc-300',  primitiveValue: '#d4d4d8' },
          { part: 'Focus outline',  componentToken: '--checkbox-focus',         semanticToken: '--ring',            primitiveToken: 'zinc-700',  primitiveValue: '#3f3f46' },
        ],
      },
    ],
  },
  {
    component: 'Card',
    description: 'Container for grouped content.',
    variants: [
      {
        name: 'default',
        tokens: [
          { part: 'Background', componentToken: '--card-bg',         semanticToken: '--card',              primitiveToken: 'zinc-900/40', primitiveValue: '#18181b66' },
          { part: 'Border',     componentToken: '--card-border',     semanticToken: '--border',            primitiveToken: 'zinc-800/60', primitiveValue: '#27272a99' },
          { part: 'Hover border', componentToken: '--card-hover-border', semanticToken: '--border',        primitiveToken: 'zinc-700/80', primitiveValue: '#3f3f46cc' },
          { part: 'Title',      componentToken: '--card-title',      semanticToken: '--foreground',        primitiveToken: 'zinc-200',    primitiveValue: '#e4e4e7' },
          { part: 'Body text',  componentToken: '--card-body',       semanticToken: '--muted-foreground',  primitiveToken: 'zinc-400',    primitiveValue: '#a1a1aa' },
          { part: 'Divider',    componentToken: '--card-divider',    semanticToken: '--border',            primitiveToken: 'zinc-800',    primitiveValue: '#27272a' },
        ],
      },
      {
        name: 'elevated',
        tokens: [
          { part: 'Background', componentToken: '--card-elevated-bg',     semanticToken: '--card',   primitiveToken: 'zinc-900',  primitiveValue: '#18181b' },
          { part: 'Border',     componentToken: '--card-elevated-border', semanticToken: '--border',  primitiveToken: 'zinc-800',  primitiveValue: '#27272a' },
        ],
      },
    ],
  },
  {
    component: 'Modal',
    description: 'Dialog overlay for focused interactions.',
    variants: [
      {
        name: 'default',
        tokens: [
          { part: 'Overlay',     componentToken: '--modal-overlay',      semanticToken: '—',                 primitiveToken: 'black/60',  primitiveValue: '#00000099' },
          { part: 'Background',  componentToken: '--modal-bg',           semanticToken: '--card',             primitiveToken: 'zinc-900',  primitiveValue: '#18181b' },
          { part: 'Border',      componentToken: '--modal-border',       semanticToken: '--border',           primitiveToken: 'zinc-800',  primitiveValue: '#27272a' },
          { part: 'Title',       componentToken: '--modal-title',        semanticToken: '--foreground',       primitiveToken: 'zinc-100',  primitiveValue: '#f4f4f5' },
          { part: 'Divider',     componentToken: '--modal-divider',      semanticToken: '--border',           primitiveToken: 'zinc-800',  primitiveValue: '#27272a' },
        ],
      },
    ],
  },
  {
    component: 'Toast',
    description: 'Temporary notification messages.',
    variants: [
      {
        name: 'info',
        tokens: [
          { part: 'Background', componentToken: '--toast-bg',           semanticToken: '--card',             primitiveToken: 'zinc-900',      primitiveValue: '#18181b' },
          { part: 'Border',     componentToken: '--toast-info-border',  semanticToken: '--info / 20%',       primitiveToken: 'blue-500/20',   primitiveValue: '#3b82f633' },
          { part: 'Icon',       componentToken: '--toast-info-icon',    semanticToken: '--info-foreground',   primitiveToken: 'blue-400',      primitiveValue: '#60a5fa' },
          { part: 'Text',       componentToken: '--toast-text',         semanticToken: '--foreground',       primitiveToken: 'zinc-200',      primitiveValue: '#e4e4e7' },
          { part: 'Dismiss',    componentToken: '--toast-dismiss',      semanticToken: '--muted-foreground', primitiveToken: 'zinc-500',      primitiveValue: '#71717a' },
        ],
      },
      {
        name: 'success',
        tokens: [
          { part: 'Border',     componentToken: '--toast-success-border', semanticToken: '--success / 20%',   primitiveToken: 'green-500/20',  primitiveValue: '#22c55e33' },
          { part: 'Icon',       componentToken: '--toast-success-icon',   semanticToken: '--success-foreground', primitiveToken: 'green-400',   primitiveValue: '#4ade80' },
        ],
      },
      {
        name: 'warning',
        tokens: [
          { part: 'Border',     componentToken: '--toast-warning-border', semanticToken: '--warning / 20%',   primitiveToken: 'orange-500/20', primitiveValue: '#f973161a' },
          { part: 'Icon',       componentToken: '--toast-warning-icon',   semanticToken: '--warning-foreground', primitiveToken: 'orange-400',  primitiveValue: '#fb923c' },
        ],
      },
      {
        name: 'error',
        tokens: [
          { part: 'Border',     componentToken: '--toast-error-border', semanticToken: '--error / 20%',       primitiveToken: 'red-500/20',    primitiveValue: '#ef444433' },
          { part: 'Icon',       componentToken: '--toast-error-icon',   semanticToken: '--error-foreground',   primitiveToken: 'red-400',       primitiveValue: '#f87171' },
        ],
      },
    ],
  },
  {
    component: 'Table',
    description: 'Data table with sorting and selection.',
    variants: [
      {
        name: 'default',
        tokens: [
          { part: 'Container bg',   componentToken: '--table-bg',          semanticToken: '--card',              primitiveToken: 'zinc-900/20', primitiveValue: '#18181b33' },
          { part: 'Container border', componentToken: '--table-border',    semanticToken: '--border',            primitiveToken: 'zinc-800/60', primitiveValue: '#27272a99' },
          { part: 'Header bg',      componentToken: '--table-header-bg',   semanticToken: '--secondary',         primitiveToken: 'zinc-900/50', primitiveValue: '#18181b80' },
          { part: 'Header text',    componentToken: '--table-header-text', semanticToken: '--muted-foreground',  primitiveToken: 'zinc-500',    primitiveValue: '#71717a' },
          { part: 'Row border',     componentToken: '--table-row-border',  semanticToken: '--border',            primitiveToken: 'zinc-800/40', primitiveValue: '#27272a66' },
          { part: 'Row hover',      componentToken: '--table-row-hover',   semanticToken: '--accent',            primitiveToken: 'zinc-800/40', primitiveValue: '#27272a66' },
          { part: 'Cell text',      componentToken: '--table-cell-text',   semanticToken: '--foreground',        primitiveToken: 'zinc-300',    primitiveValue: '#d4d4d8' },
        ],
      },
    ],
  },
  {
    component: 'Sidebar',
    description: 'Navigation sidebar with workspace switcher.',
    variants: [
      {
        name: 'default',
        tokens: [
          { part: 'Background',     componentToken: '--sidebar-bg',           semanticToken: '--background',        primitiveToken: 'zinc-950',    primitiveValue: '#09090b' },
          { part: 'Border',         componentToken: '--sidebar-border',       semanticToken: '--border',            primitiveToken: 'zinc-800/60', primitiveValue: '#27272a99' },
          { part: 'Item text',      componentToken: '--sidebar-item-text',    semanticToken: '--muted-foreground',  primitiveToken: 'zinc-400',    primitiveValue: '#a1a1aa' },
          { part: 'Item hover text', componentToken: '--sidebar-item-hover',  semanticToken: '--foreground',        primitiveToken: 'zinc-100',    primitiveValue: '#f4f4f5' },
          { part: 'Item hover bg',  componentToken: '--sidebar-item-hover-bg', semanticToken: '--accent',           primitiveToken: 'zinc-800/40', primitiveValue: '#27272a66' },
          { part: 'Active bg',      componentToken: '--sidebar-active-bg',    semanticToken: '--accent',            primitiveToken: 'zinc-800/40', primitiveValue: '#27272a66' },
          { part: 'Active icon',    componentToken: '--sidebar-active-icon',  semanticToken: '--info',              primitiveToken: 'blue-400',    primitiveValue: '#60a5fa' },
          { part: 'Section title',  componentToken: '--sidebar-section',      semanticToken: '--muted-foreground',  primitiveToken: 'zinc-500',    primitiveValue: '#71717a' },
        ],
      },
    ],
  },
  {
    component: 'Breadcrumbs',
    description: 'Navigation breadcrumb trail.',
    variants: [
      {
        name: 'default',
        tokens: [
          { part: 'Link text',    componentToken: '--breadcrumb-text',       semanticToken: '--muted-foreground', primitiveToken: 'zinc-500',  primitiveValue: '#71717a' },
          { part: 'Link hover',   componentToken: '--breadcrumb-hover',      semanticToken: '--foreground',       primitiveToken: 'zinc-300',  primitiveValue: '#d4d4d8' },
          { part: 'Current page', componentToken: '--breadcrumb-current',    semanticToken: '--foreground',       primitiveToken: 'zinc-200',  primitiveValue: '#e4e4e7' },
          { part: 'Separator',    componentToken: '--breadcrumb-separator',  semanticToken: '--border',           primitiveToken: 'zinc-700',  primitiveValue: '#3f3f46' },
        ],
      },
    ],
  },
]

// ─── Helpers ─────────────────────────────────────────────────────

/** Look up a component token group by name */
export function getComponentTokens(name: string): ComponentTokenGroup | undefined {
  return componentTokens.find(c => c.component.toLowerCase() === name.toLowerCase())
}

/** Get all token entries for a specific component + variant */
export function getVariantTokens(componentName: string, variantName: string): ComponentTokenEntry[] {
  const group = getComponentTokens(componentName)
  if (!group) return []
  const variant = group.variants.find(v => v.name === variantName)
  return variant?.tokens ?? []
}
