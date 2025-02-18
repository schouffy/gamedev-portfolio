<template>
    <div>      
      <h2>VEHICULAR COMBAT ARENA - ENEMY AI</h2>
      
      <VCAMenu />
      
      <div style="clear:both"></div>

      <h3><strong>NAVIGATION SYSTEM</strong></h3>
      
      <table>
        <tr>
          <td>
            <iframe class="youtube" src="https://www.youtube.com/embed/feuBT5AA8gw" frameborder="0" allowfullscreen></iframe>
          </td>
          <td>
            <div class="side-text">There is only one Navigation Mesh in the Arena Map, with multiple Navigation Modifiers. This makes sure Enemies only try to go to reachable points in the map. Enemies use a combination of predefined paths and EQS to determine their destinations.</div>
            
            <br>

            <div class="side-text">Enemy AIControllers include a custom <strong>UAIDriverComponent</strong> that can drive vehicles using the <strong>Acceleration</strong> and <strong>Steering</strong> variables used by Pawns. The component uses <i><strong>UNavigationSystemV1::FindPathToLocationSynchronously</strong></i> to find the path to each destination at runtime.</div>
            
            <br>

            <div class="side-text">A <strong>custom BBTask</strong> replaces the default <i>BTTask_MoveTo</i>, because vehicles use a <strong>custom Movement Component</strong>.</div>
          </td>
        </tr>
      </table>

      <div><br></div>

      <h3><strong>PERCEPTION SYSTEM</strong></h3>
                  
      <table>
        <tr>
          <td>
            <iframe class="youtube" src="https://www.youtube.com/embed/feuBT5AA8gw" frameborder="0" allowfullscreen></iframe>
          </td>
          <td>
            <div class="side-text">The intent of the game is to keep the Player <strong>engaged</strong>, so Enemies need to chase and pressure the Player as soon as possible. Not every Enemy will attack immediately, but will take the Player's position and the distance to the Player into account when deciding their next <strong>actions</strong>.</div>
            
            <br>

            <div class="side-text">The Perception Component is configured in the AI Controller BP. Sight is configured to be able to see all around the Enemy over a long range, and once a target (the Player) is acquired, it's never forgotten.</div>
            
            <br>

            <div class="side-text">The Player is filtered out from other vehicles by using tags.</div>
          </td>          
        </tr>
      </table>
      
      <div><br></div>

      <h3><strong>BEHAVIOR TREES, STATE MACHINES & EQS</strong></h3>
                  
      <table>
        <tr>
          <td>
            <iframe class="youtube" src="https://www.youtube.com/embed/feuBT5AA8gw" frameborder="0" allowfullscreen></iframe>
          </td>
          <td>
            <div class="side-text">Text1.</div>
            
            <br>

            <div class="side-text">Text2.</div>
            
            <br>

            <div class="side-text">Text3.</div>
          </td>
        </tr>
      </table>

      <div style="clear:both"></div>
      
      <VCAMenu />        
    </div>
  </template>
  
  <script lang="ts">
  import Vue from "vue";
  import VCAMenu from "@/components/VCAMenu.vue";
    
  export default Vue.extend({
    name: "VCAEnemyAI",
    components: {
      VCAMenu
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

  iframe.youtube {        
        min-height: 360px;
        min-width: 640px;
  }

  .side-text {
    margin-left: 50px;
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