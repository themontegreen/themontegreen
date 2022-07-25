<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  beforeCreate() {
    let lang;
    if (process.env.VUE_APP_LANG) {
      lang = process.env.VUE_APP_LANG;
    } else {
      lang = 'en'
    }
    lang='en'
    this.$ml.change(lang);
  }
}
</script>

<style>
</style>
