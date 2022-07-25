import Vue from 'vue'
import App from './App.vue'
import VueMeta from 'vue-meta'
import VueRouter from 'vue-router'
import VueMq from 'vue-mq'
import './ml'
import Workspace from './components/Workspace.vue'
import ProjectPage from './components/ProjectPage.vue'
import VBodyScrollLock from 'v-body-scroll-lock'


Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueMeta)
Vue.use(VBodyScrollLock)
Vue.use(VueMq, {
  breakpoints: { // default breakpoints - customize this
    sm: 768,
    md: 1080,
    lg: Infinity,
  },
  defaultBreakpoint: 'sm' // customize this for SSR
})

const router = new VueRouter({
  routes: [
    { name: 'home', path: '/', component: Workspace },
    { name: 'project', path: '/project/:projectId', component: ProjectPage, props: true }
  ]
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
