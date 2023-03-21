<template>
<div>
        <div style="margin-top: 20px;">
            There is more to see on <a target="_blank" href="https://github.com/gabuscuv">my GitHub profile</a>
          </div>
        <ProjectsList v-bind:projects="projects" />
        </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProjectsList from "@/components/ProjectsList.vue";
import otherProjectsData from "@/data/OtherProjectsData.ts";

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