<template>
    <div>      
      <h2>VEHICULAR COMBAT ARENA - ENEMY AI</h2>
      
      <VCAMenu />
      
      <hr class="separator_top">

      <div style="clear:both"></div>

      <h3><strong>NAVIGATION SYSTEM</strong></h3>
      
      <table>
        <tr>
          <td>
            <iframe class="youtube" src="https://www.youtube.com/embed/0pirbdpekyw" frameborder="0" allowfullscreen></iframe>
          </td>
          <td class="top">
            <div class="side-text">There is only one Navigation Mesh in the Arena Map, with multiple Navigation Modifiers. This makes sure Enemies only try to go to reachable points in the map. Enemies use a combination of predefined paths and EQS to determine their destinations.</div>
            
            <br>

            <div class="side-text">Enemy AIControllers include a custom <strong>UAIDriverComponent</strong> that can drive vehicles by using the <strong>Acceleration</strong> and <strong>Steering</strong> variables from the Pawn's Movemement Component. The component uses <i><strong>UNavigationSystemV1::FindPathToLocationSynchronously</strong></i> to find the path to each destination at runtime.</div>

            <br>

            <div class="side-text">A <strong>custom BBTask</strong> replaces the default <i>BTTask_MoveTo</i>, because vehicles use a <strong>custom Movement Component</strong>.</div>
          </td>
        </tr>
      </table>

      <hr class="separator_middle">

      <h3><strong>PERCEPTION SYSTEM</strong></h3>
                  
      <table>
        <tr>
          <td>
            <iframe class="youtube" src="https://www.youtube.com/embed/oTpqNXxafh0" frameborder="0" allowfullscreen></iframe>
          </td>
          <td class="top">
            <div class="side-text">The intent of the game is to keep the Player <strong>engaged</strong>, so Enemies need to chase and pressure the Player as soon as possible. Not every Enemy will attack immediately, but will take the Player's position and the distance to the Player into account when deciding their next <strong>actions</strong>.</div>
            
            <br>

            <div class="side-text">The Perception Component is configured in the AI Controller BP. Sight is configured to be able to see all around the Enemy over a long range, and once a target (the Player) is acquired, it's never forgotten.</div>
            
            <br>

            <div class="side-text">The Player is filtered out from other vehicles by using tags.</div>
          </td>          
        </tr>
      </table>
      
      <hr class="separator_middle">

      <h3><strong>BEHAVIOR TREES, STATE MACHINES & EQS</strong></h3>
                  
      <table>
        <tr>
          <td>
            <iframe class="youtube" src="https://www.youtube.com/embed/pAZokQ8TxBw" frameborder="0" allowfullscreen></iframe>

            <br>

            <div class="paragraph-middle">This AI implementation scales from levels with as few as 2 Enemies, up to levels with multiple waves of Enemies (and 8 active Enemies at the same time).</div>            

            <br>

            <div class="paragraph-bottom">The Environment Query System (EQS) is used to calculate where the Enemies should move to be close to the Player, within attacking range, and also avoid colliding with other Enemies as much as possible.</div>
          </td>
          <td class="top">
            <div class="side-text">The game has a hybrid approach to Enemy AI, by using a combination of <strong>State Machines</strong> and <strong>Behavior Trees</strong> to drive Enemy logic. Enemies have an <strong>AI Mode</strong> (state), which drives the <strong>BT</strong> that actually implements the different behaviors.</div>
            
            <br>

            <div class="side-text">States are managed by the <strong>AIController</strong>, working in conjuction with the <strong>Enemy Coordination Subsystem</strong>. This allows an Enemy to adjust their actions based on other Enemies in play, if any.</div>
            
            <br>

            <div class="side-text">There are many rules for enemy coordination, but as a summary, the game tries to have 1 Enemy actively attacking the Player, with up to 3 other Enemies adding pressure closeby, and 1 Enemy protecting each Enemy Data Point.</div>
          </td>
        </tr>
      </table>

      <hr class="separator_bottom">
      
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
  
  .paragraph-middle {
    max-width: 700px;
    margin-top: 30px;
    margin-bottom: -30px;
  }

  .paragraph-bottom {
    max-width: 700px;
    margin-top: 20px;
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