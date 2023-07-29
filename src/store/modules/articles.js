import httpService from '@/services/httpService'

export default {
  namespaced: true,
  state: {
    articles: []
  },
  getters: {
    getArticles: state => {
      return state.articles
    },
    getDetail: (state, getters) => (id) => {
      return state.articles[id]
    }
  },
  mutations: {
    POPULATE_ARTICLES (state, data) {
      state.articles = data
    },
    ENRICH_ARTICLE (state, data) {
      state.articles[data.id] = data
    }
  },
  actions: {
    getAll: context => {
      return new Promise((resolve, reject) => {
        httpService.get('articles', JSON.stringify({}))
          .then((response) => {
            context.commit('POPULATE_ARTICLES', response)
            resolve(response)
          })
      })
    },
    getItem: (context, data) => {
      return new Promise((resolve, reject) => {
        if (data.id !== 'undefined') {
          httpService.get(`articles/${data.id}`, JSON.stringify({}))
            .then((response) => {
              context.commit('ENRICH_ARTICLE', response)
              resolve(response)
            })
        }
      })
    }
  }
}
