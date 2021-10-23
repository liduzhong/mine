import Vue from 'vue'
import VAlert from './VAlert/index.js'
import VArtBoard from './VArtBoard/index.js'
import VAvatar from './VAvatar/index.js'
import VAvatarGroup from './VAvatarGroup/index.js'
import VBadge from './VBadge/index.js'
import VBreadcrumb from './VBreadcrumb/index.js'
import VButton from './VButton/index.js'
import VButtonGroup from './VButtonGroup/index.js'
import VCarousel from './VCarousel/index.js'
import VCollapse from './VCollapse/index.js'
import VDrawer from './VDrawer/index.js'
import VModal from './VModal/index.js'
import VPagination from './VPagination/index.js'
import VProgress from './VProgress/index.js'
import VStatus from './VStatus/index.js'
import VSteps from './VSteps/index.js'
import VMenuList from './VMenuList/index.js'
const components = [
    VAlert,
    VArtBoard,
    VAvatar,
    VAvatarGroup,
    VBadge,
    VBreadcrumb,
    VButtonGroup,
    VButton,
    VCarousel,
    VCollapse,
    VDrawer,
    VModal,
    VPagination,
    VProgress,
    VSteps,
    VStatus,
    VMenuList,
]

function install() {
    components.forEach(component => Vue.component(component.name, component))
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    install,
    VAlert,
    VArtBoard,
    VAvatar,
    VAvatarGroup,
    VBadge,
    VBreadcrumb,
    VButtonGroup,
    VButton,
    VCarousel,
    VCollapse,
    VDrawer,
    VModal,
    VPagination,
    VProgress,
    VSteps,
    VStatus,
    VMenuList,
}