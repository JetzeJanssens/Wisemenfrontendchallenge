import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Detail from '../views/Detail.vue'
import Favorites from '../views/Favorites.vue'
import Team from '../views/Team.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/:id',
    name: 'Detail',
    component: Detail,
    props: true,
  },
  {
    path: '/favorites',
    name: 'Favorites',
    component: Favorites,
    props: true
  },
  {
    path: '/team',
    name: 'Team',
    component: Team,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
