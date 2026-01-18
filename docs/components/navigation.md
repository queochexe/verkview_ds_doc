---
title: Navigation
---

# Navigation

Navigation components for site structure and user orientation. All navigation meets WCAG 2.1 Level AA with proper landmarks and keyboard navigation.

## Breadcrumbs

<div class="nav-section">
  <nav class="breadcrumb" aria-label="Breadcrumb">
    <ol class="breadcrumb-list">
      <li class="breadcrumb-item">
        <a href="#" class="breadcrumb-link">Home</a>
        <span class="breadcrumb-separator">/</span>
      </li>
      <li class="breadcrumb-item">
        <a href="#" class="breadcrumb-link">Components</a>
        <span class="breadcrumb-separator">/</span>
      </li>
      <li class="breadcrumb-item current" aria-current="page">
        <span class="breadcrumb-current">Navigation</span>
      </li>
    </ol>
  </nav>
</div>

## Tabs

<div class="nav-section">
  <div class="tabs">
    <button class="tab active">Overview</button>
    <button class="tab">Features</button>
    <button class="tab">Pricing</button>
    <button class="tab">Reviews</button>
  </div>
</div>

## Pill Tabs

<div class="nav-section">
  <div class="tabs-pill">
    <button class="tab-pill active">All</button>
    <button class="tab-pill">Active</button>
    <button class="tab-pill">Completed</button>
    <button class="tab-pill">Archived</button>
  </div>
</div>

## Vertical Navigation

<div class="nav-section">
  <nav class="vertical-nav">
    <a href="#" class="nav-item active">
      <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
      Dashboard
    </a>
    <a href="#" class="nav-item">
      <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
      Users
    </a>
    <a href="#" class="nav-item">
      <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
        <polyline points="14 2 14 8 20 8"/>
      </svg>
      Documents
    </a>
    <a href="#" class="nav-item">
      <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
      Settings
    </a>
  </nav>
</div>

## Pagination

<div class="nav-section">
  <nav class="pagination" aria-label="Pagination">
    <button class="pagination-btn" disabled>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="15 18 9 12 15 6"/>
      </svg>
    </button>
    <button class="pagination-btn active">1</button>
    <button class="pagination-btn">2</button>
    <button class="pagination-btn">3</button>
    <span class="pagination-ellipsis">...</span>
    <button class="pagination-btn">10</button>
    <button class="pagination-btn">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="9 18 15 12 9 6"/>
      </svg>
    </button>
  </nav>
</div>

## Menu

<div class="nav-section">
  <div class="menu">
    <button class="menu-item">
      <svg class="menu-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
      </svg>
      Edit
    </button>
    <button class="menu-item">
      <svg class="menu-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/>
        <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
      </svg>
      Duplicate
    </button>
    <div class="menu-divider"></div>
    <button class="menu-item text-error">
      <svg class="menu-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M3 6h18"/>
        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/>
        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
      </svg>
      Delete
    </button>
  </div>
</div>

## Accessibility Guidelines

<div class="a11y-section">
  <div class="a11y-item">
    <span class="a11y-icon check">✓</span>
    <div class="a11y-content">
      <strong>ARIA Landmarks</strong>
      <span>Navigation uses nav element with aria-label for context.</span>
    </div>
  </div>
  <div class="a11y-item">
    <span class="a11y-icon check">✓</span>
    <div class="a11y-content">
      <strong>Current Page</strong>
      <span>Active items marked with aria-current="page".</span>
    </div>
  </div>
  <div class="a11y-item">
    <span class="a11y-icon check">✓</span>
    <div class="a11y-content">
      <strong>Keyboard Navigation</strong>
      <span>Tab navigates between items, Arrow keys within groups.</span>
    </div>
  </div>
  <div class="a11y-item">
    <span class="a11y-icon check">✓</span>
    <div class="a11y-content">
      <strong>Focus Management</strong>
      <span>Clear focus indicators with 3:1 contrast ratio.</span>
    </div>
  </div>
</div>

<style>
.nav-section {
  margin: 1.5rem 0;
  padding: 1.5rem;
  border-radius: 1rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
}

/* Breadcrumbs */
.breadcrumb-list {
  display: flex;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 0.5rem;
}

.breadcrumb-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.breadcrumb-link {
  color: var(--vp-c-text-2);
  font-size: 0.875rem;
  text-decoration: none;
  transition: color 0.2s;
}

.breadcrumb-link:hover {
  color: #3b82f6;
}

.breadcrumb-separator {
  color: var(--vp-c-text-3);
}

.breadcrumb-current {
  color: var(--vp-c-text-1);
  font-size: 0.875rem;
}

/* Tabs */
.tabs {
  display: flex;
  gap: 0.25rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.tab {
  padding: 0.75rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--vp-c-text-2);
  background: transparent;
  border: none;
  border-bottom: 2px solid transparent;
  cursor: pointer;
  transition: all 0.2s;
}

.tab:hover {
  color: var(--vp-c-text-1);
}

.tab.active {
  color: #3b82f6;
  border-bottom-color: #3b82f6;
}

/* Pill Tabs */
.tabs-pill {
  display: flex;
  gap: 0.5rem;
  padding: 0.25rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0.5rem;
  width: fit-content;
}

.tab-pill {
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--vp-c-text-2);
  background: transparent;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: all 0.2s;
}

.tab-pill:hover {
  color: var(--vp-c-text-1);
}

.tab-pill.active {
  color: var(--vp-c-text-1);
  background: rgba(255, 255, 255, 0.1);
}

/* Vertical Navigation */
.vertical-nav {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  max-width: 240px;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
  text-decoration: none;
  border-radius: 0.5rem;
  transition: all 0.2s;
}

.nav-item:hover {
  color: var(--vp-c-text-1);
  background: rgba(255, 255, 255, 0.05);
}

.nav-item.active {
  color: #3b82f6;
  background: rgba(59, 130, 246, 0.1);
}

.nav-icon {
  width: 18px;
  height: 18px;
  flex-shrink: 0;
}

/* Pagination */
.pagination {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.pagination-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 36px;
  height: 36px;
  padding: 0 0.75rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--vp-c-text-2);
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s;
}

.pagination-btn:hover:not(:disabled) {
  color: var(--vp-c-text-1);
  border-color: rgba(255, 255, 255, 0.2);
}

.pagination-btn.active {
  color: white;
  background: #3b82f6;
  border-color: #3b82f6;
}

.pagination-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.pagination-btn svg {
  width: 16px;
  height: 16px;
}

.pagination-ellipsis {
  padding: 0 0.5rem;
  color: var(--vp-c-text-3);
}

/* Menu */
.menu {
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.75rem;
  max-width: 200px;
}

.menu-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.625rem 0.75rem;
  font-size: 0.875rem;
  color: var(--vp-c-text-1);
  background: transparent;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background 0.2s;
  text-align: left;
}

.menu-item:hover {
  background: rgba(255, 255, 255, 0.05);
}

.menu-item.text-error {
  color: #ef4444;
}

.menu-icon {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
}

.menu-divider {
  height: 1px;
  background: rgba(255, 255, 255, 0.1);
  margin: 0.5rem 0;
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
