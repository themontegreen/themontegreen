<template>
  <div class="project-showcase">
    <div class="media">
      <carousel class="c" :perPage="1" :autoplay="true" :loop="true" :autoplayTimeout="3000" :paginationEnabled="false"
      :centerMode="true"
      >
        <slide
          class="singleSlide"
          v-for="(m,i) in media" :key="i"
          :style="`background-image: url('/img/projects/`+projectId+`/`+m+`'); background-size:contain;background-position: center;`"
        >
          
          <img style="width: 100%;" :src="`/img/projects/`+projectId+`/`+m+``" alt="">
        </slide>
      </carousel>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
import gsap from "gsap";
export default {
  name: "ProjectShowcase",
  components: {
    Carousel,
    Slide
  },
  props: {
    projectId: String,
    media: Array
  },
  data(){
    return {
      tl: null
    }
  },
  mounted(){
    gsap.set(".project-showcase", {opacity: 0})
    this.animation()
  },
  methods:{
    animation(){
      this.tl = gsap.timeline()
      this.tl.to(".project-showcase", {opacity: 1, duration: 1, delay: 1})
    }
  }
}
</script>

<style lang="scss" scoped>
@import './src/assets/scss/colors.scss';
@import './src/assets/scss/fonts.scss';
.project-showcase{
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
  .media{
    position: relative;
    width: 100%;
    .c{
      position: relative;
      width: 100%;
      height: 100%;
    }
    .carousel{
      position: relative;
      width: 100%;
      height: 100%;
      .singleSlide{
        position: relative;
        width: 100%;

      }
    }
  }
}

/* Mobile */
@media screen and (max-width: 1200px){
}

/* Mobile (Landscape) */
@media screen and (max-width: 1200px) and (orientation: landscape){
  .project-showcase{
    .media{
      .carousel{
        .singleSlide{
          height: 200px;
        }
      }
    }
  }
}

/* 1920 x 1080 */
@media screen and (min-width: 1920px) and (orientation: landscape){
  .project-showcase{
    .media{
      .carousel{
        .singleSlide{
          height: 900px;
        }
      }
    }
  }
}
</style>