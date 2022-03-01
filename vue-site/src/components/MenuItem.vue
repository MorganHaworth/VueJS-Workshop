<template>
    <div class="menu">
        <p class="menu-name">{{menu.default.name}}</p>
        <ul class="menu-list">
            <li v-for="item in menu.default.menuItems" v-bind:key="item.id">
                <div class="item-text">
                    <p class="item-name">{{item.name}}</p>
                    <p class="item-ingredients">{{item.ingredients}}</p>
                    <p class="item-price">{{toUSD(item.price)}}</p>
                </div>
                <img class="item-image" src="@/assets/logo.png">
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import breakfastMenu from '../seeds/menus/breakfastMenu';
import lunchMenu from '../seeds/menus/lunchMenu';
import dinnerMenu from '../seeds/menus/dinnerMenu';

export default defineComponent({
    name: 'MenuItem',
    props: {
        menuChoice: String
    }, 
    setup(props) {

        const menu = computed(() => {
            return require('@/seeds/menus/' + props.menuChoice)
        })

        const toUSD = ((price) => {
            return '$' + price
        })
        console.log(menu)
        console.log(menu.value)
        console.log(menu.value.name)
        return { menu, toUSD }
    }
})
</script>

<style scoped>
.menu-name {
    font-size: 2em;
}

.menu-list {
    list-style-type: none;
    padding: 0;
    margin-bottom: 30px;
}

.menu-list li {
    width: 40%;
    margin: 20px auto;
    display: flex;
    box-sizing: border-box;
    text-align: left;
}

.item-image {
    width: 30%;
    padding: 0;
    align-self: center;
}

.item-text {
    width: 70%;
    display: flex;
    flex-direction: column;
}

.item-name {
    font-size: 1.5rem;
}
.item-ingredients, .item-price {
    margin: .5em 0;
}
</style>