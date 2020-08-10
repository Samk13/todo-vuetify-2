<template>
  <div class="Projects">
    <h1 class="subheading ma-5">My Projects</h1>
    <v-container class="my-5">
      <v-expansion-panels class="rounded-xl">
        <v-expansion-panel v-for="project in myProjects" :key="project.id">
          <v-expansion-panel-header>{{
            project.title
          }}</v-expansion-panel-header>
          <v-expansion-panel-content>
            <div slot="header">
              {{ project.title }}
            </div>
            <v-card-text class="px-4">
              <div class="font-weight-bold">{{ project.due }}</div>
              <div class="font-weight-bold success--text">
                {{ project.status }}
              </div>
              <div>{{ project.content }}</div>
            </v-card-text>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
  </div>
</template>
<script>
import db from "@/firebase";
import Vue from "vue";

export default Vue.extend({
  data: () => {
    return {
      projects: []
    };
  },
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
  computed: {
    myProjects() {
      return this.projects.filter(project => {
        return project.person === "Sam Arbid";
      });
    }
  }
});
</script>
