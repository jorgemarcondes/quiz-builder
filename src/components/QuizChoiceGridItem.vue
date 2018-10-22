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
            <draggable v-model="item.options" >
              <el-row class="el-row--flex quiz-multiple-choice" v-for="(option, idx) in section.options" :key="idx">
                <div class="drag-option">
                  <el-icon class="el-icon-d-caret"></el-icon>
                </div>
                <el-input :ref="sectionIdx + '_' + idx + '_quiz_section_option'"
                      @keyup.enter.native="addSectionOption(sectionIdx, idx)"
                      class="quiz-text-input"
                      v-model="section.options[idx]"
                      placeholder="Insira as opções da sessão"></el-input>
                <div class="exclude-option">
                  <el-button icon="el-icon-close" type="text" @click="section.removeOption(idx)" tabindex="-1"></el-button>
                </div>
              </el-row>
            </draggable>
          </div>
        </el-card>
      </div>
    </el-row>
  </div>
</template>

<script>

  import ChoiceGridItem from "@/models/ChoiceGridItem";
  import { mapGetters } from 'vuex'
  import draggable from 'vuedraggable';

  export default {
    name: 'QuizChoiceGridItem',
    components: { draggable },
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
      addSectionOption(sectionIdx, optionIdx) {
        const vm = this;
        const idx = ++optionIdx;

        vm.item.sections[sectionIdx].addOption(idx);
        vm.$nextTick(() => {
          vm.$refs[sectionIdx + '_' + idx + '_quiz_section_option'][0].focus();
        });
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
  .choice-grid-section {
    margin-top: 8px;
  }
</style>