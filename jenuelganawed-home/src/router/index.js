import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: '',
        name: 'overview',
        component: () => import('./../components/overview/Overview.vue')
      }
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
