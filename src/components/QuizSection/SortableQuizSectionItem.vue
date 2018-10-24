<template>
  <quiz-section :id="item.id">
    <quiz-item :item="item"></quiz-item>
  </quiz-section>
</template>

<script>
  import QuizSection from '../QuizSection';
  import QuizItem from '../QuizItem';
  import {ElementMixin} from "vue-slicksort";

  export default {
    name: "SortableQuizSectionItem",
    componentName: 'SortableQuizSectionItem',
    components: {QuizSection, QuizItem},
    mixins: [ElementMixin],
    props: ['item']
  }
</script>

<style scoped>

</style>