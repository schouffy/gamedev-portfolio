<template>
    <div>
      <h2>VEHICULAR COMBAT ARENA - INTERNALS</h2>

      <VCAMenu />
      
      <div style="clear:both"></div>

      <h3><strong>SUBSYSTEMS</strong></h3>
      
      <table>
        <tr>
          <td class="top">
            <iframe class="youtube" src="https://www.youtube.com/embed/feuBT5AA8gw" frameborder="0" allowfullscreen></iframe>
          </td>
          <td class="top">
            <div class="side-text">Unreal's Subsystems provide a <strong>modular</strong> way to contain game logic that is not tied to Actors present in the level. In this project they are used for different tasks, such as handling Currency related operations, managing Vehicle Configurations or handling Save Files.</div>
            
            <br>

            <div class="side-text">The data that they need is exposed in the Editor via <strong>Data Assets</strong> and <strong>Data Tables</strong>, making it easy to make changes without recompiling the project.</div>

            <br>

            <div class="side-text">Using Events and Timers helps in reducing the <strong>load</strong> of the system. Events can be consumed by different Objects for very different purposes, like updating the UI or displaying some VFX in the level.</div>
          </td>
        </tr>
      </table>

      <div><br></div>

      <h3><strong>MUSIC AND AUDIO</strong></h3>
                  
      <table>
        <tr>
          <td class="top">
            <iframe class="youtube" src="https://www.youtube.com/embed/feuBT5AA8gw" frameborder="0" allowfullscreen></iframe>
          </td>
          <td class="top">
            <div class="side-text">Every Sound and Music effect is managed by the Sound Subsystem. Sounds and Music Cues are given an identifier, and a Sound Data Asset links these ids to the actual Cues.</div>
            
            <br>

            <div class="side-text">This means that BPs, like the Vehicle Pawns or the Trains that drop loot, do not need to have references to the Cues themselves; instead all they need to know is the Id of the sounds they need to play, and ask the Sound Subsystem to play them.</div>
            
            <br>

            <div class="side-text">Different sounds have different requirements, like playing at a specific location (with some attenuation settings to avoid hearing distant sounds too loud) or playing attached to a moving Actor (like the Engine sound of Vehicles).</div>
          </td>          
        </tr>
      </table>
      
      <div><br></div>

      <h3><strong>SAVE SYSTEM</strong></h3>
                  
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

      <h3><strong>PERFORMANCE</strong></h3>
                  
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

      <VCAMenu />
    </div>
  </template>
  
  <script lang="ts">
  import Vue from "vue";
  import VCAMenu from "@/components/VCAMenu.vue";
    
  export default Vue.extend({
    name: "VCAVehicles",
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