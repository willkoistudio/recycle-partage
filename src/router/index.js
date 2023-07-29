import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Articles from '@/components/articles/Articles'
import ArticleDetail from '@/components/articles/ArticleDetail'
import Apropos from '@/components/Apropos'
import Login from '@/components/login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/home',
      alias: '/',
      name: 'Home',
      component: Home,
      meta: {
        // requiresAuth: true,
        title: 'Recycle & Partage - Accueil'
      }
    },
    {
      path: '/category',
      alias: ['/category/art', '/category/economie', '/category/environnement'],
      component: Articles
    },
    {
      path: '/article/:id',
      component: ArticleDetail,
      name: 'ArticleDetail'
    },
    {
      path: '/about',
      component: Apropos,
      name: 'A propos'

    },
    {
      path: '/login',
      component: Login,
      name: 'Login'
    },
    {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    },
    {
      path: '**',
      redirectTo: '/login'
    }
  ]
})
