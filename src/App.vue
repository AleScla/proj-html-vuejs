<script>
import {store} from './store.js';
import AppHeader from './components/AppHeader.vue';
import boxSection from './components/boxSection.vue';

export default {
  data() {
    return { 
      store
    }
  },
  components: {
    AppHeader,
    boxSection
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
      <boxSection />
      <section class="home-tutoring">
        <div class="container">
          <div class="row w-100">
            <div class="col-4">
             <h3 class="fs-1 w-100 fw-bold ">
              The Trusted Name for In-Home Tutoring.
             </h3>
             <p class="fs-5 w-100">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui similique quae et iusto accusamus voluptatibus doloribus fugit aperiam, at temporibus. </p>
             <div class="learn-more w-100">
              LEARN MORE
              <i class="fa-solid fa-chevron-right"></i>
             </div>
            </div>
            <div class="col">
              <img src="/img/h5-img-1.jpg" alt="banner">
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<style lang="scss">
@use 'assets/scss/main' as *;
// Import all of Bootstrap's CSS
@import "bootstrap/scss/bootstrap";

.home-tutoring{
  .row{
    .col-4{
      padding-top:80px;
    }
    .col{
      height:100%;
      img{
        width:100%;
      }
    }
  }
}
.learn-more{
  padding:25px 0;
  font-size:1.1rem;
  font-weight:bold;
  color:#40C4FF;
  cursor:pointer;
  .fa-solid{
    opacity:0;
    transition: transform 0.2s ease-in-out, opacity 0.1s; 
  }
  &:hover .fa-solid{
    transform:translateX(5px);
    opacity:1;
  }
}


</style>
