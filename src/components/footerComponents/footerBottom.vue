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
  <section id="ftr-bottom">
      <div class="container">
        <div class="row">
            <!-- 1a colonna -->
            <div class="col-3 text-color">
              <div class="title-container mb-4">
                <a href="#">
                  <img :src="store.iAcademy[0]" alt="logo">
                </a>
              </div>
              <p class="mb-5 ">
                {{ store.iAcademy[1] }}
              </p>
              <div class="number mb-4 text-white">
                <i class="fa-solid fa-phone"></i> 
                <span class="smaller-text fw-bold">
                  {{ store.iAcademy[2] }}
                </span>
              </div>
              <div class="work-time text-white">
                <i class="fa-regular fa-clock"></i>
                <span class="smaller-text fw-bold">
                  {{ store.iAcademy[3] }}
                </span>
              </div>
            </div>
            <!-- 2a colonna -->
            <div class="col-3 text-color">
              <h3 class="fw-semibold py-2 mb-4 text-white">Popular Courses</h3>
              <div class="singleCourse mb-4" v-for="course in store.courses">
                <h5 class="my-hover">{{course.context}}</h5>
                <p>{{ course.teacher }}</p>
              </div>
            </div>
            <!-- 3a colonna -->
            <div class="col-3 text-color">
              <h3 class="fw-semibold py-2 mb-4 text-white">Support</h3>
              <ul class="p-0">
                <li class="my-hover pb-4" v-for="singleItem in store.support">
                  {{ singleItem }}
                </li>
              </ul>
            </div>
            <!-- 4a colonna -->
             <div class="col-3">
              <h3 class="fw-semibold py-2 mb-4 text-white">Flexible Learning</h3>
              <div class="map-container">
                <img src="/img/footer-img-1.png" alt="world-map">
              </div>
             </div>
        </div>
        <hr class="text-white">
        <div class="row">
          <div class="col-6 py-4 text-color">
            <i class="fa-regular fa-copyright pe-2"></i>
            2017 Qode Interactive, All Rights Reserved
          </div>
          <div class="col-6 py-4 text-color text-end smaller-text">
            <span class="me-3">CALL +44 300 303 0266</span>
            <span class="me-3">FOLLOW US</span>
            <a href="#" class="text-color me-3 my-hover">
              <i class="fa-brands fa-twitter"></i>
            </a>
            <a href="#" class="text-color me-3 my-hover">
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="#" class="text-color my-hover">
              <i class="fa-brands fa-facebook"></i>
            </a>
          </div>
        </div>
      </div>
  </section>
</template>

<style lang="scss" scoped>
@use '/src/assets/scss/partials/variables.scss' as *;
#ftr-bottom{
  padding-top:80px;
  background-color:#222222;
  
  a{
    img{
      max-width:180px;
      margin-bottom:20px;
      
    }
  }
}
.smaller-text{
  font-size:0.8rem;

  padding-left:20px;
  
}
.text-color{
  color:rgb(175, 175, 175);
}
.number, .work-time{
  cursor:pointer;
}
.number:hover > .fa-solid, .work-time:hover > .fa-regular {
  color:#40C4FF;
}
.singleCourse > *{
  cursor:pointer;
  transition: all .2s linear;
}
.singleCourse{
  p:hover{
    color:grey;
  }
}
.my-hover:hover{
    color:#40C4FF;
    cursor:pointer;
  }
ul{
  list-style:none;
  
}
img{
  max-width:100%;
}
</style>
