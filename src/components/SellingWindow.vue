<template>
    <div class="sellWindow">
      <div class="inventoryBlock">
        <div class="titleSell">
          <span class="textTitleSell">Ваш инвентарь</span>
        </div>
        <div class="gridSell" ref="gridSell">
          <div class="itemsSell">
            <div v-for="item in items" :key="item.id" class="itemSell" @click="showModal($event, item)">
              <div class="modelToSell" v-if="activeItem === item" :style="modalStyle">
            <div class="toDoSell">
              <div class="information">
                <button class="butInfo">
                  <span>Информация</span>
                </button>
              </div>
              <div class="toSell">
                <button class="butToSell" @click="toggleinfoSelling">
                  <span>Продать</span>
                </button>
              </div>
            </div>
          </div> 
              <div class="itemContent">
                <div class="imgContent">
                  <img src="./assets/png/TacticalSMG.png">
                </div>
              </div>
              <div class="nameItem">
                <span>{{ nameItem }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="infoSelling" v-if="visibleInfoSell">
        <div class="titleSell">
          <span class="textTitleSell">Продажа</span>
        </div>
        <div class="topinfoSelling">
          <div class="leftTop">
            <div class="imgContentTop">
              <img src="./assets/png/TacticalSMG.png">
            </div>
          </div>
          <div class="rightTop">
            <div class="titleRightTop">
              <span class="textRightTop">Продажа</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <style>
    @import './style/sellWindow.css';
    @import './style/mainWindow.css';
  </style>
  
  <script>
    import { searchScript } from './scripts/searchScript';
  
    export default {
      ...searchScript,
    }
  </script>