import Quiz from '../../models/Quiz';
import ItemFactory from "../../factories/ItemFactory";

const quizStore = {
  state: {
    quiz: new Quiz(),
  },
  mutations: {
    ADD_ITEM: (state, {item, idx}) => {
      state.quiz.addItem(item, idx);
    },
    REPLACE_ITEM: (state, {item, idx}) => {
      state.quiz.replaceItem(item, idx);
    },
    REMOVE_ITEM: (state, id) => {
      state.quiz.removeItemById(id);
    },
  },
  actions: {
    addQuizItem: ({commit, rootState, dispatch} = {}, item) => {
      commit('ADD_ITEM', {item, idx: rootState.quizSection.active});
    },
    changeQuizItem: ({commit, rootState} = {}, item) => {
      commit('REPLACE_ITEM', {item, idx: rootState.quizSection.active});
    },
    removeActiveQuizItem: ({commit, rootState, dispatch, state} = {}) => {
      commit('REMOVE_ITEM', rootState.quizSection.active);
      let newActiveItemId = 0;
      if (state.quiz.items.length >= rootState.quizSection.active) {
        newActiveItemId = rootState.quizSection.active
      } else if (state.quiz.items.length === rootState.quizSection.active - 1) {
        newActiveItemId = rootState.quizSection.active - 1
      }

      dispatch('activate', newActiveItemId)
    },
  }
};

export default quizStore