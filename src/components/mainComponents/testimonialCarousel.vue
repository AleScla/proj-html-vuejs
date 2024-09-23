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
  <section id="testimonials-carousel" class="py-5">
    <div class="container">
          <div class="slider-wrapper" >
              <template v-for="slide, slideIndex in store.testimCarousel">
                  <div class="carouselItem" :class="slideIndex != store.activeTestimonial ? 'd-none' : ''">
                      <div class="img-container text-center">
                        <img class="profile-pic" :src="slide.img"/>
                      </div>
                      <div class="carousel-text text-center py-4">
                        <p>{{slide.phrase}}</p>
                        <h3 class="fw-bold">{{slide.subject}}</h3>
                        <div class="role fs-5 fw-bold">{{ slide.role }}</div>
                      </div>
                  </div>
              </template>
              <div class="navigator d-flex justify-content-center">
                  <div class="activebtn" @click="store.activeTestimonial = 0" :class="store.activeTestimonial == 0 ? 'activated' : ''">
                  
                  </div>
                  <div class="activebtn"  @click="store.activeTestimonial = 1" :class="store.activeTestimonial == 1 ? 'activated' : ''">
                   
                  </div>
                  <div class="activebtn"  @click="store.activeTestimonial = 2" :class="store.activeTestimonial == 2 ? 'activated' : ''">
                    
                  </div>
              </div>
          </div>
      </div> 
  </section>
</template>

<style lang="scss" scoped>
@use '/src/assets/scss/partials/variables.scss' as *;
 #testimonial-carousel{
  height:20vh;
  width:100%;
  .slider-wrapper{
   width:100%;
   height:100%;
   position:relative;
   .carouselItem{
    height:100%;
    position:relative;
    width:100%;
      .carousel-text {
        position:absolute;
        color:white;
        top:50%;
        left:50%;
        transform:translate(-50%, -50%);
        text-align:center;
          h1{
            font-size:5rem;
          }
          p{
            font-size:1.7rem;
          }
      }
   }
  }
  
}
.activebtn{
  width:15px;
  height:15px;
  background-color:grey;
  margin:10px;
  border-radius:50%;
  cursor:pointer;
}
.activated{
  background-color:lightgrey;
}

</style>
