<template>
  <div class="project-top-bar">
    <div class="name-project">{{title}}</div>
    <router-link
      class="close-btn"
      :to="{name: 'home'}"
    >
      <img style="width: 18px;" src="/img/x-button.png" alt="">
    </router-link>

  </div>
</template>

<script>
import gsap from "gsap";
export default {
  name: "ProjectTopBar",
  props: ["title"],
  data(){
    return {
      tl: null
    }
  },
  mounted(){
    gsap.set(".project-top-bar", {yPercent: -100})
    this.animation()
  },
  methods:{
    animation(){
      this.tl = gsap.timeline()
      this.tl.to(".project-top-bar", {yPercent: 0, duration: 1, delay: 1})
    }
  }
}
</script>

<style lang="scss" scoped>
@import './src/assets/scss/colors.scss';
@import './src/assets/scss/fonts.scss';
.project-top-bar{
  position: fixed;
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid $true-black;
  background-color: white;
  .name-project{
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 0 16px;
    @include title;
  }
  .close-btn{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 40px;
    border-left: 1px solid $true-black;
    cursor: pointer;
    &:hover{
      background-color: $true-black;
    }
  }

}
</style>