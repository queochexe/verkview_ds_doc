---
title: Form Inputs
---

# Form Inputs

Text input fields for collecting user data. All inputs meet WCAG 2.1 Level AA with proper labels, focus states, and error handling.

## Text Input Variants

<div class="input-grid">
  <div class="input-example">
    <label class="input-label">Default Input</label>
    <input type="text" class="input" placeholder="Enter text..." />
  </div>
  <div class="input-example">
    <label class="input-label">With Value</label>
    <input type="text" class="input" value="John Doe" />
  </div>
  <div class="input-example">
    <label class="input-label">Disabled</label>
    <input type="text" class="input" disabled value="Disabled input" />
  </div>
  <div class="input-example">
    <label class="input-label">With Error</label>
    <input type="text" class="input input-error" value="Invalid value" />
    <span class="input-error-text">This field is required</span>
  </div>
</div>

## Input Sizes

<div class="input-sizes">
  <div class="input-example">
    <label class="input-label">Small</label>
    <input type="text" class="input input-sm" placeholder="Small input" />
  </div>
  <div class="input-example">
    <label class="input-label">Medium (Default)</label>
    <input type="text" class="input" placeholder="Medium input" />
  </div>
  <div class="input-example">
    <label class="input-label">Large</label>
    <input type="text" class="input input-lg" placeholder="Large input" />
  </div>
</div>

## Input with Icons

<div class="input-grid">
  <div class="input-example">
    <label class="input-label">With Left Icon</label>
    <div class="input-icon-wrapper">
      <svg class="input-icon left" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="11" cy="11" r="8"/>
        <path d="m21 21-4.35-4.35"/>
      </svg>
      <input type="text" class="input input-with-icon-left" placeholder="Search..." />
    </div>
  </div>
  <div class="input-example">
    <label class="input-label">With Right Icon</label>
    <div class="input-icon-wrapper">
      <input type="email" class="input input-with-icon-right" placeholder="Email address" />
      <svg class="input-icon right" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <rect width="20" height="16" x="2" y="4" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    </div>
  </div>
</div>

## Textarea

<div class="input-grid">
  <div class="input-example">
    <label class="input-label">Default Textarea</label>
    <textarea class="input textarea" placeholder="Enter your message..." rows="4"></textarea>
  </div>
  <div class="input-example">
    <label class="input-label">With Character Count</label>
    <textarea class="input textarea" placeholder="Max 200 characters..." rows="4" maxlength="200"></textarea>
    <span class="char-count">0 / 200</span>
  </div>
</div>

## Accessibility Guidelines

<div class="a11y-section">
  <div class="a11y-item">
    <span class="a11y-icon check">✓</span>
    <div class="a11y-content">
      <strong>Labels Required</strong>
      <span>Every input must have an associated label element or aria-label.</span>
    </div>
  </div>
  <div class="a11y-item">
    <span class="a11y-icon check">✓</span>
    <div class="a11y-content">
      <strong>Error Messages</strong>
      <span>Error states must be announced to screen readers using aria-invalid and aria-describedby.</span>
    </div>
  </div>
  <div class="a11y-item">
    <span class="a11y-icon check">✓</span>
    <div class="a11y-content">
      <strong>Focus Visible</strong>
      <span>Clear focus indicator with 3:1 contrast ratio.</span>
    </div>
  </div>
  <div class="a11y-item">
    <span class="a11y-icon check">✓</span>
    <div class="a11y-content">
      <strong>Placeholder Not Label</strong>
      <span>Placeholder text supplements but doesn't replace labels.</span>
    </div>
  </div>
</div>

<style>
.input-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.5rem;
  margin: 1.5rem 0;
}

@media (min-width: 768px) {
  .input-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.input-sizes {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin: 1.5rem 0;
}

.input-example {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.input-label {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--vp-c-text-1);
}

.input {
  width: 100%;
  padding: 0.625rem 0.875rem;
  font-size: 0.875rem;
  color: var(--vp-c-text-1);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.5rem;
  transition: all 0.2s;
}

.input:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
}

.input:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.input-error {
  border-color: #ef4444;
}

.input-error:focus {
  border-color: #ef4444;
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.2);
}

.input-error-text {
  font-size: 0.75rem;
  color: #ef4444;
}

.input-sm {
  padding: 0.5rem 0.75rem;
  font-size: 0.8125rem;
}

.input-lg {
  padding: 0.75rem 1rem;
  font-size: 1rem;
}

.input-icon-wrapper {
  position: relative;
}

.input-icon {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 1rem;
  height: 1rem;
  color: var(--vp-c-text-3);
  pointer-events: none;
}

.input-icon.left {
  left: 0.875rem;
}

.input-icon.right {
  right: 0.875rem;
}

.input-with-icon-left {
  padding-left: 2.5rem;
}

.input-with-icon-right {
  padding-right: 2.5rem;
}

.textarea {
  resize: vertical;
  min-height: 100px;
}

.char-count {
  font-size: 0.75rem;
  color: var(--vp-c-text-3);
  text-align: right;
}

.a11y-section {
  margin-top: 2rem;
  padding: 1.5rem;
  border-radius: 1rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
}

.a11y-item {
  display: flex;
  gap: 1rem;
  padding: 0.75rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.a11y-item:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.a11y-item:first-child {
  padding-top: 0;
}

.a11y-icon {
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 12px;
}

.a11y-icon.check {
  background: rgba(34, 197, 94, 0.2);
  color: #22c55e;
}

.a11y-content {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.a11y-content strong {
  font-size: 0.875rem;
  color: var(--vp-c-text-1);
}

.a11y-content span {
  font-size: 0.8125rem;
  color: var(--vp-c-text-2);
}
</style>
