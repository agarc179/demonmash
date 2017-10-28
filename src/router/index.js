import Vue from 'vue'
import Router from 'vue-router'
import HomeView from '../components/HomeView'
import Alerts from '../components/Alerts'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/alert',
      name: 'alert',
      component: Alerts
    }
  ]
})
