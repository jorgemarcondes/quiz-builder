<template>
  <div class="quiz-actions-container">
    <section :style="{top: offsetTop+'px'}">
      <div class="quiz-actions">
      <el-button @click="addItem()" icon="el-icon-circle-plus-outline" type="text"></el-button>
      <el-button :class="{'text-danger': sectionActive}"
                 @click="removeActiveQuizItem()"
                 icon="el-icon-delete" type="text" :disabled="!sectionActive" ></el-button>
      </div>
    </section>
  </div>
</template>

<script>
  import ItemType from "@/enums/ItemType";
  import { mapGetters, mapActions } from 'vuex';

  export default {
    name: "QuizActions",
    componentName: "QuizActions",
    computed: {
      ...mapGetters(['quiz', 'sectionActive', 'offsetTop']),
    },
    methods: {
      ...mapActions(['addQuizItem', 'removeActiveQuizItem']),
      addItem() {
        const vm = this;
        let activeItem = null;
        if (vm.quiz.items.length && vm.sectionActive) {
          activeItem = vm.quiz.items.find((item) => item.id === vm.sectionActive);
        }
        vm.addQuizItem({ type: (activeItem) ? activeItem.type : ItemType.MULTIPLE_CHOICE.id });
        vm.$forceUpdate();
      }
    }
  }
</script>

<style scoped>

</style>