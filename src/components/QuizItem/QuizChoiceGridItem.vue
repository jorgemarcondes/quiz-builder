<template>
  <div>
    <el-row class="choice-grid-item-columns">
      <el-tag
        :key="index"
        v-for="(column, index) in item.columns"
        closable
        :disable-transitions="true"
        size="mini"
        @close="item.deleteColumn(index)">
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
        @keyup.enter.native="addSectionColumn">
      </el-input>
    </el-row>
    <el-row class="choice-grid-item-sections">
      <div v-for="(section, sectionIdx) in item.sections" :key="section.id" class="choice-grid-section">
        <el-card shadow="hover">
          <div slot="header" class="clearfix">
            <el-row class="el-row--flex">
              <el-input class="quiz-text-input el-col-14" v-model="item.sections[sectionIdx].title" placeholder="Insira o texto da sessão"></el-input>
              <div class="quiz-grid-section-actions">
                <el-button @click="item.addSection(sectionIdx)" icon="el-icon-circle-plus-outline" type="text"></el-button>
                <el-button @click="item.deleteSection(sectionIdx)" class="text-danger" icon="el-icon-delete" type="text" :disabled="item.sections.length === 1" ></el-button>
              </div>
            </el-row>
          </div>
          <div >
            <sortable-quiz-item-option-list lock-axis="y" v-model="section.options">
              <sortable-quiz-item-option v-for="(option, idx) in section.options" :key="idx" :index="idx" :item="section" />
            </sortable-quiz-item-option-list>
          </div>
        </el-card>
      </div>
    </el-row>
  </div>
</template>

<script>

  import { mapGetters } from 'vuex'
  import ChoiceGridItem from "@/models/ChoiceGridItem";
  import SortableQuizItemOptionList from "@/components/QuizItem/SortableQuizItemOptionList";
  import SortableQuizItemOption from "@/components/QuizItem/SortableQuizItemOption";

  export default {
    name: 'QuizChoiceGridItem',
    components: {SortableQuizItemOption, SortableQuizItemOptionList },
    props: {
        item: {
          type: ChoiceGridItem
        },
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
      addSectionColumn() {
        this.item.addColumn(this.newColumn);
        this.newColumn = '';
      },
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
  .choice-grid-section {
    margin-top: 8px;
  }
</style>