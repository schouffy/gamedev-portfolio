import { createRouter as _createRouter, createWebHistory } from 'vue-router'

// route-level code splitting
const AboutView = () => import('../views/About.vue');
const ResumeView = () => import('../views/Resume.vue')
const GameView = () => import('../views/GameProjects.vue')
const OtherView = () => import('../views/OtherProjects.vue')
const ContactView = () => import('../views/Contact.vue')
const E404View = () => import('../views/404.vue')

export function createRouter(){
  return _createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/',
        name: 'Root',
        component: AboutView
      },
      {
        path: '/resume',
        name: 'Resume',
        component: ResumeView
      },
      {
        path: '/game-projects',
        name: 'Game Projects',
        component: GameView
      },
      {
        path: '/other-projects',
        name: 'Other Projects',
        component: OtherView
      },
      {
        path: '/contact',
        name: 'Contact',
        component: ContactView
      },
      {
        path: '/:pathMatch(.*)',
        name: 'NotFound',
        component: E404View
      }
    ]
  })
}
