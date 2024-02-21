<template>
    <MainWindow></MainWindow>
</template>

<script>
import MainWindow from './components/MainWindow.vue'

export default {
  components: {
  MainWindow,
}
}
</script>

<style>
@font-face {
  font-family: "Gilroy";
  src: 
    url("./components/fonts/Gilroy-Regular.woff2") format("woff2"),
    url("./components/fonts/Gilroy-Regular.woff") format("woff");
}

@font-face {
  font-family: "Akrobat";
  src:
    url("./components/fonts/Akrobat-Regular.woff2") format("woff2"),
    url("./components/fonts/Akrobat-Regular.woff") format("woff");
} 

body{
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  margin: 0;
}
</style>
