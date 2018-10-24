
import ItemFactory from "../factories/ItemFactory";

class Quiz {

  constructor({title, description, items = []} = {}) {
    this.title = title;
    this.description = description;
    this.items = items;
  }

  addItem(item, idx) {
    const vm = this;

    for (let i = idx; i < vm.items.length; i++) {
      vm.items[i].id++;
    }

    item.id = idx + 1;
    const quizItem = new ItemFactory().createItem(item);
    vm.items.splice(idx, 0, quizItem);
  }

  removeItemById(id, reorder) {
    const vm = this;
    vm.items.splice(vm.getItemIdxById(id), 1);
    if (reorder) {
      vm.items.map((item, idx) => {
        item.id = idx + 1;
      });
    }
  }

  getItemIdxById(id) {
    return this.items.findIndex((item) => item.id === id);
  }

}

export default Quiz