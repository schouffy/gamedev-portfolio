<template>
  <div>
    <h2>Hello!</h2>

    <div class="paragraph">
      <div>
        I'm <strong>Carlos Ortega González</strong>, a <strong>Game programmer</strong> with a technical background in other areas like Test Automation, Technical Support and Unix System Administration.<br/>
      </div>

      <div style="margin-top: 20px;">I've recently added <strong>Unreal Engine 5</strong> to my arsenal (c++ and blueprints), and I'm enjoying crafting polished gameplay that keeps players engaged. I aim to make my personal projects full games, so that each one helps build at least some aspects of the next one.</div>

      <div style="margin-top: 20px;">In <router-link to="/game-projects">Zoldar Games</router-link> you'll find a selection of games I've developed on my own and released in <a href="https://zoldargames.itch.io/">itch.io</a>, while in <router-link to="/other-projects">Team Projects</router-link> you'll find details about projects where I've contributed as part of a team.</div>

      <div style="margin-top: 20px;">If you wish to contact me, please check the <router-link to="/contact">Contact</router-link> section.</div>
    </div>

    <div class="photo">
      <img src="img/avatar.png" alt="Avatar" /> 
    </div>

    <div style="clear:both"></div>

    <div style="text-align: right; margin-bottom: -20px; margin-top: 40px; font-size: smaller;"><br><br><a href="https://github.com/schouffy/gamedev-portfolio" target="blank">Portfolio template</a> by schouffy</div>
   
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