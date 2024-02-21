// пример заполнения одного из компонентов

// заполняется по индексу элемента в массиве

// components: [
//   ['0', 'Tactica lSMG', '$ 987.587.666', 'ezeQel', '03:00:00', '[Кухня Гурмана] Кладовщик', ['conditionItem', 'conditionItem', 'conditionItem', 'conditionItem'], [85, 100, 74, 31], [], 'Вооружение', 'Пистолеты'],
//   ['1', 'Navy Revolver', '$ 187.527.636', 'Stas', '03:25:00', '[Кухня Гурмана] Кладовщик', [], [], ['itemForMainItem'], 'Одежда', 'Верхняя'],
// ],

import { executeClient } from './rage.js';
import './events.js';

export const searchScript = {
  props: {
    isModalVisible: Boolean,
  },
  data() {
    return {
      // isModalVisible: false,
      // slotTimers: this.initializeTimers(),
      selectedId: '',
      nameItem: 'Gun',
      slotTimers: [],
      selectedImage: '',
      visibleInfoSell: false, 
      visibleWindow: false,
      visibleModal: true,
      isVisibleContent: true,
      visible: {
        isClickMarkVisible: false
      },
      items: [
        { id: 1,},
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
        { id: 6 },
        { id: 7 },
        { id: 8 },
        { id: 9 },
        { id: 10 },
        { id: 11 },
        { id: 12 },
        { id: 13 },
        { id: 14 },
        { id: 15 },
        { id: 16 },
        { id: 17 },
        { id: 18 },
        { id: 19 },
        { id: 20 },
        { id: 21 },
        { id: 22 },
        { id: 23 },
        { id: 24 },
        { id: 19 },
        { id: 20 },
        { id: 21 },
        { id: 22 },
        { id: 23 },
        { id: 24 },
        { id: 19 },
        { id: 20 },
        { id: 21 },
        { id: 22 },
        { id: 23 },
        { id: 24 },
        { id: 19 },
        { id: 20 },
        { id: 21 },
        { id: 22 },
        { id: 23 },
        { id: 24 },
        { id: 19 },
        { id: 20 },
        { id: 21 },
        { id: 22 },
        { id: 23 },
        { id: 24 },
      ],

      activeItem: null,
      modalStyle: {},
      
      searchFields: {
        itemName: '',
        storekeeper: '',
        nestedItem: '',
        fromQuantity: '',
        upQuantity: '',
        secondFromQuantity: '',
        secondUpQuantity: '', 
        thirdFromQuantity: '',
        thirdUpQuantity: '',
      },
      components: [
        ['0', 'Tactical SMG', '$ 987.587.666', 'ezeQel', '03:00:00', '[Кухня Гурмана] Кладовщик', ['conditionItem', 'conditionItem', 'conditionItem', 'conditionItem'], [85, 100, 74, 31], [], 'Вооружение', 'Пистолет'],
        ['1', 'Navy Revolver', '$ 187.527.636', 'Stas', '03:25:00', '[Кухня Гурмана] Кладовщик', [], [], ['itemForMainItem'], 'Одежда', 'Шапки'],
      ],
      
      categories: [
        { name: 'Вооружение', isOpen: false, checked: false, 
        subcategories: 
        [{ name: 'Пистолет', checked: false }, 
        { name: 'Пистолет-пулемет', checked: false }, 
        { name: 'Гладкоствольное', checked: false },
        { name: 'Винтовка', checked: false },
        { name: 'Пулемет', checked: false },
        { name: 'Гранатомёт', checked: false },
        { name: 'Детали', checked: false },
        { name: 'Патроны', checked: false },
        { name: 'Компоненты патрона', checked: false },
        { name: 'Гранаты', checked: false },
        { name: 'Компоненты гранат', checked: false }] },

        { name: 'Одежда', isOpen: false, checked: false, subcategories: 
        [{ name: 'Шапки', checked: false }, 
        { name: 'Бронешлемы', checked: false }, 
        { name: 'Очки', checked: false },
        { name: 'Маски', checked: false },
        { name: 'Противогазы', checked: false },
        { name: 'Куртки', checked: false },
        { name: 'Бронежилеты', checked: false },
        { name: 'Жилеты', checked: false },
        { name: 'Штаны', checked: false },
        { name: 'Перчатки', checked: false },
        { name: 'Ботинки', checked: false },
        { name: 'Рюкзаки', checked: false },
        { name: 'Костюмы', checked: false },
        { name: 'Защитные костюмы', checked: false },
        { name: 'Ткани', checked: false },
        { name: 'Чехлы', checked: false }] },

        { name: 'Бижутерия', isOpen: false, checked: false },

        { name: 'Приборы', isOpen: false, checked: false, subcategories:
        [{ name: 'Источники питания', checked: false},
        { name: 'Фонари', checked: false },
        { name: 'Оптика и прицелы', checked: false },
        { name: 'Радиационный контроль', checked: false },
        { name: 'Радиостанции', checked: false },
        { name: 'Наушники', checked: false },
        { name: 'Контейнер артефактов', checked: false },
        { name: 'Магнитный захват', checked: false },
        { name: 'Детали электроники', checked: false }]
        },

        { name: 'Пища', isOpen: false, checked: false },

        { name: 'Медицина', isOpen: false, checked: false },

        { name: 'Посуда', isOpen: false, checked: false, subcategories: [
        { name: 'Столовая посуда', checked: false },
        { name: 'Хим. оборудование', checked: false }
        ] 
        },

        { name: 'Инструменты', isOpen: false, checked: false },

        { name: 'Артефакты', isOpen: false, checked: false },

        { name: 'Природные', isOpen: false, checked: false, subcategories:
        [{ name: 'Животные', checked: false },
        { name: 'Цветы и растения', checked: false },
        { name: 'Грибы', checked: false }]},

        { name: 'Технические', isOpen: false, checked: false },

        { name: 'Хим. вещества', isOpen: false, checked: false },

        { name: 'Упаковки и свертки', isOpen: false, checked: false },

        { name: 'Документы', isOpen: false, checked: false, subcategories: [
        { name: 'Схемы и чертежи', checked: false }
        ] },

        { name: 'Разное', isOpen: false, checked: false },
      ],
    };
  },
  computed: {
    filteredComponents() {
      const checked = this.getCheckedCategories();
      const fromHour = parseInt(this.searchFields.fromQuantity) || 0;
      const upHour = parseInt(this.searchFields.upQuantity) || 24;

    return this.components.filter(component => {
      const itemNameMatch = component[1].toLowerCase().startsWith(this.searchFields.itemName.toLowerCase());
      const storekeeperMatch = component[3].toLowerCase().startsWith(this.searchFields.storekeeper.toLowerCase());
      const categoryOrSubcategoryMatch = checked.length === 0 || checked.includes(component[9]) || checked.includes(component[10]);
      
      const timer = this.slotTimers.find(t => t.id === component[0]);
      if (!timer) return false;

      const remainingHours = Math.floor(timer.time / 3600);
      const timeMatch = remainingHours >= fromHour && remainingHours < upHour;

        return itemNameMatch && storekeeperMatch && categoryOrSubcategoryMatch && timeMatch;
      });
    }
  },

  methods: {
    getHoursFromTime(timeString) {
      const timeParts = timeString.split(':');
      return parseInt(timeParts[0]);
    },

    showModal(event, item) {
      if (this.activeItem === item) {
        this.hideModal();
      } else {
        this.activeItem = item;
        const elementRect = event.currentTarget.getBoundingClientRect();
        this.modalStyle = {
          display: 'block',
          top: `${elementRect.top + window.scrollY}px`,
          left: `${elementRect.left + window.scrollX}px`
        };

        event.stopPropagation();

      }
    },
    hideModal() {
      this.activeItem = null;
    },

    toggleinfoSelling(){
      this.visibleInfoSell = true;
    },

    handleClickOutside(event) {
      if (this.$refs.gridSell && !this.$refs.gridSell.contains(event.target)) {
        this.hideModal();
      }
    },

    initializeTimers() {
    const timers = this.components.map(component => {
      const timeParts = component[4].split(':');
      const seconds = parseInt(timeParts[0]) * 3600 + parseInt(timeParts[1]) * 60 + parseInt(timeParts[2]);
      return {
        id: component[0],
        time: seconds,
        expired: false,
      };
    });
    return timers;
  },
    startTimers() {
      this.slotTimers.forEach((timer, index) => {
        const interval = setInterval(() => {
          if (timer.time > 0) {
            this.slotTimers[index].time--;
          } else {
            clearInterval(interval);
            this.slotTimers[index].expired = true;
          }
        }, 1000);
      });
    }, 
      formatTime(seconds) {
      const hours = Math.floor(seconds / 3600);
      const minutes = Math.floor((seconds % 3600) / 60);
      const secs = seconds % 60;
      return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    },
    getCheckedCategories() {
      const checked = [];
      this.categories.forEach(category => {
        if (category.checked) {
          checked.push(category.name);
        }
        if (category.subcategories) {
          category.subcategories.forEach(subcategory => {
            if (subcategory.checked) {
              checked.push(subcategory.name);
            }
          });
        }
      });
      return checked;
    },
    closeMainWindow() {
      if(!this.isModalVisible){
        this.isVisibleContent = false;
      }   
    },
    toggleModal(imagePath, id) {
      this.selectedImage = imagePath;
      this.selectedId = id;
      this.isModalVisible = true;
    },
    closeModal() {
      this.$emit('close');
    },
    handleModalClose() {
      this.isModalVisible = false;
    },
    toggleClickMark() {
      this.visible.isClickMarkVisible = !this.visible.isClickMarkVisible;
    },
    resetSearchFields() {
      this.searchFields.itemName = '';
      this.searchFields.storekeeper = '';
      this.searchFields.nestedItem = '';
      this.searchFields.fromQuantity = '';
      this.searchFields.upQuantity = '';
      this.searchFields.secondFromQuantity = '';
      this.searchFields.secondUpQuantity = '';
      this.searchFields.thirdFromQuantity = '';
      this.searchFields.thirdUpQuantity = '';
    },
    toggleSubcategories(category) {
      category.isOpen = !category.isOpen;
    },
    toggleCheckMark(category) {
      category.checked = !category.checked;
      if (category.subcategories) {
        category.subcategories.forEach(subcategory => {
          subcategory.checked = category.checked;
        });
      }
    },
    toggleSubcategoryCheckMark(subcategory, parentCategory) {
      subcategory.checked = !subcategory.checked;
      parentCategory.checked = parentCategory.subcategories.every(sub => sub.checked);
    },
    getClipPath(isOpen) {
      if (isOpen) {
        return {
          'clip-path': 'polygon(7px 0px, 4px 4px, 4px 4px, 5px 4px, 7px 1px, 7px 15px, 8px 15px, 8px 15px, 8px 1px, 10px 4px, 11px 4px, 11px 4px, 11px 4px, 11px 4px, 11px 4px, 8px 0px, 8px 0px, 7px 0px, 7px 0px, 7px 0px)',
          'background': 'rgba(255, 255, 255, 1)'
        };      } else {
        return {
          'clip-path': 'polygon(8px 15px, 11px 11px, 11px 11px, 10px 11px, 8px 14px, 8px 0px, 7px 0px, 7px 0px, 7px 14px, 5px 11px, 4px 11px, 4px 11px, 4px 11px, 4px 11px, 4px 11px, 7px 15px, 7px 15px, 8px 15px, 8px 15px, 8px 15px)',
          'background': 'rgba(255, 255, 255, 0.35)'
        };      }
    },

  fetchDataFromBackend() {
    executeClient('requestBackendData');
  },

  handleKeydown(e) {
    console.log("Нажата клавиша:", e.key);
    if (e.key === "E" || e.key === "e") {
      this.openMainWindow();
    }
  },

  openMainWindow() {
    this.isVisibleContent = true;
  },

  updateComponents(newComponents) {
    this.components = newComponents;
    this.slotTimers = this.initializeTimers(newComponents);
    this.startTimers();
  },

  sendPurchaseConfirmation() {
    const purchaseData = { id: this.selectedId }; 
    executeClient('sendPurchaseConfirmation', JSON.stringify(purchaseData));
    this.closeModal();
  },

  getImagePath(imageName) {
    const sanitizedImageName = imageName.replace(/[^a-zA-Z0-9]/g, '');
    return require(`../assets/png/${sanitizedImageName}.png`);
  }
},

  mounted() {
    this.fetchDataFromBackend();

    window.events.addEvent('receiveBackendData', (data) => {
      try {
        const newComponents = JSON.parse(data);
        this.updateComponents(newComponents);
      } catch (error) {
        console.error('Ошибка при обработке данных:', error);
      }
    });

    window.addEventListener('keydown', (e) => this.handleKeydown(e));

    document.addEventListener('click', this.handleClickOutside);

  },

  beforeDestroy() {
    // Удаляем обработчик клика при уничтожении компонента
    document.removeEventListener('click', this.handleClickOutside);
  }
};

