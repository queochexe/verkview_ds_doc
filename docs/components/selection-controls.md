---
title: Selection Controls
---

# Selection Controls

Checkboxes, radio buttons, and toggle switches for user selections. All controls meet WCAG 2.1 Level AA with proper keyboard navigation and screen reader support.

## Checkboxes

<div class="control-section">
  <div class="control-group">
    <label class="checkbox-label">
      <input type="checkbox" class="checkbox" />
      <span class="checkbox-box"></span>
      <span>Default checkbox</span>
    </label>
    <label class="checkbox-label">
      <input type="checkbox" class="checkbox" checked />
      <span class="checkbox-box"></span>
      <span>Checked checkbox</span>
    </label>
    <label class="checkbox-label disabled">
      <input type="checkbox" class="checkbox" disabled />
      <span class="checkbox-box"></span>
      <span>Disabled checkbox</span>
    </label>
    <label class="checkbox-label disabled">
      <input type="checkbox" class="checkbox" checked disabled />
      <span class="checkbox-box"></span>
      <span>Disabled checked</span>
    </label>
  </div>
</div>

## Radio Buttons

<div class="control-section">
  <div class="control-group">
    <label class="radio-label">
      <input type="radio" name="radio-demo" class="radio" checked />
      <span class="radio-circle"></span>
      <span>Option 1 (selected)</span>
    </label>
    <label class="radio-label">
      <input type="radio" name="radio-demo" class="radio" />
      <span class="radio-circle"></span>
      <span>Option 2</span>
    </label>
    <label class="radio-label">
      <input type="radio" name="radio-demo" class="radio" />
      <span class="radio-circle"></span>
      <span>Option 3</span>
    </label>
    <label class="radio-label disabled">
      <input type="radio" name="radio-demo-disabled" class="radio" disabled />
      <span class="radio-circle"></span>
      <span>Disabled option</span>
    </label>
  </div>
</div>

## Toggle Switches

<div class="control-section">
  <div class="toggle-group">
    <div class="toggle-item">
      <label class="toggle-label">
        <input type="checkbox" class="toggle-input" />
        <span class="toggle-switch"></span>
      </label>
      <span class="toggle-text">Off</span>
    </div>
    <div class="toggle-item">
      <label class="toggle-label">
        <input type="checkbox" class="toggle-input" checked />
        <span class="toggle-switch"></span>
      </label>
      <span class="toggle-text">On</span>
    </div>
    <div class="toggle-item disabled">
      <label class="toggle-label">
        <input type="checkbox" class="toggle-input" disabled />
        <span class="toggle-switch"></span>
      </label>
      <span class="toggle-text">Disabled</span>
    </div>
  </div>
</div>

## Control Sizes

<div class="control-section">
  <h3 class="subsection-title">Small</h3>
  <div class="control-group horizontal">
    <label class="checkbox-label small">
      <input type="checkbox" class="checkbox" checked />
      <span class="checkbox-box"></span>
      <span>Small checkbox</span>
    </label>
    <label class="radio-label small">
      <input type="radio" name="size-small" class="radio" checked />
      <span class="radio-circle"></span>
      <span>Small radio</span>
    </label>
  </div>

  <h3 class="subsection-title">Medium (Default)</h3>
  <div class="control-group horizontal">
    <label class="checkbox-label">
      <input type="checkbox" class="checkbox" checked />
      <span class="checkbox-box"></span>
      <span>Medium checkbox</span>
    </label>
    <label class="radio-label">
      <input type="radio" name="size-medium" class="radio" checked />
      <span class="radio-circle"></span>
      <span>Medium radio</span>
    </label>
  </div>
</div>

## Accessibility Guidelines

<div class="a11y-section">
  <div class="a11y-item">
    <span class="a11y-icon check">✓</span>
    <div class="a11y-content">
      <strong>Keyboard Navigation</strong>
      <span>Space toggles selection, Arrow keys navigate radio groups.</span>
    </div>
  </div>
  <div class="a11y-item">
    <span class="a11y-icon check">✓</span>
    <div class="a11y-content">
      <strong>Focus Indicators</strong>
      <span>Clear visible focus ring with 3:1 contrast ratio.</span>
    </div>
  </div>
  <div class="a11y-item">
    <span class="a11y-icon check">✓</span>
    <div class="a11y-content">
      <strong>Label Association</strong>
      <span>Clicking labels activates the associated control.</span>
    </div>
  </div>
  <div class="a11y-item">
    <span class="a11y-icon check">✓</span>
    <div class="a11y-content">
      <strong>State Announcements</strong>
      <span>Screen readers announce checked/unchecked states.</span>
    </div>
  </div>
</div>

<style>
.control-section {
  margin: 1.5rem 0;
  padding: 1.5rem;
  border-radius: 1rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
}

.control-group {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.control-group.horizontal {
  flex-direction: row;
  flex-wrap: wrap;
  gap: 2rem;
}

.subsection-title {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--vp-c-text-2);
  margin-bottom: 0.75rem;
  margin-top: 1.5rem;
}

.subsection-title:first-child {
  margin-top: 0;
}

/* Checkbox Styles */
.checkbox-label {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
  font-size: 0.875rem;
  color: var(--vp-c-text-1);
}

.checkbox-label.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.checkbox-label.small {
  font-size: 0.8125rem;
}

.checkbox {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.checkbox-box {
  width: 20px;
  height: 20px;
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  transition: all 0.2s;
  position: relative;
  flex-shrink: 0;
}

.small .checkbox-box {
  width: 16px;
  height: 16px;
}

.checkbox:checked + .checkbox-box {
  background: #3b82f6;
  border-color: #3b82f6;
}

.checkbox:checked + .checkbox-box::after {
  content: '';
  position: absolute;
  left: 6px;
  top: 2px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.small .checkbox:checked + .checkbox-box::after {
  left: 4px;
  top: 1px;
  width: 4px;
  height: 8px;
}

.checkbox:focus + .checkbox-box {
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
}

/* Radio Styles */
.radio-label {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
  font-size: 0.875rem;
  color: var(--vp-c-text-1);
}

.radio-label.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.radio-label.small {
  font-size: 0.8125rem;
}

.radio {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.radio-circle {
  width: 20px;
  height: 20px;
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  transition: all 0.2s;
  position: relative;
  flex-shrink: 0;
}

.small .radio-circle {
  width: 16px;
  height: 16px;
}

.radio:checked + .radio-circle {
  border-color: #3b82f6;
}

.radio:checked + .radio-circle::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 10px;
  height: 10px;
  background: #3b82f6;
  border-radius: 50%;
}

.small .radio:checked + .radio-circle::after {
  width: 8px;
  height: 8px;
}

.radio:focus + .radio-circle {
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
}

/* Toggle Styles */
.toggle-group {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
}

.toggle-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.toggle-item.disabled {
  opacity: 0.5;
}

.toggle-label {
  position: relative;
  display: inline-block;
  width: 44px;
  height: 24px;
  cursor: pointer;
}

.toggle-input {
  opacity: 0;
  width: 0;
  height: 0;
}

.toggle-switch {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  transition: 0.2s;
}

.toggle-switch::before {
  content: '';
  position: absolute;
  height: 18px;
  width: 18px;
  left: 3px;
  bottom: 3px;
  background: white;
  border-radius: 50%;
  transition: 0.2s;
}

.toggle-input:checked + .toggle-switch {
  background: #3b82f6;
}

.toggle-input:checked + .toggle-switch::before {
  transform: translateX(20px);
}

.toggle-input:focus + .toggle-switch {
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
}

.toggle-text {
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
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
