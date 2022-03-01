<template>
    <div class="footer">
        <p>Copyright © 2022. All rights reserved. Restaruant.</p>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'FooterItem'
})
</script>

<style scoped>
.footer {
    background-color: var(--dark);
    padding: 30px;
    margin-top: 30px;
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