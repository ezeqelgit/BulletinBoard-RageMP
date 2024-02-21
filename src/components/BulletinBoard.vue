<template>
  <div class="boardWindow">
    <div class="infoWindow">
      <BlocksBoard ></BlocksBoard>
    </div>
  </div>
</template>

<style>
  @import './style/boardWindow.css';
</style>

<script>
  import BlocksBoard from '@/components/BlocksBoard.vue'
  import { searchScript } from './scripts/searchScript.js';

  export default {
  components: {
    BlocksBoard,
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
