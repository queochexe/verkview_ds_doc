---
title: WCAG Guidelines
---

# WCAG Guidelines

Web Content Accessibility Guidelines (WCAG) 2.1 compliance information for the Verkview Design System. All components are built to meet Level AA requirements.

## Compliance Overview

<div class="compliance-overview">
  <div class="compliance-card">
    <div class="compliance-level">
      <span class="level-badge level-aa">AA</span>
      <span class="level-label">Target Compliance</span>
    </div>
    <p>All components meet WCAG 2.1 Level AA requirements. Some components exceed requirements and meet Level AAA.</p>
  </div>
</div>

## Four Principles (POUR)

<div class="principles-grid">
  <div class="principle-card">
    <div class="principle-header">
      <span class="principle-icon">👁</span>
      <h3>Perceivable</h3>
    </div>
    <ul class="principle-list">
      <li>Text alternatives for non-text content</li>
      <li>Captions and alternatives for multimedia</li>
      <li>Content can be presented in different ways</li>
      <li>Easier to see and hear content</li>
    </ul>
  </div>
  <div class="principle-card">
    <div class="principle-header">
      <span class="principle-icon">⌨️</span>
      <h3>Operable</h3>
    </div>
    <ul class="principle-list">
      <li>All functionality available from keyboard</li>
      <li>Users have enough time to read content</li>
      <li>Content doesn't cause seizures</li>
      <li>Users can navigate and find content</li>
    </ul>
  </div>
  <div class="principle-card">
    <div class="principle-header">
      <span class="principle-icon">📖</span>
      <h3>Understandable</h3>
    </div>
    <ul class="principle-list">
      <li>Text is readable and understandable</li>
      <li>Content appears and operates predictably</li>
      <li>Users are helped to avoid and correct mistakes</li>
    </ul>
  </div>
  <div class="principle-card">
    <div class="principle-header">
      <span class="principle-icon">🔧</span>
      <h3>Robust</h3>
    </div>
    <ul class="principle-list">
      <li>Content compatible with assistive technologies</li>
      <li>Valid HTML markup</li>
      <li>Name, role, value available programmatically</li>
    </ul>
  </div>
</div>

## Color Contrast Requirements

<div class="contrast-section">
  <h3>Minimum Contrast Ratios</h3>
  <div class="contrast-grid">
    <div class="contrast-card">
      <div class="contrast-ratio">4.5:1</div>
      <div class="contrast-label">Normal Text</div>
      <div class="contrast-desc">Text smaller than 18pt (24px) or 14pt (18.5px) bold</div>
    </div>
    <div class="contrast-card">
      <div class="contrast-ratio">3:1</div>
      <div class="contrast-label">Large Text</div>
      <div class="contrast-desc">Text 18pt (24px) or larger, or 14pt (18.5px) bold or larger</div>
    </div>
    <div class="contrast-card">
      <div class="contrast-ratio">3:1</div>
      <div class="contrast-label">UI Components</div>
      <div class="contrast-desc">Visual information required to identify UI components and states</div>
    </div>
  </div>
</div>

## Keyboard Navigation

<div class="keyboard-section">
  <h3>Standard Keyboard Interactions</h3>
  <table class="keyboard-table">
    <thead>
      <tr>
        <th>Key</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><kbd>Tab</kbd></td>
        <td>Move focus to next focusable element</td>
      </tr>
      <tr>
        <td><kbd>Shift + Tab</kbd></td>
        <td>Move focus to previous focusable element</td>
      </tr>
      <tr>
        <td><kbd>Enter</kbd></td>
        <td>Activate links, buttons, submit forms</td>
      </tr>
      <tr>
        <td><kbd>Space</kbd></td>
        <td>Activate buttons, toggle checkboxes</td>
      </tr>
      <tr>
        <td><kbd>Escape</kbd></td>
        <td>Close modals, dismiss popups</td>
      </tr>
      <tr>
        <td><kbd>Arrow Keys</kbd></td>
        <td>Navigate within radio groups, menus, tabs</td>
      </tr>
    </tbody>
  </table>
</div>

## Focus Management

<div class="focus-section">
  <h3>Focus Indicator Requirements</h3>
  <div class="focus-demos">
    <div class="focus-demo">
      <button class="focus-example">Focus Example</button>
      <span class="focus-label">3px outline with 3:1 contrast</span>
    </div>
  </div>

  <div class="focus-guidelines">
    <div class="guideline-item">
      <span class="guideline-check">✓</span>
      <span>Focus indicators must have 3:1 contrast against adjacent colors</span>
    </div>
    <div class="guideline-item">
      <span class="guideline-check">✓</span>
      <span>Focus must be visible when using keyboard navigation</span>
    </div>
    <div class="guideline-item">
      <span class="guideline-check">✓</span>
      <span>Focus order must follow logical reading order</span>
    </div>
    <div class="guideline-item">
      <span class="guideline-check">✓</span>
      <span>Focus trapping in modals prevents navigation outside</span>
    </div>
  </div>
</div>

## ARIA Best Practices

<div class="aria-section">
  <h3>Common ARIA Patterns</h3>

  <div class="aria-example">
    <h4>Buttons</h4>
    <pre><code>&lt;button aria-label="Close dialog"&gt;
  &lt;XIcon aria-hidden="true" /&gt;
&lt;/button&gt;</code></pre>
  </div>

  <div class="aria-example">
    <h4>Form Inputs</h4>
    <pre><code>&lt;label for="email"&gt;Email&lt;/label&gt;
&lt;input
  id="email"
  type="email"
  aria-describedby="email-error"
  aria-invalid="true"
/&gt;
&lt;span id="email-error"&gt;Invalid email&lt;/span&gt;</code></pre>
  </div>

  <div class="aria-example">
    <h4>Loading States</h4>
    <pre><code>&lt;button aria-busy="true" disabled&gt;
  &lt;Loader aria-hidden="true" /&gt;
  Loading...
&lt;/button&gt;</code></pre>
  </div>
</div>

## Touch Target Sizing

<div class="touch-section">
  <h3>Minimum Touch Targets</h3>
  <div class="touch-grid">
    <div class="touch-card">
      <div class="touch-box touch-44">44×44</div>
      <span class="touch-label">WCAG Minimum</span>
      <span class="touch-desc">Required for all interactive elements</span>
    </div>
    <div class="touch-card">
      <div class="touch-box touch-48">48×48</div>
      <span class="touch-label">Recommended</span>
      <span class="touch-desc">Better for users with motor impairments</span>
    </div>
  </div>
</div>

## Screen Reader Support

<div class="sr-section">
  <h3>Testing Recommendations</h3>
  <div class="sr-grid">
    <div class="sr-card">
      <h4>NVDA</h4>
      <p>Free screen reader for Windows. Most common among users.</p>
    </div>
    <div class="sr-card">
      <h4>VoiceOver</h4>
      <p>Built into macOS and iOS. Test with Safari for best results.</p>
    </div>
    <div class="sr-card">
      <h4>JAWS</h4>
      <p>Commercial screen reader for Windows. Industry standard.</p>
    </div>
  </div>
</div>

## Testing Checklist

<div class="checklist-section">
  <div class="checklist-item">
    <input type="checkbox" id="check1" class="checklist-checkbox" />
    <label for="check1">All interactive elements are keyboard accessible</label>
  </div>
  <div class="checklist-item">
    <input type="checkbox" id="check2" class="checklist-checkbox" />
    <label for="check2">Focus indicators are visible and meet contrast requirements</label>
  </div>
  <div class="checklist-item">
    <input type="checkbox" id="check3" class="checklist-checkbox" />
    <label for="check3">All images have appropriate alt text</label>
  </div>
  <div class="checklist-item">
    <input type="checkbox" id="check4" class="checklist-checkbox" />
    <label for="check4">Form inputs have associated labels</label>
  </div>
  <div class="checklist-item">
    <input type="checkbox" id="check5" class="checklist-checkbox" />
    <label for="check5">Error messages are announced to screen readers</label>
  </div>
  <div class="checklist-item">
    <input type="checkbox" id="check6" class="checklist-checkbox" />
    <label for="check6">Color is not the only means of conveying information</label>
  </div>
  <div class="checklist-item">
    <input type="checkbox" id="check7" class="checklist-checkbox" />
    <label for="check7">Page has proper heading hierarchy (h1 → h2 → h3)</label>
  </div>
  <div class="checklist-item">
    <input type="checkbox" id="check8" class="checklist-checkbox" />
    <label for="check8">Skip links are available for keyboard users</label>
  </div>
</div>

## Resources

<div class="resources-section">
  <a href="https://www.w3.org/WAI/WCAG21/quickref/" target="_blank" class="resource-link">
    <span class="resource-icon">📋</span>
    <div class="resource-content">
      <span class="resource-title">WCAG 2.1 Quick Reference</span>
      <span class="resource-desc">Official W3C quick reference guide</span>
    </div>
  </a>
  <a href="https://webaim.org/resources/contrastchecker/" target="_blank" class="resource-link">
    <span class="resource-icon">🎨</span>
    <div class="resource-content">
      <span class="resource-title">WebAIM Contrast Checker</span>
      <span class="resource-desc">Check color contrast ratios</span>
    </div>
  </a>
  <a href="https://www.deque.com/axe/" target="_blank" class="resource-link">
    <span class="resource-icon">🔍</span>
    <div class="resource-content">
      <span class="resource-title">axe DevTools</span>
      <span class="resource-desc">Browser extension for accessibility testing</span>
    </div>
  </a>
</div>

<style>
.compliance-overview {
  margin: 1.5rem 0;
}

.compliance-card {
  padding: 1.5rem;
  border-radius: 1rem;
  background: linear-gradient(135deg, rgba(34, 197, 94, 0.05), rgba(34, 197, 94, 0.02));
  border: 1px solid rgba(34, 197, 94, 0.2);
}

.compliance-level {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.level-badge {
  padding: 0.375rem 0.75rem;
  font-size: 0.875rem;
  font-weight: 700;
  border-radius: 0.5rem;
}

.level-aa {
  background: rgba(34, 197, 94, 0.2);
  color: #22c55e;
}

.level-label {
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
}

.compliance-card p {
  margin: 0;
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
  line-height: 1.6;
}

/* Principles */
.principles-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1rem;
  margin: 1.5rem 0;
}

@media (min-width: 768px) {
  .principles-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.principle-card {
  padding: 1.5rem;
  border-radius: 1rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
}

.principle-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.principle-icon {
  font-size: 1.5rem;
}

.principle-header h3 {
  margin: 0;
  font-size: 1rem;
  color: var(--vp-c-text-1);
}

.principle-list {
  margin: 0;
  padding-left: 1.25rem;
  list-style-type: disc;
}

.principle-list li {
  font-size: 0.8125rem;
  color: var(--vp-c-text-2);
  margin-bottom: 0.5rem;
}

/* Contrast */
.contrast-section {
  margin: 1.5rem 0;
}

.contrast-section h3 {
  font-size: 1rem;
  margin-bottom: 1rem;
}

.contrast-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1rem;
}

@media (min-width: 768px) {
  .contrast-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.contrast-card {
  padding: 1.5rem;
  border-radius: 1rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
  text-align: center;
}

.contrast-ratio {
  font-size: 2rem;
  font-weight: 700;
  color: #3b82f6;
  margin-bottom: 0.5rem;
}

.contrast-label {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin-bottom: 0.5rem;
}

.contrast-desc {
  font-size: 0.75rem;
  color: var(--vp-c-text-3);
}

/* Keyboard */
.keyboard-section {
  margin: 1.5rem 0;
}

.keyboard-section h3 {
  font-size: 1rem;
  margin-bottom: 1rem;
}

.keyboard-table {
  width: 100%;
  border-collapse: collapse;
}

.keyboard-table th,
.keyboard-table td {
  padding: 0.75rem 1rem;
  text-align: left;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.keyboard-table th {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--vp-c-text-2);
  text-transform: uppercase;
  background: rgba(255, 255, 255, 0.02);
}

.keyboard-table td {
  font-size: 0.875rem;
  color: var(--vp-c-text-1);
}

kbd {
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
  font-family: var(--vp-font-family-mono);
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 0.25rem;
}

/* Focus */
.focus-section {
  margin: 1.5rem 0;
}

.focus-section h3 {
  font-size: 1rem;
  margin-bottom: 1rem;
}

.focus-demos {
  margin-bottom: 1.5rem;
}

.focus-demo {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.focus-example {
  padding: 0.625rem 1.25rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: white;
  background: #3b82f6;
  border: none;
  border-radius: 0.5rem;
  outline: 3px solid #60a5fa;
  outline-offset: 2px;
}

.focus-label {
  font-size: 0.8125rem;
  color: var(--vp-c-text-3);
}

.focus-guidelines {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.guideline-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
}

.guideline-check {
  color: #22c55e;
}

/* ARIA */
.aria-section {
  margin: 1.5rem 0;
}

.aria-section h3 {
  font-size: 1rem;
  margin-bottom: 1rem;
}

.aria-example {
  margin-bottom: 1.5rem;
  padding: 1rem;
  border-radius: 0.75rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
}

.aria-example h4 {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin: 0 0 0.75rem 0;
}

.aria-example pre {
  margin: 0;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 0.5rem;
  overflow-x: auto;
}

.aria-example code {
  font-size: 0.8125rem;
  color: var(--vp-c-text-1);
}

/* Touch */
.touch-section {
  margin: 1.5rem 0;
}

.touch-section h3 {
  font-size: 1rem;
  margin-bottom: 1rem;
}

.touch-grid {
  display: flex;
  gap: 1.5rem;
}

.touch-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.touch-box {
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #3b82f6, #6366f1);
  color: white;
  font-size: 0.75rem;
  font-weight: 600;
  border-radius: 0.5rem;
}

.touch-44 {
  width: 44px;
  height: 44px;
}

.touch-48 {
  width: 48px;
  height: 48px;
}

.touch-label {
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.touch-desc {
  font-size: 0.75rem;
  color: var(--vp-c-text-3);
  text-align: center;
}

/* Screen Reader */
.sr-section {
  margin: 1.5rem 0;
}

.sr-section h3 {
  font-size: 1rem;
  margin-bottom: 1rem;
}

.sr-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1rem;
}

@media (min-width: 768px) {
  .sr-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.sr-card {
  padding: 1.25rem;
  border-radius: 0.75rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
}

.sr-card h4 {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin: 0 0 0.5rem 0;
}

.sr-card p {
  font-size: 0.8125rem;
  color: var(--vp-c-text-2);
  margin: 0;
  line-height: 1.5;
}

/* Checklist */
.checklist-section {
  margin: 1.5rem 0;
  padding: 1.5rem;
  border-radius: 1rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
}

.checklist-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.checklist-item:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.checklist-item:first-child {
  padding-top: 0;
}

.checklist-checkbox {
  width: 18px;
  height: 18px;
  accent-color: #3b82f6;
}

.checklist-item label {
  font-size: 0.875rem;
  color: var(--vp-c-text-1);
  cursor: pointer;
}

/* Resources */
.resources-section {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin: 1.5rem 0;
}

.resource-link {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.25rem;
  border-radius: 0.75rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
  text-decoration: none;
  transition: all 0.2s;
}

.resource-link:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(59, 130, 246, 0.3);
}

.resource-icon {
  font-size: 1.5rem;
}

.resource-content {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.resource-title {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.resource-desc {
  font-size: 0.75rem;
  color: var(--vp-c-text-3);
}
</style>
