import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Root',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/resume',
    name: 'Resume',
    component: () => import(/* webpackChunkName: "about" */ '../views/Resume.vue')
  },
  {
    path: '/game-projects',
    name: 'Game Projects',
    component: () => import(/* webpackChunkName: "about" */ '../views/GameProjects.vue')
  },
  {
    path: '/other-projects',
    name: 'Other Projects',
    component: () => import(/* webpackChunkName: "about" */ '../views/OtherProjects.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "about" */ '../views/Contact.vue')
  },
  {
    path: '/vca-vehicles',
    name: 'VCA Vehicles',
    component: () => import(/* webpackChunkName: "about" */ '../views/VCA_Vehicles.vue')
  },
  {
    path: '/vca-enemy-ai',
    name: 'VCA Enemy AI',
    component: () => import(/* webpackChunkName: "about" */ '../views/VCA_EnemyAI.vue')
  },
  {
    path: '/vca-gameplay',
    name: 'VCA Gameplay Elements',
    component: () => import(/* webpackChunkName: "about" */ '../views/VCA_Gameplay.vue')
  },
  {
    path: '/vca-ux',
    name: 'VCA User Experience',
    component: () => import(/* webpackChunkName: "about" */ '../views/VCA_UserExperience.vue')
  },
  {
    path: '/vca-architecture',
    name: 'VCA Architecture',
    component: () => import(/* webpackChunkName: "about" */ '../views/VCA_Architecture.vue')
  },
  {
    path: '/vca-new-player-help',
    name: 'VCA New Player Help',
    component: () => import(/* webpackChunkName: "about" */ '../views/VCA_NewPlayerHelp.vue')
  },
  {
    path: '/404',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "about" */ '../views/404.vue')
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
