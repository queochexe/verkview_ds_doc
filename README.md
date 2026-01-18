# Verkview Design System Documentation

Vue 3 Design System documentation site built with VitePress.

## Live Site

**Production:** [design.verkview.eu](https://design.verkview.eu)

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run docs:dev

# Build for production
npm run docs:build

# Preview production build
npm run docs:preview
```

## Project Structure

```
verkview_ds_doc/
├── .vitepress/
│   ├── config.ts           # VitePress configuration
│   └── theme/
│       ├── index.ts        # Theme setup
│       ├── components/     # Demo components
│       ├── ds/             # Design System components
│       ├── utils/          # Utility functions
│       └── styles/         # Global styles
├── docs/
│   ├── index.md            # Home page
│   ├── getting-started/    # Setup guides
│   ├── foundations/        # Design tokens
│   ├── components/         # Component docs
│   └── utilities/          # Utility docs
├── public/                 # Static assets
├── package.json
├── tailwind.config.js
└── vercel.json
```

## Documentation Sections

- **Getting Started**: Installation, usage, theming
- **Foundations**: Colors, typography, spacing, accessibility
- **Components**: 11 Vue components with live demos
- **Utilities**: Focus management, ARIA helpers, color mapping

## Design System Components

| Component | Description |
|-----------|-------------|
| DsButton | Primary action button |
| DsInput | Form text input |
| DsTextarea | Multi-line text input |
| DsCheckbox | Checkbox with label |
| DsBadge | Status indicator |
| DsCard | Content container |
| DsModal | Dialog overlay |
| DsTable | Data table |
| DsSidebar | Navigation sidebar |
| DsBreadcrumbs | Navigation breadcrumbs |
| DsToast | Notification toast |

## Tech Stack

- **Framework**: VitePress 1.x
- **Styling**: Tailwind CSS 3.4
- **Icons**: Lucide Vue
- **TypeScript**: Full type support

## Deployment

The site is automatically deployed to Vercel on push to main branch.

### Manual Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

## DNS Configuration

Add CNAME record for custom domain:
- Type: CNAME
- Name: design
- Value: cname.vercel-dns.com

## License

MIT
