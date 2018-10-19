<template>
  <transition name="fade">
    <div @click="activate(id)" class="quiz-section" :ref="'quiz_section_' + id" :class="{active: sectionActive === id}">
      <div class="quiz-active-bar"></div>
      <div class="quiz-section-content">
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script>

import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'QuizSection',
  componentName: 'QuizSection',
  props: ['id'],
  computed: {
    ...mapGetters(['sectionActive', 'offsetTop'])
  },
  methods: {
    ...mapActions(['activate', 'updateOffsetTop'])
  },
  watch: {
    sectionActive(value) {
      const vm = this;
      if (value === vm.id) {
        vm.updateOffsetTop(vm.$refs['quiz_section_'+vm.id].offsetTop)
      }
    }
  },
  mounted() {
    const vm = this;
    vm.$nextTick().then(() => {
      vm.updateOffsetTop(vm.$refs['quiz_section_'+vm.id].offsetTop);
    });
  }
}
</script>

<style scoped>
  .quiz-section {
    display: flex;
  }
  .quiz-section.active .quiz-active-bar {
    background-color: #817edc;
  }
  .quiz-active-bar {
    width: 3px;
    margin-right: 8px;
  }
  .quiz-section-content {
    flex: 1;
    padding: 34px 13px 34px 21px;
  }
  .quiz-section-content .el-input {
    padding-bottom: 8px;
  }
  .quiz-section:not(.quiz-title-section).active {
     box-shadow: 0 0 7px 0 #888888;
  }
</style>
