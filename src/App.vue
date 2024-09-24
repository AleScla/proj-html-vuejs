<script>
import {store} from './store.js';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  data() {
    return { 
      store
    }
  },
  components: {
    AppHeader,
    AppMain,
    AppFooter
  },
  methods: {

  }
}
</script>

<template>
  <div>
    <!-- 3) Utilizzo del componente -->
    <AppHeader />
    <AppMain />
    <AppFooter />
  </div>
</template>

<style lang="scss">
@use 'assets/scss/main' as *;
// Import all of Bootstrap's CSS
@import "bootstrap/scss/bootstrap";




</style>
