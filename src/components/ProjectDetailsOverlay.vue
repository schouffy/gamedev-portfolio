<template>
  <transition name="fade">
    <div v-if="visible">
      <div class="overlay">
      </div>
      <div class="dialog" :style="{ 'background-color': color }">
        <h1 class="dialog-title">{{ title }}</h1>
        <div @click="$emit('close')" class="dialog-close"><i class="fa fa-times fa-lg fa-fw"></i></div>
        <div class="dialog-content">
          <div v-html="htmlContent"></div>
          <div class="dialog-bottom">
          <a @click="$emit('close')" class="dialog-close-button">Close</a>
        </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent }  from "vue";

export default defineComponent({
  name: "ProjectDetailsOverlay",
  props: {
    visible: Boolean,
    color: String,
    title: String,
    htmlContent: String,
  },
  methods: {
    getImage: function(url: string) {
      console.log("fetching image " + url);
    }
  }
});
</script>

<style scoped>
.overlay {
  background-color: rgba(0,0,0,0.5);
  z-index: 10;
  position:fixed;
  top:0px;
  left:0px;
  right:0px;
  bottom: 0px;
}

.dialog {
  position:absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  z-index: 11;
  margin: 20px;
  padding-bottom: 10px;
  color:white;
}

iframe {
  width: 100%;
}

h1.dialog-title {
  text-align: center;
  font-size: 1.3em;
  margin: 0px;
  padding: 22px;
}

.dialog-content {
  padding: 20px;
}

.dialog-content {
  background-color: #fcfcfc;
  color: #696969;
}
.dialog-close {
  position: absolute;
  top: 20px;
  right: 20px;
  cursor:pointer;
  font-size: 1.2em;
  font-weight: 100;
}
.dialog-close:hover {
  opacity: 0.6;
}

.dialog-bottom {
  text-align: center;
}

a.dialog-close-button {
  cursor:pointer;
  font-size: 1.4em;
  display: inline-block;
  margin: 0 auto;
}

@media only screen and (min-width: 620px){
  .dialog {
    margin: 0 auto;
    margin-top: 80px;
    margin-bottom: 40px;
    max-width: 1000px;
  }

  h1.dialog-title {
    font-size: 1.6em;
  }

  .dialog-content {
    padding: 40px;
  }
}


</style>
