<template>
  <div>
    <h1>Other stuff</h1>

    <div style="margin-bottom: 30px;">
      And here are some other standalone, game tools I've made or heavily contributed to.
    </div>
    <ProjectsList v-bind:projects="projects" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProjectsList from "@/components/ProjectsList.vue";
import otherProjectsData from "@/data/GameToolsProjectsData";

export default Vue.extend({
  name: "OtherProjects",
  components: {
    ProjectsList,
  },
  data: function () {
    return {
      projects: otherProjectsData,
    };
  },
});
</script>
