<template>
  <div class="blocksBoard">
    <div class="search">
      <div class="headerSearch">
        <div class="titleHeader">
          <span>ФИЛЬТР<br>ПО ПОИСКУ</span>
        </div>
      </div>
      <!-- start left block in the window infoSearch -->
      <div class="infoSearch">
        <div class="itemSearch">
          <div class="variantsSearch">
            <div class="nameVariant">
              <span>НАЗВАНИЕ ПРЕДМЕТА</span>
            </div>
            <div class="inputSearch">
              <input type="text" class="inputClick" v-model="searchFields.itemName">
            </div>
          </div>
          <div class="variantsSearch">
            <div class="nameVariant">
              <span>КЛАДОВЩИК</span>
            </div>
            <div class="inputSearch">
              <input type="text" class="inputClick" v-model="searchFields.storekeeper">
            </div>
          </div>
          <div class="variantsSearch">
            <div class="nameVariant">
              <span>ВЛОЖЕННЫЕ ПРЕДМЕТЫ</span>
            </div>
            <div class="inputSearch">
              <input type="text" class="inputClick" v-model="searchFields.nestedItem">
            </div>
          </div>
          <div class="variantsSearch">
            <div class="nameVariant">
              <span>СОСТОЯНИЕ/ВРЕМЯ</span>
            </div>
            <div class="inputSearchDouble">
              <span class="textSearchDouble">ОТ</span>
              <input type="text" class="inputClickSearchDouble" v-model="searchFields.fromQuantity">
              <span class="textSearchDouble">ДО</span>
              <input type="text" class="inputClickSearchDouble" v-model="searchFields.upQuantity">
            </div>
          </div>
          <div class="variantsSearch">
            <div class="nameVariant">
              <span>ЧИСЛО РЕМОНТОВ</span>
            </div>
            <div class="inputSearchDouble">
              <span class="textSearchDouble">ОТ</span>
              <input type="text" class="inputClickSearchDouble" v-model="searchFields.secondFromQuantity">
              <span class="textSearchDouble">ДО</span>
              <input type="text" class="inputClickSearchDouble" v-model="searchFields.secondUpQuantity">
            </div>
          </div>
          <div class="variantsSearch">
            <div class="nameVariant">
              <span>ЧИСЛО ПРЕДМЕТОВ</span>
            </div>
            <div class="inputSearchDouble">
              <span class="textSearchDouble">ОТ</span>
              <input type="text" class="inputClickSearchDouble" v-model="searchFields.thirdFromQuantity">
              <span class="textSearchDouble">ДО</span>
              <input type="text" class="inputClickSearchDouble" v-model="searchFields.thirdUpQuantity">
            </div>
          </div>
          <!-- setup button -->
          <div class="buttonResetBlock">
            <button type="reset" class="buttonReset" @click="resetSearchFields">
              <span class="buttonResetText">СБРОСИТЬ</span>
            </button>
          </div>
        </div>
        <div class="category">
          <div class="headerCategory">
            <span>Категории предметов</span>
          </div>

  <div class="listCategories">
    <div class="blockCategory" v-for="(category, index) in categories" :key="index">
      <div class="lineCategory">
        <div class="checkMark" @click="toggleCheckMark(category)">
        <div class="clickMark" v-show="category.checked"></div>
      </div>
        <span>{{ category.name }}</span>
      <div class="watchList" @click="toggleSubcategories(category)">
    <div class="clickList" :style="getClipPath(category.isOpen)" v-if="category.subcategories && category.subcategories.length"></div>
  </div>


    </div>
    <div v-if="category.isOpen">
      <div class="lineSubcategory" v-for="(subcategory, subIndex) in category.subcategories" :key="`subcategory-${subIndex}`">
        <div class="checkMark" @click.stop="toggleSubcategoryCheckMark(subcategory, category)">
          <div class="clickMark" v-show="subcategory.checked"></div>
        </div>
        <span>{{ subcategory.name }}</span>
      </div>
    </div>
  </div>
</div>


        </div>
      </div>
    </div>
    <!-- start right block in the window board -->
    <div class="board">
      <div class="headerBoard">
        <div class="titleBoard">
          <span>ДОСКА<br>ОБЪЯВЛЕНИЙ</span>
        </div>
        <!-- <div class="textTitle">
        <div class="warror">
          <img src="./assets/svg/warror.svg">
        </div>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo co</span>
        </div> -->
        <div class="buttonsWrapper">
          <div class="selling" @click="notifyParentForSale">
            <button class="sellingButton">
              <span class="textSell">МОИ ОБЪЯВЛЕНИЯ</span>
            </button>
          </div>
          <div class="selling" @click="notifyParent">
            <button class="sellingButton">
              <span class="textSell">Продать предметы</span>
            </button>
          </div>
        </div>
      </div>
      <div class="infoBoard">
        <div class="namesSlot">
          <div class="name">
            <span>Наименование</span>
          </div>
          <div class="price">
            <span>Cтоимость</span>
          </div>
          <div class="remainingTime">
            <span>Оставшееся время</span>
          </div>
          <div class="specifications">
            <span>Характеристики</span>
          </div>
        </div>
        <div class="slot">
        <div v-for="(component, index) in filteredComponents" :key="index">
          <div class="actualSlot" @click="toggleModal(getImagePath(component[1]), component[0])">
            <div class="lineSlot">
            <div class="nameZone">
              <div class="picItem">
                <img :src="getImagePath(component[1])">
              </div>
              <div class="infoItem">
                <span>{{ component[1] }}</span>
                <div class="setItems">
                  <div v-for="(imageName, imgIndex) in component[8]" :key="imgIndex" class="setItem">
                    <img :src="require(`./assets/png/${imageName}.png`)">
                  </div>
                </div>
              </div>
            </div>
            <div class="countZone">
              <span>{{ component[2] }}</span>
            </div>
            <div class="remainingTimeZone">
              <div class="infoRemainingTimeZone">
                <div class="userName">
                  <img src="./assets/svg/userName.svg">
                  <span>{{ component[3] }}</span>
                </div>
                <div class="timing">
                  <img src="./assets/svg/timing.svg">
                  <span v-if="!slotTimers[component[0]].expired">
                    {{ formatTime(slotTimers[component[0]].time) }}
                  </span>
                  <span v-else>время истекло</span>
                </div>
                <div class="location">
                  <img src="./assets/svg/location.svg">
                  <span>{{ component[5] }}</span>
                </div>
              </div>
            </div>
            <div class="specificationsZone">
              <div v-for="(percentage, index) in component[7]" :key="index" class="conditionItem">
                <img :src="require(`./assets/svg/${component[6][index]}.svg`)">
                <span>{{ percentage }}%</span>
              </div>
            </div>
          </div>
        </div>
        </div>
        </div>
      </div>
      <ModalWindow :isVisible="isModalVisible" :image="selectedImage" :id="selectedId" @close="handleModalClose"></ModalWindow>
  </div>
</div>
</template>

<style>
  @import './style/blocksBoard.css';
  @import './style/search.css';
  @import './style/board.css';
</style>

<script>
  import { searchScript } from './scripts/searchScript.js';
  import ModalWindow from '@/components/ModalWindow.vue';
  // import SellingButton from '@/components/SellingWindow.vue'

  export default {
    ...searchScript,
    components: {
      ...searchScript.components, 
      ModalWindow,
      // SellingButton
    },

    created() {
      const timers = this.initializeTimers();
      this.slotTimers = timers;
      this.startTimers();
  },

  beforeUnmount() {
      this.stopInterval();
    },

    data() {
      return {
        ...searchScript.data(),
      };
    },
    methods: {
      ...searchScript.methods,

    notifyParent() {
      this.$emit('toggleViewSell'); 
    },

    notifyParentForSale() {
      this.$emit('toggleViewSale'); 
    }
    },
  };
</script>


