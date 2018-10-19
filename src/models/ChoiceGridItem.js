import ItemType from "../enums/ItemType";
import QuizItem from "@/models/QuizItem";
import ChoiceGridSection from "@/models/ChoiceGridSection";

class ChoiceGridItem extends QuizItem {

  constructor({id, sections = [new ChoiceGridSection()], columns = []} = {}) {
    super({id, question: null, type: ItemType.CHOICE_GRID.id});
    this.sections = sections;
    this.columns = columns;
  }

}

export default ChoiceGridItem