import { createStore } from 'vuex'

// Create a new store instance.
export default createStore({
  state () {
    return {
      headlineSettings: [
        {
          headlineSize: 4
        }
      ]
    }
  },
  mutations: {
    setHeadlineSize (state, payload) {
      state.headlineSettings[0].headlineSize = payload
    }
  },
  actions: {
  }
})
