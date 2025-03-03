<template>
    <div>
      <h2>VEHICULAR COMBAT ARENA - USER EXPERIENCE</h2>

      <VCAMenu />
      
      <hr class="separator_top">

      <div style="clear:both"></div>

      <h3><strong>ENHANCED INPUT</strong></h3>
      
      <table>
        <tr>
          <td>
            <iframe class="youtube" src="https://www.youtube.com/embed/feuBT5AA8gw" frameborder="0" allowfullscreen></iframe>
          </td>
          <td class="top">
            <div class="side-text">User input is setup using Unreal's <strong>Enhanced Input system</strong>. Each action the Player can take is defined as an <strong>Input Action</strong>, and further configured in an <strong>Input Mapping Context</strong>.</div>
            
            <br>

            <div class="side-text">The Player can use both the <strong>Keyboard and Mouse</strong>, or a <strong>Gamepad</strong> to play in Training or Arena Matches.</div>
            
            <br>

            <div class="side-text">The <strong>CommonUI plugin</strong> is used to display at runtime what the controls are in a <strong>Widget</strong>. If the Player swaps to another input device, the key icons get updated seamlessly.</div>
          </td>
        </tr>
      </table>

      <hr class="separator_middle">

      <h3><strong>USER INTERFACE</strong></h3>
                  
      <table>
        <tr>
          <td>
            <iframe class="youtube" src="https://www.youtube.com/embed/feuBT5AA8gw" frameborder="0" allowfullscreen></iframe>
          
            <br>

            <div class="paragraph-bottom">The project's <strong>DPI Scale Rule</strong> is set to <strong>Scale to Fit</strong> so that the UI scales correctly on different resolutions.</div>
          </td>
          <td class="top">
            <div class="side-text">The UI is made of <strong>UMG Widgets</strong>, and is designed with a 16:9 ratio in mind. The <strong>Player Controller</strong> handles the HUD and other in-game menus, while the Main Menu and related sub-menus are controlled by the <strong>Main Menu level's BP</strong> directly.</div>
            
            <br>

            <div class="side-text">The only tasks the Widgets carry out are displaying text, images and animations. Processing and fetching the data itself is <strong>decoupled</strong> from the UI.</div>
            
            <br>

            <div class="side-text">Events are used to make UI updates <strong>efficient</strong>. For periodic operations, <strong>Timers</strong> that run less frequently than Tick() are used instead.</div>
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
    name: "VCAUserExperience",
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