<template>
  <div>
    <dragable v-model="item.options" >
      <el-row class="el-row--flex quiz-multiple-choice" v-for="(option, idx) in item.options" :key="idx">
        <div class="drag-option">
          <el-icon class="el-icon-d-caret"></el-icon>
        </div>
        <el-radio class="el-col-20" label="" disabled>
          <el-input class="quiz-text-input"
                    placeholder="Digite aqui o texto" v-model="item.options[idx]"
                    @keyup.enter.native="addOption(idx)"
                    autofocus
                    :ref="item.id + '_quiz_multiple_choice_' + idx"></el-input>
        </el-radio>
        <div class="exclude-option">
          <el-button icon="el-icon-close" type="text" @click="removeOption(idx)" tabindex="-1"></el-button>
        </div>
      </el-row>
    </dragable>
  </div>
</template>

<script>
  import MultipleChoiceItem from '@/models/MultipleChoiceItem';
  import dragable from 'vuedraggable';

  export default {
    name: 'QuizMultipleChoiceItem',
    components: { dragable },
    props: {
        item: MultipleChoiceItem
    },
    methods: {
      addOption(idx) {
        const vm = this;
        vm.item.options.splice(idx + 1, 0, "");
        vm.$nextTick(() => {
          this.$refs[vm.item.id + '_quiz_multiple_choice_' + (idx + 1)][0].focus();
        })
      },
      removeOption(idx) {
        this.item.options.splice(idx, 1);
      }
    }
  }
</script>

<style scoped>
  .quiz-multiple-choice {
    margin-top: 13px;
  }
  .quiz-multiple-choice:hover .drag-option i, .quiz-multiple-choice:hover .exclude-option button {
    visibility: visible;
  }
  .quiz-multiple-choice .el-radio+.el-radio {
    margin-left: 0;
  }
  .drag-option, .exclude-option {
    font-size: 21px;
    display: flex;
    align-items: center;
    color: #c0c4cc;
  }
  .drag-option {
    cursor: move;
    padding-right: 8px;
  }
  .exclude-option {
    margin-left: 34px;
  }
  .drag-option i, .exclude-option button {
    visibility: hidden;
  }
</style>