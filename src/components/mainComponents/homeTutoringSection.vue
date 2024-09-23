<script>
import {store} from '../../store.js';

export default {
  data() {
    return { 
     store,
    }
  },

}
</script>

<template>
  <section class="home-tutoring">
        <div class="container">
          <!-- home tutoring section -->
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
          <!-- children potential section -->
          <div class="row w-100 pt-5">
            <div class="col">
              <img class="px-3" src="/img/h5-img-2.jpg" alt="banner">
            </div>
            <div class="col-4">
             <h3 class="fs-1 w-100 fw-bold ">
              Empowering Children to Reach Their Potential.
             </h3>
             <p class="fs-5 w-100">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui similique quae et iusto accusamus voluptatibus doloribus fugit aperiam, at temporibus. </p>
             <div class="stories-event">
              <div class="stories">
                <div class="counter">
                  168
                </div>
                <div class="counter-description">
                  User Stories
                </div>
              </div>
              <div class="events">
                <div class="counter">
                  347
                </div>
                <div class="counter-description">
                  Events
                </div>
              </div>                
             </div>
            </div>
            
          </div>
        </div>
  </section>
</template>

<style lang="scss" scoped>
@use '/src/assets/scss/partials/variables.scss' as *;
.home-tutoring{
  .row{
    .col-4{
      padding-top:80px;
      .stories-event{
        color:#40C4FF;
        display:flex;
        width:100%;
        justify-content:space-between;
        .counter{
          font-size:3.5rem;
          font-weight:bold;
        }
        .counter-description{
          font-weight:bold;
          font-size:1.5rem;
        }
       
      }
    }
    .col{
      height:100%;
      img{
        width:100%;
      }
    }
  }
}
.stories, .events{
  display:inline-block;
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
