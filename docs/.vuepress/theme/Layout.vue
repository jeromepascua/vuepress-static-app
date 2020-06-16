<template>
<div class="relative overflow-hidden">
  <div class="relative pt-6 pb-16 md:pb-20 lg:pb-24 xl:pb-32">
    <nav class="relative max-w-screen-xl mx-auto flex items-center justify-between px-4 sm:px-6">
      <div class="flex items-center flex-1">
        <div class="flex items-center justify-between w-full md:w-auto">
          <a href="/" aria-label="Home">
            <Logo></Logo>
          </a>
          <div class="-mr-2 flex items-center md:hidden">
            <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out" id="main-menu" aria-label="Main menu" aria-haspopup="true">
              <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        <div class="hidden md:block md:ml-10">
          <a href="/features/" class="ml-10 font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">Features
          </a>
          <a href="/company/" class="ml-10 font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">Company
          </a>
        </div>
      </div>
      <div class="hidden md:block text-right">
        <span class="inline-flex rounded-md shadow-md">
          <span class="inline-flex rounded-md shadow-xs">
            <a href="#" class="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 focus:outline-none focus:border-indigo-300 focus:shadow-outline-indigo transition duration-150 ease-in-out">
              Log in
            </a>
          </span>
        </span>
      </div>
    </nav>

    <!--
      Mobile menu, show/hide based on menu open state.

      Entering: "duration-150 ease-out"
        From: "opacity-0 scale-95"
        To: "opacity-100 scale-100"
      Leaving: "duration-100 ease-in"
        From: "opacity-100 scale-100"
        To: "opacity-0 scale-95"
    -->
    <div class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
      <div class="rounded-lg shadow-md">
        <div class="rounded-lg bg-white shadow-xs overflow-hidden" role="menu" aria-orientation="vertical" aria-labelledby="main-menu">
          <div class="px-5 pt-4 flex items-center justify-between">
            <div>
              <Logo></Logo>
            </div>
            <div class="-mr-2">
              <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out" aria-label="Close menu">
                <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          <div class="px-2 pt-2 pb-3">
            <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out" role="menuitem">Product
            </a>
            <a href="#" class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out" role="menuitem">Features
            </a>
            <a href="#" class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out" role="menuitem">Marketplace
            </a>
            <a href="#" class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out" role="menuitem">Company
            </a>
          </div>
          <div>
            <a href="#" class="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100 hover:text-indigo-700 focus:outline-none focus:bg-gray-100 focus:text-indigo-700 transition duration-150 ease-in-out" role="menuitem">
              Log in
            </a>
          </div>
        </div>
      </div>
    </div>

    <main class="mt-8 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6">
      <Content />
    </main>
  </div>
</div>
</template>

<script>
import Logo from './components/logo'
export default {
  name: 'layout',
  components: {
    Logo,
  },
}
</script>

<style lang="stylus">
	@import './styles/style.styl';
</style>
