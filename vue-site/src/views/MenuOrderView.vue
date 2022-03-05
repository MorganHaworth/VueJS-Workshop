<template>
  <div class="menu">
    <HeroBlock title="Menu" />
    <button @click="selectMenu('breakfastMenu')">Breakfast</button>
    <button @click="selectMenu('lunchMenu')">Lunch</button>
    <button @click="selectMenu('dinnerMenu')">Dinner</button>
    <p class="menu-name">{{ menu.default.name }}</p>
    <p>Click an item to add it to your order.</p>
    <div class="menu-order-widget">
      <ul class="menu-list">
        <li v-for="item in menu.default.menuItems" v-bind:key="item.id">
          <MenuItem :name="item.name" :ingredients="item.ingredients" 
                    :photo="item.photo" :price="item.price" @click="addItemToOrder(item)" />
        </li>
      </ul>
      <OrderForm v-if="order.length > 0" class="order-form" :checkOutItems="order" @deleteItemIndex="deleteItemIndex"/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import HeroBlock from '../components/HeroBlock.vue'
import MenuItem from '../components/MenuItem.vue'
import OrderForm from '../components/OrderForm.vue'
import MenuItemInterface from '../interfaces/MenuItem'

export default defineComponent({
  name: 'MenuOrderView',
  components: {
    HeroBlock,
    MenuItem,
    OrderForm
  },
  setup() {
    const menuChoice = ref('lunchMenu')
    const order = ref([] as MenuItemInterface[])

    const addItemToOrder = (item: MenuItemInterface) => {
      order.value.push(item);
      console.log(order.value);
    }

    const selectMenu = (choice: string) =>  {
      menuChoice.value = choice
    }

    function deleteItemIndex(index: number) {
      order.value.splice(index, 1);
    }

    const menu = computed(() => {
      return require("../seeds/menus/" + menuChoice.value);
    });

    return { menuChoice, menu, selectMenu, order, addItemToOrder, deleteItemIndex }
  }

})
</script>

<style scoped>
.menu-order-widget {
  display: flex;
  width: 80%;
  margin: auto;
  justify-content: space-between;
}

.order-form {
  width: 40%;
}

.menu-name {
  font-size: 2em;
  margin: 20px 0px;
}
.menu-list {
  list-style-type: none;
  padding: 0;
  margin: auto;
  width: 60%;
}
.menu-list li {
  width: 100%;
  margin: 20px auto;
  display: flex;
  box-sizing: border-box;
  text-align: left;
}
button {
  margin: 20px;
  font-size: 1.5em;
  padding: 8px 16px;
  border: none;
  border: var(--secondary) solid 3px;
  color: var(--secondary);
}

button:hover {
  cursor: pointer;
  border: var(--primary) solid 3px;
  box-sizing: border-box;
  color: var(--primary);
}
</style>