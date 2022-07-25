<template>
  <div class="project-navigation">
    <div class="button previous">Previous</div>
    <div class="button next">Next</div>
  </div>
</template>

<script>
export default {
  name: "ProjectNavigation"
}
</script>

<style lang="scss" scoped>
@import './src/assets/scss/colors.scss';
@import './src/assets/scss/fonts.scss';
.project-navigation{
  position: relative;
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-top: 1px solid $true-black;
  background-color: $true-white;
  .button{
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    @include title-small;
    &:first-child{
      border-right: 1px solid $true-black;;
    }
  }
}
</style>