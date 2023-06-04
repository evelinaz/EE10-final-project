import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomePage.vue')
    },


    {
      path: '/persons', // use small first letter
      name: 'persons', // use small first letter
      component: () => import('../views/PersonsPage.vue')
    },

    {
      path: '/projects',
      name: 'projects',
      component: () => import('../views/ProjectsPage.vue')
    },


    {
      path: '/tasks',
      name: 'tasks',
      component: () => import('../views/TasksPage.vue')

    }
  ]
})


export default router