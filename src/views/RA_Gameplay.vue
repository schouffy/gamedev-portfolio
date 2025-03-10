<template>
    <div>
      <h2>RETRO ARCADE - GAMEPLAY ELEMENTS</h2>

      <RAMenu />

      <hr class="separator_top">

      <div style="clear:both"></div>

      <h3><strong>POWER UPS</strong></h3>
      
      <table>
        <tr>
          <td>
            <iframe class="youtube" src="https://www.youtube.com/embed/NGSTbCsMMNk" frameborder="0" allowfullscreen></iframe>
          </td>
          <td class="top">
            <div class="side-text">As the Player progresses in the game, a special type of spaceship (the <strong>Bonus Carrier</strong>) appears periodically. Destroying them spawns powerful bonuses, which enhance the Player's firepower or provide some protection.</div>
            
            <br>

            <div class="side-text">Defeating Bosses also rewards the Player with an extra life. However, Enemies (and Bosses) become tougher after each Boss kill.</div>
            
            <br>

            <div class="side-text">Power and Multishot bonuses decay over time unless additional bonuses of the same type are picked up in time, increasing the challenge.</div>
          </td>
        </tr>
      </table>

      <hr class="separator_middle">

      <h3><strong>ASTEROIDS</strong></h3>
                  
      <table>
        <tr>
          <td>
            <iframe class="youtube" src="https://www.youtube.com/embed/gUQob5rfvKE" frameborder="0" allowfullscreen></iframe>
          </td>
          <td class="top">
            <div class="side-text">Asteroid fields are designed to give the Player a break from combat from time to time. However, avoiding them is not trivial.</div>
            
            <br>

            <div class="side-text">They are handled by the <strong>Enemy Spawner Subsystem</strong>, and treated like any other Enemy. Asteroids use a simple <strong>Behaviour Tree</strong> to set their configuration, which is used in the Pawn's Tick() to move them.</div>

            <br>

            <div class="side-text">Asteroids deal damage to the Player on contact, and can't be destroyed. This forces the Player to focus on avoiding them.</div>
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
    name: "RAGameplayElements",
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