<template>
  <div class="boardWindow">
    <div class="infoWindow">
      <BlocksBoard 
        v-if="visibleWindow" 
        @toggleView="toggleView"></BlocksBoard>
      <SellingButton 
        v-if="visibleSell" 
        @toggleViewSell="toggleViewSell"></SellingButton>
    </div>
  </div>
</template>

<style>
  @import './style/boardWindow.css';
</style>

<script>
  import BlocksBoard from '@/components/BlocksBoard.vue'
  import { searchScript } from './scripts/searchScript.js';
  import SellingButton from '@/components/SellingWindow.vue'

  export default {
  components: {
    BlocksBoard,
    SellingButton
  },
  data() {
    return {
      ...searchScript.data(),

      visibleWindow: true,
      visibleSell: false,
    }
  },
  methods: {
    ...searchScript.methods, 

    toggleView() {
      this.visibleWindow = !this.visibleWindow;
      this.visibleSell = !this.visibleSell;
    },

    toggleViewSell(){
      this.visibleWindow = true;
      this.visibleSell = false;
    }
},
}
</script>
