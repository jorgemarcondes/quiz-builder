import ItemType from "../enums/ItemType";
import QuizItem from "../models/QuizItem";

class MultipleChoiceItem extends QuizItem {

  constructor({id, question} = {}) {
    super({id, question, type: ItemType.MULTIPLE_CHOICE.id} );
    this.options = [""]
  }

  addOption(idx){
    this.options.splice(idx + 1, 0, "");
  }

  removeOption(idx){
    const vm = this;
    if (vm.options.length === 1) {
      vm.options[idx] = '';
    } else {
      vm.options.splice(idx, 1);
    }
  }

}

export default MultipleChoiceItem