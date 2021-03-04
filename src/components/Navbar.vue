<template>
  <div
    class="container grid grid-cols-3 px-20 py-4 mx-auto mb-8 bg-black gap-x-4"
    v-show="
      $route.path !== '/applets/ui-suite-course/interesting' &&
        $route.path !== '/applets/ui-suite-course/coursepath' &&
        $route.path !== '/error' &&
        $route.path !== '/no-connection'
    "
  >
    <div class="flex items-center">
      <img :src="require('@/app/ui/assets/svg/suite-logo.svg')" class="" />
      <div class="ml-4">v{{ appVersion }}</div>
    </div>
    <nav class="flex items-center justify-center text-white">
      <a :href="courseUrl" class="py-2 mx-4">Dashboard</a>
      <a :href="jobUrl" class="py-2 mx-4">Job</a>
      <a :href="projectUrl" class="py-2 mx-4 border-b border-yellow-500">Project</a>
    </nav>
    <div class="flex items-center justify-end">
      <div class="flex flex-col">
        <div>{{ name }}</div>
      </div>
      <div class="mx-4">
        <img :src="userImage" alt="" class="w-12 rounded-full">
      </div>
      <button @click="logout">
        <img :src="require('@/app/ui/assets/svg/logout.svg')" class="" />
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Cookies from 'js-cookie';
const port = 26100

export default defineComponent({
  name: "Navbar",

  computed: {
    courseUrl() {
      // const port = process.env.NODE_ENV === "production" ? 26100 : 26101;
      return `http://localhost:${port}/applets/ui-suite-course`;
    },
    jobUrl() {
      // const port = process.env.NODE_ENV === "production" ? 26100 : 26102;
      return `http://localhost:${port}/applets/ui-suite-job`;
    },
    projectUrl() {
      // const port = process.env.NODE_ENV === "production" ? 26100 : 26103;
      return `http://localhost:${port}/applets/ui-suite-rsp`;
    },
    name() {
      return Cookies.get('user_username')
    },
    userImage() {
      return Cookies.get('user_image')
    },
  },

  methods: {
    logout() {
      console.log('Logout')
      // ipcService.logout()
    }
  }
});
</script>

<style scoped>
.noblur {
  backdrop-filter: unset;
  z-index: 1000000;
  background-color: black;
}
.route-enter-from,
.route-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}
.route-enter-active,
.route-leave-active {
  transition: all 0.5s ease;
}
.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateX(0);
}
</style>
