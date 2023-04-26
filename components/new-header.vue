<template>
  <Announcement />
  <header class="sticky z-20 top-0">
    <nav class="bg-white border-gray-200 dark:bg-gray-800">
      <div class="max-w-screen flex flex-wrap items-center justify-between p-4">
        <!-- <a href="https://flowbite.com/" class="flex items-center">
      <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo" />
      <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
  </a> -->
        <!-- first col -->
        <div class="flex items-center">
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
        <!-- second col -->

        <div class="flex md:order-3 items-center justify-end">
          <NuxtLink
            v-for="(extraLinkItem, extraLinkIndex) in extraLinks"
            :key="extraLinkIndex"
            :to="localepath(extraLinkItem.link)"
            class="mx-2 hover:text-blue-700 text-gray-600 dark:text-gray-300 hidden md:block"
            active-class="!text-blue-700 dark:!text-blue-500">
            {{ extraLinkItem.title }}
          </NuxtLink>
          <CompanyMegaMenu />
          <LocaleTheme />
          <template v-if="userData">
            <!-- Notification -->
            <NotificationsDropDown />

            <!-- Applications -->
            <ApplicationsDropDown />

            <!-- User Menu -->
            <UserInfoDropDown />
          </template>
          <NuxtLink
            v-if="!userData"
            to="/auth/sign"
            class="px-4 py-1 rounded hidden md:block bg-blue-600 hover:bg-blue-800 text-white dark:bg-blue-500 dark:hover:bg-blue-600 dark:text-gray-200 ms-3"
            >Login</NuxtLink
          >
          <button
            type="button"
            data-collapse-toggle="navbar-search"
            aria-controls="navbar-search"
            aria-expanded="false"
            class="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1">
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"></path>
            </svg>
            <span class="sr-only">Search</span>
          </button>

          <button
            data-collapse-toggle="navbar-search"
            type="button"
            class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-search"
            aria-expanded="false">
            <span class="sr-only">Open menu</span>
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"></path>
            </svg>
          </button>
        </div>
        <!-- third col -->
        <div
          class="items-center row hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-search">
          <div class="relative mt-3 md:hidden">
            <div
              class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                class="w-5 h-5 text-gray-500"
                aria-hidden="true"
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
              type="text"
              id="search-navbar"
              class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search..." />
          </div>
          <div class="mt-3">
            <NuxtLink
              v-if="!userData"
              to="/auth/sign"
              class="px-4 py-1 rounded md:hidden bg-blue-600 hover:bg-blue-800 text-white dark:bg-blue-500 dark:hover:bg-blue-600 dark:text-gray-200 ms-3"
              >Login</NuxtLink
            >
          </div>

          <ul
            class="flex md:hidden flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li
              v-for="(extraLinkItem, extraLinkIndex) in extraLinks"
              class="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500">
              <!-- <a href="#" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a> -->
              <NuxtLink
                :key="extraLinkIndex"
                :to="localepath(extraLinkItem.link)"
                class="mx-2 hover:text-blue-700 text-gray-600 dark:text-gray-300"
                active-class="!text-blue-700 dark:!text-blue-500">
                {{ extraLinkItem.title }}
              </NuxtLink>
              <CompanyMegaMenu />
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <SubNavLinks v-if="userData" />
  </header>
</template>
<script setup lang="ts">
import { sidebar, search } from "../composables/state";
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";

onMounted(() => {
  initFlowbite();
});

const localepath = useLocalePath();
const userData = ref<User>();
const sideBarItems = sidebar || [];
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
const extraLinks = ref([
  { title: "Pricing", link: "/pricing" },
  { title: "Help", link: "/help" },
]);
</script>
