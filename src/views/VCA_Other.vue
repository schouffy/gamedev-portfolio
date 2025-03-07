<template>
    <div>
      <h2>VEHICULAR COMBAT ARENA - OTHER</h2>

      <VCAMenu />
 
      <hr class="separator_top">

      <div style="clear:both"></div>

      <h3><strong>SETTINGS</strong></h3>
      
      <table>
        <tr>
          <td>
            <iframe class="youtube" src="https://www.youtube.com/embed/owwYXMlVRRk" frameborder="0" allowfullscreen></iframe>
          </td>
          <td class="top">
            <div class="side-text">When the game is started for the first time, there is no <strong>Settings</strong> file saved yet. Therefore, the game tries to use the Operating System's resolution, or the closest one with a <strong>16:9 ratio</strong>; this is a consequence of the UI's design.</div>
            
            <br>

            <div class="side-text"><strong>Screen</strong> and <strong>Graphics Settings</strong> allow the Player to reduce <strong>CPU</strong> and <strong>GPU</strong> usage in lower end systems. Audio Settings allow controlling the <strong>volume</strong> of Music and Sound FX independently.</div>

            <br>

            <div class="side-text"><strong>Gameplay Settings</strong> are only applied while in the Arena or the Training Ground. They are meant to help Players customize how the Vehicle behaves with different configurations and Input Devices.</div>
          </td>
        </tr>
      </table>

      <hr class="separator_middle">

      <h3><strong>TRAINING GROUND</strong></h3>
                  
      <table>
        <tr>
          <td>
            <iframe class="youtube" src="https://www.youtube.com/embed/_-E1U-r45ro" frameborder="0" allowfullscreen></iframe>
          </td>
          <td class="top">
            <div class="side-text">The <strong>Training Ground</strong> is a simple map where the Player can get familiar with the <strong>controls</strong> and test out different <strong>Vehicle loadouts</strong> without having to purchase any parts.</div>
            
            <br>

            <div class="side-text">It's the perfect environment to test out different <strong>Gameplay Settings</strong>, and tune the Vehicle's movement to your liking.</div>
            
            <br>

            <div class="side-text">There are a couple of idle Enemies that can be shot, as well as an inactive Data Point.</div>
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
    name: "VCAOther",
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