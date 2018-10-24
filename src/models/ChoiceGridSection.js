
class ChoiceGridSection {

  constructor({title='', options=['']} = {}) {
    this.title = title;
    this.options = options;
  }

  addOption(idx) {
    this.options.splice(idx + 1, 0, "");
  }

  removeOption(idx) {
    const vm = this;
    if (vm.options.length === 1) {
      vm.options[idx] = '';
    } else {
      vm.options.splice(idx, 1);
    }
  }

}

export default ChoiceGridSection