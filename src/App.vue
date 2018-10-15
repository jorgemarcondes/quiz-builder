<template>
  <div id="app">
    <el-header height="144px" class="flex-center"><h2>Questionário</h2></el-header>
    <el-container class="el--center">
      <div class="quiz-container">
        <quiz-section :id="0" class="quiz-title-section">
          <el-input class="big-input quiz-text-input" placeholder="Título do Questionário" v-model="quiz.title"></el-input>
          <el-input class="quiz-text-input" placeholder="Descrição do formulário" v-model="quiz.description"></el-input>
        </quiz-section>
        <quiz-section :id="item.id" v-for="item in quiz.items" :key="item.id">
          <quiz-item :item="item"></quiz-item>
        </quiz-section>
      </div>
      <div class="quiz-actions">
        <el-button @click="addItem()" icon="el-icon-circle-plus-outline" type="text"></el-button>
        <el-button class="text-danger" icon="el-icon-delete" type="text" ></el-button>
      </div>
    </el-container>
  </div>
</template>

<script>
import QuizSection from './components/QuizSection';
import QuizItem from './components/QuizItem';
import ItemType from './enums/ItemType';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'app',
  components: {QuizItem, QuizSection },
  data() {
    return {
      isSimpleText: ItemType.SIMPLE_TEXT,
      isMultipleChoice: ItemType.MULTIPLE_CHOICE
    }
  },
  computed: {
    ...mapGetters(['quiz'])
  },
  methods: {
    ...mapActions(['addQuizItem']),
    addItem() {
      this.addQuizItem({type: ItemType.SIMPLE_TEXT})
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
  flex-basis: 770px;
}
.quiz-container .quiz-text-input input[type="text"] {
  border: none;
  background-color: transparent;
  border-bottom: 1px solid #c4c7cf;
  border-radius: 0;
  padding-left: 3px;
}
.el-input.big-input input {
  font-size: 34px;
}
.el-input.medium-input input {
  font-size: 21px;
}
.quiz-actions {
  background-color: #ffffff;
  margin-left: 8px;
  padding: 5px;
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
</style>
