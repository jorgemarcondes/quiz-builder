<template>
  <div id="app">
    <el-header height="144px" class="flex-center"><h2>Questionário</h2></el-header>
    <el-container class="el--center">
        <div class="pf-quiz-container">
          <pf-quiz-section class="quiz-title-section">
            <el-input class="big-input" placeholder="Título do Questionário" v-model="questionario.title"></el-input>
            <el-input placeholder="Descrição do formulário" v-model="questionario.description"></el-input>
          </pf-quiz-section>
        </div>
    </el-container>
  </div>
</template>

<script>
import Questionario from './models/Questionario'
import PfQuizSection from './components/PfQuizSection'

export default {
  name: 'app',
  components: { PfQuizSection },
  data() {
    return {
      questionario: new Questionario()
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
.pf-quiz-container {
  background-color: #ffffff;
  box-shadow: 0 3px 7px 0 #888888;
  flex-basis: 770px;
}
.el-input input {
  border: none;
  background-color: transparent;
  border-bottom: 1px solid #c4c7cf;
  border-radius: 0;
  padding-left: 3px;
}
.el-input.big-input input {
  font-size: 34px;
}
</style>
