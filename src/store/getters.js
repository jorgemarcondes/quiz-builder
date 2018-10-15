const getters = {
  // QUIZ SECTION
  sectionActive: state => state.quizSection.active,
  offsetTop: state => state.quizSection.offsetTop,

  // QUIZ
  quiz: state => state.quiz.quiz
};

export default getters;