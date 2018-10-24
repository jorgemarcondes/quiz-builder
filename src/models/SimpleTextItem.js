import QuizItem from "./QuizItem";
import ItemType from "../enums/ItemType";

class SimpleTextItem extends QuizItem {

  constructor({question, rowsAmount = 1} = {}) {
    super({question, type: ItemType.SIMPLE_TEXT.id});
    this.rowsAmount = rowsAmount
  }

}

export default SimpleTextItem