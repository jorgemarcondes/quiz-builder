import ItemType from "../enums/ItemType";
import QuizItem from "@/models/QuizItem";

class MultipleChoiceItem extends QuizItem {

  constructor({id, question} = {}) {
    super({id, question, type: ItemType.MULTIPLE_CHOICE.id} );
    this.options = [""]
  }

}

export default MultipleChoiceItem