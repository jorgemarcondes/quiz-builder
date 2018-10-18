import Quiz from '../../models/Quiz';
import ItemFactory from "../../factories/ItemFactory";

const quizStore = {
  state: {
    quiz: new Quiz(),
  },
  mutations: {
    ADD_ITEM: (state, item) => {
      let itemFactory = new ItemFactory();
      if (!item.id) item.id = state.quiz.items.length + 1;
      state.quiz.items.push(itemFactory.createItem(item));
    },
    REMOVE_ITEM: (state, itemIdx) => {
      const activeItem = state.quiz.items.findIndex(x => x.id === itemIdx);
      state.quiz.items.splice(activeItem, 1);
      state.quiz.items.map((item, idx) => {
        item.id = idx + 1;
      })
    },
  },
  actions: {
    addQuizItem: ({commit, dispatch} = {}, item) => {
      commit('ADD_ITEM', item);
      dispatch('activate', item.id)
    },
    changeQuizItem: ({commit} = {}, item) => {
      commit('REMOVE_ITEM', item.id);
      commit('ADD_ITEM', item);
    },
    removeActiveQuizItem: ({commit, rootState, dispatch, state} = {}) => {
      commit('REMOVE_ITEM', rootState.quizSection.active);

      const sortedItems = state.quiz.items.sort((a, b) => Math.max(a, b));
      const newActiveItem = sortedItems.find((item) => item.id < rootState.quizSection.active) ||
                            sortedItems.find((item) => item.id > rootState.quizSection.active);
      dispatch('activate', (newActiveItem && newActiveItem.id) || 0)

    },
  }
};

export default quizStore