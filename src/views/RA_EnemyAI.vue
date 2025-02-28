<template>
    <div>      
      <h2>RETRO ARCADE - ENEMY AI</h2>
      
      <RAMenu />
      
      <div style="clear:both"></div>

      <h3><strong>BEHAVIOR TREES - ENEMIES</strong></h3>
      
      <table>
        <tr>
          <td class="top">
            <iframe class="youtube" src="https://www.youtube.com/embed/feuBT5AA8gw" frameborder="0" allowfullscreen></iframe>
          </td>
          <td class="top">
            <div class="side-text">Text1.</div>
            
            <br>

            <div class="side-text">Text2.</div>
          </td>
        </tr>
      </table>

      <div><br></div>

      <h3><strong>SQUAD SUBSYSTEM</strong></h3>
                  
      <table>
        <tr>
          <td class="top">
            <iframe class="youtube" src="https://www.youtube.com/embed/feuBT5AA8gw" frameborder="0" allowfullscreen></iframe>
          </td>
          <td class="top">
            <div class="side-text">Text1.</div>
            
            <br>

            <div class="side-text">Text2.</div>
            
            <br>

            <div class="side-text">Text3.</div>
          </td>          
        </tr>
      </table>
      
      <div><br></div>

      <h3><strong>BEHAVIOR TREES - BOSSES</strong></h3>
                  
      <table>
        <tr>
          <td class="top">
            <iframe class="youtube" src="https://www.youtube.com/embed/feuBT5AA8gw" frameborder="0" allowfullscreen></iframe>
          </td>
          <td class="top">
            <div class="side-text">Text1.</div>
            
            <br>

            <div class="side-text">Text2.</div>
            
            <br>

            <div class="side-text">Text3.</div>
          </td>
        </tr>
      </table>

      <div style="clear:both"></div>
      
      <RAMenu />        
    </div>
  </template>
  
  <script lang="ts">
  import Vue from "vue";
  import RAMenu from "@/components/RAMenu.vue";
    
  export default Vue.extend({
    name: "RAEnemyAI",
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