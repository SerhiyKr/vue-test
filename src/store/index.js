import Vue from 'vue'
import Vuex from 'vuex'
import packages from './modules/package'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    packages
  }
})
