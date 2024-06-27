<template>
  <div class="blog-post">

    <div class="title-card">
      <div class="blog-date">{{ blogPost.fetchDate() }}</div>
      <div class="blog-title">{{ blogPost.name }}</div>
      <div class="blog-synopsis">{{ blogPost.synopses }}
      </div>
      <hr/>
    </div>

    <div class="main-article">
      <div class="article-body">    
        <h1>Heyho Everyone</h1>

        <div class="paragraph">
          How is everybody doing?
        </div>

        <div class="paragraph">
          I'm writing this post because I'm developing a place to write blog posts in my website and wanted to have one for testing purposes.
        </div>

        <div class="paragraph">
          For everyone who doesn't already know my name is Eduardo Barrancos, I'm a Software Engineering student. Currently I'm also working at a company called Premium Minds as a Software Developer and I love making and playing games as a Hobby (I have many others, but the game-dev thingy occupies most of my time).
        </div>

        <h2>What will my blog be about?</h2>

        <div class="paragraph">
          As many things in my life, about anything and everything that strikes my fancy. About something I learned recently, about an experiment. Maybe a few posts reviewing games I played or talking about the ones I'm making.
        </div>    

        <div class="sign-off">
          <hr/>
          <div class="paragraph">
            So, whatever I endup writing about, I hope you enjoy it.
          </div>
          <div class="goodbye">Be seeing you,</div>
          <div class="signature">Eduardo Barrancos</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import blogPostsData from "@/data/BlogPostsData.ts";

export default Vue.extend({
  name: "GameProjects",
  components: {
  },
  data: function () {
    return {
      blogPost: blogPostsData[0],
    };
  },
});
</script>

<style lang="less">

@import "../../css/blogPost.less";


@media only screen and (min-width: 620px){

}

</style>