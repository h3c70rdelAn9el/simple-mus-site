<template>
  <div class="layout">
    <header class="header">
      <Navigation />
    </header>
    <slot />
    <Footer />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default {
  components: {
    Navigation,
    Footer
  }
}
</script>

<style>
  @import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css";
</style>
