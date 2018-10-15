const quizSectionStore = {
  state: {
    active: false,
    offsetTop: 0
  },
  mutations: {
    SET_ACTIVE: (state, data) => state.active = data,
  },
  actions: {
    activate: ({commit} = {}, active) => {
      commit('SET_ACTIVE', active);
    }
  }
};

export default quizSectionStore