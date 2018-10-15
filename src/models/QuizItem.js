import ItemType from "../enums/ItemType";

class QuizItem {

  constructor({id, type = ItemType.SIMPLE_TEXT.id, question} = {}) {
    this.id = id;
    this.type = type;
    this.question = question;
  }

}

export default QuizItem