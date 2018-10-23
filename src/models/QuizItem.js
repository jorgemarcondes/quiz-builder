import ItemType from "../enums/ItemType";

class QuizItem {

  constructor({id, type = ItemType.MULTIPLE_CHOICE.id, question} = {}) {
    this.id = id;
    this.type = type;
    this.question = question;
  }

}

export default QuizItem