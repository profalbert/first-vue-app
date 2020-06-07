import {usersAPI} from '@/api/api'

export default {
  actions: {
    async fetchUsers(ctx, currentPage = 1, pageSize = 20) {
      let response = await usersAPI.requestUsers(currentPage, pageSize)
      let users = response.data.map((item, i) => ({...item, idName: item.id, id: i}))
      ctx.commit('updateUsers', {users})
      ctx.commit('initializeApp')
    },
  },
  mutations: {
    updateUsers(state, payload) {
      state.users = payload.users
    },
    initializeApp(state) {
      setTimeout(() => {
        state.initialized = true
      }, 1000)
    },
    setActiveUser(state, payload) {
      state.activeUser = payload.user
    },
  },
  state: {
    initialized: false,
    users: [],
    currentPage: 1,
    pageSize: 50,
    totalCount: 1000,
    activeUser: {},
  },
  getters: {
    getState(state) { // чтобы обратится в геттере к другому геттеру, 
      // то нужно просто указать вторым параметром 
      // после state - это параметр getters и использовать уже этот общий объект
      return state
    },
    getInitialized(state) {
      return state.initialized
    },
  },
}


