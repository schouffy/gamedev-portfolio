<template>
  <div>
    <h1>Resume</h1>

    <div class="paragraph">
      I'm a Computer Science student and Software Engineer living in Lisbon, Portugal.
      <br />Currently finishing my Masters in <a href="https://tecnico.ulisboa.pt/pt/">Instituto Superior Técnico</a>
       and I've been working as a Software Engineer in <a href="https://www.premium-minds.com/">Premium Minds</a> since the end of 2022.
      <br />
      <br /> Two years ago I also joined <a href="https://gamedev.tecnico.ulisboa.pt/">GameDev Técnico</a>
      , a student game development group. Within the group I participated in a few jams and a couple of longer term projects.
       Today I'm one of the Community Managers of the group.
      <br />

      <div style="margin-top:20px;">
        <a class="download-link" href="d/Eduardo_Barrancos_CV.pdf" target="_blank"><i class="fa fa-download fa-lg fa-fw"></i> Download as PDF 🇬🇧</a>
        <div style="clear:both"></div>
      </div>
    </div>
    <div class="photo">
      <img src="img/me.png" alt="Photo of Eduardo" class="avatar-images"/>
    </div>

    <div style="clear:both"></div>

    <div class="full-content">
      <h2>Work experience</h2>

      <h3>Community Manager | Member - GameDev Técnico</h3>
      <h4>October 2021 - <i>Present</i></h4>

      <div>Official <i>Instituto Superior Técnico's</i> game development club
      <br> - Participated in a variaty of game jams with various teammates and in multiple roles (programmer, designer,  2d/vfx artist, music/sound producer)
      available on <a href="https://reallyokeyfruit.itch.io/">itch.io</a>
      <br> - Made <i>Quinta do Vale</i> as a game programmer - a farming game
      <br> - As a community manager, organized various events, mainly the group's recruitment</div>

      <div class="tech-stack">Godot, GDScript, Unity, C#, Aseprite, Audacity, Beepbox</div>

      <h3>Software Engineer - Premium Minds</h3>
      <h4>June 2022 - <i>Present</i></h4>

      <div>
        - Work with a team to develop and automate processes in a multi-context ecosystem<br>
        - Integrated with internal and external systems <br>
        - Migrated from a monolithic system to a micro-services focused environment
      </div>

      <div class="tech-stack">
        Java (Hibernate, Evean, Jobby, Guice, Flyway), Bash, SQL, PostgreSQL, Kafka, Docker, Nomad, JUnit, Maven, Jenkins, Jira     
      </div>

      <h2>Skills</h2>

      <div class="skill-set">
        <h3>Lethal</h3>
        <SkillRate name="Handguns" :rate="5" />
        <SkillRate name="Rifles" :rate="5" />
        <SkillRate name="Shotguns" :rate="5" />
        <SkillRate name="Machineguns" :rate="5" />
        <SkillRate name="Missile launchers" :rate="5" />
        <SkillRate name="Knives" :rate="5" />
        <SkillRate name="Hand to hand combat" :rate="5" />
      </div>

      <div class="skill-set">
        <h3>Non-lethal</h3>
        <SkillRate name="Sneaking" :rate="1" />
        <SkillRate name="Negotiation" :rate="1" />
        <SkillRate name="Seduction" :rate="1" />
        <SkillRate name="Sense of humor" :rate="2" />
      </div>
      <div style="clear:both" />

      <h2>Education</h2>

      <h3>Kindergarten - 1985</h3>
      <h4>Kindergarten degree</h4>
      <div>Specialty in bullying and fighting (58 wins, 58 K-O, 0 losses)</div>

      <h2>Languages</h2>

      <h3>American</h3>
      <div>Basic knowledge but I know lots of one-liners</div>

      <h3>That's it</h3>
      <div>Who needs another language when you speak American?</div>


      <h2>Besides...</h2>
      <div>
        <h3>I ❤️ Violence</h3>
        <div>I find it really soothing to just shoot at bad guys</div>

        <h3>I 🧡 Sports</h3>
        <div>I used to be thin but then I ingested 10 kilos of steroids and proteins a day while doing 1000 push-ups.</div>

        <h3>I 💛 Politics</h3>
        <div>I hope I can have a career here someday but I might have temper issues.</div>

        <h3>I 💚 Flowers</h3>
        <div>Especially the big ones, with the trunk and leaves.</div>

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SkillRate from "@/components/SkillRate.vue";

export default Vue.extend({
  name: "Resume",
  components: {
    SkillRate,
  },
});
</script>

<style scoped>
h2 {
  font-weight: 100;
  font-size: 2em;
  margin: 0px;
  padding: 0px;
  padding-top: 50px;
}
h3 {
  font-weight: 100;
  font-size: 1.6em;
  margin: 0px;
  padding: 0px;
  padding-top: 30px;
}
h4 {
  font-weight: 100;
  font-size: 1.3em;
  margin: 0px;
  padding: 0px;
  padding-top: 15px;
  font-style: italic;
}

.paragraph {
  max-width: 700px;
}

.download-link {
  float:left;
  margin-right: 50px;
}

.full-content div {
  max-width: 800px;
}

.skill-set h3 {
  padding-bottom: 10px;
}

.photo img {
  height: 300px;
  width: 300px;
  border-radius: 50%;
}

.tech-stack {
  font-style: italic;
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
    padding-left: 80px;
    width: 0;
    margin-top: 0;
  }

  .skill-set {
    float: left;
    padding-right: 60px; 
  }
}
</style>