import Quiz from '../../models/Quiz';
import ItemFactory from "../../factories/ItemFactory";

const quizStore = {
  state: {
    quiz: new Quiz(),
  },
  mutations: {
    ADD_ITEM: (state, item) => {
      let itemFactory = new ItemFactory();
      state.quiz.items.push(itemFactory.createItem({
        type: item.type,
        id: state.quiz.items.length + 1
      }));
    },
  },
  actions: {
    addQuizItem: ({commit} = {}, item) => {
      commit('ADD_ITEM', item);
    }
  }
};

export default quizStore