<script setup lang="ts">
import { ArrowRight, Github } from 'lucide-vue-next'
</script>

<template>
  <div class="hero-section">
    <div class="hero-badge">
      <span class="badge-dot"></span>
      Production-Ready Design System
    </div>

    <h1 class="hero-title">
      Build Accessible Interfaces
      <span class="gradient-text">Faster Than Ever</span>
    </h1>

    <p class="hero-description">
      A comprehensive design system built with React and Tailwind CSS. WCAG AA/AAA
      compliant components, semantic tokens, and production-ready code.
    </p>

    <div class="hero-actions">
      <a href="/components/button" class="btn-primary">
        Explore Components
        <ArrowRight class="w-4 h-4" />
      </a>
      <a href="https://github.com/verkview/design-system" class="btn-secondary" target="_blank">
        <Github class="w-4 h-4" />
        View Code
      </a>
    </div>
  </div>
</template>

<style scoped>
.hero-section {
  @apply text-center py-12 md:py-16 px-4;
}

.hero-badge {
  @apply inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6;
  background: rgba(34, 197, 94, 0.1);
  border: 1px solid rgba(34, 197, 94, 0.3);
  color: #22c55e;
}

.badge-dot {
  @apply w-2 h-2 rounded-full;
  background: #22c55e;
  box-shadow: 0 0 8px #22c55e;
}

.hero-title {
  @apply text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-100 mb-5 leading-tight;
}

.gradient-text {
  @apply block mt-1;
  background: linear-gradient(135deg, #3b82f6, #60a5fa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-description {
  @apply text-base md:text-lg text-zinc-400 max-w-2xl mx-auto mb-8 leading-relaxed;
}

.hero-actions {
  @apply flex flex-col sm:flex-row items-center justify-center gap-3;
}

.btn-primary {
  @apply inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium text-white transition-all text-sm;
  background: #3b82f6;
}

.btn-primary:hover {
  background: #2563eb;
}

.btn-secondary {
  @apply inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium text-zinc-300 transition-all text-sm;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.2);
}
</style>
