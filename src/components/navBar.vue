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
    <nav class="navbar navbar-expand-lg mt-4">
          <div class="col-3 text-start">
            <a class="navbar-brand" href="#">
              <img id="logo" src="/img/logo-light.png" alt="iAcademy-logo">
            </a>
          </div>
         
          <div class="col-9">
            <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
              <ul class="navbar-nav">
                <li class="nav-item dropdown my-dropdown" v-for="(navItem, index) in store.navbar" :key="index">
                  <a 
                   class="nav-link " href="#">
                    <strong>{{ navItem.placeholder }}</strong>
                  </a>
                  <!-- sezione dropdowns on hover -->
                  <ul v-if="navItem.placeholder != 'COURSES' && navItem.placeholder != 'ELEMENTS'" 
                  class="dropdown-menu main-dropdown ">
                      <!-- Creato v-if/v-else per i sottomenù dei vari dropdowns -->
                      <li v-for="(dropdown, i) in navItem.dropdowns" :key="i">
                        <a 
                        v-if="dropdown != 'Blog' 
                        && dropdown != 'Shop' 
                        && dropdown != 'Forums'
                        " class="dropdown-item text-gray" href="#">
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
                  <!-- dropdown menu di courses -->
                  <div v-else-if="navItem.placeholder == 'COURSES'" class="dropdown-menu main-dropdown-courses p-4" id="courses" >
                    <ul class="my-ul pe-5 ">
                      <li class="px-3 pb-2"><strong>FEATURES</strong></li>
                      <li v-for="(dropdown, i) in navItem.dropdowns" :key="i">
                          <a class="dropdown-item title-color" href="#">
                            {{ dropdown }}
                          </a>
                      </li>
                    </ul>
                    <ul class="border-left my-ul ">
                      <li class="px-3 pb-2"><strong>BUSINESS</strong></li>
                      <li class="px-3 pb-2">
                        <img  src="/img/course-4-f-img.jpg" >
                      </li>
                      <li class="d-flex justify-content-end me-2">
                        <button type="button" class="my-btn">40 €</button>
                      </li>
                    </ul>
                    <ul class="my-ul">
                      <li class="px-3 pb-2"><strong>LANGUAGES</strong></li>
                      <li class="px-3 pb-2">
                        <img  src="/img/course-1-f-img.jpg" >
                      </li>
                      <li class="d-flex justify-content-end me-2">
                        <button type="button" class="my-btn">20 €</button>
                      </li>
                    </ul>
                    <ul class="my-ul">
                      <li class="px-3 pb-2"><strong>PROGRAMMING</strong></li>
                      <li class="px-3 pb-2">
                        <img  src="/img/course-2-f-img.jpg" >
                      </li>
                      <li class="d-flex justify-content-end me-2">
                        <button type="button" class="my-btn yellow">FREE</button>
                      </li>
                    </ul>
                  </div>
                  <!-- dropdown di Elements -->
                  <div v-else-if="navItem.placeholder == 'ELEMENTS'" class="dropdown-menu main-dropdown-courses p-4" id="elements" >
                    <ul v-for="singleItem, i in navItem.dropdowns" class="my-ul" :class="i != 0 ? 'border-left' : ''">
                      <li class="px-3 py-2 title-color">
                        <strong>{{ singleItem.title }}</strong>
                      </li>
                      <li v-for="link in singleItem.links">
                          <a href="#" class="dropdown-item">
                            {{ link }}
                          </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <!-- icone utili -->
                <li class="nav-item ">
                  <a class="d-flex align-items-center text-decoration-none" href="#">
                    <i class="fa-solid fa-magnifying-glass"></i>
                  </a>
                </li>
                <li class="nav-item dropdown my-dropdown">
                  <a class="d-flex align-items-center text-decoration-none" href="#"><i class="fa-solid fa-cart-shopping"></i></a>
                  <ul class="dropdown-menu main-dropdown">
                    <li class="dropdown-item">
                      No product in the cart.
                    </li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a class="d-flex align-items-center text-decoration-none" href="#">
                    <i class="fa-solid fa-bars"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
    </nav>
</template>


<style lang="scss" scoped>
@use '../assets/scss/partials/variables.scss' as *;

.navbar{
  position:absolute;
  top:0;
  left:0;
  z-index:100;
}
#logo{
    height:40px;
  }

.main-dropdown, .main-dropdown-courses{
  top:40px;
  border:none;
  border-top:7px solid #3BA8DA;
  border-radius:0px;
}

// gestione hover
.my-dropdown:hover .main-dropdown{
  display:block;
}
.my-dropdown:hover .main-dropdown-courses{
  display:flex;
  justify-content:center;
  background-color:none;
}
.special-link:hover .inner-link{
  display:block;
  left:100%;
  top:0;
}
li{
  a{
    margin-right:40px;
    height:100%;
    
    &:hover{
      color:#3BA8DA;
      background-color:transparent;
    }
  }
}
// dropdown di courses ed elements da rivedere
#courses{
  left:-800px;
  min-width:1000px;
}
#elements{
  left:-800px;
  min-width:1000px;
}
// ul personalizzata per courses
.my-ul{
  list-style:none;
  padding:0;
  strong{
    font-size:0.9rem;
    color:$mainNavColor;
  }
  a{
    color:#D2D0CE;
  }
  img{
    max-width:225px;
    height:100%;
    object-fit:contain;
  }
}
.border-left{
  border-left: 1px solid lightgrey;
}
.my-btn{
  background-color:#3BA8DA;
  color:white;
  font-size:0.7rem;
  border:none;
  border-radius:16px;
  text-align:right;
  
}
.title-color{
  color:gray;
}
.yellow{
  background-color:#FFD740;
}
a{
    color:gray;
}
.nav-item > a{
    color:white;
}


        
    

</style>