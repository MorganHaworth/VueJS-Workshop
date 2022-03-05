<template>
  <div class="menu-item">
    <div class="item-text">
      <p class="item-name">{{ name }}</p>
      <p class="item-ingredients">{{ ingredients }}</p>
      <p class="item-price">{{ toUSD(price) }}</p>
    </div>
    <div class="image-container">
      <img class="item-image" :src="photo" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";

export default defineComponent({
  name: "MenuItem",
  props: {
    name: String,
    ingredients: String,
    price: Number,
    photo: String
  },
  setup(props) {

    const toUSD = (price: number) => {
      return "$" + price;
    };
    return { toUSD };
  },
});
</script>

<style scoped>
.menu-item {
  display: flex;
  width: 100%;
  cursor: pointer;
  border: 5px solid transparent;
  justify-content: space-between;
}

.menu-item:hover {
  border-top: 5px var(--primary) solid;
  border-bottom: 5px var(--secondary) solid;
}

.item-image {
  width: 100%;
  padding: 0;
  align-self: center;
}

.image-container {
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.item-text {
  display: flex;
  width: 60%;
  flex-direction: column;
}

.item-name {
  font-size: 1.5rem;
}
.item-ingredients,
.item-price {
  margin: 0.5em 0;
}
</style>
