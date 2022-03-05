<template>
    <div class="order-form">
        <p class="order-title">Order Summary</p>
        <p v-show="checkOutItems.length > 0" class="order-price">Total: {{ toUSD(orderTotal)}} </p>
        <ul class="order-list">
            <li v-for="(item, index) in checkOutItems" v-bind:key="item.id">
                <img class="item-image" :src="item.photo" />
                <div class="order-text">
                    <p>{{item.name}}</p>
                    <p>{{item.price}}</p>
                </div>
                <img src="https://www.iconpacks.net/icons/1/free-trash-icon-347-thumb.png"
                     @click="deleteItem(index)" class="trash"/>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue'
import MenuItem from '../interfaces/MenuItem'

export default defineComponent({
    props: {
        checkOutItems: Array as PropType<Array<MenuItem>>
    },
    setup(props, context) {
        const orderTotal = computed(() => {
            return props?.checkOutItems?.reduce((a,b) => a + b.price, 0).toFixed(2);
        })

        const toUSD = (price: number) => {
            return "$" + price;
            };

        const deleteItem = (index: number) => {
            console.log("Remove item ", index);
            context.emit('deleteItemIndex', index)
            // [...props.checkOutItems].splice(index, 1)
        }

        return { orderTotal, deleteItem, toUSD }
    }
})
</script>

<style scoped>
.order-form {
    padding-left: 10%;
}

.order-title {
    font-size: 1.5rem;
    margin: 20px 0px;
    text-align: right;
}

.order-price {
    text-align: right;
}

.order-list li {
    display: flex;
    justify-content: space-between;
    margin: 10px 0px;
}

.order-list {
    list-style-type: none;
    padding: 0;
    margin: 20px 0px 20px auto;
}

.order-list li .order-text {
    align-self: center;
}

.order-list li .order-text p {
    margin: 0px;
}


.order-list li .item-image {
    width: 25%;
    padding: 0px;
    align-self: center;
}

.order-list li .trash {
    width: 10%;
    align-self: center;
    padding: 10px;
    cursor: pointer;
}
</style>