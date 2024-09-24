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
  <section id="ftr-top" >
      <div class="container">
        <div class="row justify-content-between">
          <div class="col-auto" v-for="sponsor, index in store.sponsors">
              <img :src="sponsor">         
          </div>
        </div>
      </div>
  </section>
</template>

<style lang="scss" scoped>
@use '/src/assets/scss/partials/variables.scss' as *;
  .col-auto{
    img{
      max-width:200px
    }
  }
  #ftr-top{
    margin:80px 0;
  }
</style>
