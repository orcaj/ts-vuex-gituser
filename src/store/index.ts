import { createStore } from 'vuex'
import AppUser from '@/types/AppUser';

export default createStore({
  state: {
    users: [] as AppUser[],
    searchUsers: [] as AppUser[],
    page: 'home' as string
  },
  getters: {},
  mutations: {
    setUsers(state, users: AppUser[]) {
      state.users = users;
      state.searchUsers = users;
    },
    searchUsers(state, keyword: string) {
      const result = state.users.filter((user: AppUser) => user.login.indexOf(keyword) !== -1)
      state.searchUsers = result;
    },
    setPage(state, page: string) {
      state.page = page
    },
  },
  actions: {},
  modules: {
  }
})
