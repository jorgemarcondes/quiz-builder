<template>
  <div>
    <el-input class="quiz-text-input medium-input" placeholder="Pergunta" v-model="item.question"></el-input>
    <quiz-simple-text-item :item="item" v-if="isSimpleText"></quiz-simple-text-item>
  </div>
</template>

<script>
  import QuizSimpleTextItem from "./QuizSimpleTextItem";
  import ItemType from "../enums/ItemType";
  import QuizItem from "../models/QuizItem";

  export default {
    name: "QuizItem",
    components: {QuizSimpleTextItem },
    props: {
      item: {
        type: QuizItem,
        required: true
      }
    },
    data() {
      return {
        isSimpleText: this.item.type === ItemType.SIMPLE_TEXT
      }
    }
  }
</script>

<style scoped>

</style>