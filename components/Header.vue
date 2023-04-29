<template>
  <header class="sticky z-20 top-0">
    <Announcement />
    <nav class="bg-white border-gray-200 px-4 lg:px-6 py-1 dark:bg-gray-800">
      <div
        class="flex flex-wrap md:justify-between justify-center items-center">
        <div class="flex justify-start items-center">
          <!-- <button id="toggleSidebar" @click="sidebar = !sidebar"
            class="p-2 text-gray-600 rounded cursor-pointer lg:inline hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"></path>
            </svg>
          </button> -->

          <NuxtLink :to="localepath('/')" class="flex me-4">
            <img
              class="md:h-20 md:w-20 h-16 w-16 dark:hidden"
              src="../public/img/h-logo.svg"
              alt="Trader4 logo" />
            <img
              class="md:h-20 md:w-20 h-16 w-16 hidden dark:block"
              src="../public/img/h-logo-dark.svg"
              alt="Trader4 logo" />
            <!-- <span
              class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
            >
              Trader4
            </span> -->
          </NuxtLink>
          <form action="#" method="GET" class="hidden md:block lg:pl-2">
            <label for="topbar-search" class="sr-only">Search</label>
            <div class="relative mt-1 lg:w-96">
              <div
                class="flex absolute inset-y-0 left-0 rtl:right-2 items-center pl-3 pointer-events-none">
                <svg
                  class="w-5 h-5 text-gray-500 dark:text-gray-400 rtl:rotate-90"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"></path>
                </svg>
              </div>
              <input
                v-model="search"
                type="text"
                name="search"
                id="topbar-search"
                class="bg-gray-50 border border-gray-300 rtl:px-9 text-gray-900 sm:text-sm rounded outline-none focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Search (Ctrl+K)"
                ref="searchInput" />
            </div>
          </form>
        </div>

        <div class="flex items-center lg:order-2">
          <NuxtLink
            v-for="(extraLinkItem, extraLinkIndex) in extraLinks"
            :key="extraLinkIndex"
            :to="localepath(extraLinkItem.link as string)"
            class="mx-2 hover:text-blue-700 text-gray-600 hidden md:block dark:text-gray-300"
            active-class="!text-blue-700 dark:!text-blue-500">
            {{ extraLinkItem.title }}
          </NuxtLink>

          <CompanyMegaMenu />

          <!-- <button
            type="button"
            class="hidden sm:inline-flex items-center justify-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded text-xs px-3 py-1.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
          >
            <svg
              aria-hidden="true"
              class="mr-1 -ml-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
            New Widget
          </button> -->
          <!-- <button id="toggleSidebarMobileSearch" type="button"
            class="p-2 text-gray-500 rounded lg:hidden hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            <span class="sr-only">Search</span>

            <svg aria-hidden="true" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"></path>
            </svg>
          </button> -->
          <LocaleTheme />

          <template v-if="userData">
            <!-- Notification -->
            <NotificationsDropDown />

            <!-- Applications -->
            <ApplicationsDropDown />

            <!-- User Menu -->
            <UserInfoDropDown />
          </template>

          <!-- Login Button -->
          <NuxtLink
            v-if="!userData"
            to="/auth/sign"
            class="px-4 py-1 rounded bg-blue-600 hover:bg-blue-800 text-white dark:bg-blue-500 dark:hover:bg-blue-600 dark:text-gray-200 ms-3"
            >Login</NuxtLink
          >
        </div>

        <!-- MobileHeader Component  -->
        <MobileHeader />
      </div>
    </nav>
    <SubNavLinks v-if="userData" />
  </header>
</template>
<script setup lang="ts">
import {  search } from "../composables/state";

const localepath = useLocalePath();
const userData = ref<User>();
const searchInput = ref();

// color mode
onBeforeMount(() => {
  let userStorage = localStorage.getItem("user");
  userData.value = userStorage
    ? (JSON.parse(localStorage.getItem("user") as string) as User)
    : undefined;
  // Ctrl K press to focus search input
  document.addEventListener("keydown", (event: any) => {
    if (
      event.ctrlKey &&
      (event.keyCode == 83 || event.keyCode == 11 || event.keyCode == 75)
    ) {
      searchInput.value.focus();
      event.preventDefault();
    }
  });
});

// Links beside dark mode button
const extraLinks = ref<Menu[]>([
  { title: "Pricing", link: "/pricing" },
  { title: "Help", link: "/help" },
]);
</script>
