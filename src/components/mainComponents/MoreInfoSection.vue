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
              <div v-for="thumb, index in store.thumbs" :key="index" class="thumb fs-5">
                {{ thumb.thumbTitle }}
              </div>
            </div>
            <!-- da gestire con un v-for e mettere in d-none in base all'index -->
            <div class="col-8">
              <h3> TITLE</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga reiciendis dolor ut! Autem ipsum dolorum culpa iste sapiente atque maxime.</p>
              <ul class="fa-ul">
                <li class="py-4"><span class="fa-li text-primary"><i class="fa-solid fa-check fa-xl"></i></span>
                  <p class="fs-5">List icons can</p>
                </li>
              </ul>
              <div class="icon-container">
                <img src="/img/h12-tabs-icon-1.png" >
              </div>
            </div>
          </div>
        </div>
  </section>
</template>

<style lang="scss" scoped>
@use '/src/assets/scss/partials/variables.scss' as *;
#more-info{
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
</style>
