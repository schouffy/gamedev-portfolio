<template>
    <div>
      <h2>VEHICULAR COMBAT ARENA - ARCHITECTURE</h2>

      <SideMenu />
      
      <SideMenu />
    </div>
  </template>
  
  <script lang="ts">
  import Vue from "vue";
  import SideMenu from "@/components/SideMenu.vue";
    
  export default Vue.extend({
    name: "VCAVehicles",
    components: {
      SideMenu
    }
  });
  </script>

  <style scoped>
  .paragraph {
    max-width: 700px;
    margin-bottom: 20px;
  }
  
  .photo {
    margin-top: 50px;
    text-align: center;
  }
  
  @media only screen and (min-width: 620px){
    .paragraph {
      float: left;
    }
  
    .photo {
      float: left;
      padding: 10px;
      padding-left: 80px;
    }
  }
  
  </style>