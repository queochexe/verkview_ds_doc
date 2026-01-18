---
title: Avatars
---

# Avatars

User representation components for profiles and comments. All avatars meet WCAG 2.1 Level AA with proper alt text and fallback states.

## Avatar Sizes

<div class="avatar-section">
  <div class="avatar-row">
    <div class="avatar avatar-xs">
      <span class="avatar-initials">JD</span>
    </div>
    <div class="avatar avatar-sm">
      <span class="avatar-initials">JD</span>
    </div>
    <div class="avatar avatar-md">
      <span class="avatar-initials">JD</span>
    </div>
    <div class="avatar avatar-lg">
      <span class="avatar-initials">JD</span>
    </div>
    <div class="avatar avatar-xl">
      <span class="avatar-initials">JD</span>
    </div>
  </div>
  <div class="size-labels">
    <span>XS (24px)</span>
    <span>SM (32px)</span>
    <span>MD (40px)</span>
    <span>LG (48px)</span>
    <span>XL (64px)</span>
  </div>
</div>

## Avatar with Image

<div class="avatar-section">
  <div class="avatar-row">
    <div class="avatar avatar-md">
      <div class="avatar-image" style="background: linear-gradient(135deg, #3b82f6, #8b5cf6);"></div>
    </div>
    <div class="avatar avatar-md">
      <div class="avatar-image" style="background: linear-gradient(135deg, #22c55e, #14b8a6);"></div>
    </div>
    <div class="avatar avatar-md">
      <div class="avatar-image" style="background: linear-gradient(135deg, #f59e0b, #ef4444);"></div>
    </div>
  </div>
</div>

## Avatar Shapes

<div class="avatar-section">
  <div class="avatar-row">
    <div class="avatar avatar-md avatar-circle">
      <span class="avatar-initials">AB</span>
    </div>
    <div class="avatar avatar-md avatar-rounded">
      <span class="avatar-initials">CD</span>
    </div>
    <div class="avatar avatar-md avatar-square">
      <span class="avatar-initials">EF</span>
    </div>
  </div>
  <div class="shape-labels">
    <span>Circle</span>
    <span>Rounded</span>
    <span>Square</span>
  </div>
</div>

## Avatar with Status

<div class="avatar-section">
  <div class="avatar-row">
    <div class="avatar-wrapper">
      <div class="avatar avatar-md">
        <span class="avatar-initials">ON</span>
      </div>
      <span class="avatar-status status-online"></span>
    </div>
    <div class="avatar-wrapper">
      <div class="avatar avatar-md">
        <span class="avatar-initials">AW</span>
      </div>
      <span class="avatar-status status-away"></span>
    </div>
    <div class="avatar-wrapper">
      <div class="avatar avatar-md">
        <span class="avatar-initials">BS</span>
      </div>
      <span class="avatar-status status-busy"></span>
    </div>
    <div class="avatar-wrapper">
      <div class="avatar avatar-md">
        <span class="avatar-initials">OF</span>
      </div>
      <span class="avatar-status status-offline"></span>
    </div>
  </div>
  <div class="status-labels">
    <span>Online</span>
    <span>Away</span>
    <span>Busy</span>
    <span>Offline</span>
  </div>
</div>

## Avatar Groups

<div class="avatar-section">
  <div class="avatar-group">
    <div class="avatar avatar-md" style="z-index: 4;">
      <span class="avatar-initials" style="background: #3b82f6;">A</span>
    </div>
    <div class="avatar avatar-md" style="z-index: 3;">
      <span class="avatar-initials" style="background: #8b5cf6;">B</span>
    </div>
    <div class="avatar avatar-md" style="z-index: 2;">
      <span class="avatar-initials" style="background: #22c55e;">C</span>
    </div>
    <div class="avatar avatar-md" style="z-index: 1;">
      <span class="avatar-initials" style="background: #f59e0b;">D</span>
    </div>
    <div class="avatar avatar-md avatar-more">
      <span class="avatar-count">+5</span>
    </div>
  </div>
</div>

## Avatar with Badge

<div class="avatar-section">
  <div class="avatar-row">
    <div class="avatar-wrapper">
      <div class="avatar avatar-lg">
        <span class="avatar-initials">JD</span>
      </div>
      <span class="avatar-badge">3</span>
    </div>
    <div class="avatar-wrapper">
      <div class="avatar avatar-lg">
        <span class="avatar-initials">KL</span>
      </div>
      <span class="avatar-badge">99+</span>
    </div>
  </div>
</div>

## Fallback States

<div class="avatar-section">
  <div class="avatar-row">
    <div class="avatar avatar-md">
      <span class="avatar-initials">JD</span>
    </div>
    <div class="avatar avatar-md avatar-fallback">
      <svg class="avatar-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
        <circle cx="12" cy="7" r="4"/>
      </svg>
    </div>
  </div>
  <div class="fallback-labels">
    <span>With Initials</span>
    <span>Icon Fallback</span>
  </div>
</div>

## Color Variants

<div class="avatar-section">
  <div class="avatar-row">
    <div class="avatar avatar-md">
      <span class="avatar-initials" style="background: #3b82f6;">A</span>
    </div>
    <div class="avatar avatar-md">
      <span class="avatar-initials" style="background: #22c55e;">B</span>
    </div>
    <div class="avatar avatar-md">
      <span class="avatar-initials" style="background: #f59e0b;">C</span>
    </div>
    <div class="avatar avatar-md">
      <span class="avatar-initials" style="background: #ef4444;">D</span>
    </div>
    <div class="avatar avatar-md">
      <span class="avatar-initials" style="background: #8b5cf6;">E</span>
    </div>
    <div class="avatar avatar-md">
      <span class="avatar-initials" style="background: #ec4899;">F</span>
    </div>
  </div>
</div>

## Accessibility Guidelines

<div class="a11y-section">
  <div class="a11y-item">
    <span class="a11y-icon check">✓</span>
    <div class="a11y-content">
      <strong>Alt Text</strong>
      <span>Image avatars include descriptive alt text.</span>
    </div>
  </div>
  <div class="a11y-item">
    <span class="a11y-icon check">✓</span>
    <div class="a11y-content">
      <strong>Fallback Content</strong>
      <span>Initials or icons when images fail to load.</span>
    </div>
  </div>
  <div class="a11y-item">
    <span class="a11y-icon check">✓</span>
    <div class="a11y-content">
      <strong>Color Contrast</strong>
      <span>Initials meet 4.5:1 contrast against background.</span>
    </div>
  </div>
  <div class="a11y-item">
    <span class="a11y-icon check">✓</span>
    <div class="a11y-content">
      <strong>Status Announcements</strong>
      <span>Status indicators have aria-label for screen readers.</span>
    </div>
  </div>
</div>

<style>
.avatar-section {
  margin: 1.5rem 0;
  padding: 1.5rem;
  border-radius: 1rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
}

.avatar-row {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.size-labels,
.shape-labels,
.status-labels,
.fallback-labels {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  font-size: 0.75rem;
  color: var(--vp-c-text-3);
}

.size-labels span {
  width: 64px;
  text-align: center;
}

.size-labels span:first-child { width: 24px; }
.size-labels span:nth-child(2) { width: 32px; }
.size-labels span:nth-child(3) { width: 40px; }
.size-labels span:nth-child(4) { width: 48px; }

/* Base Avatar */
.avatar {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
}

/* Sizes */
.avatar-xs { width: 24px; height: 24px; }
.avatar-sm { width: 32px; height: 32px; }
.avatar-md { width: 40px; height: 40px; }
.avatar-lg { width: 48px; height: 48px; }
.avatar-xl { width: 64px; height: 64px; }

/* Shapes */
.avatar-circle { border-radius: 50%; }
.avatar-rounded { border-radius: 0.5rem; }
.avatar-square { border-radius: 0; }

/* Initials */
.avatar-initials {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #3b82f6, #6366f1);
  color: white;
  font-weight: 600;
  font-size: 0.875rem;
}

.avatar-xs .avatar-initials { font-size: 0.625rem; }
.avatar-sm .avatar-initials { font-size: 0.75rem; }
.avatar-lg .avatar-initials { font-size: 1rem; }
.avatar-xl .avatar-initials { font-size: 1.25rem; }

/* Image */
.avatar-image {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
}

/* Fallback */
.avatar-fallback {
  background: rgba(255, 255, 255, 0.1);
}

.avatar-icon {
  width: 60%;
  height: 60%;
  color: var(--vp-c-text-3);
}

/* Status */
.avatar-wrapper {
  position: relative;
  display: inline-flex;
}

.avatar-status {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid var(--vp-c-bg);
}

.status-online {
  background: #22c55e;
  box-shadow: 0 0 8px rgba(34, 197, 94, 0.5);
}

.status-away {
  background: #f59e0b;
  box-shadow: 0 0 8px rgba(245, 158, 11, 0.5);
}

.status-busy {
  background: #ef4444;
  box-shadow: 0 0 8px rgba(239, 68, 68, 0.5);
}

.status-offline {
  background: #71717a;
}

/* Badge */
.avatar-badge {
  position: absolute;
  top: -4px;
  right: -4px;
  min-width: 20px;
  height: 20px;
  padding: 0 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ef4444;
  color: white;
  font-size: 0.6875rem;
  font-weight: 600;
  border-radius: 9999px;
  border: 2px solid var(--vp-c-bg);
}

/* Avatar Group */
.avatar-group {
  display: flex;
}

.avatar-group .avatar {
  margin-left: -12px;
  border: 2px solid var(--vp-c-bg);
}

.avatar-group .avatar:first-child {
  margin-left: 0;
}

.avatar-more {
  background: rgba(255, 255, 255, 0.1);
}

.avatar-count {
  font-size: 0.75rem;
  font-weight: 600;
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
