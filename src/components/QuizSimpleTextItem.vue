<template>
  <div class="simple-text-item">
    <label class="el-form-item__label">Número de Linhas</label>
    <el-input-number :min="1" :max="10" controls-position="right" size="mini" v-model="item.rowsAmount"></el-input-number>
  </div>
</template>

<script>

  import SimpleTextItem from "../models/SimpleTextItem";

  export default {
    name: 'QuizSimpleTextItem',
    props: {
        item: {
          type: SimpleTextItem
        }
    }
  }
</script>

<style scoped>
  .simple-text-item {
    display: flex;
    align-items: center;
  }
  .simple-text-item label {
    color: #c0c4cc;
  }
</style>