import ItemType from "../enums/ItemType";
import QuizItem from "@/models/QuizItem";
import ChoiceGridSection from "@/models/ChoiceGridSection";

class ChoiceGridItem extends QuizItem {

  constructor({id, sections = [new ChoiceGridSection()], columns = []} = {}) {
    super({id, question: null, type: ItemType.CHOICE_GRID.id});
    this.sections = sections;
    this.columns = columns;
  }

  addColumn(newColumn) {
    const vm = this;

    (newColumn.length < 4) ? addSimpleColumn() : addAllColumns();

    function addSimpleColumn() {
      let invalidValue = vm.columns.find((v) => v === newColumn) !== undefined || newColumn === '';
      if (invalidValue) return;
      vm.columns.push(newColumn);
      vm.columns = _.sortBy(vm.columns, (column) => parseInt(column));
      newColumn = '';
    }
    function addAllColumns() {
      let values = [];
      let temp = '';
      const isNumericArray = !isNaN(parseInt(newColumn[0]));
      for (const [index, value] of newColumn.split('').entries()) {
        if (isNumericArray && isNaN(value) || index > 10) continue;
        let valueExists = values.find((v) => v === value) !== undefined;
        if (valueExists || temp.length > 0) {
          temp += value;
        }
        if (temp.length > 1) {
          values.push(temp);
          temp = '';
        } else if (!temp.length) {
          values.push(value);
        }
      }
      let sortFunction = column => column;
      if (isNumericArray) {
        sortFunction = (column) => parseInt(column);
      }
      vm.columns = _.sortBy(values, sortFunction);
    }
  }

  deleteColumn(index) {
    this.columns.splice(index, 1);
  }

  addSection() {
    const vm = this;
    vm.sections.push(new ChoiceGridSection({id: vm.sections.length + 1}))
  }

  deleteSection(idx) {
    this.sections.splice(idx, 1)
  }

}

export default ChoiceGridItem