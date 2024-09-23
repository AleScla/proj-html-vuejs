<script>
import {store} from '../store.js';
import navBar from './headerComponents/navBar.vue'
import jumbotron from './headerComponents/jumbotron.vue';
export default {
  data() {
    return { 
     store,
    }
  },
    components:{
      navBar,
      jumbotron
    }
}
</script>

<template>
  <header>
    <div class="container">
      <div class="row" id="navbarRow">
        <navBar/>
      </div>
    </div>
    <jumbotron/>
    
  </header>

</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

header {
  position:relative;
}
#navbarRow{
  position:relative;
}


</style>
