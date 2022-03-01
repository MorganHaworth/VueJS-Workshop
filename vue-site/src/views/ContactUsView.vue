<template>
  <div class="contact-us">
    <HeroBlock title="Contact Us" />
    <EmailForm />
  </div>
</template>

<script lang="ts">
import HeroBlock from '@/components/HeroBlock.vue'
import EmailForm from '@/components/EmailForm.vue'

export default {
  name: 'ContactUsView',
  components: {
    HeroBlock,
    EmailForm
  }
}
</script>
