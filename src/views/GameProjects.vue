<template>
  <div style="margin-bottom: 30px;">
    <h2>Games released in itch.io</h2>

    <div style="margin-bottom: 20px;">
      I've released the following projects as a solo dev (Zoldar Games). 
    </div>

    <div style="margin-bottom: 20px;">
      Some projects contain paid assets from the Unreal Marketplace, so I can't publicly share the whole project.
    </div>

    <div style="margin-bottom: 40px;">
      Contact me if you'd like to see the github repositories for recruitment purposes.
    </div>    

    <ProjectsList v-bind:projects="projects" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProjectsList from "@/components/ProjectsList.vue";
import gameProjectsData from "@/data/GameProjectsData.ts";

export default Vue.extend({
  name: "GameProjects",
  components: {
    ProjectsList,
  },
  data: function () {
    return {
      projects: gameProjectsData,
    };
  },
});
</script>
