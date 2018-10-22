import ItemType from "../enums/ItemType";
import QuizItem from "@/models/QuizItem";

class MultipleChoiceItem extends QuizItem {

  constructor({id, question} = {}) {
    super({id, question, type: ItemType.MULTIPLE_CHOICE.id} );
    this.options = [""]
  }

  addOption(idx){
    this.options.splice(idx + 1, 0, "");
  }

  removeOption(idx){
    this.options.splice(idx, 1);
  }

}

export default MultipleChoiceItem