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
  <section id="more-info">
        <div class="container  my-5">
          <div class="row">
            <div class="col-4">
              <div @click="store.thumbsActive = index" v-for="thumb, index in store.thumbs" :key="index" class="thumb fs-5" :class="{ 'activeThumb': store.thumbsActive == index }">
                {{ thumb.thumbTitle }}
              </div>
            </div>
            <!-- da gestire con un v-for e mettere in d-none in base all'index -->
            <div class="col-8">
              <h3 class="px-2"> {{ store.thumbs[store.thumbsActive].thumbText[0].hdr }}</h3>
              <p class="fs-5 px-2">{{ store.thumbs[store.thumbsActive].thumbText[0].text }}</p>
              <ul class="fa-ul py-5">
                <li v-for="listItem in store.thumbs[store.thumbsActive].thumbText[0].list" class="py-2 "><span class="fa-li text-primary"><i class="fa-solid fa-check fa-xl"></i></span>
                  <p class="fs-5">{{listItem}}</p>
                </li>
              </ul>
              <div class="icon-container">
                <img :src="store.thumbs[store.thumbsActive].img" >
              </div>
            </div>
          </div>
        </div>
  </section>
</template>

<style lang="scss" scoped>
@use '/src/assets/scss/partials/variables.scss' as *;
#more-info{
  padding: 60px 0;
  .container{
    height:500px;
    .row{
      height:100%;
      .col-4{
        height:100%;
        .thumb{
          height: calc(100% / 6);
          width:100%;
          display:flex;
          flex-wrap:wrap;
          align-items:center;
          border:1px solid lightgrey;
          padding-left:20px;
          cursor:pointer;
          font-weight:bold;
          transition: all 0.2s ease-in-out;
          color:#666666;
          &:hover{
            border-left:8px solid #40C4FF;
            color:#40C4FF;
          }
        }
      }
      .col-8{
        position:relative;
        h3{
          font-size:2.7rem;
          font-weight:bold;
        }
        .icon-container{
          position:absolute;
          bottom:0;
          right:0;
        }
      }
    }
  }
}

.col-4 > .thumb.activeThumb{
  border-left:8px solid #40C4FF !important;
  color:#40C4FF !important;
} 
</style>
