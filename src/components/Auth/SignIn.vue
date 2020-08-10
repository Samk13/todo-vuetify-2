<template>
  <div class="Projects">
    <h1 class="subheading ma-5">Sign In</h1>
    <v-container class="my-5">
      <v-row align="center">
        <v-col cols="12" sm="6">
          <v-form ref="form" v-model="valid" :lazy-validation="lazy">
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>

            <v-text-field
              v-model="password"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.required, rules.min]"
              :type="show1 ? 'text' : 'password'"
              name="input-10-1"
              label="Password"
              hint="At least 8 characters"
              counter
              @click:append="show1 = !show1"
            ></v-text-field>

            <v-btn class="mt-5" color="success" @click="resetValidation">
              SignIn
            </v-btn>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data: () => ({
    valid: true,
    name: "",
    password: "",
    show1: false,
    rules: {
      required: (value: string) => !!value || "Required.",
      min: (v: string) => v.length >= 8 || "Min 8 characters",
      emailMatch: () => "The email and password you entered don't match"
    },
    nameRules: [
      (v: string) => !!v || "Name is required",
      (v: string) =>
        (v && v.length <= 10) || "Name must be less than 10 characters"
    ],
    email: "",
    emailRules: [
      (v: string) => !!v || "E-mail is required",
      (v: string) => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    checkbox: false,
    lazy: false
  }),

  methods: {
    validate() {
      (this.$refs.form as Vue & { validate: () => boolean }).validate();
    },
    reset() {
      // this.$refs.form.reset();
      (this.$refs.form as Vue & { reset: () => boolean }).reset();
    },
    resetValidation() {
      // this.$refs.form.resetValidation();
      (this.$refs.form as Vue & {
        resetValidation: () => string;
      }).resetValidation();
    }
  }
});
</script>
