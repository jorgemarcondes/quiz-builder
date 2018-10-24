const quizSectionStore = {
  state: {
    active: 0,
    offsetTop: 0
  },
  mutations: {
    SET_ACTIVE: (state, data) => state.active = data,
    SET_OFFSET_TOP: (state, data) => state.offsetTop = data
  },
  actions: {
    activate: ({commit} = {}, active) => {
      commit('SET_ACTIVE', active);
    },
    updateOffsetTop: ({commit} = {}, offsetTop) => {
      commit('SET_OFFSET_TOP', offsetTop)
    }
  }
};

export default quizSectionStore