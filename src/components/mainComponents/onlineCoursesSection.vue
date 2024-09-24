<script>
import {store} from '../../store.js';

import { Splide, SplideSlide, SplideTrack } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css/skyblue';
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
          <Splide  :has-track="false" :options="{ perPage:3,  arrows:false }" aria-label="onlineCourses">
            <SplideTrack class="pt-1">
              <SplideSlide v-for="singleCard, index in store.cards" :key="index" class="pb-5 px-2">
                <div class="card">
                  <div class="overlay">
                    <img :src="singleCard.img" class="card-img-top" >
                    <i class="fa-regular fa-heart"></i>
                  </div>
                  <div class="card-body">
                    <h5 class="card-title fs-3 fw-semibold">{{singleCard.title}}</h5>
                    <p class="card-text">{{singleCard.subject}}</p>
                    <p class="card-text bigger-text">{{ singleCard.text }}</p>
                    <a class="btn btn-sm" :class="singleCard.price != 'FREE' ? 'btn-primary' : 'btn-warning' ">
                      {{singleCard.price}}
                    </a>
                    <div class="icons">
                      <span class="me-2"><i class="fa-solid fa-user"></i>
                        0
                      </span>
                      <i class="fa-solid fa-tag"></i>
                      <span class="tag-text ms-1">
                        {{singleCard.tag}}
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
}
.bigger-text{
  font-size:1.1rem;
}
.card{
  transition: all .2s ease-in-out;
  cursor:pointer;
  .overlay{
    position:relative;
    transition:all .3s linear;
    .fa-regular{
      position:absolute;
      top:20px;
      right:20px;
      display:none;
    }
  }
}
.card:hover {
  transform:translateY(-5px);
      .card-img-top{
        filter:brightness(75%);
      }
      .fa-regular{
        display:block;
        color:white;
      }  
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
.presentation{
  background-color:red;
}
.tag-text{
  font-size:0.9rem;
  font-weight:bold;
}
</style>
