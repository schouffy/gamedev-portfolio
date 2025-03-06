<template>
  <div class="footer">
       
    <div class="left"><a href="https://zoldargames.itch.io/" target="blank" class="footer"><i class="fa fa-brands fa-itch-io fa-2x red"></i>ZOLDAR GAMES</a></div>

    <div class="right">© 2025 CARLOS ORTEGA GONZÁLEZ</div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Footer"
});
</script>

<style scoped lang="less">

@import '../css/variables.less';

.footer {
  background-color: @bodyBgColor;
  width: 100%;
  font-size: 0.8em;
  opacity: 0.7;
  padding-bottom: 30px;
}

.left, .right {
    padding-top: 10px;
    text-align: center;
  }

i.red {
  color: #f95e5e;
  margin-right: 20px;
  margin-bottom: 5px;
  vertical-align: middle;
}

@media only screen and (min-width: 620px){

  .footer {
    padding: 0;
  }

  .left, .right {
    padding: 20px;
  }

  .left {
    float: left;
  }

  .right {
    float:right;
  }

  a.footer {
    padding-left: 20px;
    font-size: 1em;
  }
}
</style>