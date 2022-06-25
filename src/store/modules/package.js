export default {
  actions: {
    async fetchPackages (ctx) {
      const res = await fetch('https://data.jsdelivr.com/v1/stats/packages')
      const packages = await res.json()

      ctx.commit('updatePackages', packages)
      ctx.commit('updateSearchedPackages', packages)
    }
  },
  mutations: {
    updatePackages (state, packages) {
      state.packages = packages
    },
    updateSearchedPackages (state, packages) {
      state.searchedPackages = packages
    }
  },
  state: {
    packages: [],
    searchedPackages: []
  },
  getters: {
    allPackages: (state) => {
      return state.packages
    },
    getSearchedPackages: (state) => {
      return state.searchedPackages
    }
  }
}
