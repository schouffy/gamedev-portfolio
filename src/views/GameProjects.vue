<template>
  <div style="margin-bottom: 30px;">
    <h2>Games released as a solo Dev in itch.io</h2>

    <div style="margin-bottom: 20px;">
      The following projects showcase small games/prototypes developed on my own.
    </div>

    <div>
      Contact me if you'd like to see the github repositories for recruitment purposes.
    </div>

    <div style="margin-bottom: 30px;">
      Some projects contain paid assets from the Unreal Marketplace, so I can't publicly share the whole project.
    </div>

    <ProjectsList v-bind:projects="projects" />

    <div style="margin-top: 20px;">
      These projects are available at <a target="_blank" href="https://zoldargames.itch.io/">itch.io</a> (Zoldar Games).
    </div>
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
