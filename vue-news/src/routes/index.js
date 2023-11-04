import  Vue from 'vue'
import VueRouter from "vue-router";
import NewsVue from '../views/NewsView.vue'
import JobsView from '../views/JobsView.vue'
import AskView from '../views/AskView.vue'
import UserView from '../views/UserView.vue'
import ItemView from '../views/ItemView.vue'

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path:'/',
      redirect: '/news'
    },
    {
      path:'/news',
      name: 'news',
      component: NewsVue
    },
    {
      path:'/ask',
      name: 'ask',
      component: AskView
    },
    {
      path:'/jobs',
      name: 'jobs',
      component: JobsView
    },
    {
      path:'/user/:id',
      component: UserView
    },
    {
      path:'/item/:id',
      component: ItemView
    },
  ]
})