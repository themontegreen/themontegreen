<template>
  <div class="homepage-container">
    <div class="overlay-message">
      <div class="text">For an optimal experience, view this page in portrait mode<br/>Simply put, rotate your phone :)
      </div>
    </div>
    <div class="fixed-content">
      <HeroParagraph/>
      <ScrollableArea :projects="projects" v-show="true"/>
      <MenuFooter/>
    </div>
  </div>
</template>

<script>
import HeroParagraph from '../components/HeroParagraph.vue';
import ScrollableArea from '../components/ScrollableArea.vue';
import MenuFooter from '../components/MenuFooter.vue';
export default {
  data(){
    return{
      projects: null
    }
  },
  metaInfo(){
    return{
      title: "Daniel Demonteverde | digital designer"
    }
  },
  components: {
    HeroParagraph,
    ScrollableArea,
    MenuFooter
  },
  mounted(){
    this.projects = this.$ml.get("content").projects
  }
}
</script>

<style lang="scss">
@import './src/assets/scss/colors.scss';
@import './src/assets/scss/fonts.scss';

body{
  margin: 0px;
}
</style>

<style lang="scss" scoped>
@import './src/assets/scss/colors.scss';
@import './src/assets/scss/fonts.scss';
.homepage-container{
  height: 100%;
  .overlay-message{
    position: fixed;
    display: none;
    top: 0%;
    width: 100%;
    height: 100%;
    background-color: $themontegreen;
    z-index: 1;
  }
  .fixed-content{
    position: fixed;
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: space-between;
  }
}
/* Mobile (Landscape) */
@media screen and (max-width: 1200px) and (orientation: landscape){
  .homepage-container{
    .overlay-message{
      display: flex;
      justify-content: center;
      align-items: center;
      .text{
        @include paragraph;
        color: $true-white;
        text-align: center;
      }
    }
  }
}
</style>