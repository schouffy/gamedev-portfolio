<template>
  <div>
    <div class="skill-name">{{name}}</div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "SkillRate",
  props: {
    name: String
  },
});
</script>

<style scoped lang="less">

@import '../css/variables.less';

.skill-name {
  float: left;
  border: 1px solid @skillSquareColor;
  padding: 2px 10px;
  margin: 5px;
}

</style>