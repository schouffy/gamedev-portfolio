<template>
  <div style="margin-bottom: 80px;">
    <h1>Heyho!</h1>

    <div class="main-text">
      <div class="paragraph text-box">
        <div>
          I'm <strong>Eduardo Barrancos</strong>, a Software Engineer by day and a game developer by night :D <br>
          I'm currently finishing my Masters' degree in Computer Science, working part-time as a Software Engineer and making games and all sort of experiments as a hobby!
        </div>

        <div style="margin-top: 20px;">I've worked on <a href="https://reallyokeyfruit.itch.io/">some games</a>(some alone, others in teams, most as jam participations). I've also made some <a href="https://github.com/EdBarrancos">non-game experiments</a>, and took part in <router-link to="/resume">a few other-things</router-link> as well.</div>

        <div style="margin-top: 40px;">I'm really passioned about art. 
          <a href="https://www.wincalendar.com/Calendar-UK/date/22-August-2023">Currently</a> I'm playing <a href="https://store.steampowered.com/app/379720/DOOM/">Doom (2016)</a> 
          and reading the <a href="https://www.goodreads.com/series/40911-the-witcher">Witcher's Series</a>. <br>
        Feel free to reach me at <a href="mailto:eduardobarrancos11488@gmail.com">eduardobarrancos11488@gmail.com</a> or <router-link to="/contact">through here</router-link>.</div>
      </div>

      <div class="photo">
        <img src="img/me_sun.png" alt="Avatar of Eduardo" class="avatar-image"/> 
      </div>
    </div>

    <div style="clear:both"></div>

  </div>
</template>

<style scoped>
.paragraph {
  margin-bottom: 20px;
}

.avatar-image {
  border-radius: 15%;
  width: 230px;
}

.photo {
  margin-top: 50px;
  text-align: center;
  margin: auto;
}

h1 {
  text-align: center;
}

@media only screen and (min-width: 620px){
  .paragraph {
    float: left;
    max-width: 80%;
  }

  .photo {
    float: left;
     padding-left: 80px;
    width: 0;
  }

  h1 {
    text-align: left;
  }
}

</style>