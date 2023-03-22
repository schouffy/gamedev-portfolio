<template>
  <div>
        <h1>References</h1>
        <template v-for="reference in ReferencesData">
        <div :key="reference.id">
            <ul>
            <li><h3>{{reference.name}}</h3>
                <ul>
                    <li>{{reference.job}} - {{reference.company}}</li>
                    <ul><li>{{reference.description}}</li></ul>
                </ul>
            </li>
            </ul>
        </div>
        </template>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import referencesData from "@/data/ReferencesData.ts";


export default Vue.extend({
  name: "ReferencesView",
  data:
      function(){return {ReferencesData : referencesData}}
});
</script>
<style scoped>
</style>