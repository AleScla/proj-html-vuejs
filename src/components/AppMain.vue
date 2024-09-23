<script>
import {store} from '../store.js';
import boxSection from './mainComponents/boxSection.vue';
import homeTutoringSection from './mainComponents/homeTutoringSection.vue';
import testimonialCarousel from './mainComponents/testimonialCarousel.vue';


export default {
  data() {
    return { 
      store
    }
  },
  components: {
    boxSection,
    homeTutoringSection,
    testimonialCarousel
  },

}
</script>

<template>

    <main>
      <boxSection/>
      <homeTutoringSection/>
      <testimonialCarousel/>
    </main>

</template>

<style lang="scss">
@use '/src/assets/scss/main.scss' as *;
// Import all of Bootstrap's CSS
@import "bootstrap/scss/bootstrap";
</style>
