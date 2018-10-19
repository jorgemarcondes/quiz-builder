<template>
  <div id="app">
    <el-header height="144px" class="flex-center"><h2>Questionário</h2></el-header>
    <div class="quiz-main">
      <section class="quiz-main-container">
        <div>
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
          <div class="quiz-container">
            <quiz-section :id="0" class="quiz-title-section">
              <el-input v-model="quiz.title"
                        class="big-input quiz-text-input" placeholder="Título do Questionário"></el-input>
              <el-input v-model="quiz.description" type="textarea" autosize
                        class="quiz-text-input" placeholder="Descrição do formulário"></el-input>
            </quiz-section>
            <quiz-section :id="item.id" v-for="item in orderedQuizItems" :key="item.id">
              <quiz-item :item="item"></quiz-item>
            </quiz-section>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import QuizSection from './components/QuizSection';
import QuizItem from './components/QuizItem';
import ItemType from './enums/ItemType';
import { mapGetters, mapActions } from 'vuex';
import _ from 'lodash';

export default {
  name: 'app',
  components: {QuizItem, QuizSection },
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters(['quiz', 'sectionActive', 'offsetTop']),
    orderedQuizItems() {
      return _.orderBy(this.quiz.items, 'id')
    }
  },
  methods: {
    ...mapActions(['addQuizItem', 'removeActiveQuizItem']),
    addItem() {
      const vm = this;
      let activeItem = null;
      if (vm.quiz.items.length && vm.sectionActive) {
        activeItem = vm.quiz.items.find((item) => item.id === vm.sectionActive);
      }
      vm.addQuizItem({ type: (activeItem) ? activeItem.type : ItemType.SIMPLE_TEXT.id });
      vm.$forceUpdate();
    }
  }
}
</script>

<style>
  body {
    background-color: #e9e3f2;
    margin: 0;
    width: 100%;
    height: 100%;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .el--center {
    justify-content: center;
  }
  .el-header {
    background-color: #29275e;
    color: #ffffff;
  }
  .el-header h2 {
    margin: 0;
  }
  .flex-center {
    align-items: center;
    justify-content: center;
    display: flex;
  }
  .quiz-container {
    background-color: #ffffff;
    box-shadow: 0 3px 7px 0 #888888;
  }
  .quiz-container .quiz-text-input input[type="text"],
  .quiz-container .quiz-text-input textarea {
    border: none;
    background-color: transparent;
    border-bottom: 1px solid #c4c7cf;
    border-radius: 0;
    padding-left: 3px;
  }
  .quiz-container .quiz-section:not(.active) .quiz-text-input input[type="text"],
  .quiz-container .quiz-section:not(.active) .quiz-text-input textarea {
    border: none;
  }
  .quiz-text-input textarea {
    resize: none;
  }

  .el-input.big-input input, .el-textarea.big-input textarea {
    font-size: 34px;
  }
  .el-input.medium-input input, .el-textarea.medium-input textarea {
    font-size: 21px;
  }
  .quiz-actions {
    background-color: #ffffff;
    box-shadow: 0 3px 7px 0 #888888;
    display: flex;
    flex-direction: column;
  }
  .quiz-actions button {
    padding: 5px;
    margin: 0 !important;
  }
  .quiz-actions button.text-danger {
    color: #f56c6c;
  }
  .quiz-actions i {
    font-size: 25px ;
  }
  .quiz-main-container {
    width: 770px;
    margin: auto;
    padding-bottom: 55px;
  }
  .quiz-actions-container {
    position: relative;
    width: 100%;
    display: flex;
    height: 0;
    justify-content: flex-end;
  }
  .quiz-main {
    position: absolute;
    width: 100%;
  }
  .quiz-actions-container section {
    top: 0;
    position: absolute;
    right: -55px;
    transition: all .3s cubic-bezier(0.4,0.0,0.2,1);
  }
  .fade-enter-active {
    transition: opacity .5s;
  }
  .fade-leave-active {
    transition: opacity .2s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active em versões anteriores a 2.1.8 */ {
    opacity: 0;
  }
</style>
