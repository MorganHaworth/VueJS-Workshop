<template>
  <div class="contact-us">
    <HeroBlock title="Contact Us" />
    <ContactForm />
  </div>
</template>

<script lang="ts">
import HeroBlock from '@/components/HeroBlock.vue'
import ContactForm from '@/components/ContactForm.vue'

export default {
  name: 'ContactUsView',
  components: {
    HeroBlock,
    ContactForm
  }
}
</script>
