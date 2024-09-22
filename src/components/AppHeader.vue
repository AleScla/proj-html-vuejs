<script>
import {store} from '../store.js';
import navBar from './navBar.vue'
export default {
  data() {
    return { 
     store,
     
    }
  },
    components:{
      navBar
    }
}
</script>

<template>
  <header>
    <div class="container">
      <div class="row">
        <navBar/>
      </div>
    </div>
    <section class="jumbotron">
      <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="../assets/img/h5-slide-3-background.jpg" class="d-block w-100" alt="IMG">
          </div>
          <div class="carousel-item">
            <img src="../assets/img/h5-slide-1-background.jpg" class="d-block w-100" alt="IMG">
          </div>
          <div class="carousel-item">
            <img src="../assets/img/h5-slide-2-background.jpg" class="d-block w-100" alt="IMG">
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  </header>
    
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

header {
  text-align: center;
  padding: 20px 0;
  position:relative;
}
.jumbotron{
  position:absolute;
  width:100%;
  top:0;
  left:0;
  z-index: -1
}

</style>
