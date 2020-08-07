<template>
  <div class="text-center my-5">
    <v-dialog v-model="dialog" max-width="650px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="success" v-bind="attrs" v-on="on">
          <v-icon left>{{ icons.newProject }}</v-icon>
          <span>Add new project</span>
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="headline grey lighten-2">
          New project
        </v-card-title>

        <v-card-text>
          <v-form ref="form" class="px-3">
            <v-text-field
              prepend-icon="mdi-folder"
              label="Title"
              v-model="form.title"
              :rules="inputRules"
            ></v-text-field>
            <v-textarea
              label="Information"
              v-model="form.information"
              prepend-icon="mdi-pencil"
              :rules="inputRules"
            ></v-textarea>
            <!-- date picker start -->
            <v-menu
              ref="menu"
              v-model="menu"
              :close-on-content-click="true"
              :return-value.sync="menu"
              transition="scale-transition"
              offset-y
              min-width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="formattedDate"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                  label="Due date"
                  prepend-icon="mdi-calendar-range"
                >
                </v-text-field>
              </template>
              <v-date-picker v-model="form.due"></v-date-picker>½
            </v-menu>
            <v-spacer></v-spacer>
            <!-- date picker end -->
          </v-form>
        </v-card-text>
        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="submit" :loading="loading">
            Add project
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import moment from "moment";
import db from "@/firebase";

export default {
  data() {
    return {
      dialog: false,
      loading: false,
      icons: {
        newProject: "mdi-newspaper-plus"
      },
      menu: false,
      form: {
        title: "",
        information: "",
        due: new Date().toISOString().substr(0, 10)
      },
      inputRules: [
        value => value.length >= 3 || "Minimum kegth should be 3 characters"
      ]
    };
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        this.loading = true
        const project = {
          title: this.form.title,
          content: this.form.information,
          due: moment(this.form.due).format("Do MMMM YYYY"),
          person: "Sam Arbid",
          status: "ongoing"
        };
        db.collection("projects")
          .add(project)
          .then(() => {
            console.log("saved in the DB ✍")
            this.loading = false
            this.dialog = false;
          });
      }
      return
    }
  },
  computed: {
    formattedDate() {
      return moment(this.form.due).format("Do MMMM YYYY");
    }
  }
};
</script>
