<template>
    <div class="hero">
        <h1>{{title}}</h1>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'HeroBlock',
    props: {
        title: String
    }
})
</script>

<style scoped>
.hero {
    padding: 60px 0px;
    background: linear-gradient(45deg, var(--primary), var(--secondary));   
}

.hero h1 {
    margin: 0;
    font-size: 4em;
    color: var(--dark);
}
</style>