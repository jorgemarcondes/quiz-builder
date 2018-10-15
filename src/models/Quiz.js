import ItemType from "../enums/ItemType";
import ItemFactory from "../factories/ItemFactory";

class Quiz {

  constructor({title, description, items = []} = {}) {
    this.title = title;
    this.description = description;
    this.items = items;
  }

}

export default Quiz