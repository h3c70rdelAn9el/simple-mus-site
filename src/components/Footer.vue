<template>
<div class="flex text-gray-100 h-24 p-2  justify-between bg-gray-800">
  <div class="footer-left text-2xl text-yellow-700 ml-4 font-title">
    <p>&copy; 2020 David Montes</p>
    <p class=" text-xs">
      -- images from <a href="https://unsplash.com" target="_blank">unsplash!</a> --logo from <a href="https://logomakr.com" target="_blank">logomrk.com</a>
    </p>
  </div>
  <div>
    <div class="footer-right flex justify-between">
      <div class="text-gray-100 text-2xl mr-6">
        <a class=" " href="">
          <fa class="text-gray-200 hover:text-yellow-700" :icon="['fab', 'twitter-square']" />
        </a>
      </div>
      <!-- instagram -->
      <div class="text-white text-2xl mr-6">
        <a class="h-10" href="">
          <fa :icon="['fab', 'instagram']" class="  rounded text-gray-200 hover:text-yellow-700" />
        </a>
      </div>
      <div class="hover:text-gray-800 text-2xl mr-3">
        <a href="">
          <fa :icon="['fab', 'facebook-square']" class="hover:text-yellow-700 text-gray-200" />
        </a>
      </div>
    </div>
    <div class="text-yellow-700 text-xs">
      <p>Sample site made by <a href="https://github.com/h3c70rdelAn9el">Hector</a>, <br>with love using <a href="https://gridsome.org/">Gridsome!</a></p>
    </div>
  </div>
</div>
</template>
