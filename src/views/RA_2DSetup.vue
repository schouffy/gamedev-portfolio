<template>
    <div>
      <h2>RETRO ARCADE - 2D SETUP IN UNREAL</h2>

      <RAMenu />

      <hr class="separator_top">

      <div style="clear:both"></div>

      <h3><strong>LEVEL SETUP</strong></h3>
      
      <table>
        <tr>
          <td>
            <iframe class="youtube" src="https://www.youtube.com/embed/JBa9H9DasgA" frameborder="0" allowfullscreen></iframe>
          </td>
          <td class="top">
            <div class="side-text"><strong>Unreal Engine</strong> always works in <strong>3D space</strong>, so 2D projects require some specific setup.</div>
            
            <br>

            <div class="side-text">The main contributor to the setup is a Camera with an <strong>Ortographic view</strong> and its positioning. The goal is to use Unreal's features, like the <strong>Navigation mesh</strong>, that allows movement for the AI controlled Enemies.</div>
            
            <br>

            <div class="side-text">I wanted to see each Texture's original color, so I set the <strong>Viewport mode</strong> to <strong>Unlit</strong>, instead of using <strong>Lumen</strong> or other Lighting features that Unreal provides.</div>
          </td>
        </tr>
      </table>

      <hr class="separator_middle">

      <h3><strong>PAWN CONFIGURATION</strong></h3>
      
      <table>
        <tr>
          <td>
            <iframe class="youtube" src="https://www.youtube.com/embed/YBm0OrROZ98" frameborder="0" allowfullscreen></iframe>
          </td>
          <td class="top">
            <div class="side-text">Every spaceship is a <strong>Pawn</strong> that handles multiple animations by using <strong>Flipbooks</strong>. Movement animations are swapped based on movement related variables, while others, like shooting projectiles, or exploding upon death, depend on <strong>Events</strong> or <strong>AI commands</strong>.</div>
            
            <br>

            <div class="side-text">Following a data-driven approach, Enemies BPs inherit from the same custom Pawn C++ class, and then select their animations from a <strong>Data Asset</strong>.</div>
           
            <br>

            <div class="side-text">Asteroids and Bonus Carriers are simpler than Enemies and Bosses in terms of AI, but how they handle their visuals and collisions is very similar to any other Pawn.</div>

            <br>

            <div class="side-text">Enemy types are defined by an <strong>Enum</strong>, which is used during the spawning process to select the BP of the Enemy to be spawned.</div>
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
    name: "RA2DSetup",
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