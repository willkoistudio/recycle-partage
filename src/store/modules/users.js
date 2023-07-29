import httpService from '@/services/httpService'

export default {
  namespaced: true,
  state: {
    users: []
  },
  getters: {
    getUsers: state => {
      return state.users
    },
    getDetail: (state, getters) => (id) => {
      return state.users[id]
    }
  },
  mutations: {
    POPULATE_USERS (state, data) {
      state.users = data
    },
    ENRICH_USER (state, data) {
      state.users[data.id] = data
    }
  },
  actions: {
    getAll: context => {
      return new Promise((resolve, reject) => {
        httpService.get('users', JSON.stringify({}))
          .then((response) => {
            context.commit('POPULATE_USERS', response)
            resolve(response)
          })
      })
    },
    getUser: (context, data) => {
      return new Promise((resolve, reject) => {
        if (data.id !== 'undefined') {
          httpService.get(`users/${data.id}`, JSON.stringify({}))
            .then((response) => {
              context.commit('ENRICH_USER', response)
              resolve(response)
            })
        }
      })
    }
  }
}
