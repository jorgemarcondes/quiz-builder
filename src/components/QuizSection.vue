<template>
  <transition name="fade">
    <div @click="activate(id)" class="quiz-section" :ref="'quiz_section_' + id" :class="{active: sectionActive === id}">
      <div class="quiz-active-bar"></div>
      <div class="quiz-section-content">
        <el-row v-show="isDraggable" class="el-row--flex el--center">
          <font-awesome-icon v-handle v-show="sectionActive === id" class="section-drag" icon="grip-horizontal"></font-awesome-icon>
        </el-row>
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script>

import { mapGetters, mapActions } from 'vuex';
import {HandleDirective} from "vue-slicksort";

export default {
  name: 'QuizSection',
  componentName: 'QuizSection',
  directives: {handle: HandleDirective},
  props: {
    id: { required: true},
    isDraggable: {default: true}
  },
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
    vm.updateOffsetTop(vm.$refs['quiz_section_'+vm.id].offsetTop);
      vm.activate(vm.id);
  }
}
</script>

<style scoped>
  .quiz-section {
    display: flex;
    background-color: #ffffff;
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
    padding: 5px 13px 34px 21px;
  }
  .quiz-section-content .el-input {
    padding-bottom: 8px;
  }
  .quiz-section:not(.quiz-title-section).active {
    box-shadow: 0 0 7px 0 #888888;
    margin-bottom: 5px;
  }
  .section-drag {
    color: #acacac;
    cursor: move;
  }
</style>
