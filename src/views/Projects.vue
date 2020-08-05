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
              <div class="font-weight-bold">{{ project.status }}</div>
              <div>{{ project.content }}</div>
            </v-card-text>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
  </div>
</template>
<script>
export default {
  data: () => {
    return {
      projects: [
        {
          id: "123189031283jkhgm",
          title: "Design a new website",
          person: "Sam Arbid",
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
          person: "Sam Arbid",
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
    };
  },
  computed: {
    myProjects() {
      return this.projects.filter(project => {
        return project.person === "Sam Arbid";
      });
    }
  }
};
</script>
