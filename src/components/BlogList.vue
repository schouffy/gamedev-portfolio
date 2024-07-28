<template>
    <div>
        <div class="blog-list text-box">
            <template v-for="blog in blogPosts">
                <div
                    :key="blog.id"
                        @click="moveTo(blog)"
                        class="blog-post-item">
                    <div class="blog-post-card-date">
                        {{ blog.fetchDate() }}
                    </div>
                    <div class="blog-post-card-title-bar">
                        <div class="title-text">
                            {{ blog.name }}
                        </div>
                    </div>
                    <div class="blog-post-card-synopses">
                        <div class="synopses-text">
                            {{ blog.synopses }}
                        </div>
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>


<script lang="ts">
import Vue from "vue";

import BlogPostData from "@/data/BlogPostData.ts";

export default Vue.extend({
    name: "BlogPostList",
    components: {

    },
    props: {
        blogPosts: Array
    },
    methods: {
        moveTo: function(item: BlogPostData) {
            this.$router.push(item.pathToPage);
        }
    },
});
</script>

<style lang="less">

@import '../css/less/variables.less';

.blog-post-item {
    width: 100%;
    margin: 2%;
    font-size: 1.2em;
    text-align: left;
}

.blog-post-card-date {
    font-size: 0.7em;
    color: @skillSquareColor;
}

.blog-post-card-title-bar {
    font-size: 1.3em;
    line-height: 1.1em;
}

.blog-post-card-title-bar:hover {
    text-decoration: underline;
}

.blog-post-card-synopses {
    font-size: 0.7em;
}



@media only screen and (min-width: 620px){
    .blog-post-item {
        width: 100%;
        font-size: 1.5em;
        padding: 0px 0px 80px 0px;
    }

    .blog-post-card-date {
        font-size: 0.7em;
        color: @skillSquareColor;
    }

    .blog-post-card-title-bar {
        font-size: 1.8em;
        padding: 10px 0px 20px 0px;
    }

    .blog-post-card-synopses {
        font-size: 0.8em;
    }
}

</style>