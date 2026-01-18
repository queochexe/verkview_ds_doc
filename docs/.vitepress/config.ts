import { defineConfig } from 'vitepress'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

export default defineConfig({
  title: 'Design System',
  description: 'Vue 3 Design System Documentation - WCAG 2.1 AA Compliant',

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    ['meta', { name: 'theme-color', content: '#3b82f6' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:title', content: 'Verkview Design System' }],
    ['meta', { name: 'og:description', content: 'Vue 3 Design System Documentation - WCAG 2.1 AA Compliant' }],
  ],

  ignoreDeadLinks: true,

  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'Design System',

    nav: [
      { text: 'Get Started', link: '/components/button' }
    ],

    sidebar: {
      '/': [
        {
          text: '',
          items: [
            { text: 'Overview', link: '/' },
            { text: 'Design Tokens', link: '/design-tokens' },
            { text: 'Buttons', link: '/components/button' },
            { text: 'Form Inputs', link: '/components/inputs' },
            { text: 'Selection Controls', link: '/components/selection-controls' },
            { text: 'Badges & Pills', link: '/components/badges' },
            { text: 'Tables', link: '/components/tables' },
            { text: 'Navigation', link: '/components/navigation' },
            { text: 'Cards', link: '/components/cards' },
            { text: 'Modals & Dialogs', link: '/components/modal' },
            { text: 'Avatars', link: '/components/avatars' },
            { text: 'Icons', link: '/components/icons' }
          ]
        },
        {
          text: 'RESOURCES',
          items: [
            { text: 'WCAG Guidelines', link: '/resources/wcag-guidelines' },
            { text: 'Lucide Icons', link: 'https://lucide.dev/icons/' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/verkview/design-system' }
    ],

    search: {
      provider: 'local'
    }
  },

  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    }
  },

  vite: {
    css: {
      postcss: {
        plugins: [
          tailwindcss(),
          autoprefixer()
        ]
      }
    },
    ssr: {
      noExternal: ['lucide-vue-next']
    }
  }
})
