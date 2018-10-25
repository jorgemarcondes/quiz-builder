<template>
  <div>
    <sortable-quiz-item-option-list lock-axis="y" v-model="item.options" :useDragHandle="true">
      <sortable-quiz-item-option v-for="(option, idx) in item.options" :key="idx" :index="idx" :item="item" />
    </sortable-quiz-item-option-list>
  </div>
</template>

<script>
  import MultipleChoiceItem from '@/models/MultipleChoiceItem';
  import SortableQuizItemOptionList from "@/components/QuizItem/SortableQuizItemOptionList";
  import SortableQuizItemOption from "@/components/QuizItem/SortableQuizItemOption";

  export default {
    name: 'QuizMultipleChoiceItem',
    components: {SortableQuizItemOption, SortableQuizItemOptionList },
    props: {
      item: {
        type: MultipleChoiceItem
      }
    }
  }
</script>

<style scoped>

</style>