# CLAUDE.md

This file provides guidance to Claude Code when working with this repository.

## Project Overview

This is a **VitePress-powered documentation site** for the Verkview Vue 3 Design System. The goal is a visually polished documentation site matching the Figma design.

**Target URL:** `design.verkview.eu` (Vercel deployment)

## Quick Reference

```bash
# Development
npm run docs:dev          # Start dev server

# Production build (currently has SSR issues)
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

## Current Status

**Working:**
- Dev server (`npm run docs:dev`)
- Homepage with visual hero, feature cards, component grid
- Design Tokens page with color swatches, typography scale
- Buttons page with interactive ButtonShowcase

**Not Working:**
- Production build fails with SSR error: `Cannot read properties of null (reading 'wrap')`
- Issue is in one of: sidebar.md, table.md, toast.md, or breadcrumbs.md

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

*Design System source: kanban_project/kanban-board/src/components/ds/*
