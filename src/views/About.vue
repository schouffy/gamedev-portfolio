<template>
  <div style="margin-bottom: 80px;">
    <h1>Hello!</h1>

    <div class="paragraph">
      <div>
        I'm <strong>Gabriel Bustillo del Cuvillo</strong>, a Jack-of-all-trades IT, <br/>But officially I'm a Software Developer (and former IT Technician).<br/>
      </div>

      <div style="margin-top: 20px;">I've worked on  <router-link to="/game-projects">Game Projects</router-link>, 
      <!-- on <router-link to="/other-projects">Game Tools</router-link>, on <router-link to="/other-projects">Hacky Things</router-link>, --> 
      on <router-link to="/other-projects"> other game-dev related projects</router-link>,
      <br/> and other <router-link to="/resume">Generalist Developer Things</router-link> as well.</div>

      <div style="margin-top: 40px;">I'm currently <strong>open</strong> for any kind of IT Job related<br/> if you have interest for hire me, Please <router-link to="/contact">Contact me</router-link></div>
    </div>

    <div class="photo">
      <img src="img/avatar.png" alt="Avatar of Gaby" /> 
    </div>

    <div style="clear:both"></div>

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