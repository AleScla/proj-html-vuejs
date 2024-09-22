<script>
import {store} from './store.js';
import AppHeader from './components/AppHeader.vue';

export default {
  data() {
    return { 
      store
    }
  },
  components: {
    AppHeader
  },
  methods: {

  }
}
</script>

<template>
  <div>
    <!-- 3) Utilizzo del componente -->
    <AppHeader />
    <main>

    </main>
  </div>
</template>

<style lang="scss">
@use 'assets/scss/main' as *;
// Import all of Bootstrap's CSS
@import "bootstrap/scss/bootstrap";
</style>
