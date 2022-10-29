import { createStore } from 'vuex'
import AppUser from '@/types/AppUser';

export default createStore({
  state: {
    keyword: "" as string,
    page: 'home' as string
  },
  getters: {},
  mutations: {
    setKeyword(state, keyword: string) {
      state.keyword = keyword;
    },
    setPage(state, page: string) {
      state.page = page
    },
  },
  actions: {},
  modules: {
  }
})
