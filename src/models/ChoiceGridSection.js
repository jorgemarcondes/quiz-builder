
class ChoiceGridSection {

  constructor({id=1, title='', options=['']} = {}) {
    this.id = id;
    this.title = title;
    this.options = options;
  }

  addOption(idx) {
    this.options.splice(idx + 1, 0, "");
  }

  removeOption(idx) {
    this.options.splice(idx, 1);
  }

}

export default ChoiceGridSection