<template>
  <div>
    <slot />
  </div>
</template>

<script>
  import {ContainerMixin} from "vue-slicksort";

  export default {
    name: "SortableQuizItemOptionList",
    componentName: 'SortableQuizItemOptionList',
    mixins: [ContainerMixin],
  }
</script>

<style scoped>

</style>