<script>
import {store} from '../store.js';
import boxSection from './mainComponents/boxSection.vue';
import homeTutoringSection from './mainComponents/homeTutoringSection.vue';
import testimonialCarousel from './mainComponents/testimonialCarousel.vue';
import MoreInfoSection from './mainComponents/MoreInfoSection.vue';
import onlineCourses from './mainComponents/onlineCoursesSection.vue';
import sectionBestTutors from './mainComponents/sectionBestTutors.vue';
import pricingPlansSection from './mainComponents/pricingPlansSection.vue'
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
    sectionBestTutors,
    pricingPlansSection
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
      <pricingPlansSection/>
    </main>
</template>

<style lang="scss">
@use '/src/assets/scss/main.scss' as *;
// Import all of Bootstrap's CSS
@import "bootstrap/scss/bootstrap";
</style>
