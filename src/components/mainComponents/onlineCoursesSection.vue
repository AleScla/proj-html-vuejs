<script>
import {store} from '../../store.js';
import '@splidejs/vue-splide/css';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/vue-splide';

export default {
  data() {
    return { 
     store,
    }
  },
  components:{
     Splide,
     SplideSlide,
     SplideTrack
  },
}
</script>

<template>
  <section id="online-courses">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center mb-5">
          <h3 class="fs-1 fw-bold">Popular Online Courses </h3>
          <p class="fs-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit aliquid cum autem perspiciatis aliquam! <br> Modi quaerat eligendi aspernatur autem nam?
          </p>
        </div>
        <div id="coursesCarousel" class="col-12 py-5">
          <Splide :has-track="false" :options="{ perPage:3, pagination:true, arrows:false }" aria-label="onlineCourses">
            <SplideTrack>
              <SplideSlide class="pb-5 px-2">
                <div class="card">
                  <img src="/img/course-1-f-img-350x282.jpg" class="card-img-top" >
                  <div class="card-body">
                    <h5 class="card-title fs-3 fw-semibold">Card title</h5>
                    <p class="card-text">smaller text</p>
                    <p class="card-text bigger-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-sm btn-primary">PRICE</a>
                    <div class="icons">
                      <span class="me-2"><i class="fa-solid fa-user"></i>
                        0
                      </span>
                      <span>
                        <i class="fa-solid fa-tag"></i>
                        tagtext
                      </span>
                    </div>
                  </div>
                </div>
              </SplideSlide>
            </SplideTrack>
          </Splide>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>

@use '/src/assets/scss/partials/variables.scss' as *;

#online-courses{
  background-image:url(/img/page-background-img.png);
  .coursesCarousel{
    min-height:500px;
    
  }
}
.bigger-text{
  font-size:1.1rem;
}
.card-body{
      position:relative;
      color:grey;
      h5{
        color:black;
      }
      .btn{
        position:absolute;
        top:20px;
        right:20px;
        border-radius:20px;
        padding: 5px 20px;
      }
    }

</style>
