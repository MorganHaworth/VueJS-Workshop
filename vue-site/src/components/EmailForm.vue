<template>
    <div class="email-form">
        <form>
            <input type="email" id="email" />
            <input type="submit" />
        </form>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'EmailForm'
})
</script>
