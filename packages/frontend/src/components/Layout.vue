<template>
  <div class="h-screen flex overflow-hidden bg-cool-gray-100 font-sans">
    <div class="hidden lg:flex lg:flex-shrink-0">
      <div class="flex flex-col w-64">
        <!-- Sidebar component, swap this element with another sidebar if you like -->
        <div class="flex flex-col flex-grow bg-gray-800 pt-5 pb-4 overflow-y-auto">
          <div class="flex items-center flex-shrink-0 px-4">
            <span class="font-logo text-3xl text-purple-300">Reminisce</span>
          </div>
          <div class="mt-5 flex-1 flex flex-col overflow-y-auto">
            <div class="overflow-y-auto">
              <nav class="px-2 space-y-1">
                <router-link
                  :to="{ name: 'Home' }"
                  class="group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md text-white bg-purple-700 focus:outline-none focus:bg-purple-500 transition ease-in-out duration-150"
                >
                  <svg
                    class="mr-4 h-6 w-6 text-purple-200 group-hover:text-purple-200 group-focus:text-purple-200 transition ease-in-out duration-150"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                    />
                  </svg>
                  Bookmarks
                </router-link>
                <a
                  href="#"
                  class="group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md text-purple-100 hover:text-white hover:bg-purple-500 focus:outline-none focus:bg-purple-500 transition ease-in-out duration-150"
                >
                  <!-- Heroicon name: cog -->
                  <svg
                    class="mr-4 h-6 w-6 text-purple-200 transition ease-in-out duration-150"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  Settings
                </a>
              </nav>
            </div>
            <hr class="h-px mt-6 bg-purple-700 border-none" />
            <div class="mt-6 flex-1 h-0 overflow-y-auto">
              <nav class="px-2 space-y-1">
                <a
                  href="#"
                  class="group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md text-purple-100 hover:text-white hover:bg-purple-500 focus:outline-none focus:bg-purple-500 transition ease-in-out duration-150"
                >
                  <!-- Heroicon name: question-mark-circle -->
                  <svg
                    class="mr-4 h-6 w-6 text-purple-200 transition ease-in-out duration-150"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Help
                </a>

              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex-1 overflow-auto focus:outline-none" tabindex="0">
      <div
        class="relative z-10 flex-shrink-0 flex h-16 bg-white border-b border-gray-200 lg:border-none"
      >
        <button
          class="px-4 border-r border-cool-gray-200 text-cool-gray-400 focus:outline-none focus:bg-cool-gray-100 focus:text-cool-gray-600 lg:hidden"
          aria-label="Open sidebar"
        >
          <!-- Heroicon name: menu-alt-1 -->
          <svg
            class="h-6 w-6 transition ease-in-out duration-150"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </button>
        <!-- Search bar -->
        <div class="flex-1 px-4 flex justify-between sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
          <div class="flex-1 flex">
            <form class="w-full flex md:ml-0" action="#" method="GET">
              <label for="search_field" class="sr-only">Search</label>
              <div class="relative w-full text-cool-gray-400 focus-within:text-cool-gray-600">
                <div class="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                  <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    />
                  </svg>
                </div>
                <input
                  id="search_field"
                  class="block w-full h-full pl-8 pr-3 py-2 rounded-md text-cool-gray-900 placeholder-cool-gray-500 focus:outline-none focus:placeholder-cool-gray-400 sm:text-sm"
                  placeholder="Search (todo)"
                  type="search"
                />
              </div>
            </form>
          </div>
          <div class="ml-4 flex items-center md:ml-6"></div>
        </div>
      </div>
      <main class="flex-1 relative pb-8 z-0 overflow-y-auto">
        <div class="mt-8">
          <slot></slot>
        </div>
      </main>
    </div>
  </div>
</template>
