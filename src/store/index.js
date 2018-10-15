import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters';

import quizSection from './modules/quizSectionStore';
import quiz from './modules/quizStore'

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    quizSection,
    quiz
  },
  getters
});

export default store;