<template>
<div class="menu-footer-component">
      <div class="button">
        <a target="_blank" href="https://www.linkedin.com/in/daniel-demonteverde/">
          <div class="text">Linkedin</div>
        </a>
      </div>
      <div class="button">
        <a target="_blank" href="https://www.behance.net/themontegreen">
          <div class="text">Behance</div>
        </a>
      </div>
      <div class="button">
        <a target="_blank" href="https://www.instagram.com/themontegreen/">
          <div class="text">Instagram</div>
        </a>
      </div>
      <div class="button email" @click="showEmail('show')" @mouseover="showEmail('show')" @mouseout="showEmail">
        <a target="_blank" href="mailto:daniel.demonteverde@gmail.com">
          <div class="text">{{emailLabel}}</div>
        </a>
      </div>
    </div>
</template>

<script>
import gsap from "gsap";
export default {
  name: 'MenuFooter',
  data(){
    return{
      emailLabel: 'Email',
      tl: null
    }
  },
  methods:{
    showEmail(value){
      if( this.$mq != 'lg' )
        return;

      if( value == 'show' )
        this.emailLabel = 'daniel.demonteverde@gmail.com'
      else
        this.emailLabel = 'Email'
    },
    animation(){
      this.tl = gsap.timeline()
      this.tl.to(".menu-footer-component", {yPercent: 0, duration: .7, delay: .5})
    }
  },
  mounted(){
    gsap.set(".menu-footer-component", {yPercent: 100})
    this.animation()
  }
}
</script>

<style lang="scss" scoped>
@import './src/assets/scss/colors.scss';
@import './src/assets/scss/fonts.scss';

.menu-footer-component{
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%
}

.button{
  position: relative;
  display: flex;
  width: 100%;
  max-width: calc(100% / 4);
  justify-content: center;
  align-items: center;
  padding: 12px 0;
  border-top: 1px solid $true-black;
  border-right: 1px solid $true-black;
  text-decoration: none;
  cursor: pointer;
  &:last-child{
    border-right: none;
  }
  &.email{
    background-color: $true-black;
    .text{
      color: $true-white;
    }
  }
  a{
    text-decoration: none;
  }
  .text{
    @include title-small;
  }
  &:hover{
    a{
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      background-color: $themontegreen;
    }
    .text{
      position: absolute;
      color: $true-white;
    }
  }
}
@media screen and (max-width: 768px) {
  .menu-footer-component{
    justify-content: space-around;
  }
}
</style>