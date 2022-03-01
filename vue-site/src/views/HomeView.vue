<template>
  <div class="home">
    <HeroBlock title="Restaurant Name" />
    <p>Here is information about the restaurant</p>
    <img alt="Vue logo" src="../assets/logo.png">
    <p>Here is <em>more</em> information about the restaurant.</p>    
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeroBlock from '@/components/HeroBlock.vue'; 

export default defineComponent({
  name: 'HomeView',
  components: {
    HeroBlock
  },
});
</script>
