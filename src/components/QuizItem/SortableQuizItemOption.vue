<template>
  <el-row class="el-row--flex quiz-item-option">
    <div class="option-drag" v-handle >
      <font-awesome-icon class="section-drag" icon="grip-vertical"></font-awesome-icon>
    </div>
    <el-input class="quiz-text-input" :class="item.id + '_quiz_item_option_' + index"
              placeholder="Digite aqui o texto" v-model="item.options[index]"
              @keyup.enter.native="addOption(index)"
              autofocus></el-input>
    <div class="exclude-option">
      <el-button class="text-danger" icon="el-icon-close" type="text" @click="removeOption(index)" tabindex="-1"></el-button>
    </div>
  </el-row>
</template>

<script>
  import {ElementMixin, HandleDirective} from "vue-slicksort";

  export default {
    name: "SortableQuizItemOption",
    componentName: 'SortableQuizItemOption',
    directives: {handle: HandleDirective},
    mixins: [ElementMixin],
    props: ['item', 'index'],
    methods: {
      addOption(index) {
        const vm = this;
        vm.item.addOption(index);
        vm.$nextTick(() => {
          vm.$el.nextElementSibling.getElementsByTagName('input')[0].focus()
        })
      },
      removeOption(index) {
        const vm = this;
        vm.item.removeOption(index);
        vm.$forceUpdate();
      }
    }
  }
</script>

<style scoped>
  .quiz-item-option {
    margin-top: 13px;
    justify-content: center;
    align-items: center;
  }

  .quiz-item-option:hover .option-drag, .quiz-item-option:hover .exclude-option button {
    visibility: visible;
  }

  .exclude-option {
    font-size: 21px;
    display: flex;
    align-items: center;
  }

  .option-drag {
    cursor: move;
    padding-right: 8px;
    color: #acacac;
  }

  .option-drag, .exclude-option button {
    visibility: hidden;
  }

  .exclude-option {
    padding-left: 8px;
  }

  .option-drag {
    padding-right: 8px;
  }
</style>