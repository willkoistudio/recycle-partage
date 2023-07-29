import Vue from 'vue'
import Vuex from 'vuex'
import users from './modules/users'
import articles from './modules/articles'
// import comments from './modules/comments'
// import categories from './modules/categories'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    users,
    articles
    // comments,
    // categories
  }
})
