<template>
  <v-app class="gray lighten-4">
    <v-content class="mx-4 mb-4">
      <navbar />
      <router-view />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Navbar from "./components/Navbar.vue";

export default Vue.extend({
  name: "App",
  components: {
    Navbar
  },
  data: () => ({
    //
  })
});
</script>
