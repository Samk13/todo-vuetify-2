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
          <v-form class="px-3">
            <v-text-field
              prepend-icon="mdi-folder"
              label="Title"
              v-model="form.title"
            ></v-text-field>
            <v-textarea
              label="Information"
              v-model="form.information"
              prepend-icon="mdi-pencil"
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
          <v-btn color="primary" text @click="submit">
            Add project
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import moment from "moment";

export default {
  data() {
    return {
      dialog: false,
      icons: {
        newProject: "mdi-newspaper-plus"
      },
      menu: false,
      form: {
        title: "",
        information: "",
        due: new Date().toISOString().substr(0, 10)
      }
    };
  },
  methods: {
    submit() {
      console.log(this.form.title, this.form.information, this.form.due);
      this.dialog = false;
    }
  },
  computed: {
    formattedDate() {
      return moment(this.form.due).format("Do MMMM YYYY");
    }
  }
};
</script>
