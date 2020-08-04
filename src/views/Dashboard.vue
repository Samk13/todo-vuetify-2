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
      <v-card v-for="project in projects" :key="project.id" text>
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
        <v-divider />
      </v-card>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Dashboard",
  data: () => ({
    icons: {
      folder: "mdi-folder",
      person: "mdi-account-arrow-left"
    },
    projects: [
      {
        id: "123189031283jkhgm",
        title: "Design a new website",
        person: "The Net Ninja",
        due: "1st Jan 2020",
        status: "ongoing",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!"
      },
      {
        id: "p23asojdkajsf",
        title: "Code up the homepage",
        person: "Chun Li",
        due: "10th Jan 2021",
        status: "complete",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!"
      },
      {
        id: "pdk67fdf65f",
        title: "Design video thumbnails",
        person: "Ryu",
        due: "20th Dec 2022",
        status: "complete",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!"
      },
      {
        id: "p23asojdkaklsdfgjsf",
        title: "Create a community forum",
        person: "Gouken",
        due: "20th Oct 2023",
        status: "overdue",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!"
      }
    ]
  }),
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
