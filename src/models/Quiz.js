
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

    item.id = (_.max(_.map(vm.items, 'id')) || 0) + 1;
    const quizItem = new ItemFactory().createItem(item);
    vm.items.push(quizItem);
    vm.normalizeOrder();
  }

  replaceItem(item, idx) {
    const vm = this;
    const quizItem = new ItemFactory().createItem(item);
    vm.items.splice(idx - 1, 1, quizItem);
  }

  removeItemById(id) {
    const vm = this;
    vm.items.splice(vm.getItemIdxById(id), 1);

    vm.normalizeOrder();
  }

  getItemIdxById(id) {
    return this.items.findIndex((item) => item.id === id);
  }

  normalizeOrder() {
    this.items.map((item, idx) => {
      item.id = idx + 1;
    });
  }

}

export default Quiz