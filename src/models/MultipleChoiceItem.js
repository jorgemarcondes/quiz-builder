import ItemType from "../enums/ItemType";

class MultipleChoiceItem {

  constructor({id} = {}) {
    this.type = ItemType.MULTIPLE_CHOICE;
    this.id = id;
  }

}

export default MultipleChoiceItem