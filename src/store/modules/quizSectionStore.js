const quizSectionStore = {
  state: {
    active: false,
    offsetTop: 0
  },
  mutations: {
    SET_ACTIVE: (state, data) => state.active = data,
    SET_OFFSET_TOP: (state, data) => state.offsetTop = data,
  },
  actions: {
    activate: ({commit} = {}, {id, offsetTop}) => {
      commit('SET_ACTIVE', id);
      commit('SET_OFFSET_TOP', offsetTop);
    }
  }
};

export default quizSectionStore