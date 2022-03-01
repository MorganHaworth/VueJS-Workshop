<template>
  <div class="reviews">
    <HeroBlock title="Reviews" />
    <p id="reviewsCount">{{reviewsCount}} Reviews</p>
    <ul class="review-list">
      <li v-for="review in reviews" v-bind:key="review.id">
        <ReviewItem :name="review.name" 
                :reviewContent="review.reviewContent" 
                :numStars="review.numStars"/>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import HeroBlock from '@/components/HeroBlock.vue'
import ReviewItem from '@/components/ReviewItem.vue'
import { ref, computed } from 'vue';
import initialReviews from '../seeds/Reviews';

export default {
  name: 'ReviewsView',
  components: {
    HeroBlock,
    ReviewItem
  },
  setup() {
    const reviews = ref(initialReviews)
    const reviewsCount = computed(() => {
      return reviews.value.length;
    })

    return { reviews, reviewsCount }
  }
}
</script>

<style scoped>
.review-list {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

#reviewsCount {
  font-size: 2em;
  margin: 30px 20px 20px;
}
</style>