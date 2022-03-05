<template>
  <div class="app">
    <nav>
      <router-link to="/">The Restaurant<img alt="Pink Flower logo" src="@/assets/photos/flower-icon.png"></router-link>
      <router-link to="/">Home</router-link>
      <router-link to="/menu">Menu &amp; Order</router-link>
      <router-link to="/reviews">Reviews</router-link>
      <router-link to="/contact-us">Contact Us</router-link>
    </nav>
    <router-view class="router-view"/>
    <FooterItem />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import FooterItem from '@/components/FooterItem.vue'

export default ({
  name: 'App', 
  components: {
    FooterItem
  }
})
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--dark);
  position: relative;
  min-height: 100vh;
}

/* For nav background-color */
body {
  margin: 0;
}
nav {
  padding: 30px 15px;
  height: 30px;
  background-color: var(--dark);
  display: flex;
  justify-content: center;
}

nav a {
  font-weight: bold;
  font-size: 20px;
  display: flex;
  align-items: center;
  text-decoration: none;
}

nav a {
  color: var(--secondary);
  transition: all .4s ease-in-out;
}

nav a:hover {
  color: var(--secondary-darken);
  transition: all .4s ease-in-out;
}

nav a, img {
  padding: 0px 25px;
}

nav a.router-link-exact-active {
  color: var(--primary);
}
nav a.router-link-exact-active:hover {
  color: var(--primary-darken);
}
img {
  max-height: 100%;
}

.router-view {
  padding-bottom: 304px;
}
</style>
