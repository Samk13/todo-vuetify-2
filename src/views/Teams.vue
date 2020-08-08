<template>
  <div class="Projects">
    <h1 class="subheading ma-6">Teams</h1>
    <v-container class="my-5">
      <v-layout row wrap>
        <v-col
          xs="12"
          sm="6"
          md="4"
          lg="3"
          v-for="person in team"
          :key="person.name"
        >
          <v-card outlined ripple class="text-center ma-3 pa-3 rounded-xl">
            <v-responsive class="pt-4">
              <v-avatar size="100" class="grey lighten-2">
                <img :src="person.avatar" :alt="person.avatar" />
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subheading">
                {{ person.name }}
              </div>
              <div class="gray--text">
                {{ person.role }}
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn falt color="gray">
                <v-icon small left>{{ icons.message }}</v-icon>
                <span>Message</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      icons: {
        message: "mdi-android-messages"
      },
      team: [
        {
          name: "First user",
          role: "Web developer",
          avatar: "/avatars/01.jpg"
        },
        {
          name: "second user",
          role: "Graphic designer",
          avatar: "/avatars/02.jpg"
        },
        { name: "user30", role: "Web developer", avatar: "/avatars/03.jpg" },
        {
          name: "user 04",
          role: "Social media maverick",
          avatar: "/avatars/04.jpg"
        },
        { name: "user 05", role: "Sales guru", avatar: "/avatars/05.jpg" }
      ]
    };
  }
};
</script>
