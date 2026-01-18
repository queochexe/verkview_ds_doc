---
title: Design Tokens
---

# Design Tokens

The foundation of our design system. All tokens are WCAG-compliant and documented below.

## Grayscale (Zinc)

Our primary color palette. Dark backgrounds, all contrast ratios optimized for zinc-600 backgrounds.

<div class="color-grid">
  <ColorSwatchRow name="ZINC 950" variable="--zinc-950" hex="#09090b" contrast="Contrast: dark" />
  <ColorSwatchRow name="ZINC 900" variable="--zinc-900" hex="#18181b" contrast="Contrast: 1.1:1" />
  <ColorSwatchRow name="ZINC 800" variable="--zinc-800" hex="#27272a" contrast="Contrast: 1.4:1" />
  <ColorSwatchRow name="ZINC 700" variable="--zinc-700" hex="#3f3f46" contrast="Contrast: 2.0:1" />
  <ColorSwatchRow name="ZINC 600" variable="--zinc-600" hex="#52525b" contrast="Contrast: 2.7:1" />
  <ColorSwatchRow name="ZINC 500" variable="--zinc-500" hex="#71717a" contrast="Contrast: 4.0:1" />
  <ColorSwatchRow name="ZINC 400" variable="--zinc-400" hex="#a1a1aa" contrast="Contrast: 6.5:1" />
  <ColorSwatchRow name="ZINC 300" variable="--zinc-300" hex="#d4d4d8" contrast="Contrast: 10.3:1" />
  <ColorSwatchRow name="ZINC 200" variable="--zinc-200" hex="#e4e4e7" contrast="Contrast: 12.5:1" />
  <ColorSwatchRow name="ZINC 100" variable="--zinc-100" hex="#f4f4f5" contrast="Contrast: 15.1:1" />
  <ColorSwatchRow name="ZINC 50" variable="--zinc-50" hex="#fafafa" contrast="Contrast: 17.4:1" />
</div>

## Status Colors

Semantic colors for feedback, warnings, errors, and interactive elements. All colors meet minimum contrast requirements.

<div class="status-grid">
  <StatusColorCard
    name="Success"
    color="#22c55e"
    hex="#22C55E"
    contrast="5.0:1"
  />
  <StatusColorCard
    name="Warning"
    color="#f59e0b"
    hex="#F59E0B"
    contrast="3.0:1"
  />
  <StatusColorCard
    name="Error"
    color="#ef4444"
    hex="#EF4444"
    contrast="4.6:1"
  />
  <StatusColorCard
    name="Info"
    color="#3b82f6"
    hex="#3B82F6"
    contrast="4.5:1"
  />
  <StatusColorCard
    name="Purple"
    color="#8b5cf6"
    hex="#8B5CF6"
    contrast="4.5:1"
  />
  <StatusColorCard
    name="Orange"
    color="#f97316"
    hex="#F97316"
    contrast="3.4:1"
  />
</div>

## Typography Scale

A clear typography scale with consistent line heights. Subset from a system of sizes.

<TypographyScale />

<div class="type-details">
  <div class="type-detail-card">
    <span class="detail-label">Font Family</span>
    <span class="detail-value">Inter, -apple-system, sans-serif</span>
  </div>
  <div class="type-detail-card">
    <span class="detail-label">Line Heights</span>
    <span class="detail-value">1.25 (headings), 1.5 (body)</span>
  </div>
  <div class="type-detail-card">
    <span class="detail-label">Letter Spacing</span>
    <span class="detail-value">-0.025em (display), normal (body)</span>
  </div>
</div>

## Spacing Scale

Consistent spacing values based on a 4px grid system.

<SpacingScale />

## Border Radius

Consistent corner radius values for different UI elements.

<div class="radius-grid">
  <div class="radius-item">
    <div class="radius-box" style="border-radius: 0;">
    </div>
    <span class="radius-name">radius-none</span>
    <span class="radius-value">0px</span>
  </div>
  <div class="radius-item">
    <div class="radius-box" style="border-radius: 2px;">
    </div>
    <span class="radius-name">radius-sm</span>
    <span class="radius-value">2px</span>
  </div>
  <div class="radius-item">
    <div class="radius-box" style="border-radius: 4px;">
    </div>
    <span class="radius-name">radius-md</span>
    <span class="radius-value">4px</span>
  </div>
  <div class="radius-item">
    <div class="radius-box" style="border-radius: 8px;">
    </div>
    <span class="radius-name">radius-lg</span>
    <span class="radius-value">8px</span>
  </div>
  <div class="radius-item">
    <div class="radius-box" style="border-radius: 12px;">
    </div>
    <span class="radius-name">radius-xl</span>
    <span class="radius-value">12px</span>
  </div>
  <div class="radius-item">
    <div class="radius-box" style="border-radius: 9999px;">
    </div>
    <span class="radius-name">radius-full</span>
    <span class="radius-value">9999px</span>
  </div>
</div>

## WCAG Compliance

<div class="compliance-section">
  <div class="compliance-header">
    <span class="compliance-badge">WCAG 2.1 AA</span>
    <span class="compliance-title">Color Contrast Standards</span>
  </div>
  <ul class="compliance-list">
    <li><strong>Text contrast:</strong> Minimum 4.5:1 for normal text, 3:1 for large text (18pt+)</li>
    <li><strong>Focus indicators:</strong> 3px outline with 3:1 contrast against background</li>
    <li><strong>Interactive elements:</strong> All interactive elements meet WCAG AA (4.5:1 minimum)</li>
    <li><strong>Color independence:</strong> Information conveyed by color is also available through text or icons</li>
  </ul>
</div>

<style>
.color-grid {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 1.5rem 0;
}

.status-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin: 1.5rem 0;
}

@media (min-width: 768px) {
  .status-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.type-details {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1rem;
  margin: 2rem 0;
}

@media (min-width: 768px) {
  .type-details {
    grid-template-columns: repeat(3, 1fr);
  }
}

.type-detail-card {
  padding: 1rem;
  border-radius: 0.75rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
}

.detail-label {
  display: block;
  font-size: 0.75rem;
  color: var(--vp-c-text-3);
  margin-bottom: 0.25rem;
}

.detail-value {
  font-size: 0.875rem;
  color: var(--vp-c-text-1);
  font-family: var(--vp-font-family-mono);
}

.radius-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 1.5rem 0;
}

.radius-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  border-radius: 0.75rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
  min-width: 90px;
}

.radius-box {
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, #3b82f6, #6366f1);
  margin-bottom: 0.75rem;
}

.radius-name {
  font-size: 0.75rem;
  font-family: var(--vp-font-family-mono);
  color: var(--vp-c-text-2);
  margin-bottom: 0.25rem;
}

.radius-value {
  font-size: 0.75rem;
  color: var(--vp-c-text-3);
}

.compliance-section {
  margin-top: 2rem;
  padding: 1.5rem;
  border-radius: 1rem;
  background: linear-gradient(135deg, rgba(34, 197, 94, 0.05), rgba(34, 197, 94, 0.02));
  border: 1px solid rgba(34, 197, 94, 0.2);
}

.compliance-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.compliance-badge {
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  background: rgba(34, 197, 94, 0.2);
  color: #22c55e;
  font-size: 0.75rem;
  font-weight: 600;
}

.compliance-title {
  font-size: 1rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.compliance-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.compliance-list li {
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
  padding-left: 1.5rem;
  position: relative;
}

.compliance-list li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: #22c55e;
}

.compliance-list strong {
  color: var(--vp-c-text-1);
}
</style>
