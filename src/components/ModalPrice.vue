<template>
<div v-if="isVisiblePrice">
  <div class="modalOverlayPrice" @click="toggleClosePrice"></div>
    <div class="modalBlock">
      <div class="infoPrice">
        <div class="changePrice">
          <span>Цена:</span>
          <div class="inputPrice">
            <input type="number" class="inputChange"  v-model.number="changedValue">
          </div>
        </div>
        <div class="buttonChange" @click="changeItem">
          <button class="textChange">Изменить</button>
        </div>
      </div>
    </div>
</div>
</template>

<style>
  @import './style/modalPrice.css';
</style>


<script>
  import { searchScript } from './scripts/searchScript.js';

  export default {
  ...searchScript,
  props: {
    isVisiblePrice: Boolean,
    id: String,
  },
  // data() {
  //   return {
  //     ...searchScript.data(),
  //   }
  // },
  methods: {
    ...searchScript.methods, 
},
}
</script>