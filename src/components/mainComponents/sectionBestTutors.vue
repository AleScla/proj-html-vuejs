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
  <section id="best-tutors" class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center mb-5">
            <h3 class="fs-1 fw-bold">
              The Best Tutors In Town
            </h3>
            <p class="fs-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et blanditiis <br> praesentium cupiditate eaque quasi eius ducimus iure hic culpa totam!</p>
          </div>
          <div class="col-4" v-for="singleTutor in store.bestTutors">
            <div class="card text-center" >
              <div class="img-container">
                <img :src="singleTutor.img" class="card-img-top">
              </div>
              <div class="card-body">
                <h5 class="card-title fs-3">{{singleTutor.subject}}</h5>
                <h6 class="card-subtitle my-3 text-body-secondary">{{ singleTutor.role }}</h6>
                <p class="card-text">{{ singleTutor.text }}</p>
                <div class="links">
                  <a href="#" class="card-link"><i class="fa-brands fa-twitter"></i></a>
                  <a href="#" class="card-link"><i class="fa-brands fa-instagram"></i></a>
                  <a href="#" class="card-link"><i class="fa-brands fa-facebook"></i></a>
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
.card{
  border:none;
  h6, p{
    color:grey;
  }
  .card-subtitle, .card-title{
    font-weight:bold;
  }
}
.img-container{
  width:100%;
  img{
    width:150px;
    height:150px;
  }
}
.links{
  a{
    color:grey;
    &:hover{
      color:#40C4FF;
    }
  }
}
</style>
