import { h, type App } from 'vue'
import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'

// Import global styles
import './styles/globals.css'

// Import sidebar version component
import SidebarVersion from './components/SidebarVersion.vue'

// Import documentation helper components
import ComponentDemo from './components/ComponentDemo.vue'
import PropsTable from './components/PropsTable.vue'
import ColorSwatch from './components/ColorSwatch.vue'
import CodeBlock from './components/CodeBlock.vue'

// Import new visual documentation components
import HeroSection from './components/HeroSection.vue'
import FeatureCard from './components/FeatureCard.vue'
import ComponentCard from './components/ComponentCard.vue'
import StatsBar from './components/StatsBar.vue'
import ColorSwatchRow from './components/ColorSwatchRow.vue'
import StatusColorCard from './components/StatusColorCard.vue'
import TypographyScale from './components/TypographyScale.vue'
import SpacingScale from './components/SpacingScale.vue'
import ButtonShowcase from './components/ButtonShowcase.vue'

// Import Design System components
import DsButton from './ds/DsButton.vue'
import DsBadge from './ds/DsBadge.vue'
import DsCard from './ds/DsCard.vue'
import DsModal from './ds/DsModal.vue'
import DsInput from './ds/DsInput.vue'
import DsTextarea from './ds/DsTextarea.vue'
import DsCheckbox from './ds/DsCheckbox.vue'
import DsTable from './ds/DsTable.vue'
import DsSidebar from './ds/DsSidebar.vue'
import DsToast from './ds/DsToast.vue'
import DsBreadcrumbs from './ds/DsBreadcrumbs.vue'

const theme: Theme = {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'sidebar-nav-after': () => h(SidebarVersion)
    })
  },
  enhanceApp({ app }: { app: App }) {
    // Register documentation helper components
    app.component('ComponentDemo', ComponentDemo)
    app.component('PropsTable', PropsTable)
    app.component('ColorSwatch', ColorSwatch)
    app.component('CodeBlock', CodeBlock)

    // Register visual documentation components
    app.component('HeroSection', HeroSection)
    app.component('FeatureCard', FeatureCard)
    app.component('ComponentCard', ComponentCard)
    app.component('StatsBar', StatsBar)
    app.component('ColorSwatchRow', ColorSwatchRow)
    app.component('StatusColorCard', StatusColorCard)
    app.component('TypographyScale', TypographyScale)
    app.component('SpacingScale', SpacingScale)
    app.component('ButtonShowcase', ButtonShowcase)

    // Register Design System components for live demos
    app.component('DsButton', DsButton)
    app.component('DsBadge', DsBadge)
    app.component('DsCard', DsCard)
    app.component('DsModal', DsModal)
    app.component('DsInput', DsInput)
    app.component('DsTextarea', DsTextarea)
    app.component('DsCheckbox', DsCheckbox)
    app.component('DsTable', DsTable)
    app.component('DsSidebar', DsSidebar)
    app.component('DsToast', DsToast)
    app.component('DsBreadcrumbs', DsBreadcrumbs)
  }
}

export default theme
