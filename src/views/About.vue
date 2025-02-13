<template>
  <div>
    <h2>Hello!</h2>

    <div class="paragraph">
      <div>
        I'm <strong>Carlos Ortega González</strong>, a Game programmer.<br/>
        I've got a strong technical background, having worked in multiple sectors as a Test Automation engineer, Technical support Engineer and Systems Administator.
      </div>

      <div style="margin-top: 20px;">I've recently added Unreal Engine 5 to my arsenal (c++ and blueprints), and I'm enjoying crafting polished gameplay that keeps players engaged.</div>

      <div style="margin-top: 20px;">In <router-link to="/game-projects">Zoldar Games</router-link> you'll find a selection of games I've developed on my own and released in <a href="https://zoldargames.itch.io/">itch.io</a>, while in <router-link to="/other-projects">Team Projects</router-link> you'll find details about projects where I've contributed as part of a team.</div>

      <div style="margin-top: 20px;">I'm currently looking for a job as a <strong>gameplay programmer</strong> (preferably using Unreal Engine), where I can help craft unforgettable experiences with crisp controls and engaging game mechanics.</div>

      <div style="margin-top: 20px;">If you wish to contact me, please check the <router-link to="/contact">Contact</router-link> section.</div>
    </div>

    <div class="photo">
      <img src="img/avatar.png" alt="Avatar" /> 
    </div>

    <div style="clear:both"></div>

    <div style="text-align: right; margin-bottom: -20px; font-size: smaller;"><br><br><a href="https://github.com/schouffy/gamedev-portfolio" target="blank">Portfolio template</a> by schouffy</div>
   
  </div>
</template>

<style scoped>
.paragraph {
  max-width: 700px;
  margin-bottom: 20px;
}

.photo {
  margin-top: 50px;
  text-align: center;
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