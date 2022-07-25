<template>
  <div class="hero-paragraph">
    Milan based designer+developer focused in the design and development process of visual design systems, digital user experiences and interactive data-driven content. 
  </div>
</template>

<script>
import gsap from "gsap";
export default {
  name: 'HeroParagraph',
  data: function () {
    return {
      tl: null
    }
  },
  mounted() {
    gsap.set(".hero-paragraph", {opacity: 0, y: 10})
    this.animation()
  },
  methods: {
    animation(){
      this.tl = gsap.timeline()
      this.tl.to(".hero-paragraph", {opacity: 1, y: 0, duration: 1.2, delay: 1})
    }
  }
}
</script>

<style lang="scss" scoped>
@import './src/assets/scss/colors.scss';
@import './src/assets/scss/fonts.scss';

.hero-paragraph{
  @include paragraph-big;
  position: relative;
  width: 100vw;
  padding: 16px;
  border-bottom: 1px solid $true-black;
}

@media screen and (max-width: 767px) {
  .hero-paragraph{
    @include paragraph-small;
    width: auto;
  }
}
</style>