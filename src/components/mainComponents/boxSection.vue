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
  <section id="squares">
        <div class="container">
          <div class="row">
            <div v-for="singleBox, index in store.boxes" :key="index" class="col-2">
              <div class="box-info text-center my-5">
                <img :src="singleBox.img">
                <div class="pt-3">{{ singleBox.text }}</div>
              </div>
            </div>
          </div>
        </div>
  </section>
</template>

<style lang="scss" scoped>
@use '/src/assets/scss/partials/variables.scss' as *;
.box-info{
  background-color:#F2F8FC;
  padding: 40px 0;
  cursor:pointer;
  img{
    transition: all 0.2s linear;
  }
  div{
    font-weight:bold;
    font-size: 1.2rem;
  }
  &:hover img{
    transform:translateY(-6px)
  }
}
</style>
