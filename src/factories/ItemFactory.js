import SimpleText from './../models/SimpleTextItem'
import MultipleChoice from "../models/MultipleChoiceItem";
import ItemType from "../enums/ItemType";
import ChoiceGrid from "@/models/ChoiceGridItem";

class ItemFactory {

  constructor() {
    this.itemClass = SimpleText
  }

  createItem(args) {
    switch (args.type) {
      case ItemType.SIMPLE_TEXT.id:
        this.itemClass = SimpleText;
        break;
      case ItemType.MULTIPLE_CHOICE.id:
        this.itemClass = MultipleChoice;
        break;
      case ItemType.CHOICE_GRID.id:
        this.itemClass = ChoiceGrid;
        break;
    }

    return new this.itemClass(args)
  }

}

export default ItemFactory