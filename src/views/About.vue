<template>
  <div>    
    <h2>Hello!</h2>

    <div class="paragraph">
      <div>
        I'm <strong>Carlos Ortega González</strong>, a <strong>Game Programmer</strong> with a technical background in other areas like Test Automation, Technical Support and Unix System Administration.<br/>
      </div>

      <div style="margin-top: 20px;">I make games using <strong>Unreal Engine 5</strong> using C++ and blueprints, and I enjoy crafting polished gameplay that keeps players engaged.</div>

      <div style="margin-top: 20px;">In <router-link to="/game-projects">Zoldar Games</router-link> you'll find a selection of games I've developed on my own and released in <a href="https://zoldargames.itch.io/">itch.io</a>.</div>

      <div style="margin-top: 20px;">I'm part of a development team working on a Souls-lite project as a Gameplay Programmer, and will post updates as soon as they are available.</div>

      <div style="margin-top: 20px;">I also aim to showcase small Gameplay features on their own from my tests.</div>
      
      <div style="margin-top: 20px;">If you wish to contact me, please check the <router-link to="/contact">Contact</router-link> section.</div>
    </div>

    <div class="photo">
      <img src="img/avatar.png" alt="Avatar" /> 
    </div>

    <div style="clear:both"></div>

    <div style="text-align: right; margin-bottom: -20px; margin-top: -12px; font-size: smaller;"><br><br><a href="https://github.com/schouffy/gamedev-portfolio" target="blank">Portfolio template</a> by schouffy</div>
   
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