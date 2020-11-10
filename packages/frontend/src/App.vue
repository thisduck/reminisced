<template>
  <div class="font-sans">
    <nav class="bg-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <span class="font-logo text-3xl text-blue-100">Reminisce</span>
            </div>
            <div class="hidden md:block">
              <div class="ml-10 flex items-baseline space-x-4">
                <a
                  href="#"
                  class="px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700"
                >Bookmarks</a>

                <a
                  href="#"
                  class="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                >Settings</a>
              </div>
            </div>
          </div>
          <div class="hidden md:block">
            <div class="ml-4 flex items-center md:ml-6"></div>
          </div>
        </div>
      </div>
    </nav>

    <header class="bg-white shadow-sm">
      <div class="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <h1 class="text-lg leading-6 font-semibold text-gray-900">Bookmarks</h1>
      </div>
    </header>
    <main>
      <div class="max-w-7xl mx-auto py-3 sm:px-6 lg:px-8">
        <div class="px-4 py-6 sm:px-0">
          Enter stuff here.
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { ref } from "vue";

const name = "World";
const count = ref(0);
const add = () => count.value++;

export default {
  setup() {
    return {
      count,
      add,
      name,
    };
  },
};
</script>
