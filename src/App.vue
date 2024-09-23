<script>
import {store} from './store.js';
import AppHeader from './components/AppHeader.vue';

export default {
  data() {
    return { 
      store
    }
  },
  components: {
    AppHeader
  },
  methods: {

  }
}
</script>

<template>
  <div>
    <!-- 3) Utilizzo del componente -->
    <AppHeader />
    <main>
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
    </main>
  </div>
</template>

<style lang="scss">
@use 'assets/scss/main' as *;
// Import all of Bootstrap's CSS
@import "bootstrap/scss/bootstrap";

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
