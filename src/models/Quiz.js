import ItemType from "../enums/ItemType";
import ItemFactory from "../factories/ItemFactory";

class Quiz {

  constructor({title, description, items = []} = {}) {
    this.title = title;
    this.description = description;
    this.items = items;
  }

  addTextItem() {
    let itemFactory = new ItemFactory();
    const simpleTextItem = itemFactory.createItem({
      type: ItemType.SIMPLE_TEXT,
      id: this.items.length + 1
    });
    this.items.push(simpleTextItem)
  }

}

export default Quiz