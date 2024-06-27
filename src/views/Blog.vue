<template>
  <div>
    <BlogPostList v-bind:blogPosts="blogPosts" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import blogPostsData from "@/data/BlogPostsData.ts";
import BlogPostList from "@/components/BlogList.vue";

export default Vue.extend({
  name: "GameProjects",
  components: {
    BlogPostList,
  },
  data: function () {
    return {
      blogPosts: blogPostsData,
    };
  },
});
</script>
