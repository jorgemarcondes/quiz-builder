<template>
  <div>
    <el-form ref="item" :model="item">
      <el-row class="el-row--flex">
        <el-input class="quiz-text-input" placeholder="Pergunta" autofocus v-font-size="item.question"
                  :ref="item.id + '_quiz_question'"
                  v-model="item.question" type="textarea" autosize>
        </el-input>
        <el-select v-if="sectionActive === item.id" class="quiz-types" v-model="item.type"
                   @change="changeQuizItem(item)" placeholder="Select" tabindex="-1">
          <el-option
            v-for="type in typeOptions"
            :key="type.value"
            :label="type.label"
            :value="type.value">
          </el-option>
        </el-select>
      </el-row>
      <quiz-simple-text-item :item="item" v-if="isSimpleText"></quiz-simple-text-item>
      <quiz-multiple-choice-item :item="item" v-if="isMultipleChoice"></quiz-multiple-choice-item>
    </el-form>
  </div>
</template>

<script>
  import QuizSimpleTextItem from "./QuizSimpleTextItem";
  import ItemType from "@/enums/ItemType";
  import QuizItem from "@/models/QuizItem";
  import QuizMultipleChoiceItem from "@/components/QuizMultipleChoiceItem";
  import { mapActions, mapGetters } from 'vuex';

  export default {
    name: "QuizItem",
    components: {QuizMultipleChoiceItem, QuizSimpleTextItem },
    props: {
      item: {
        type: QuizItem,
        required: true
      }
    },
    data() {
      return {
        typeOptions: []
      }
    },
    mounted() {
      const vm = this;
      for (let [key, value] of Object.entries(ItemType)) {
        vm.typeOptions.push({label: value.label, value: value.id})
      }
      vm.$nextTick(() => {
        vm.$refs[vm.item.id + '_quiz_question'].$el.getElementsByTagName('textarea')[0].focus();
      })
    },
    computed: {
      ...mapGetters(['sectionActive']),
      isSimpleText() {
        return this.item.type === ItemType.SIMPLE_TEXT.id;
      },
      isMultipleChoice() {
        return this.item.type === ItemType.MULTIPLE_CHOICE.id;
      }
    },
    methods: {
      ...mapActions(['changeQuizItem'])
    }
  }
</script>

<style scoped>
  .el-row--flex .quiz-types {
    padding-left: 21px;
    width: 377px;
  }
</style>