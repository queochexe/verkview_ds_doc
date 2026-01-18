---
layout: page
title: Design System
---

<HeroSection />

<div class="features-section">
  <div class="features-grid">
    <FeatureCard
      icon="accessibility"
      title="Accessibility First"
      description="Every component meets WCAG 2.1 Level AA standards. Keyboard navigation, screen reader support, and proper ARIA attributes included."
    />
    <FeatureCard
      icon="tokens"
      title="Design Tokens"
      description="Semantic color system, typography scale, spacing units, and more. All documented with contrast ratios and usage guidelines."
    />
    <FeatureCard
      icon="production"
      title="Production Ready"
      description="Copy-paste React components with Tailwind CSS. TypeScript support, proper error handling, and responsive by default."
    />
  </div>
</div>

<div class="component-library">
  <h2 class="library-title">Component Library</h2>
  <div class="library-grid">
    <ComponentCard title="Buttons" :count="24" href="/components/button" />
    <ComponentCard title="Inputs" :count="16" href="/components/inputs" />
    <ComponentCard title="Tables" :count="8" href="/components/tables" />
    <ComponentCard title="Navigation" :count="12" href="/components/navigation" />
    <ComponentCard title="Cards" :count="18" href="/components/cards" />
    <ComponentCard title="Badges" :count="32" href="/components/badges" />
    <ComponentCard title="Avatars" :count="14" href="/components/avatars" />
    <ComponentCard title="Icons" :count="200" href="/components/icons" />
  </div>
</div>

<StatsBar />

<style>
.features-section {
  margin-top: 2.5rem;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1rem;
}

@media (min-width: 768px) {
  .features-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.component-library {
  margin-top: 3rem;
}

.library-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin-bottom: 1rem;
}

.library-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
}

@media (min-width: 768px) {
  .library-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
