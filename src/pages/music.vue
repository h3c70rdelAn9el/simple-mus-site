<template>
  <Layout>
    <div class="h-screen flex flex-col bg-gradient-to-br from-red-700 via-blue-400 to-gray-900">
      <h1 class="text-5xl text-center font-title">
        Music
      </h1>
      <p class="text-sm text-center mx-auto">
        My apoligies, music to come shortly.
      </p>
      <Youtube />
    </div>
  </Layout>
</template>

<script>
import Youtube from '@/components/Youtube'

export default {
  components: {
    Youtube
  }
  // TODO: look at todos
  // look at todos below
}
</script>

<!--
TODO:
[] make a component for the following:
[] make call to youtube api, bring back a list of videos with links, etc.
  [] need to add :
      [] links:
      [] video thumbnail
      [] title
      [] description
      [] creator
-->
