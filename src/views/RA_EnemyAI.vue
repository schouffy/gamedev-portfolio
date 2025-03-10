<template>
    <div>      
      <h2>RETRO ARCADE - ENEMY AI</h2>
      
      <RAMenu />
      
      <hr class="separator_top">

      <div style="clear:both"></div>

      <h3><strong>BEHAVIOR TREES (ENEMIES)</strong></h3>
      
      <table>
        <tr>
          <td>
            <iframe class="youtube" src="https://www.youtube.com/embed/7-_simd9-Tg" frameborder="0" allowfullscreen></iframe>
          </td>
          <td class="top">
            <div class="side-text">There are 6 types of basic <strong>Enemies</strong>, each with their own movement and attack patterns.</div>
            
            <br>

            <div class="side-text">Enemies spawn in waves of the same Enemy type, forming a <strong>Squad</strong>. The <strong>Squad Leader</strong> calculates the movement pattern once, and the rest of the Squad reuses the pattern, applying an offset. This reduces <strong>CPU load</strong> in non Squad Leaders, which is specially valuable in complex movement patterns, like the circular pattern that Mark6 Enemies use.</div>

            <br>

            <div class="side-text">Enemy movement is handled by either the <strong>MoveTo</strong> or <strong>MoveDirectlyTowards</strong> BTTasks. References to the Player are obtained in the <strong>AIController</strong> and then stored in the Blackboard for later use.</div>
          </td>
        </tr>
      </table>

      <hr class="separator_middle">
      
      <h3><strong>BEHAVIOR TREES (BOSSES)</strong></h3>
                  
      <table>
        <tr>
          <td>
            <iframe class="youtube" src="https://www.youtube.com/embed/VAxVwSZ4-1w" frameborder="0" allowfullscreen></iframe>

            <br>

            <div class="paragraph-bottom">The second Boss has a fixed movement pattern and focuses on attacking a wide area. This forces the Player to move both to avoid projectiles and to attack.</div>
          </td>
          <td class="top">
            <div class="side-text">There are 2 <strong>Bosses</strong> in the game. Both have different movement and attack behaviors on each of the <strong>3 Phases</strong> of their fights.</div>
            
            <br>

            <div class="side-text">Bosses have 2 <strong>Basic Attacks</strong> and a <strong>Special Attack</strong>, and the order in which they are used changes on each Phase. Cooldowns are also reduced to increase the pressure on the Player as the fight progresses.</div>
            
            <br>

            <div class="side-text">The first Boss is all about chasing the Player and attacking the area where the Player is. The AIController uses a <strong>Timer</strong> to recalculate the movement destination of the Boss periodically, and then stores it in the BlackBoard. This reduces <strong>CPU load</strong> and gives the Player the chance to escape at the same time.</div>
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