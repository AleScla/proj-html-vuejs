<script>
import {store} from '../store.js';
import footerTop from './footerComponents/footerTop.vue';
import footerBottom from './footerComponents/footerBottom.vue';
export default {
  data() {
    return { 
      store
    }
  },
  components: {
    footerTop,
    footerBottom,
  },

}
</script>

<template>
    <footer>
      <footerTop/>
      <footerBottom/>
    </footer>
</template>

<style lang="scss">
@use '/src/assets/scss/main.scss' as *;
// Import all of Bootstrap's CSS
@import "bootstrap/scss/bootstrap";
</style>
