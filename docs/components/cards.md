---
title: Cards
---

# Cards

Container components for grouping related content. All cards meet WCAG 2.1 Level AA with proper structure and interaction patterns.

## Basic Card

<div class="card-grid">
  <div class="ds-card">
    <h3 class="card-title">Card Title</h3>
    <p class="card-description">This is a basic card with a title and description. Cards are versatile containers for content.</p>
  </div>
</div>

## Card with Header

<div class="card-grid">
  <div class="ds-card">
    <div class="card-header">
      <h3 class="card-title">Project Overview</h3>
      <span class="badge badge-success">Active</span>
    </div>
    <p class="card-description">A card with a header section containing a title and status badge.</p>
  </div>
</div>

## Card with Footer

<div class="card-grid">
  <div class="ds-card">
    <h3 class="card-title">Subscription Plan</h3>
    <p class="card-description">Your current plan includes unlimited projects and team members.</p>
    <div class="card-footer">
      <button class="btn btn-primary">Upgrade Plan</button>
      <button class="btn btn-ghost">Learn More</button>
    </div>
  </div>
</div>

## Interactive Card

<div class="card-grid">
  <a href="#" class="ds-card ds-card-interactive">
    <h3 class="card-title">Click Me</h3>
    <p class="card-description">This entire card is clickable and shows hover/focus states.</p>
    <span class="card-arrow">→</span>
  </a>
  <a href="#" class="ds-card ds-card-interactive">
    <h3 class="card-title">Another Option</h3>
    <p class="card-description">Interactive cards are great for navigation and selection.</p>
    <span class="card-arrow">→</span>
  </a>
</div>

## Card Variants

<div class="card-grid">
  <div class="ds-card ds-card-bordered">
    <h3 class="card-title">Bordered Card</h3>
    <p class="card-description">A card with a more prominent border style.</p>
  </div>
  <div class="ds-card ds-card-elevated">
    <h3 class="card-title">Elevated Card</h3>
    <p class="card-description">A card with shadow for visual hierarchy.</p>
  </div>
</div>

## Stats Card

<div class="card-grid-stats">
  <div class="ds-card ds-card-stat">
    <span class="stat-label">Total Users</span>
    <span class="stat-value">12,543</span>
    <span class="stat-change positive">+12.5%</span>
  </div>
  <div class="ds-card ds-card-stat">
    <span class="stat-label">Revenue</span>
    <span class="stat-value">$45,231</span>
    <span class="stat-change positive">+8.2%</span>
  </div>
  <div class="ds-card ds-card-stat">
    <span class="stat-label">Bounce Rate</span>
    <span class="stat-value">23.4%</span>
    <span class="stat-change negative">-2.1%</span>
  </div>
  <div class="ds-card ds-card-stat">
    <span class="stat-label">Sessions</span>
    <span class="stat-value">8,432</span>
    <span class="stat-change positive">+5.3%</span>
  </div>
</div>

## Card with Image

<div class="card-grid">
  <div class="ds-card ds-card-media">
    <div class="card-image">
      <div class="image-placeholder">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
          <circle cx="9" cy="9" r="2"/>
          <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
        </svg>
      </div>
    </div>
    <div class="card-body">
      <h3 class="card-title">Featured Article</h3>
      <p class="card-description">Cards can include images, making them perfect for media content.</p>
    </div>
  </div>
</div>

## Accessibility Guidelines

<div class="a11y-section">
  <div class="a11y-item">
    <span class="a11y-icon check">✓</span>
    <div class="a11y-content">
      <strong>Semantic Structure</strong>
      <span>Use appropriate heading levels within cards.</span>
    </div>
  </div>
  <div class="a11y-item">
    <span class="a11y-icon check">✓</span>
    <div class="a11y-content">
      <strong>Interactive Cards</strong>
      <span>Clickable cards use anchor or button elements with clear focus states.</span>
    </div>
  </div>
  <div class="a11y-item">
    <span class="a11y-icon check">✓</span>
    <div class="a11y-content">
      <strong>Color Contrast</strong>
      <span>Card content meets 4.5:1 contrast ratio against background.</span>
    </div>
  </div>
</div>

<style>
.card-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1rem;
  margin: 1.5rem 0;
}

@media (min-width: 768px) {
  .card-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.card-grid-stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin: 1.5rem 0;
}

@media (min-width: 768px) {
  .card-grid-stats {
    grid-template-columns: repeat(4, 1fr);
  }
}

/* Base Card */
.ds-card {
  padding: 1.5rem;
  border-radius: 1rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
}

.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.card-title {
  font-size: 1rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin: 0 0 0.5rem 0;
}

.card-header .card-title {
  margin: 0;
}

.card-description {
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
  line-height: 1.5;
  margin: 0;
}

.card-footer {
  display: flex;
  gap: 0.75rem;
  margin-top: 1.5rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
}

/* Interactive Card */
.ds-card-interactive {
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s;
  position: relative;
}

.ds-card-interactive:hover {
  background: rgba(255, 255, 255, 0.04);
  border-color: rgba(59, 130, 246, 0.3);
}

.ds-card-interactive:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
}

.card-arrow {
  position: absolute;
  right: 1.5rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--vp-c-text-3);
  transition: all 0.2s;
}

.ds-card-interactive:hover .card-arrow {
  color: #3b82f6;
  transform: translateY(-50%) translateX(4px);
}

/* Card Variants */
.ds-card-bordered {
  border-width: 2px;
}

.ds-card-elevated {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

/* Stats Card */
.ds-card-stat {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.stat-label {
  font-size: 0.75rem;
  color: var(--vp-c-text-3);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.stat-value {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
}

.stat-change {
  font-size: 0.75rem;
  font-weight: 500;
}

.stat-change.positive {
  color: #22c55e;
}

.stat-change.negative {
  color: #ef4444;
}

/* Media Card */
.ds-card-media {
  padding: 0;
  overflow: hidden;
}

.card-image {
  width: 100%;
  height: 160px;
  background: rgba(255, 255, 255, 0.05);
}

.image-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--vp-c-text-3);
}

.image-placeholder svg {
  width: 48px;
  height: 48px;
}

.card-body {
  padding: 1.5rem;
}

/* Badge */
.badge {
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.75rem;
  font-size: 0.75rem;
  font-weight: 500;
  border-radius: 9999px;
}

.badge-success {
  background: rgba(34, 197, 94, 0.2);
  color: #4ade80;
}

/* Buttons */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-primary {
  background: #3b82f6;
  color: white;
}

.btn-primary:hover {
  background: #2563eb;
}

.btn-ghost {
  background: transparent;
  color: var(--vp-c-text-2);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.btn-ghost:hover {
  background: rgba(255, 255, 255, 0.05);
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
