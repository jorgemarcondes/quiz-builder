<template>
  <div>
    <draggable v-model="item.options" >
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
          <el-button icon="el-icon-close" type="text" @click="item.removeOption(idx)" tabindex="-1"></el-button>
        </div>
      </el-row>
    </draggable>
  </div>
</template>

<script>
  import MultipleChoiceItem from '@/models/MultipleChoiceItem';
  import draggable from 'vuedraggable';

  export default {
    name: 'QuizMultipleChoiceItem',
    components: { draggable },
    props: {
        item: {
          type: MultipleChoiceItem
        }
    },
    methods: {
      addOption(idx) {
        const vm = this;
        vm.item.addOption(idx);
        vm.$nextTick(() => {
          this.$refs[vm.item.id + '_quiz_multiple_choice_' + (idx + 1)][0].focus();
        })
      },
    }
  }
</script>

<style scoped>

</style>