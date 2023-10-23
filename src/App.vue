<template>
  <div id="app">
    <Header />
    <div class="main">
      <router-view v-slot="{ Component }">
        <transition>
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Helpers from './helpers';

export default defineComponent({
  name: 'App',
  components: {
    Header, Footer
  }
});

// Preload heavy images or gifs that are used in other pages
Helpers.preloadImages([
  "img/projects/project-1-icon.png",
  "img/projects/project-2-icon.png",
  "img/projects/project-3-icon.png"
]);

</script>

<style lang="less">

@import './css/projects.less';
@import './css/variables.less';

html, body {
  margin: 0px;
  background-color: @bodyBgColor;
}

#app {
  background-color: @contentBgColor;
  color: @textColor;

  font-family: 'Karla', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  font-size: 1.1em;
  line-height: 1.6em;
  text-align: justify;
}

h1, h2, h3, h4, h5 {
  text-align: left;
}

a {
  color: @textColor;
  text-decoration: none;
  opacity: 0.5;
}
a:hover, .router-link-exact-active {
  opacity: 1;
}

h1 {
  font-size: 2.5em;
  font-weight: 100;
  margin-top: -10px;
  margin-bottom: 40px;
  margin-left: -2px; // hack to make it "seem" more aligned with smaller text content
  line-height: 1.1em;
}

.main {
    padding: 12px;
  }

@media only screen and (min-width: 620px){

  #app {
    text-align: left;
    line-height: 1.8em;
  }

  h1 {
    margin-top: 0.67em;
    margin-bottom: 80px;
    line-height: 0.7em;
  }

  .main {
    padding: 0px 40px 40px 180px;
  }

  .main, .header, .footer {
    max-width: 1200px;
    margin: 0 auto;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.2s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}

</style>
