<template>
  <div style="margin-bottom: 80px;">
    <h1>Hello!</h1>

    <div class="paragraph">
      <div>
        I'm <strong>John Matrix</strong>, a former Delta Force operative, now a hobbyist lumberjack.<br/>
        I spend my days living alone with my daughter Jenny, and cutting trees and carrying trunks around to keep in shape.
      </div>

      <div style="margin-top: 20px;">I've worked on  <router-link to="/game-projects">stuff</router-link>, on <router-link to="/other-projects">other stuff</router-link>, and took part in <router-link to="/resume">a few things</router-link> as well.</div>

      <div style="margin-top: 40px;">I'm <strong>currently looking for a job</strong> as a monk, like my good friend John Rambo did a few years back. You can reach me at <a href="mailto:johnmatrix@deltaforce.us">johnmatrix@deltaforce.us</a> or <router-link to="/contact">through here</router-link>.</div>
    </div>

    <div class="photo">
      <img :src="`/img/avatar.png`" alt="Avatar of John" /> 
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