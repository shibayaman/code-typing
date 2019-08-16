import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import SelectMenue from './views/SelectMenue.vue'
import Practice from './views/Practice.vue'
import Login from './views/Login.vue'
import Signin from './views/Signin.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/select',
      name: 'selecte',
      component: SelectMenue
    },
    {
      path: '/select/practice',
      name: 'practice',
      component: Practice
    },
    {
      path: '/signin',
      name: 'signin',
      component: Signin
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
