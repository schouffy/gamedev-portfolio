<template>
  <div class="side-menu">
    <div class="nav-bar">
      <router-link to="/vca-vehicles">VEHICLES</router-link>
      <router-link to="/vca-gameplay">GAMEPLAY ELEMENTS</router-link>
      <router-link to="/vca-enemy-ai">ENEMY AI</router-link>
      <router-link to="/vca-ux">USER EXPERIENCE</router-link>
      <router-link to="/vca-architecture">ARCHITECTURE</router-link>
      <router-link to="/vca-new-player-help">NEW PLAYER HELP</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "SideMenu",
  //   props: {
  //     msg: String,
  //   },
});
</script>

<style scoped lang="less">

@import '../css/variables.less';

.side-menu {
  width: 100%;
}

.nav-bar {
  text-align: left;
  padding: 20px;
  line-height: 3em;
}

a {
  text-transform: uppercase;
  margin-left: 15px;
  margin-right: 15px;
  padding-bottom: 8px;
  white-space: nowrap;
  display: inline-block;
}

.router-link-exact-active {
  border: 0px solid @textColor;
  border-bottom-width: 2px;
}

@media only screen and (max-width: 620px){
  .nav-bar {
    line-height: 2em;
  }

  a {
    margin-left: 9px;
    margin-right: 9px;
    padding-bottom: 0px;
  }
}

</style>
