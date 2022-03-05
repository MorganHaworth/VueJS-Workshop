<template>
    <div class="footer">
        <ul class="hours">
            <li>Monday: 10AM - 10PM</li>
            <li>Tuesday: 10AM - 10PM</li>
            <li>Wednesday: 10AM - 10PM</li>
            <li>Thursday: 10AM - 10PM</li>
            <li>Friday: 10AM - 10PM</li>
            <li>Saturday: 10AM - 10PM</li>
            <li>Sunday: Closed</li>
        </ul>
        <p>Copyright © 2022. All rights reserved. The Restaruant.</p>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'FooterItem'
})
</script>

<style scoped>
.hours {
    color: var(--light);
    list-style-type: none;
    margin: 30px 0px;
    padding: 0px;
}

.footer {
    background-color: var(--dark);
    padding: 30px;
    box-sizing: border-box;
    position: absolute;
    bottom: 0;
    width: 100%;
}

.footer p {
    margin: 0;
    color: var(--light);
}
</style>