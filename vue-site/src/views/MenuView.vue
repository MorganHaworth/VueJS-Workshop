<template>
  <div class="menu">
    <HeroBlock title="Menu" />
    <button @click="selectMenu('breakfastMenu')">Breakfast</button>
    <button @click="selectMenu('lunchMenu')">Lunch</button>
    <button @click="selectMenu('dinnerMenu')">Dinner</button>
    <MenuItem :menuChoice="menuChoice" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import HeroBlock from '@/components/HeroBlock.vue'
import MenuItem from '@/components/MenuItem.vue'

export default defineComponent({
  name: 'MenuView',
  components: {
    HeroBlock,
    MenuItem
  },
  setup() {
    const menuChoice = ref('lunchMenu')

    const selectMenu = (choice: string) =>  {
      menuChoice.value = choice
    }
    
    return { menuChoice, selectMenu }
  }

})
</script>

<style scoped>
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