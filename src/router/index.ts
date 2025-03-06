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
    path: '/zoldargames-projects',
    name: 'Zoldar Games Projects',
    component: () => import(/* webpackChunkName: "about" */ '../views/GameProjects.vue')
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
    path: '/vca-internals',
    name: 'VCA Internals',
    component: () => import(/* webpackChunkName: "about" */ '../views/VCA_Internals.vue')
  },
  {
    path: '/vca-other',
    name: 'VCA Other',
    component: () => import(/* webpackChunkName: "about" */ '../views/VCA_Other.vue')
  },
  {
    path: '/ra-2d-setup-in-unreal',
    name: 'RA 2D Setup in Unreal',
    component: () => import(/* webpackChunkName: "about" */ '../views/RA_2DSetup.vue')
  },
  {
    path: '/ra-gameplay',
    name: 'RA Gameplay Elements',
    component: () => import(/* webpackChunkName: "about" */ '../views/RA_Gameplay.vue')
  },
  {
    path: '/ra-enemy-ai',
    name: 'RA Enemy AI',
    component: () => import(/* webpackChunkName: "about" */ '../views/RA_EnemyAI.vue')
  },
  {
    path: '/ra-internals',
    name: 'RA Internals',
    component: () => import(/* webpackChunkName: "about" */ '../views/RA_Internals.vue')
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
  routes,
  scrollBehavior() {
    return {x: 0, y: 0}
  }
})

export default router
