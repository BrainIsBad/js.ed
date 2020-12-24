export { default as Navbar } from '../..\\components\\Navbar.vue'

export const LazyNavbar = import('../..\\components\\Navbar.vue' /* webpackChunkName: "components_Navbar" */).then(c => c.default || c)
