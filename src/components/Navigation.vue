<template>
<nav class="bg-gray-700 relative z-20 shadow-lg sm:flex sm:justify-between sm:px-4 sm:py-3 sm:items-center">
  <div class="flex w-full items-center justify-between px-4 py-3 sm:p-0">
    <div>
      <g-link to="/">
        <dlogo />
      </g-link>
    </div>
    <div class="sm:hidden">
      <button type="button" class="text-gray-300 hover:text-white focus:text-white focus:outline-none" @click="isOpen = !isOpen">
        <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
          <path v-if="isOpen" fill-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
          <path v-if="!isOpen" fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
        </svg>
      </button>
    </div>

    <div :class="isOpen ? 'hidden' : 'hidden'" class="px-2 pt-2 pb-4 sm:flex sm:p-0">
      <g-link to="/" class="block sm:inline-block px-2 py-1 text-white rounded hover:bg-gray-800">
        Home
      </g-link>
      <g-link to="/bio" class="mt-1 block sm:inline-block px-2 py-1 text-white rounded hover:bg-gray-800 sm:mt-0 sm:ml-2">
        Bio
      </g-link>
      <g-link to="/music" class="mt-1 block sm:inline-block px-2 py-1 text-white rounded hover:bg-gray-800 sm:mt-0 sm:ml-2">
        Music
      </g-link>
      <g-link to="/calendar" class="mt-1 block sm:inline-block px-2 py-1 text-white rounded hover:bg-gray-800 sm:mt-0 sm:ml-2">
        Events
      </g-link>
      <g-link to="/contact" class="mt-1 block sm:inline-block px-2 py-1 text-white rounded hover:bg-gray-800 sm:mt-0 sm:ml-2">
        Contact
      </g-link>
    </div>
  </div>

  <!-- Overlay -->
  <button v-if="isOpen" class="fixed z-100 inset-0 h-full w-full bg-black cursor-default" @click="isOpen = false">
    <div :class="isOpen ? 'block' : 'hidden'" class="sidebar relative px-2 pt-2 pb-4 sm:flex bg-black z-100 sm:p-0">
      <g-link to="/" class="block sm:inline-block px-2 py-1 text-white rounded hover:bg-gray-800">
        Home
      </g-link>
      <g-link to="/bio" class="mt-1 block sm:inline-block px-2 py-1 text-white rounded hover:bg-gray-800 sm:mt-0 sm:ml-2">
        Bio
      </g-link>
      <g-link to="/music" class="mt-1 block sm:inline-block px-2 py-1 text-white rounded hover:bg-gray-800 sm:mt-0 sm:ml-2">
        Music
      </g-link>
      <g-link to="/calendar" class="mt-1 block sm:inline-block px-2 py-1 text-white rounded hover:bg-gray-800 sm:mt-0 sm:ml-2">
        Events
      </g-link>
      <g-link to="/contact" class="mt-1 block sm:inline-block px-2 py-1 text-white rounded hover:bg-gray-800 sm:mt-0 sm:ml-2">
        Contact
      </g-link>
    </div>
  </button>
</nav>
</template>

<script>
import dlogo from '@/assets/svgs/dlogo.svg'

export default {
  name: 'Nav',
  data() {
    return {
      isOpen: false,
      isHidden: false
    }
  },
  components: {
    dlogo
  }
}
</script>
