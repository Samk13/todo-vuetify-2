<template>
  <div class="Dashboard">
    <h1 class="subheading ma-5">Dashboard</h1>
    <v-container class="my-5">
      <v-layout row class="mb-3">
        <v-col>
          <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                small
                text
                color="grey"
                v-bind="attrs"
                v-on="on"
                @click="sortBy('title')"
              >
                <v-icon left small>{{ icons.folder }}</v-icon>
                <span class="caption text-lowercase">By project name</span>
              </v-btn>
            </template>
            <span>sort projects by name</span>
          </v-tooltip>

          <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                small
                text
                color="grey"
                v-bind="attrs"
                v-on="on"
                @click="sortBy('person')"
              >
                <v-icon left small>{{ icons.person }}</v-icon>
                <span class="caption text-lowercase">By Person</span>
              </v-btn>
            </template>
            <span>sort projects by person</span>
          </v-tooltip>
        </v-col>
      </v-layout>
      <v-card
        v-for="project in projects"
        :key="project.id"
        class="rounded-xl my-3"
      >
        <v-layout row wrap :class="`pa-3 project ${project.status}`">
          <v-col xs="12" md="6">
            <div class="caption secondary--text">
              {{ project.title }}
            </div>
          </v-col>
          <v-col xs="6" sm="4" md="2">
            <div class="caption secondary--text">
              User
            </div>
            <div>
              {{ project.person }}
            </div>
          </v-col>
          <v-col xs="6" sm="4" md="2">
            <div class="caption secondary--text">
              Due date
            </div>
            <div>
              {{ project.due }}
            </div>
          </v-col>
          <v-col xs="2" sm="4" md="2">
            <div class="right">
              <v-chip :color="checkColor(project)" class="white--text" small>
                {{ project.status }}
              </v-chip>
            </div>
          </v-col>
        </v-layout>
      </v-card>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import db from "@/firebase.js";

export default {
  name: "Dashboard",
  data: () => ({
    icons: {
      folder: "mdi-folder",
      person: "mdi-account-arrow-left"
    },
    projects: []
  }),
  created() {
    db.collection("projects").onSnapshot(res => {
      const changes = res.docChanges();
      changes.forEach(change => {
        if (change.type === "added") {
          this.projects.push({
            ...change.doc.data(),
            id: change.doc.id
          });
        }
      });
    });
  },
  methods: {
    sortBy(prop) {
      this.projects.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
    },
    checkColor(proj) {
      if (proj.status) {
        if (proj.status === "ongoing") {
          return "orange";
        } else if (proj.status === "complete") {
          return "#3cd1c2";
        } else if (proj.status === "overdue") {
          return "#ff6347";
        }
      }
      return;
    }
  }
};
</script>

<style scoped>
.project.complete {
  border-left: 4px solid #3cd1c2;
  background-color: #ecffff;
}
.project.ongoing {
  border-left: 4px solid orange;
  background-color: rgb(255, 248, 235);
}
.project.overdue {
  border-left: 4px solid #ff6347;
  background-color: rgb(255, 236, 233);
}
</style>
