<template>
    <div>
        <div class="blog-list">
            <template v-for="blog in blogPosts">
                <div
                    :key="blog.id"
                        @click="moveTo(blog)"
                        class="blog-post-item">
                    <div class="blog-post-card-date">
                        {{ fetchDate(blog.date) }}
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
            // I want this to be different, I want to open a new page?
            console.debug("Move to blog post");
        },

        fetchDate: function(date: Date) {
            return this.fetchDayOfTheWeek(date) +
                " - " + 
                this.fetchMonth(date) + 
                " " + 
                date.getDate() +
                ", " +
                date.getFullYear();
        },

        fetchDayOfTheWeek: function(date: Date) {
            switch(date.getDay()) {
                case 0:
                    return "Monday";
                case 1:
                    return "Tuesday";
                case 2:
                    return "Wednesday";
                case 3:
                    return "Thursday";
                case 4:
                    return "Friday";
                case 5:
                    return "Saturday";
                case 6:
                    return "Sunday";
            }
        },

        fetchMonth: function(date: Date) {
            switch(date.getMonth()) {
                case 0:
                    return "January";
                case 1:
                    return "February";
                case 2:
                    return "March";
                case 3:
                    return "April";
                case 4:
                    return "May";
                case 5:
                    return "June";
                case 6:
                    return "July";
                case 7:
                    return "August";
                case 8:
                    return "September";
                case 9:
                    return "October";
                case 10:
                    return "November";
                case 11:
                    return "December";
            }
        }
    },
});
</script>

<style lang="less">

@import '../css/variables.less';

.blog-list{
    width: 100%;
}

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
        padding: 15px 0px 40px 0px;
    }

    .blog-post-card-synopses {
        font-size: 0.8em;
    }
}

</style>