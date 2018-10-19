import ItemType from "../enums/ItemType";
import QuizItem from "@/models/QuizItem";
import ChoiceGridSection from "@/models/ChoiceGridSection";

class ChoiceGridItem extends QuizItem {

  constructor({id, sections = new Set([ChoiceGridSection])} = {}) {
    super({id, question: null, type: ItemType.MULTIPLE_CHOICE.id});
    this.section = sections
  }

}

export default ChoiceGridItem