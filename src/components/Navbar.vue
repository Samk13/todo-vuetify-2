<template>
  <nav>
    <v-app-bar app>
      <v-app-bar-nav-icon class="grey--text" @click.stop="drawer = !drawer">
        <v-icon>
          {{ icons.menuIcon }}
        </v-icon>
      </v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Todo</span>
        <span>Sam</span>
      </v-toolbar-title>
      <v-spacer />
      <v-btn text color="grey">
        <span>Sign Out</span>
        <v-icon right>{{ icons.signOut }}</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer app v-model="drawer" class="primary">
      <v-list dense nav class="py-0">
        <v-list-item two-line>
          <v-list-item-avatar>
            <img
              src="https://avatars0.githubusercontent.com/u/36583694?s=460&u=acd6d4609d44919072a0a2c15c53806f9d543ff4&v=4"
            />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title class="info--text">{{
              drawerHeader.title
            }}</v-list-item-title>
            <v-list-item-subtitle class="info--text">{{
              drawerHeader.subtitle
            }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          router
          :to="item.route"
        >
          <v-list-item-icon>
            <v-icon class="info--text">{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="info--text">{{
              item.title
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import { mdiMenu, mdiExitToApp } from "@mdi/js";
export default {
  data: () => ({
    icons: {
      signOut: mdiExitToApp,
      menuIcon: mdiMenu
    },
    drawer: null,
    drawerHeader: { title: "Sam Arbid", subtitle: "Software engineer" },
    items: [
      { title: "Dashboard", icon: "mdi-view-dashboard", route: "/" },
      { title: "projects", icon: "mdi-projector-screen", route: "/projects" },
      { title: "teams", icon: "mdi-account-group", route: "/teams" }
    ]
  })
};
</script>
