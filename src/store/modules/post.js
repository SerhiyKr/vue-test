export default {
  actions: {
    async fetchPosts (ctx) {
      const res = await fetch('https://data.jsdelivr.com/v1/stats/packages')
      const posts = await res.json()

      ctx.commit('updatePosts', posts)
      ctx.commit('updateSearchedPosts', posts)
    }
  },
  mutations: {
    updatePosts (state, posts) {
      state.posts = posts
    },
    updateSearchedPosts (state, posts) {
      state.searchedPosts = posts
    }
  },
  state: {
    posts: [],
    searchedPosts: []
  },
  getters: {
    allPosts: (state) => {
      return state.posts
    },
    getSearchedPosts: (state) => {
      return state.searchedPosts
    }
  }
}
