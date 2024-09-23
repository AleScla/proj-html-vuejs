<script>
import {store} from '../store.js';
export default {
  data() {
    return { 
     store
    }
  }
}
</script>

<template>
    <section class="jumbotron w-100">
      
      <div class="slider-wrapper" >
        <template v-for="slide, slideIndex in store.carousel">
            <div class="carouselItem" :class="slideIndex != store.active ? 'd-none' : ''">
                <img :src="slide.img" :alt="slide.title" />
                <div class="carousel-text">
                    <h1>{{slide.title}}</h1>
                    <p>
                        {{slide.phrase}}
                    </p>
                    <button v-if="store.active == 2" class="play-btn"><i class="fa-solid fa-play fa-2x"></i></button>
                    <button v-else class="register-btn">REGISTER NOW</button>
                </div>
            </div>
        </template>
        <div class="navigator">
          <div class="prev" @click="store.active == 0 ? store.active = store.carousel.length - 1 : store.active--">
            <i class="fa-solid fa-angle-left fa-3x"></i>
          </div>
          <div class="next"  @click="store.active < store.carousel.length - 1 ? store.active++ : store.active = 0">
            <i class="fa-solid fa-angle-right fa-3x"></i>
          </div>
        </div>
      </div>  
    </section>
</template>


<style lang="scss" scoped>
@use '../assets/scss/partials/variables.scss' as *;
.jumbotron{
  width:100%;
  height:80vh;
  .slider-wrapper{
   width:100%;
   height:100%;
   position:relative;
   .carouselItem{
    height:100%;
    position:relative;
      img{
      width:100%;
      height:100%;
      object-fit:cover;
      }
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
          .play-btn{
          background-color:white;
          color:black;
          width:100px;
          height:100px;
          border-radius:50%;
          text-align:center;
          border:none;
          cursor:pointer;
          transition: all 0.2s ease-in;
            &:hover{
              transform:scale(1.1)
            }
          }
          .register-btn{
            background-color:#3BA8DA;
            color:white;
            font-size:1rem;
            font-weight:bold;
            padding:20px 40px;
            border:none;
            transition:all 0.2s ease-in-out;
              &:hover{
                background-color:#188bc0
              }
          }}
   }
   .navigator{
    position:absolute;
    top:50%;
    width:100%;
    display:flex;
    justify-content:space-between;
    padding:10px;
    color:white;
    .prev, .next{
      cursor:pointer;
      padding: 0 20px;
    }
   }
  }
}
</style>