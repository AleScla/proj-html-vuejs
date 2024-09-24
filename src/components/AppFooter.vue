<script>
import {store} from '../store.js';
import footerTop from './footerComponents/footerTop.vue';
export default {
  data() {
    return { 
      store
    }
  },
  components: {
    footerTop,
  },

}
</script>

<template>
    <footer>
      <footerTop/>
    </footer>
</template>

<style lang="scss">
@use '/src/assets/scss/main.scss' as *;
// Import all of Bootstrap's CSS
@import "bootstrap/scss/bootstrap";
</style>
