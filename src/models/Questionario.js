import ItemType from "../enums/ItemType";
import ItemFactory from "../factories/ItemFactory";

class Questionario {

  constructor({title, description, items = []} = {}) {
    this.title = title;
    this.description = description;
    this.items = items;
  }

  addTextItem() {
    let itemFactory = new ItemFactory();
    const simpleTextItem = itemFactory.createItem({
      type: ItemType.SIMPLE_TEXT
    });
    this.items.push(simpleTextItem)
  }

}

export default Questionario