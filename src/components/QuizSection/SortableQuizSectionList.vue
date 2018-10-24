<template>
  <div>
    <slot />
  </div>
</template>

<script>
  import {ContainerMixin} from "vue-slicksort";

  export default {
    name: "SortableQuizSectionList",
    componentName: 'SortableQuizSectionList',
    mixins: [ContainerMixin],
  }
</script>

<style scoped>

</style>