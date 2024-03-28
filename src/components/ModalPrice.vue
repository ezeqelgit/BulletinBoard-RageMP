<template>
<div v-if="isVisiblePrice">
  <div class="modalOverlay" @click="toggleClosePrice"></div>
  <!-- <div class="modalPrice"> -->
    <div class="modalBlock">
      <div class="infoPrice">
        <div class="changePrice">
          <span>Цена:</span>
          <div class="inputPrice">
            <input type="text" class="inputChange">
          </div>
        </div>
        <div class="buttonChange">
          <button class="textChange">Изменить</button>
        </div>
      </div>
    </div>
  <!-- </div> -->
</div>
</template>

<style>
  @import './style/modalPrice.css';
</style>


<script>
  import { searchScript } from './scripts/searchScript.js';

  export default {
  components: {

  },

  ...searchScript,

  props: {
    isVisiblePrice: Boolean,
  },

  data() {
    return {
      ...searchScript.data(),
    }
  },
  methods: {
    ...searchScript.methods, 

    // toggleView() {
    //   this.visibleWindow = !this.visibleWindow;
    //   this.visibleSell = !this.visibleSell;
    // },

},
}
</script>