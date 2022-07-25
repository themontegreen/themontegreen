<template>
  <div class="project-page">
    <ProjectTopBar :title="$ml.get('content')['projects'][currentPid].title"/>
    <div class="project-info">
      <div class="container-carousel">
        <div style="width: 100%; height: 100%; border: 1px solid black;">
          <ProjectShowcase :projectId="$ml.get('content')['projects'][currentPid].id" :media="$ml.get('content')['projects'][currentPid].media"/>
        </div>
      </div>
      <div class="project-content">
        <div class="info-header">
          <div class="info">
            {{$ml.get('content')['projects'][currentPid].year}}
          </div>
          <div class="info">
            <span v-for="(category,c) in $ml.get('content')['projects'][currentPid].categories" :key="c">
              {{category}}<span v-if="(c+1) < $ml.get('content')['projects'][currentPid].categories.length">/</span>
            </span>
          </div>
          <div class="info">
            {{$ml.get('content')['projects'][currentPid].subject}}
          </div>
        </div>
        <div class="container-paragraph">
          <div class="paragraph" v-html="$ml.get('content')['projects'][currentPid].description">
          </div>
        </div>
      </div>
    </div>
    <ProjectBottomBar v-on:goToPrevious="previousProject" v-on:goToNext="nextProject"/>
  </div>
</template>

<script>
import ProjectTopBar from '../components/ProjectTopBar.vue';
import ProjectBottomBar from '../components/ProjectBottomBar.vue';
import ProjectShowcase from '../components/ProjectShowcase.vue';

export default {
  components: {
    ProjectTopBar,
    ProjectBottomBar,
    ProjectShowcase
  },
  data(){
    return{
      currentPid: null,
      windowWidth: 0,
      windowHeight: 0,
      metaTitle: null
    }
  },
  metaInfo(){
    return{
      title: this.metaTitle
    }
  },
  props: ["projectId"],
  computed: {
    calcHeight(){
      if( this.windowWidth >= 1200 )
        return this.windowHeight - 40;
      else
        return this.windowHeight / 2;
    }
  },
  beforeMount(){
    this.currentPid = this.projectId
    this.metaTitle = "Daniel Demonteverde | "+this.$ml.get('content')['projects'][this.currentPid].title
  },
  mounted(){
    window.addEventListener('resize', this.onResize)
    this.windowWidth = window.innerWidth
    this.windowHeight = window.innerHeight

    this.currentPid = this.projectId
    this.metaTitle = "Daniel Demonteverde | "+this.$ml.get('content')['projects'][this.currentPid].title
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
  },
  methods: {
    onResize(event) {
      this.windowWidth = event.target.innerWidth
      this.windowHeight = event.target.innerHeight
    },
    previousProject() {
      if( this.currentPid > 0 )
        this.currentPid -= 1
      else if( this.currentPid == 0 )
        this.currentPid = this.$ml.get('content')['projects'].length - 1
      this.metaTitle = "Daniel Demonteverde | "+this.$ml.get('content')['projects'][this.currentPid].title
    },
    nextProject() {
      if( this.currentPid < ( this.$ml.get('content')['projects'].length - 1 ) )
        this.currentPid += 1
      else if( this.currentPid == ( this.$ml.get('content')['projects'].length - 1 ) )
        this.currentPid = 0
      this.metaTitle = "Daniel Demonteverde | "+this.$ml.get('content')['projects'][this.currentPid].title
    }
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
.project-page{
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  .project-info{
    position: relative;
    width: 100%;
    height: calc(100vh - 80px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 40px;
    .container-carousel{
      position: relative;
      height: 50%;
      border-bottom: 1px solid $true-black;
      padding: 8px;
    }
    .project-showcase{
      position: relative;
    }
    .project-content{
      position: relative;
      width: 100%;
      height: 50%;
      .info-header{
        display: flex;
        height: 40px;
        flex-direction: row;
        .info{
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          border-right: 1px solid $true-black;
          @include title-small;
          &:last-child{
            border-right: none;
          }
        }
      }
      .container-paragraph{
        position: relative;
        height: calc(100% - 56px);
        border-top: 1px solid $true-black;
        padding: 8px 16px;
        .paragraph{
          position: relative;
          height: 100%;
          overflow: scroll;
          @include paragraph;
        }
      }
    }
  }
}

/* Mobile (Landscape) */
@media screen and (max-width: 1200px) and (orientation: landscape){
  .project-page{
    .project-info{
      flex-direction: row;
      height: calc(100vh - 80px);
      .container-carousel{
        width: 45%;
        height: calc(100% - 16px);
      }
      .project-content{
        width: 55%;
        height: 100%;
        border-left: 1px solid $true-black;
      }
    }
  }
}

/* Tablet Landscape */
@media screen and (min-width: 1200px) and (orientation: landscape){
  .project-page{
    .project-info{
      flex-direction: row-reverse;
      height: calc(100vh - 80px);
      .container-carousel{
        width: 60%;
        height: calc(100% - 16px);
        border-left: 1px solid $true-black;
      }
      .project-content{
        width: 40%;
        height: 100%;
        border-left: 1px solid $true-black;
      }
    }
  }
}

/* 1920 x 1080 */
@media screen and (min-width: 1366px) and (orientation: landscape){
  .project-page{
    .project-info{
      .container-carousel{
        width: 65%;
      }
      .project-content{
        width: 35%;
      }
    }
  }
}
</style>