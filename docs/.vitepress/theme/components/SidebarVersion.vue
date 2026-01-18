<template>
  <div class="sidebar-version">
    <div class="version-badge">
      <span class="version-icon">DS</span>
      <div class="version-info">
        <span class="version-number">v1.0.0</span>
        <span class="version-date">Jan 2026</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.sidebar-version {
  padding: 1rem 1.5rem;
  margin-top: auto;
}

.version-badge {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.version-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: linear-gradient(135deg, #3b82f6, #6366f1);
  border-radius: 8px;
  font-size: 0.625rem;
  font-weight: 700;
  color: white;
}

.version-info {
  display: flex;
  flex-direction: column;
}

.version-number {
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.version-date {
  font-size: 0.6875rem;
  color: var(--vp-c-text-3);
}
</style>
