<template>
  <div>
    <el-row class="choice-grid-item-columns">
      <el-tag
        :key="index"
        v-for="(column, index) in item.columns"
        closable
        :disable-transitions="true"
        size="mini"
        @close="deleteColumn(index)">
        {{ column }}
      </el-tag>
      <el-input
        v-show="item.columns.length < 11"
        placeholder="Colunas"
        class="input-new-tag quiz-text-input"
        v-model="newColumn"
        ref="saveTagInput"
        size="mini"
        :style="{visibility: (sectionActive) ? 'visible' : 'hidden'}"
        @keyup.enter.native="addColumn">
      </el-input>
    </el-row>
    <el-row class="choice-grid-item-sections">
      <div v-for="section in item.sections" :key="section.id">
        <el-card shadow="hover">
          <div slot="header" class="clearfix">
            <el-row class="el-row--flex">
              <el-input class="quiz-text-input el-col-14" v-model="section.title" placeholder="Insira o texto da sessão"></el-input>
              <div class="quiz-grid-section-actions">
                <el-button icon="el-icon-circle-plus-outline" type="text"></el-button>
                <el-button class="text-danger" icon="el-icon-delete" type="text" ></el-button>
              </div>
            </el-row>
          </div>
          <div v-for="(option, index) in section.options" :key="index">
            <el-row class="el-row--flex choice-grid-item-section-options">
              <span>{{ index + 1 }}.</span>
              <el-input class="quiz-text-input" v-model="section.options[index]" placeholder="Insira as opções da sessão"></el-input>
            </el-row>
          </div>
        </el-card>
      </div>
    </el-row>
  </div>
</template>

<script>

  import ChoiceGridItem from "@/models/ChoiceGridItem";
  import { mapGetters } from 'vuex';
  import _ from 'lodash';

  export default {
    name: 'QuizChoiceGridItem',
    components: { },
    props: {
        item: ChoiceGridItem,
    },
    data() {
      return {
        newColumn: ''
      }
    },
    computed: {
      ...mapGetters(['sectionActive'])
    },
    methods: {
      deleteColumn(index) {
        this.item.columns.splice(index, 1);
      },
      addColumn() {
        const vm = this;

        (this.newColumn.length < 4) ? addSimpleColumn() : addAllColumns();

        function addSimpleColumn() {
          let invalidValue = vm.item.columns.find((v) => v === vm.newColumn) !== undefined || vm.newColumn === '';
          if (invalidValue) return;
          vm.item.columns.push(vm.newColumn);
          vm.item.columns = _.sortBy(vm.item.columns, (column) => parseInt(column));
          vm.newColumn = '';
        }
        function addAllColumns() {
          let values = [];
          let temp = '';
          const isNumericArray = !isNaN(parseInt(vm.newColumn[0]));
          for (const [index, value] of vm.newColumn.split('').entries()) {
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
          vm.item.columns = _.sortBy(values, sortFunction);
          vm.newColumn = '';
        }
      }
    }
  }
</script>

<style scoped>
  .choice-grid-item-columns {
    text-align: left;
    position: relative;
    top: -38px;
    width: calc(100% - 240px);
  }
  .choice-grid-item-sections {
    margin-top: -21px;
  }
  .input-new-tag {
    width: 89px;
  }
  .quiz-grid-section-actions {
    margin-left: 8px;
    display: flex;
  }
  .quiz-grid-section-actions button {
    font-size: 21px !important;
  }
  .choice-grid-item-section-options {
    align-items: center;
  }
  .choice-grid-item-section-options span {
    margin-right: 8px;
  }
</style>