<template>
  <div>
    <h1>Game Projects</h1>

    <div style="margin-bottom: 30px;">
      The following are some VideoGames I've made or somehow I contributed to.
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
