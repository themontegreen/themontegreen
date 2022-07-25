<template>
  <div class="scrollable-area-container">
    <div class="projects">
      <router-link
        v-for="(project,p) in projects"
        class="project"
        :to="{name: 'project', params: { projectId: p }}"
        :key="p"
      >
        <div
          class="project-container"
          :style="`background-image: url('/img/projects/`+project.id+`/`+project.cover+`'); background-size:cover;background-position: center;`"
        >
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";
export default {
  name: 'ScrollableArea',
  data: function () {
    return {
      tl: null
    }
  },
  props: ["projects"],
  mounted(){
    this.$nextTick(() => {
      gsap.set(".scrollable-area-container .projects .project", {opacity: 0})
      this.animation()
    });
  },
  methods: {
    animation(){
      this.tl = gsap.timeline()
      this.tl.to(".scrollable-area-container .projects .project", {opacity: 1, y: 0, duration: 1.2, delay: 2, stagger: .5})
    }
  }
}
</script>

<style lang="scss" scoped>
@import './src/assets/scss/colors.scss';
@import './src/assets/scss/fonts.scss';

.scrollable-area-container{
  height: 100%;
  overflow-y: scroll;
  .projects{
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    .project{
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      max-width: calc(100% / 2);
      height: 70%;
      .project-container{
        position: relative;
        width: 100%;
        height: 100%;
        background-color: rgba($true-black, .1);
        overflow: hidden;
        img{
          position: absolute;
          height: 100%;
          left: 50%;
          transform: translate(-50%,0%);
        }
      }
      .overlay{
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: $themontegreen;
        z-index: 1;
        opacity: 0;
      }
    }
  }
}
</style>