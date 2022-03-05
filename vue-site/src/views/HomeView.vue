<template>
  <div class="home">
    <HeroBlock title="The Restaurant" />
    <p>Our family began our journey of serving the city of City 75 years ago. Through the generations, we have been the epicenter of delicious food varieties.</p>
    <img src="https://media.istockphoto.com/photos/table-top-view-of-spicy-food-picture-id1316145932?b=1&k=20&m=1316145932&s=170667a&w=0&h=feyrNSTglzksHoEDSsnrG47UoY_XX4PtayUPpSMunQI=" 
         alt="display of gourmet food on table" />
    <p>Here is <em>more</em> information about The Restaurant.</p>    
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

<style scoped>
p {
  margin: 40px auto;
  width: 500px;
}
</style>