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
  <section id="pricing-plans" class="mt-5">
        <div class="container">
          <div class="row">
            <div class="col-12 text-center mb-5">
              <h3 class="fs-1 fw-bold">
                Pricing Plans
              </h3>
              <p class="fs-5 ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam, ipsum.</p>
            </div>
            <div class="col-12 mt-4">
              <table>
                <thead class="w-100">
                  <tr>
                    <th>
                      <h3 class="ms-3">Save up to 40% by paying weekly</h3>
                      
                    </th>
                    <th class="text-center py-3 bg-blue">
                      <div class="table-img-container">
                        <img src="/img/h5-custom-icon-7.png" alt="">
                      </div>
                      <h3>
                        Standard
                      </h3>
                      <span class="fs-5 py-3">$ 12</span>
                    </th>
                    <th class="text-center bg-blue th-border">
                      <div class="table-img-container">
                        <img src="/img/h5-custom-icon-8.png" alt="">
                      </div>
                      <h3>Professional</h3>
                      <span class="fs-5">$ 59</span>
                    </th>
                    <th class="text-center bg-blue">
                      <div class="table-img-container">
                        <img src="/img/h5-custom-icon-9.png" alt="">
                      </div>
                      <h3>Advanced</h3>
                      <span class="fs-5">$ 88</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <!-- row number of courses -->
                  <tr v-for="singleRow in store.tableRows">
                    <td class="text-secondary fw-bold fs-5">
                      {{ singleRow.tdOne }}
                    </td>
                    <!-- trasforma "included o not-included" in un'icona -->
                    <td v-if="singleRow.tdTwo == 'included'" class="text-center">
                      <i class="fa-solid text-primary fa-check fa-2x"></i>
                    </td>
                    <td v-else-if="singleRow.tdTwo == 'not-included'" class="text-center">
                      <i class="fa-solid fa-xmark fa-2x"></i>
                    </td>
                    <td v-else class="text-center fs-5">
                      {{ singleRow.tdTwo }}
                    </td>
                    <!-- idem ma per la terza riga -->
                    <td v-if="singleRow.tdThree == 'included'" class="text-center">
                      <i class="fa-solid text-primary fa-check fa-2x"></i>
                    </td>
                    <td v-else-if="singleRow.tdThree == 'not-included'" class="text-center">
                      <i class="fa-solid fa-xmark fa-2x"></i>
                    </td>
                    <td v-else class="text-center fs-5">
                      {{ singleRow.tdThree }}
                    </td>
                    <!-- idem ma per la quarta riga -->
                    <td v-if="singleRow.tdFour == 'included'" class="text-center">
                      <i class="fa-solid text-primary fa-check fa-2x"></i>
                    </td>
                    <td v-else-if="singleRow.tdFour == 'not-included'" class="text-center">
                      <i class="fa-solid fa-xmark fa-2x"></i>
                    </td>
                    <td v-else class="text-center fs-5">
                      {{ singleRow.tdFour }}
                    </td>
                  </tr>
                  <tr>
                    <td class="special-td">
                      
                    </td>
                    <td class="bg-blue text-center">
                      <button class="my-btn"> GET IT NOW</button>
                    </td>
                    <td class="text-center bg-blue">
                      <button class="my-btn special"> GET IT NOW</button>
                    </td>
                    <td class="bg-blue text-center">
                      <button class="my-btn"> GET IT NOW</button>
                    </td>
                  </tr> 

                </tbody>

              </table>
            </div>
          </div>
        </div>
  </section>
</template>

<style lang="scss" scoped>
@use '/src/assets/scss/partials/variables.scss' as *;
#pricing-plans{
  background-image:url(/img/page-background-img.png);
}
// .table-img-container{
//   height:150px;
// }
th{
  width:25%;
  background-color:white;
  border:1px solid lightgrey;
  border-top:4px solid #8fdef8;
}
.th-border{
  border-top:4px solid #0598c9;
}
td{
  padding: 20px;
  border:1px solid lightgrey;
  background-color:white;
}
.special-td{
  background-color:transparent;
  border:none;
}
.bg-blue{
  background-color:#F7FDFF;
}
.my-btn{
  color:rgb(133, 133, 133);
  padding:10px 20px;
  background-color:white;
  font-weight:bold;
  border:1px solid lightgrey;
  transition:all .2s linear;
  &:hover{
    background-color:#40C4FF;
    color:white;
  }
}
.my-btn.special{
  background-color:#40C4FF;
  color:white;
}
</style>
