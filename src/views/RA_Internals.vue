<template>
    <div>
      <h2>RETRO ARCADE - INTERNALS</h2>

      <RAMenu />
      
      <hr class="separator_top">

      <div style="clear:both"></div>

      <h3><strong>SUBSYSTEMS</strong></h3>
      
      <table>
        <tr>
          <td>
            <iframe class="youtube" src="https://www.youtube.com/embed/feuBT5AA8gw" frameborder="0" allowfullscreen></iframe>
          </td>
          <td class="top">
            <div class="side-text">Unreal's <strong>Subsystems</strong> are a great way to split logic tasks in different classes.</div>
            
            <br>

            <div class="side-text">In this game I used them for spawning Enemies, saving Settings and High Scores on disk, keeping track of the Score of the current game, and playing Sounds and Music.</div>

            <br>

            <div class="side-text"><strong>Data Assets</strong> and <strong>Data Tables</strong> are the perfect complement for Subsystems, as they expose configurable data in the Unreal Editor, allowing for modififcations of the game's behaviour without needing to recompile.</div>
          </td>
        </tr>
      </table>

      <hr class="separator_bottom">

      <RAMenu />
    </div>
  </template>
  
  <script lang="ts">
  import Vue from "vue";
  import RAMenu from "@/components/RAMenu.vue";
    
  export default Vue.extend({
    name: "RAInternals",
    components: {
      RAMenu
    }
  });
  </script>

  <style scoped>
  .paragraph {
    max-width: 700px;
    margin-bottom: 20px;
  }

  .paragraph-bottom {
    max-width: 700px;
    margin-top: 40px;
  }
  
  .photo {
    margin-top: 50px;
    text-align: center;
  }

  iframe.youtube {        
        min-height: 360px;
        min-width: 640px;
  }

  .side-text {
    margin-left: 50px;
  }

  td.top {
    vertical-align: top;
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