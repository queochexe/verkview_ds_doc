# Verkview Design System Documentation - Project Context

## Project Overview

This is a VitePress-powered documentation site for the Verkview Vue 3 Design System. The goal is to create a visually polished, professional documentation site similar to the Figma design at https://guide-trick-53885660.figma.site/

**Target URL:** `design.verkview.eu` (via Vercel)

## Tech Stack

- **Framework:** VitePress 1.6.4
- **UI Framework:** Vue 3 + TypeScript
- **Styling:** Tailwind CSS with zinc color palette
- **Icons:** lucide-vue-next
- **Hosting:** Vercel (planned)

## Project Location

```
/Users/marcosimioni/Desktop/development/verkview_ds_doc
```

This is a **separate repository** from the main kanban_project. The Design System components were copied from `kanban_project/kanban-board/src/components/ds/`.

## Visual Design Reference

Screenshots of the target design are in:
```
/Users/marcosimioni/Desktop/development/verkview_ds_doc/screenshot/
```

Key design elements:
1. **Homepage**: Dark theme, gradient hero text ("Faster Than Ever" in purple gradient), feature cards, component library grid, stats bar
2. **Design Tokens page**: Visual color swatches with hex values, status color cards, typography scale, spacing scale, border radius examples, WCAG compliance section
3. **Buttons page**: Live interactive examples showing variants, sizes, icons, states, button groups

## Project Structure

```
verkview_ds_doc/
├── .vitepress/
│   ├── config.ts                    # VitePress configuration
│   ├── theme/
│   │   ├── index.ts                 # Theme entry, component registration
│   │   ├── styles/
│   │   │   └── globals.css          # Design tokens, CSS variables
│   │   ├── components/              # Documentation helper components
│   │   │   ├── HeroSection.vue      # Homepage hero with gradient text
│   │   │   ├── FeatureCard.vue      # Feature cards (accessibility, tokens, production)
│   │   │   ├── ComponentCard.vue    # Component library grid cards
│   │   │   ├── StatsBar.vue         # Stats section (11+ components, WCAG AA, etc.)
│   │   │   ├── ColorSwatchRow.vue   # Color palette rows with copy functionality
│   │   │   ├── StatusColorCard.vue  # Status color cards (success, warning, error, etc.)
│   │   │   ├── TypographyScale.vue  # Typography examples
│   │   │   ├── SpacingScale.vue     # Spacing scale visualization
│   │   │   ├── ButtonShowcase.vue   # Interactive button examples
│   │   │   ├── ComponentDemo.vue    # Generic component demo wrapper
│   │   │   ├── PropsTable.vue       # Props documentation table
│   │   │   ├── ColorSwatch.vue      # Simple color swatch
│   │   │   └── CodeBlock.vue        # Code display with copy
│   │   ├── ds/                      # Design System components (copied from kanban)
│   │   │   ├── DsButton.vue
│   │   │   ├── DsBadge.vue
│   │   │   ├── DsCard.vue
│   │   │   ├── DsModal.vue          # Has SSR guards added
│   │   │   ├── DsInput.vue
│   │   │   ├── DsTextarea.vue
│   │   │   ├── DsCheckbox.vue
│   │   │   ├── DsTable.vue
│   │   │   ├── DsSidebar.vue
│   │   │   ├── DsToast.vue
│   │   │   └── DsBreadcrumbs.vue
│   │   └── utils/
│   │       └── accessibility.ts     # FocusManager, AriaManager (SSR-safe)
├── docs/
│   ├── index.md                     # Homepage (redesigned with visual components)
│   ├── getting-started/
│   │   ├── installation.md
│   │   ├── usage.md
│   │   └── theming.md
│   ├── foundations/
│   │   ├── colors.md                # Design Tokens page (redesigned)
│   │   ├── typography.md
│   │   ├── spacing.md
│   │   └── accessibility.md
│   ├── components/
│   │   ├── button.md                # Buttons page (redesigned with ButtonShowcase)
│   │   ├── input.md
│   │   ├── textarea.md
│   │   ├── checkbox.md
│   │   ├── badge.md
│   │   ├── card.md
│   │   ├── modal.md
│   │   ├── table.md
│   │   ├── sidebar.md
│   │   ├── breadcrumbs.md
│   │   └── toast.md
│   └── utilities/
│       ├── focus-manager.md
│       ├── aria-manager.md
│       └── badge-helpers.md
├── public/
│   └── logo.svg
├── screenshot/                      # Target design screenshots
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
├── vercel.json
└── .gitignore
```

## Current Status

### Completed
- [x] Project setup with VitePress, Tailwind CSS, TypeScript
- [x] Copied 11 Design System components from kanban_project
- [x] Created accessibility utilities (FocusManager, AriaManager) with SSR guards
- [x] Created visual documentation components (HeroSection, FeatureCard, etc.)
- [x] Redesigned Homepage with hero, features, component grid, stats
- [x] Redesigned Design Tokens page with visual swatches
- [x] Redesigned Buttons page with interactive ButtonShowcase
- [x] Dev server works (http://localhost:5176/)

### In Progress
- [ ] Fix SSR build issues for production

### Pending
- [ ] Push to git
- [ ] Deploy to Vercel

## Known Issues

### SSR Build Error
The production build (`npm run docs:build`) fails with:
```
Cannot read properties of null (reading 'wrap')
```

**Root Cause:** One or more of these component documentation pages causes the error during SSR:
- sidebar.md
- table.md
- toast.md
- breadcrumbs.md

The error is NOT in modal.md (that was tested and works).

**Investigation Done:**
- Added `isBrowser` guards to `accessibility.ts`
- Added SSR guards to `DsModal.vue` (watch and onBeforeUnmount)
- Wrapped DsModal's Teleport in `<ClientOnly>`
- Added `ignoreDeadLinks: true` to VitePress config
- Added `ssr: { noExternal: ['lucide-vue-next'] }` to Vite config

**Next Steps to Fix:**
1. Binary search to find which of the 4 files causes the issue
2. Check for any `document` or `window` access in the markdown or components
3. Consider wrapping problematic components in `<ClientOnly>` in the markdown files
4. Or simplify those markdown files to not use custom Vue components during SSR

## Commands

```bash
# Development
npm run docs:dev          # Start dev server (currently on port 5176)

# Build (currently failing with SSR error)
npm run docs:build        # Production build
npm run docs:preview      # Preview production build

# Clear cache if needed
rm -rf docs/.vitepress/cache docs/.vitepress/.temp node_modules/.vite
```

## Key Configuration Files

### .vitepress/config.ts
- VitePress configuration with navigation, sidebar
- Tailwind CSS integration via PostCSS
- `ignoreDeadLinks: true` to bypass dead link errors
- SSR config for lucide-vue-next

### tailwind.config.js
- Zinc color palette
- Custom spacing and typography
- Dark mode configuration

## Design Tokens

The design system uses:
- **Colors:** Zinc palette (zinc-50 to zinc-950) for neutrals
- **Status Colors:** Success (#22c55e), Warning (#f59e0b), Error (#ef4444), Info (#3b82f6), Purple (#8b5cf6)
- **Typography:** Inter font family, sizes from 12px to 48px
- **Spacing:** 4px grid system (4px, 8px, 12px, 16px, 20px, 24px, 32px, 40px, 48px)
- **Border Radius:** none, sm (2px), md (4px), lg (8px), xl (12px), full (9999px)

## Important Notes

1. **SSR Guards:** Any component that accesses `document` or `window` needs:
   ```typescript
   const isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';
   if (!isBrowser) return;
   ```

2. **ClientOnly Wrapper:** For components that can't be SSR-rendered, use VitePress's built-in `<ClientOnly>` component in markdown or templates.

3. **Dev vs Build:** The dev server works fine because it doesn't pre-render pages. The build fails during the SSR rendering phase.

4. **Component Registration:** All components (DS and documentation helpers) are registered globally in `.vitepress/theme/index.ts`.

## Git Status

The project is NOT yet pushed to git. Files are ready but waiting for:
1. SSR build fix
2. Local testing confirmation
3. Git init and push
4. Vercel deployment

## Related Projects

- **Main Kanban Project:** `/Users/marcosimioni/Desktop/development/kanban_project`
- **Design System Source:** `kanban_project/kanban-board/src/components/ds/`
- **Figma Design:** https://guide-trick-53885660.figma.site/

---

*Last Updated: January 17, 2026*
