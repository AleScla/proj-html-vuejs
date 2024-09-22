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
  <header>
    <div class="container">
      <div class="row">
        <nav class="navbar navbar-expand-lg">
          <div class="col-3 text-start">
            <a class="navbar-brand" href="#">Navbar</a>
          </div>
         
          <div class="col-9">
            <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
              <ul class="navbar-nav">
                <li class="nav-item dropdown my-dropdown" v-for="(navItem, index) in store.navbar" :key="index">
                  <a 
                   class="nav-link" href="#">
                    <strong>{{ navItem.placeholder }}</strong>
                  </a>
                  <!-- sezione dropdowns on hover -->
                  <ul class="dropdown-menu main-dropdown">
                      <!-- Creato v-if/v-else per i sottomenù dei vari dropdowns -->
                      <li v-for="(dropdown, i) in navItem.dropdowns" :key="i">
                        <a 
                        v-if="dropdown != 'Blog' 
                        && dropdown != 'Shop' 
                        && dropdown != 'Forums'
                        " class="dropdown-item" href="#">
                          {{ dropdown }}
                        </a>
                        <!-- dropdowns annidati di "pages" -->
                        <a v-else href="#" class="special-link dropdown-item dropend d-flex justify-content-between align-items-center">
                          <span>
                            {{ dropdown }}
                          </span> 
                          <i class="fa-solid fa-angle-right text-end"></i>
                          <ul class="dropdown-menu inner-link p-1" >
                            <!-- questi tre template cambiano i singoli dropdown-item prendendo i dati dinamicamente da un'array in store -->
                            <template v-if="dropdown == 'Blog'">
                              <li v-for="(innerDropdown) in navItem.blog">
                                <a href="#" class="dropdown-item">
                                    {{ innerDropdown }} 
                                    
                                </a>
                              </li>
                            </template>
                            <template v-else-if="dropdown =='Shop'">
                              <li v-for="(innerDropdown) in navItem.shop">
                                <a href="#" class="dropdown-item">
                                    {{ innerDropdown }}
                                </a>
                              </li>
                            </template>
                            <template v-else-if="dropdown =='Forums'">
                              <li v-for="(innerDropdown) in navItem.forums">
                                <a href="#" class="dropdown-item">
                                    {{ innerDropdown }}
                                </a>
                              </li>
                            </template>
                          </ul>
                        </a>
                        
                      </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

header {
  // background-color: $mainBgColor;
  text-align: center;
  padding: 20px 0;
}
.my-dropdown:hover .main-dropdown{
  display:block;
}


.inner-dropdown{
  display:none;
}

.special-link:hover .inner-link{
  display:block;
  left:100%;
  top:0;
}


// h1 {
//   // color: $mainColor;
// }
</style>
