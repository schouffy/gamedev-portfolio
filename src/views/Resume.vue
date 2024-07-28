<template>
  <div>
    <h1>Resume</h1>

    <div class="paragraph text-box">
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

    <div class="full-content text-box">
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
        Java (Hibernate, Ebean, Jobby, Guice, Flyway), Bash, SQL, PostgreSQL, Kafka, Docker, Nomad, JUnit, Maven, Jenkins, Jira     
      </div>

      <h2>Tech Stack</h2>

      <div class="skill-set">
        <h3>Languages</h3>
        <SkillRate name="Java"/>
        <SkillRate name="Python"/>
        <SkillRate name="C"/>
        <SkillRate name="Julia"/>
        <SkillRate name="SQL"/>
        <SkillRate name="C#"/>
        <SkillRate name="Javascript"/>
        <SkillRate name="C++"/>
        <SkillRate name="Bash"/>
        <SkillRate name="Prolog"/>
        <div style="clear:both"></div>
      </div>

      <div class="skill-set">
        <h3>Gamedev tools</h3>
        <SkillRate name="Godot"/>
        <SkillRate name="Unity"/>
        <SkillRate name="Aseprite"/>
        <SkillRate name="Audacity"/>
        <SkillRate name="Krita"/>
        <SkillRate name="Beepbox"/>
        <div style="clear:both" />
      </div>

      <div class="skill-set">
        <h3>Tools & frameworks</h3>
        <SkillRate name="Hibernate"/>
        <SkillRate name="Ebean"/>
        <SkillRate name="Jobby"/>
        <SkillRate name="Guice"/>
        <SkillRate name="Flyway"/>
        <SkillRate name="JUnit"/>
        <SkillRate name="PostgresSQL"/>
        <SkillRate name="Kafka"/>
        <SkillRate name="Docker"/>
        <SkillRate name="Nomad"/>
        <SkillRate name="Vue"/>
        <SkillRate name="React.js"/>
        <SkillRate name="discord-py"/>
        <SkillRate name="P5"/>
        <div style="clear:both" />
      </div>
      <div style="clear:both" />

      <h2>Education</h2>

      <h3>Bachelors in Computer Science and Engineering</h3>
      <h4>2019 - 2022</h4>
      <h4><a href="https://tecnico.ulisboa.pt/pt/">Instituto Superior Técnico</a>, Lisbon</h4>
      
      <h3>Masters in Computer Science and Engineering</h3>
      <h4>2022 - <i>Present</i></h4>
      <h4><a href="https://tecnico.ulisboa.pt/pt/">Instituto Superior Técnico</a>, Lisbon</h4>

      <div>Had courses in a multitude of subjects within computer science. 
        E.g. Games, Distributed Systems, Software Engineering, AI, meta-programming, ...</div>

      <h2>Languages</h2>

      <h4>English - C2</h4>

      <h4>Portuguese - Native</h4>
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

h1 {
  text-align: center;
}

h2 {
  font-weight: 100;
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

.clear {
  clear: both;
}

@media only screen and (min-width: 620px){
  h1 {
    text-align: left;
  }

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