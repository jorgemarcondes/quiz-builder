<template>
  <div class="simple-text-item">
    <el-input-number :min="1" :max="10" v-model="item.rowsAmount"></el-input-number>
    <label class="el-form-item__label">Quantidade de Linhas</label>
  </div>
</template>

<script>

  import SimpleTextItem from "../models/SimpleTextItem";

  export default {
    name: 'QuizSimpleTextItem',
    props: {
        item: SimpleTextItem
    }
  }
</script>

<style scoped>
  .simple-text-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 8px;
  }
  .simple-text-item label {
    color: #c0c4cc;
  }
</style>