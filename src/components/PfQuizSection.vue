<template>
  <div @click="activate()" class="quiz-section" :class="{active: active}">
    <div class="quiz-active-bar"></div>
    <div class="quiz-section-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PfQuizSection',
  componentName: 'PfQuizSection',
  data() {
    return {
      active: false
    }
  },
  methods: {
    activate() {
      this.active = true
    }
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
</style>
