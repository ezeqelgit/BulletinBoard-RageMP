<template>
  <div class="boardWindow">
    <div class="infoWindow">
      <SellingButton></SellingButton>
      <BlocksBoard></BlocksBoard>
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
    }
  },
  methods: {
    ...searchScript.methods,  
},
}
</script>
