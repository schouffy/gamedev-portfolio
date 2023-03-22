import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
//import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Root',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/resume',
    name: 'Resume',
    component: () => import(/* webpackChunkName: "about" */ '../views/ResumeView.vue')
  },
  {
    path: '/game-projects',
    name: 'Game Projects',
    component: () => import(/* webpackChunkName: "about" */ '../views/GameProjectsView.vue')
  },
  {
    path: '/game-tools-projects',
    name: 'GameTools Projects',
    component: () => import(/* webpackChunkName: "about" */ '../views/GameToolsProjectsView.vue')
  },
  {
    path: '/other-projects',
    name: 'Other Projects',
    component: () => import(/* webpackChunkName: "about" */ '../views/OtherProjectsView.vue')
  },
  {
    path: '/references',
    name: 'References',
    component: () => import(/* webpackChunkName: "about" */ '../views/ReferencesView.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "about" */ '../views/ContactView.vue')
  },
  {
    path: '/404',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "about" */ '../views/404View.vue')
  },
  {
    path: '*',
    redirect: '/404'
  }
]

const router = new VueRouter({
  routes
})

export default router
