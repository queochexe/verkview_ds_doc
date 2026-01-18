---
title: Badges & Pills
---

# Badges & Pills

Visual indicators for status, counts, and labels. All badges meet WCAG 2.1 Level AA contrast requirements.

## Badge Variants

<div class="badge-section">
  <div class="badge-row">
    <span class="badge badge-default">Default</span>
    <span class="badge badge-primary">Primary</span>
    <span class="badge badge-success">Success</span>
    <span class="badge badge-warning">Warning</span>
    <span class="badge badge-error">Error</span>
    <span class="badge badge-info">Info</span>
  </div>
</div>

## Outline Badges

<div class="badge-section">
  <div class="badge-row">
    <span class="badge badge-outline-default">Default</span>
    <span class="badge badge-outline-primary">Primary</span>
    <span class="badge badge-outline-success">Success</span>
    <span class="badge badge-outline-warning">Warning</span>
    <span class="badge badge-outline-error">Error</span>
    <span class="badge badge-outline-info">Info</span>
  </div>
</div>

## Badge Sizes

<div class="badge-section">
  <div class="badge-row items-center">
    <span class="badge badge-primary badge-sm">Small</span>
    <span class="badge badge-primary">Medium</span>
    <span class="badge badge-primary badge-lg">Large</span>
  </div>
</div>

## Pill Badges

<div class="badge-section">
  <div class="badge-row">
    <span class="badge badge-primary badge-pill">Pill Badge</span>
    <span class="badge badge-success badge-pill">Active</span>
    <span class="badge badge-warning badge-pill">Pending</span>
    <span class="badge badge-error badge-pill">Inactive</span>
  </div>
</div>

## Badges with Icons

<div class="badge-section">
  <div class="badge-row">
    <span class="badge badge-success badge-with-icon">
      <svg class="badge-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="20 6 9 17 4 12"/>
      </svg>
      Completed
    </span>
    <span class="badge badge-warning badge-with-icon">
      <svg class="badge-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
      In Progress
    </span>
    <span class="badge badge-error badge-with-icon">
      <svg class="badge-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="10"/>
        <line x1="15" y1="9" x2="9" y2="15"/>
        <line x1="9" y1="9" x2="15" y2="15"/>
      </svg>
      Failed
    </span>
  </div>
</div>

## Dot Badges

<div class="badge-section">
  <div class="badge-row">
    <span class="badge badge-dot badge-dot-success">Online</span>
    <span class="badge badge-dot badge-dot-warning">Away</span>
    <span class="badge badge-dot badge-dot-error">Busy</span>
    <span class="badge badge-dot badge-dot-default">Offline</span>
  </div>
</div>

## Counter Badges

<div class="badge-section">
  <div class="badge-row items-center">
    <div class="counter-wrapper">
      <span class="counter-label">Notifications</span>
      <span class="badge badge-error badge-counter">5</span>
    </div>
    <div class="counter-wrapper">
      <span class="counter-label">Messages</span>
      <span class="badge badge-primary badge-counter">12</span>
    </div>
    <div class="counter-wrapper">
      <span class="counter-label">Updates</span>
      <span class="badge badge-success badge-counter">99+</span>
    </div>
  </div>
</div>

## Accessibility Guidelines

<div class="a11y-section">
  <div class="a11y-item">
    <span class="a11y-icon check">✓</span>
    <div class="a11y-content">
      <strong>Color Contrast</strong>
      <span>All badge text meets 4.5:1 contrast ratio minimum.</span>
    </div>
  </div>
  <div class="a11y-item">
    <span class="a11y-icon check">✓</span>
    <div class="a11y-content">
      <strong>Not Color-Only</strong>
      <span>Status is conveyed through text, not just color.</span>
    </div>
  </div>
  <div class="a11y-item">
    <span class="a11y-icon check">✓</span>
    <div class="a11y-content">
      <strong>Screen Reader Support</strong>
      <span>Counter badges announce their values to assistive technology.</span>
    </div>
  </div>
</div>

<style>
.badge-section {
  margin: 1.5rem 0;
  padding: 1.5rem;
  border-radius: 1rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
}

.badge-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.badge-row.items-center {
  align-items: center;
}

/* Base Badge */
.badge {
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.75rem;
  font-size: 0.75rem;
  font-weight: 500;
  border-radius: 0.375rem;
  white-space: nowrap;
}

/* Sizes */
.badge-sm {
  padding: 0.125rem 0.5rem;
  font-size: 0.6875rem;
}

.badge-lg {
  padding: 0.375rem 1rem;
  font-size: 0.875rem;
}

/* Pill */
.badge-pill {
  border-radius: 9999px;
}

/* Solid Variants */
.badge-default {
  background: rgba(255, 255, 255, 0.1);
  color: var(--vp-c-text-1);
}

.badge-primary {
  background: rgba(59, 130, 246, 0.2);
  color: #60a5fa;
}

.badge-success {
  background: rgba(34, 197, 94, 0.2);
  color: #4ade80;
}

.badge-warning {
  background: rgba(245, 158, 11, 0.2);
  color: #fbbf24;
}

.badge-error {
  background: rgba(239, 68, 68, 0.2);
  color: #f87171;
}

.badge-info {
  background: rgba(139, 92, 246, 0.2);
  color: #a78bfa;
}

/* Outline Variants */
.badge-outline-default {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: var(--vp-c-text-1);
}

.badge-outline-primary {
  background: transparent;
  border: 1px solid rgba(59, 130, 246, 0.5);
  color: #60a5fa;
}

.badge-outline-success {
  background: transparent;
  border: 1px solid rgba(34, 197, 94, 0.5);
  color: #4ade80;
}

.badge-outline-warning {
  background: transparent;
  border: 1px solid rgba(245, 158, 11, 0.5);
  color: #fbbf24;
}

.badge-outline-error {
  background: transparent;
  border: 1px solid rgba(239, 68, 68, 0.5);
  color: #f87171;
}

.badge-outline-info {
  background: transparent;
  border: 1px solid rgba(139, 92, 246, 0.5);
  color: #a78bfa;
}

/* Badge with Icon */
.badge-with-icon {
  gap: 0.375rem;
}

.badge-icon {
  width: 14px;
  height: 14px;
}

/* Dot Badge */
.badge-dot {
  gap: 0.5rem;
  background: transparent;
  padding-left: 0;
}

.badge-dot::before {
  content: '';
  width: 8px;
  height: 8px;
  border-radius: 50%;
}

.badge-dot-success::before {
  background: #22c55e;
  box-shadow: 0 0 8px rgba(34, 197, 94, 0.5);
}

.badge-dot-warning::before {
  background: #f59e0b;
  box-shadow: 0 0 8px rgba(245, 158, 11, 0.5);
}

.badge-dot-error::before {
  background: #ef4444;
  box-shadow: 0 0 8px rgba(239, 68, 68, 0.5);
}

.badge-dot-default::before {
  background: #71717a;
}

/* Counter Badge */
.counter-wrapper {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.counter-label {
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
}

.badge-counter {
  min-width: 24px;
  justify-content: center;
  border-radius: 9999px;
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
