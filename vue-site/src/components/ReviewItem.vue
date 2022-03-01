<template>
    <div class="review">
        <div class="header">
            <span class="name">{{name}}</span>
            <span class="stars">
                <img class="completeStar" v-for="i in numStars" :key="i"
                    src="https://img.icons8.com/emoji/344/star-emoji.png" />
                <img class="incompleteStar" v-for="i in (5-numStars)" :key="i"
                    src="https://img.icons8.com/windows/32/000000/star--v1.png" />
            </span>
        </div>
        <p>"{{reviewContent}}"</p>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'ReviewItem',
    props: {
        numStars: Number,
        name: String,
        reviewContent: String
    }
})
</script>

<style scoped>
.header {
    min-height: 20px;
}

.stars {float:right;}

.stars img {
    height: 30px;
    padding: 0px;
}

.review {
    width: 40%;
    margin: auto;
    padding: 30px;
    box-sizing: border-box;
    text-align: left;
}

.name {
    margin: 0;
    background: linear-gradient(45deg, var(--primary), var(--secondary));
    padding: 10px;  
    border-radius: 10px;
    font-weight: bold;
    
    display: inline-block;
    vertical-align: middle;
}
</style>