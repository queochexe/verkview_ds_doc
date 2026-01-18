<script setup lang="ts">
import { ref } from 'vue'
import { Plus, Download, ArrowRight, Trash2, Save, Check, Loader2 } from 'lucide-vue-next'

const loading = ref(false)

const simulateLoading = () => {
  loading.value = true
  setTimeout(() => loading.value = false, 2000)
}
</script>

<template>
  <div class="button-showcase">
    <!-- Button Variants -->
    <section class="showcase-section">
      <h3 class="section-title">Button Variants</h3>
      <p class="section-description">Four main variants for different emphasis levels.</p>
      <div class="button-row">
        <button class="btn btn-primary">Primary</button>
        <button class="btn btn-secondary">Secondary</button>
        <button class="btn btn-ghost">Ghost</button>
        <button class="btn btn-danger">Danger</button>
      </div>
    </section>

    <!-- Button Sizes -->
    <section class="showcase-section">
      <h3 class="section-title">Button Sizes</h3>
      <p class="section-description">Five sizes from extra small to extra large. Mobile-safe sizes (md and above) meet 44px touch target requirement.</p>
      <div class="button-row items-end">
        <button class="btn btn-primary btn-xs">Extra Small</button>
        <button class="btn btn-primary btn-sm">Small</button>
        <button class="btn btn-primary btn-md">Medium (Default)</button>
        <button class="btn btn-primary btn-lg">Large</button>
        <button class="btn btn-primary btn-xl">Extra Large</button>
      </div>
    </section>

    <!-- Buttons with Icons -->
    <section class="showcase-section">
      <h3 class="section-title">Buttons with Icons</h3>
      <p class="section-description">Icons can be positioned left, right, or used alone.</p>
      <div class="button-row">
        <button class="btn btn-primary">
          <Plus class="w-4 h-4" />
          New Issue
        </button>
        <button class="btn btn-success">
          <Download class="w-4 h-4" />
          Download
        </button>
        <button class="btn btn-ghost">
          Continue
          <ArrowRight class="w-4 h-4" />
        </button>
        <button class="btn btn-danger">
          <Trash2 class="w-4 h-4" />
          Delete
        </button>
      </div>
    </section>

    <!-- Icon-only Buttons -->
    <section class="showcase-section">
      <h3 class="section-title">Icon-only Buttons</h3>
      <p class="section-description">Compact icon buttons for toolbars and tight spaces. Always include aria-label for accessibility.</p>
      <div class="button-row">
        <button class="btn btn-icon btn-ghost" aria-label="Add new">
          <Plus class="w-5 h-5" />
        </button>
        <button class="btn btn-icon btn-ghost" aria-label="Download">
          <Download class="w-5 h-5" />
        </button>
        <button class="btn btn-icon btn-ghost" aria-label="Delete">
          <Trash2 class="w-5 h-5" />
        </button>
      </div>
    </section>

    <!-- Button States -->
    <section class="showcase-section">
      <h3 class="section-title">Button States</h3>
      <p class="section-description">All interactive states with proper visual feedback.</p>
      <div class="states-grid">
        <div class="state-group">
          <span class="state-label">Interactive States</span>
          <div class="state-buttons">
            <button class="btn btn-primary">Default (Hover me)</button>
            <button class="btn btn-primary btn-focused">Focused (Keyboard)</button>
            <button class="btn btn-primary btn-active">Active (Pressed)</button>
          </div>
        </div>
        <div class="state-group">
          <span class="state-label">Disabled & Loading</span>
          <div class="state-buttons">
            <button class="btn btn-primary" disabled>Disabled</button>
            <button class="btn btn-primary btn-loading" @click="simulateLoading">
              <Loader2 v-if="loading" class="w-4 h-4 animate-spin" />
              {{ loading ? 'Loading...' : 'Click to Load' }}
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Success Variant -->
    <section class="showcase-section">
      <h3 class="section-title">Success Variant</h3>
      <p class="section-description">For positive actions and confirmations.</p>
      <div class="button-row">
        <button class="btn btn-success">
          <Save class="w-4 h-4" />
          Save Changes
        </button>
        <button class="btn btn-success-outline">
          <Check class="w-4 h-4" />
          Approve
        </button>
      </div>
    </section>

    <!-- Full-width Buttons -->
    <section class="showcase-section">
      <h3 class="section-title">Full-width Buttons</h3>
      <p class="section-description">Spans full width of container, useful for mobile layouts and forms.</p>
      <div class="full-width-demo">
        <button class="btn btn-primary btn-full">Continue</button>
        <button class="btn btn-ghost btn-full">Cancel</button>
      </div>
    </section>

    <!-- Button Groups -->
    <section class="showcase-section">
      <h3 class="section-title">Button Groups</h3>
      <p class="section-description">Multiple buttons grouped together for related actions.</p>
      <div class="groups-demo">
        <div class="group-example">
          <span class="group-label">Horizontal Group</span>
          <div class="btn-group-h">
            <button class="btn btn-secondary">Left</button>
            <button class="btn btn-secondary">Center</button>
            <button class="btn btn-secondary">Right</button>
          </div>
        </div>
        <div class="group-example">
          <span class="group-label">Vertical Group</span>
          <div class="btn-group-v">
            <button class="btn btn-secondary btn-full">Option 1</button>
            <button class="btn btn-secondary btn-full">Option 2</button>
            <button class="btn btn-secondary btn-full">Option 3</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.button-showcase {
  @apply space-y-12;
}

.showcase-section {
  @apply space-y-4;
}

.section-title {
  @apply text-xl font-semibold;
  color: var(--vp-c-text-1);
}

.section-description {
  @apply text-sm;
  color: var(--vp-c-text-2);
}

.button-row {
  @apply flex flex-wrap gap-3;
}

/* Base Button Styles */
.btn {
  @apply inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-all;
  @apply focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-950;
}

/* Sizes */
.btn-xs { @apply px-2.5 py-1 text-xs; }
.btn-sm { @apply px-3 py-1.5 text-sm; }
.btn-md { @apply px-4 py-2 text-sm; }
.btn-lg { @apply px-5 py-2.5 text-base; }
.btn-xl { @apply px-6 py-3 text-lg; }
.btn:not(.btn-xs):not(.btn-sm):not(.btn-lg):not(.btn-xl):not(.btn-icon) {
  @apply px-4 py-2 text-sm;
}

/* Primary - Blue */
.btn-primary {
  @apply text-white;
  background: #3b82f6;
}
.btn-primary:hover:not(:disabled) {
  background: #2563eb;
}
.btn-primary:focus { @apply ring-blue-500; }

/* Secondary */
.btn-secondary {
  color: var(--vp-c-text-1);
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
}
.btn-secondary:hover:not(:disabled) {
  background: var(--vp-c-bg-elv);
  border-color: var(--vp-c-brand-1);
}
.btn-secondary:focus { @apply ring-zinc-500; }

/* Ghost */
.btn-ghost {
  color: var(--vp-c-text-2);
  background: transparent;
  border: 1px solid var(--vp-c-border);
}
.btn-ghost:hover:not(:disabled) {
  color: var(--vp-c-text-1);
  background: var(--vp-c-bg-soft);
}
.btn-ghost:focus { @apply ring-zinc-500; }

/* Danger */
.btn-danger {
  @apply text-white;
  background: #ef4444;
}
.btn-danger:hover:not(:disabled) {
  background: #dc2626;
}
.btn-danger:focus { @apply ring-red-500; }

/* Success */
.btn-success {
  @apply text-white;
  background: #22c55e;
}
.btn-success:hover:not(:disabled) {
  background: #16a34a;
}
.btn-success:focus { @apply ring-green-500; }

.btn-success-outline {
  @apply text-green-400;
  background: transparent;
  border: 1px solid rgba(34, 197, 94, 0.5);
}
.btn-success-outline:hover:not(:disabled) {
  background: rgba(34, 197, 94, 0.1);
}
.btn-success-outline:focus { @apply ring-green-500; }

/* Icon Button */
.btn-icon {
  @apply p-2.5;
}

/* Full Width */
.btn-full {
  @apply w-full;
}

/* Disabled */
.btn:disabled {
  @apply opacity-50 cursor-not-allowed;
}

/* States Demo */
.btn-focused {
  @apply ring-2 ring-blue-500 ring-offset-2 ring-offset-zinc-950;
}

.btn-active {
  transform: scale(0.98);
  background: #1d4ed8 !important;
}

/* Loading */
.btn-loading {
  @apply relative;
}

/* States Grid */
.states-grid {
  @apply grid md:grid-cols-2 gap-6 p-6 rounded-xl;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
}

.state-group {
  @apply space-y-3;
}

.state-label {
  @apply text-sm;
  color: var(--vp-c-text-2);
}

.state-buttons {
  @apply flex flex-col gap-2;
}

/* Full Width Demo */
.full-width-demo {
  @apply max-w-xs space-y-2;
}

/* Groups Demo */
.groups-demo {
  @apply grid md:grid-cols-2 gap-8;
}

.group-example {
  @apply space-y-3;
}

.group-label {
  @apply text-sm;
  color: var(--vp-c-text-2);
}

.btn-group-h {
  @apply inline-flex;
}
.btn-group-h .btn {
  @apply rounded-none;
}
.btn-group-h .btn:first-child {
  @apply rounded-l-lg;
}
.btn-group-h .btn:last-child {
  @apply rounded-r-lg;
}
.btn-group-h .btn:not(:last-child) {
  border-right: 1px solid var(--vp-c-border);
}

.btn-group-v {
  @apply flex flex-col max-w-xs;
}
.btn-group-v .btn {
  @apply rounded-none;
}
.btn-group-v .btn:first-child {
  @apply rounded-t-lg;
}
.btn-group-v .btn:last-child {
  @apply rounded-b-lg;
}
.btn-group-v .btn:not(:last-child) {
  border-bottom: 1px solid var(--vp-c-border);
}
</style>
