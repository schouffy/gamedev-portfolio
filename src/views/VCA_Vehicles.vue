<template>
    <div>
      <h2>VEHICULAR COMBAT ARENA - VEHICLES</h2>

      <VCAMenu />

      <div style="clear:both"></div>

      <h3><strong>VEHICLE CONFIGURATION</strong></h3>
      
      <table>
        <tr>
          <td>
            <iframe class="youtube" src="https://www.youtube.com/embed/feuBT5AA8gw" frameborder="0" allowfullscreen></iframe>
          </td>
          <td>
            <div class="side-text">Vehicles inherit from <strong>APawn</strong>, rather than ACharacter. Many of their properties are configured at runtime, allowing for different appearances and behaviours emerging from the same BP.</div>
            
            <br>

            <div class="side-text"><strong>Data Assets</strong> are used to provide a single point of storage for visual and vfx related assets used by vehicles, as well as combat and movement related properties.</div>
            
            <br>

            <div class="side-text"><strong>Subsystems</strong> are used to extract the weapon, stats and sound functionality from the Pawn objects.</div>

            <br>

            <div class="side-text"><strong>Smart pointers</strong> (<i>TObjectPtr/TSoftObjectPtr</i>) are used to store references where appropriate.</div>
          </td>
        </tr>
      </table>

      <div><br></div>

      <h3><strong>VEHICLE STATS</strong></h3>
      
      <table>
        <tr>
          <td>
            <iframe class="youtube" src="https://www.youtube.com/embed/feuBT5AA8gw" frameborder="0" allowfullscreen></iframe>
          </td>
          <td>
            <div class="side-text">The <strong>Vehicle Stats Subsystem</strong> is in charge of the Player and Enemy vehicle combat stats. Nobody else can change the stats directly (for example, Pawns or even the Weapons Subsystem).</div>
            
            <br>

            <div class="side-text"><strong>Events</strong> are used for a variety of purposes, like updating the HUD, triggering sounds and VFX, and of course, signaling Pawn deaths.</div>
            
            <br>

            <div class="side-text">Each vehicle part (Body, Chassis & Weapons) has its own <strong>Impact Resistance</strong>, plus each vehicle has a <strong>Shield</strong> that needs to be destroyed first, and can regenerate over time if the vehicle is not damaged.</div>
          </td>
        </tr>
      </table>

      <div><br></div>

      <h3><strong>COMBAT</strong></h3>
      
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