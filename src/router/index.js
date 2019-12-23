import Login from '../components/Login.vue'
import Store from '../components/Store.vue'
import NotFound from '../components/NotFound.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'
import { AUTH_MODULE } from '../store'
import { IS_LOGGED_IN } from '../store/getters/auth'
import store from '../store'

Vue.use(VueRouter)

function requireAuth (to, from, next) {
  if (store.getters[AUTH_MODULE+"/"+IS_LOGGED_IN])
    next()
  else
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
}
    
export default new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
      { path: '/' },
      { path: '/store', component: Store, beforeEnter: requireAuth },
      { path: '/login', component: Login },
      { path: '/logout',
        beforeEnter (to, from, next) {
          auth.logout()
          next('/')
        }
      },
      { path: '*', component: NotFound }
    ]
  })