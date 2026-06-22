# CLAUDE.md

This file provides guidance to Claude Code when working with this repository.

## Project Overview

This is a **VitePress-powered documentation site** for the Verkview Vue 3 Design System. The goal is a visually polished documentation site matching the Figma design.

**Target URL:** `design.verkview.eu` (Vercel deployment)

## Quick Reference

```bash
# Development
npm run docs:dev          # Start dev server

# Production build
npm run docs:build        # Build for production
npm run docs:preview      # Preview production build
```

## Tech Stack

- VitePress 1.6.4
- Vue 3 + TypeScript
- Tailwind CSS (zinc color palette)
- lucide-vue-next icons

## Project Structure

```
.vitepress/
├── config.ts             # VitePress config
└── theme/
    ├── index.ts          # Theme entry, global component registration
    ├── components/       # Documentation UI components (HeroSection, ButtonShowcase, etc.)
    ├── ds/               # Design System components (DsButton, DsBadge, etc.)
    └── utils/            # Accessibility utilities

docs/
├── index.md              # Homepage
├── foundations/          # Design tokens, typography, spacing
├── components/           # Component documentation (button, input, etc.)
└── utilities/            # Utility function docs
```

## Design System Components

Source: `kanban_project/kanban-board/src/components/ds/` — 19 components total.

| Component | Doc page | Status |
|-----------|----------|--------|
| `DsButton` | `docs/components/button.md` | ✅ documented |
| `DsBadge` | `docs/components/badge.md` | ✅ documented |
| `DsCard` | `docs/components/card.md` | ✅ documented |
| `DsModal` | `docs/components/modal.md` | ✅ documented |
| `DsInput` | `docs/components/input.md` | ✅ documented |
| `DsTextarea` | `docs/components/textarea.md` | ✅ documented |
| `DsCheckbox` | `docs/components/checkbox.md` | ✅ documented |
| `DsTable` | `docs/components/table.md` | ✅ documented |
| `DsSidebar` | `docs/components/sidebar.md` | ✅ documented |
| `DsToast` | `docs/components/toast.md` | ✅ documented |
| `DsBreadcrumbs` | `docs/components/breadcrumbs.md` | ✅ documented |
| `DsTimerDisplay` | `docs/components/timer-display.md` | ❌ needs page |
| `DsFab` | `docs/components/fab.md` | ❌ needs page |
| `DsFilterChip` | `docs/components/filter-chip.md` | ❌ needs page |
| `DsProjectBand` | `docs/components/project-band.md` | ❌ needs page |
| `DsCalendarEvent` | `docs/components/calendar-event.md` | ❌ needs page |
| `DsBottomSheet` | `docs/components/bottom-sheet.md` | ❌ needs page |
| `DsSpinner` | `docs/components/spinner.md` | ❌ needs page |
| `DsProgressBar` | `docs/components/progress-bar.md` | ❌ needs page |

### New components summary (added June 2026)

- **DsTimerDisplay** — token-aware timer widget; props: `timerState: TimerState`, `timeTracked: number`, `timerStartedAt?: number | null`; emits: `start`, `pause`, `stop`
- **DsFab** — circular FAB; variant `primary` (blue bg) or `surface` (elevated+border); size `md`/`lg`; prop `:icon`
- **DsFilterChip** — toggle chip; props `label`, `active`, `color`, `icon`; emits `click`
- **DsProjectBand** — absolute-positioned colored band for calendar; props `color`, `leftPercent`, `widthPercent`, `topPx`, `heightPx?`, `dimmed?`, `clickable?`; emits `click`
- **DsCalendarEvent** — timed task block for hour timeline; encapsulates `hex+'26'` 15% opacity trick; props `title`, `timeLabel`, `topPx`, `heightPx`, `projectColor`
- **DsBottomSheet** — overlay + slide-up panel + handle; named slots `#header`, default body, `#footer`; mobile=slide up, desktop=scale-in modal
- **DsSpinner** — Loader2 `animate-spin`; sizes `sm` (w-4), `md` (w-6), `lg` (w-8); optional `label` for screen readers
- **DsProgressBar** — 0–100 progress bar; props `value`, `color?`, `size? (sm|md)`, `ariaLabel?`; track uses `--bg-hover`, fill defaults to `--btn-primary-bg`

Also extended in June 2026:
- **DsButton** — added `danger` variant (opacity-based red, dark-mode safe)
- **DsBadge** — added `dot?: 'green'|'red'|'blue'|'gray'` and `dotPulse?: boolean` props

## Current Status

**Working:**
- Dev server (`npm run docs:dev`)
- Production build (`npm run docs:build`)
- Homepage with visual hero, feature cards, component grid
- Design Tokens page with color swatches, typography scale
- Buttons page with interactive ButtonShowcase

## Key Files

| File | Purpose |
|------|---------|
| `.vitepress/theme/index.ts` | Global component registration |
| `.vitepress/theme/components/*.vue` | Documentation UI components |
| `.vitepress/theme/ds/*.vue` | Design System components |
| `docs/index.md` | Homepage |
| `docs/foundations/colors.md` | Design Tokens page |
| `docs/components/button.md` | Buttons documentation |

## SSR Considerations

Components accessing `document` or `window` need guards:

```typescript
const isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';
if (!isBrowser) return;
```

Or wrap in `<ClientOnly>` in templates.

## Visual Design Reference

Screenshots in `/screenshot/` folder show the target design from Figma.
Figma URL: https://guide-trick-53885660.figma.site/

## Full Context

See `project_context.md` for detailed conversation history and implementation notes.

---



