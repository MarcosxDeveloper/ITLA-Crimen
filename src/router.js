import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/reportar',
      name: 'map',
      component: () => import('./views/Map.vue')
    },
    {
      path: '/historial',
      name: 'history',
      component: () => import('./views/History.vue')
    }
  ]
})
