import QuizItem from "./QuizItem";

class SimpleTextItem extends QuizItem {

  constructor({id, question, rowsAmount = 1} = {}) {
    super({id, question});
    this.rowsAmount = rowsAmount
  }

}

export default SimpleTextItem