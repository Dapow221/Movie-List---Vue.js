import { createRouter, createWebHistory } from 'vue-router'

import LoginPage from '../components/LoginPage.vue'
import HomePage from '../components/HomePage.vue'
import RegisterPage from '../components/RegisterPage.vue'
import MoviesListPage from '../components/MoviesListPage.vue'
import FavoritePage from '../components/FavoritePage.vue'
import DetailMoviesPage from '../components/DetailMoviesPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/login',
      name: 'LoginPage',
      component: LoginPage
    },
    {
      path: '/register',
      name: 'RegisterPage',
      component: RegisterPage
    },
    {
      path: '/movies',
      name: 'MoviesListPage',
      component: MoviesListPage
    },
    {
      path: '/movies/:id',
      name: 'DetailMoviesPage',
      component: DetailMoviesPage
    },
    {
      path: '/favorite',
      name: 'FavoritePage',
      component: FavoritePage
    }
  ]
})

router.beforeEach((to, from) => {
  if(localStorage.getItem('access_token') && (to.name === 'LoginPage' || to.name === 'RegisterPage')) {
    return { name : 'HomePage'}
  }
})

export default router
