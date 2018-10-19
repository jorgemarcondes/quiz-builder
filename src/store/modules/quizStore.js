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
    REMOVE_ITEM: (state, {id, reorder=true}) => {
      const activeItem = state.quiz.items.findIndex(x => x.id === id);
      state.quiz.items.splice(activeItem, 1);
      if (reorder) {
        state.quiz.items.map((item, idx) => {
          item.id = idx + 1;
        })
      }
    },
  },
  actions: {
    addQuizItem: ({commit, dispatch} = {}, item) => {
      commit('ADD_ITEM', item);
      dispatch('activate', item.id)
    },
    changeQuizItem: ({commit} = {}, item) => {
      commit('REMOVE_ITEM', {id: item.id, reorder: false});
      commit('ADD_ITEM', item);
    },
    removeActiveQuizItem: ({commit, rootState, dispatch, state} = {}) => {
      commit('REMOVE_ITEM', {id: rootState.quizSection.active});

      const sortedItems = state.quiz.items.sort((a, b) => Math.max(a, b));
      const newActiveItem = sortedItems.find((item) => item.id < rootState.quizSection.active) ||
                            sortedItems.find((item) => item.id > rootState.quizSection.active);
      dispatch('activate', (newActiveItem && newActiveItem.id) || 0)

    },
  }
};

export default quizStore