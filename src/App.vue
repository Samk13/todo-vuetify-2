<template>
  <v-app class="gray lighten-4">
    <navbar />
    <v-content class="mx-4 mb-4">
      <router-view />
    </v-content>
    <AppFooter />
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Navbar from "./components/Navbar.vue";
import AppFooter from "./components/AppFooter.vue";

export default Vue.extend({
  name: "App",
  components: {
    Navbar,
    AppFooter
  },
  data: () => ({
    //
  })
});
</script>
