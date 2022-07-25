<template>
  <div class="project-dashboard">
    <div class="dashboard">
      <div class="info">
        <div class="info-cell">
          <div>1</div>
        </div>
        <div class="info-cell">
          <div>1</div>
        </div>
        <div class="info-cell">
          <div>1</div>
        </div>
      </div>
      <div class="description">
        <div class="text">
          Elit dolore Lorem tempor sint esse dolore. Qui ad deserunt nisi velit tempor minim deserunt laborum quis consectetur exercitation. Deserunt enim est velit laborum sint id sunt quis enim. Pariatur qui veniam dolor do consequat aliquip veniam aute ex mollit proident in incididunt aliqua. Esse velit ea exercitation in eu laboris irure officia laborum nisi dolor enim duis.<br/>Cupidatat ut occaecat deserunt do ea laboris magna aute esse. Nisi elit ipsum voluptate irure est et laboris enim. Incididunt minim eiusmod aliquip aute ea cupidatat labore aliquip fugiat ipsum do. Cupidatat enim aliqua dolor veniam eiusmod amet magna quis excepteur sunt. Aliqua elit fugiat in irure aliquip duis aliqua aliqua ut reprehenderit fugiat magna esse. Velit nisi cupidatat et est.
          Elit dolore Lorem tempor sint esse dolore. Qui ad deserunt nisi velit tempor minim deserunt laborum quis consectetur exercitation. Deserunt enim est velit laborum sint id sunt quis enim. Pariatur qui veniam dolor do consequat aliquip veniam aute ex mollit proident in incididunt aliqua. Esse velit ea exercitation in eu laboris irure officia laborum nisi dolor enim duis.<br/>Cupidatat ut occaecat deserunt do ea laboris magna aute esse. Nisi elit ipsum voluptate irure est et laboris enim. Incididunt minim eiusmod aliquip aute ea cupidatat labore aliquip fugiat ipsum do. Cupidatat enim aliqua dolor veniam eiusmod amet magna quis excepteur sunt. Aliqua elit fugiat in irure aliquip duis aliqua aliqua ut reprehenderit fugiat magna esse. Velit nisi cupidatat et est.
        </div>
      </div>
      <ProjectNavigation/>
    </div>
  </div>
</template>

<script>
import ProjectNavigation from '../components/ProjectNavigation.vue';
export default {
  name: "ProjectDashboard",
  components: {
    ProjectNavigation
  },
  methods: {
    onResize(){
    }
  },
  mounted(){

  }
}
</script>

<style lang="scss" scoped>
@import './src/assets/scss/colors.scss';
@import './src/assets/scss/fonts.scss';
.project-dashboard{
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  bottom: 0px;
  .dashboard{
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    border-top: 1px solid $true-black;
    .info{
      position: relative;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 40px;
      .info-cell{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        border-right: 1px solid $true-black;
        &:last-child{
          border-right: none;
        }
      }
    }
  }
  .description{
    position: relative;
    height: 100%;
    border-top: 1px solid $true-black;
    padding: 8px !important;
    overflow-y: hidden;
    @include paragraph;
    .text{
      height: 100%;
      overflow-y: scroll;
    }
  }
}
@media only screen and (min-width: 768px){
  .project-dashboard{
    position: relative;
  }
}
</style>