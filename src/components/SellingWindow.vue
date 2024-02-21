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
              <div class="information" @click="toggleinfoItem">
                <button class="butInfo">
                  <span>Информация</span>
                </button>
              </div>
              <div class="toSell" @click="toggleinfoSelling">
                <button class="butToSell">
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
            <div class="wrapperRightTop">
              <div class="titleRightTop">
                <span class="textRightTop">Gun</span>
              </div>
              <div class="subTitleRightTop">
                <span class="subTextRightTop">Оружие</span>
              </div>
            </div>
            <div class="infoRightTop">
              <span class="infoTextRightTop">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
            </div>
          </div>
        </div>
      </div>
      <div class="infoSelling" v-if="visibleInfoItem">
        <div class="titleSell">
          <span class="textTitleSell">Информация</span>
        </div>
        <div class="topinfoSelling">
          <div class="leftTop">
            <div class="imgContentTop">
              <img src="./assets/png/TacticalSMG.png">
            </div>
          </div>
          <div class="rightTop">
            <div class="wrapperRightTop">
              <div class="titleRightTop">
                <span class="textRightTop">Gun</span>
              </div>
              <div class="subTitleRightTop">
                <span class="subTextRightTop">Оружие</span>
              </div>
            </div>
            <div class="infoRightTop">
              <span class="infoTextRightTop">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
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