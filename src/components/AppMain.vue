<script>
import {store} from '../store.js';
import boxSection from './mainComponents/boxSection.vue';
import homeTutoringSection from './mainComponents/homeTutoringSection.vue';
import testimonialCarousel from './mainComponents/testimonialCarousel.vue';
import MoreInfoSection from './mainComponents/MoreInfoSection.vue';
import onlineCourses from './mainComponents/onlineCoursesSection.vue';
import sectionBestTutors from './mainComponents/sectionBestTutors.vue';

export default {
  data() {
    return { 
      store
    }
  },
  components: {
    boxSection,
    homeTutoringSection,
    testimonialCarousel,
    MoreInfoSection,
    onlineCourses,
    sectionBestTutors
  },

}
</script>

<template>

    <main>
      <boxSection/>
      <homeTutoringSection/>
      <testimonialCarousel/>
      <MoreInfoSection/>
      <onlineCourses/>
      <sectionBestTutors/>
    </main>

</template>

<style lang="scss">
@use '/src/assets/scss/main.scss' as *;
// Import all of Bootstrap's CSS
@import "bootstrap/scss/bootstrap";
</style>
