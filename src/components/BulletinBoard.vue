<template>
  <div class="boardWindow">
    <div class="infoWindow">
      <BlocksBoard 
        v-if="visibleWindow" 
        @toggleViewSell="toggleViewSell"
        @toggleViewSale="toggleViewSale"></BlocksBoard>
      <SellingButton 
        v-if="visibleSell" 
        @toggleViewSell="toggleViewSell"></SellingButton>
      <ForSaleButton 
        v-if="visibleForSale" 
        @toggleViewSale="toggleViewSale"></ForSaleButton>
    </div>
  </div>
</template>

<style>
  @import './style/boardWindow.css';
</style>

<script>
  import BlocksBoard from '@/components/BlocksBoard.vue'
  import { searchScript } from './scripts/searchScript.js';
  import SellingButton from '@/components/SellingWindow.vue';
  import ForSaleButton from '@/components/ForSaleWindow.vue'

  export default {
  components: {
    BlocksBoard,
    SellingButton,
    ForSaleButton
  },
  data() {
    return {
      ...searchScript.data(),

      visibleWindow: true,
      visibleSell: false,
      visibleForSale: false,
    }
  },
  methods: {
    ...searchScript.methods, 

    // toggleView() {
    //   this.visibleWindow = !this.visibleWindow;
    //   this.visibleSell = !this.visibleSell;
    // },

    toggleViewSell(){
      this.visibleWindow = !this.visibleWindow;
      this.visibleSell = !this.visibleSell;
    },

    toggleViewSale(){
      this.visibleForSale = !this.visibleForSale;
      this.visibleWindow = !this.visibleWindow;
    }
},
}
</script>
