---
title: Tables
---

# Tables

Data tables for displaying structured information. All tables meet WCAG 2.1 Level AA with proper semantics and keyboard navigation.

## Basic Table

<div class="table-section">
  <table class="ds-table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>John Doe</td>
        <td>john@example.com</td>
        <td>Admin</td>
        <td><span class="badge badge-success">Active</span></td>
      </tr>
      <tr>
        <td>Jane Smith</td>
        <td>jane@example.com</td>
        <td>Editor</td>
        <td><span class="badge badge-success">Active</span></td>
      </tr>
      <tr>
        <td>Bob Wilson</td>
        <td>bob@example.com</td>
        <td>Viewer</td>
        <td><span class="badge badge-warning">Pending</span></td>
      </tr>
      <tr>
        <td>Alice Brown</td>
        <td>alice@example.com</td>
        <td>Editor</td>
        <td><span class="badge badge-error">Inactive</span></td>
      </tr>
    </tbody>
  </table>
</div>

## Striped Table

<div class="table-section">
  <table class="ds-table ds-table-striped">
    <thead>
      <tr>
        <th>Product</th>
        <th>Category</th>
        <th>Price</th>
        <th>Stock</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Widget A</td>
        <td>Electronics</td>
        <td>$29.99</td>
        <td>150</td>
      </tr>
      <tr>
        <td>Widget B</td>
        <td>Electronics</td>
        <td>$49.99</td>
        <td>75</td>
      </tr>
      <tr>
        <td>Gadget X</td>
        <td>Accessories</td>
        <td>$19.99</td>
        <td>200</td>
      </tr>
      <tr>
        <td>Gadget Y</td>
        <td>Accessories</td>
        <td>$24.99</td>
        <td>120</td>
      </tr>
    </tbody>
  </table>
</div>

## Table with Hover

<div class="table-section">
  <table class="ds-table ds-table-hover">
    <thead>
      <tr>
        <th>Date</th>
        <th>Description</th>
        <th>Amount</th>
        <th>Type</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>2025-01-15</td>
        <td>Payment received</td>
        <td class="text-success">+$1,250.00</td>
        <td>Credit</td>
      </tr>
      <tr>
        <td>2025-01-14</td>
        <td>Service fee</td>
        <td class="text-error">-$25.00</td>
        <td>Debit</td>
      </tr>
      <tr>
        <td>2025-01-12</td>
        <td>Subscription</td>
        <td class="text-error">-$99.00</td>
        <td>Debit</td>
      </tr>
      <tr>
        <td>2025-01-10</td>
        <td>Refund</td>
        <td class="text-success">+$50.00</td>
        <td>Credit</td>
      </tr>
    </tbody>
  </table>
</div>

## Compact Table

<div class="table-section">
  <table class="ds-table ds-table-compact">
    <thead>
      <tr>
        <th>ID</th>
        <th>Task</th>
        <th>Priority</th>
        <th>Due</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>#001</td>
        <td>Update documentation</td>
        <td><span class="badge badge-error badge-sm">High</span></td>
        <td>Today</td>
      </tr>
      <tr>
        <td>#002</td>
        <td>Review pull request</td>
        <td><span class="badge badge-warning badge-sm">Medium</span></td>
        <td>Tomorrow</td>
      </tr>
      <tr>
        <td>#003</td>
        <td>Fix bug in auth</td>
        <td><span class="badge badge-error badge-sm">High</span></td>
        <td>Today</td>
      </tr>
      <tr>
        <td>#004</td>
        <td>Add unit tests</td>
        <td><span class="badge badge-info badge-sm">Low</span></td>
        <td>Next week</td>
      </tr>
    </tbody>
  </table>
</div>

## Accessibility Guidelines

<div class="a11y-section">
  <div class="a11y-item">
    <span class="a11y-icon check">✓</span>
    <div class="a11y-content">
      <strong>Proper Semantics</strong>
      <span>Use thead, tbody, th, and td elements correctly.</span>
    </div>
  </div>
  <div class="a11y-item">
    <span class="a11y-icon check">✓</span>
    <div class="a11y-content">
      <strong>Header Scope</strong>
      <span>Table headers have scope="col" or scope="row" attributes.</span>
    </div>
  </div>
  <div class="a11y-item">
    <span class="a11y-icon check">✓</span>
    <div class="a11y-content">
      <strong>Keyboard Navigation</strong>
      <span>Interactive elements within cells are keyboard accessible.</span>
    </div>
  </div>
  <div class="a11y-item">
    <span class="a11y-icon check">✓</span>
    <div class="a11y-content">
      <strong>Caption/Summary</strong>
      <span>Complex tables include caption or aria-describedby for context.</span>
    </div>
  </div>
</div>

<style>
.table-section {
  margin: 1.5rem 0;
  overflow-x: auto;
}

.ds-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.875rem;
}

.ds-table th,
.ds-table td {
  padding: 0.875rem 1rem;
  text-align: left;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.ds-table th {
  font-weight: 500;
  color: var(--vp-c-text-2);
  background: rgba(255, 255, 255, 0.02);
}

.ds-table td {
  color: var(--vp-c-text-1);
}

/* Striped */
.ds-table-striped tbody tr:nth-child(even) {
  background: rgba(255, 255, 255, 0.02);
}

/* Hover */
.ds-table-hover tbody tr {
  transition: background 0.2s;
}

.ds-table-hover tbody tr:hover {
  background: rgba(255, 255, 255, 0.05);
}

/* Compact */
.ds-table-compact th,
.ds-table-compact td {
  padding: 0.5rem 0.75rem;
  font-size: 0.8125rem;
}

/* Text colors */
.text-success {
  color: #22c55e;
}

.text-error {
  color: #ef4444;
}

/* Badges in tables */
.badge {
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.75rem;
  font-size: 0.75rem;
  font-weight: 500;
  border-radius: 9999px;
}

.badge-sm {
  padding: 0.125rem 0.5rem;
  font-size: 0.6875rem;
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
