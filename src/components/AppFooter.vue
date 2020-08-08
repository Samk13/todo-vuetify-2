<template>
  <v-footer dark padless absolute>
    <v-card flat tile class="primary lighten-1 white--text text-center">
      <v-card-text>
        <v-btn
          v-for="icon in links"
          :key="icon.icon"
          class="mx-4 white--text"
          icon
          router
          :href="icon.link"
          target="_blank"
        >
          <v-icon size="24px">{{ icon.icon }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet.
        Mauris cursus commodo interdum. Praesent ut risus eget metus luctus
        accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a
        sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula
        lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus
        iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor
        vel ut orci. Orci varius natoque penatibus et magnis dis parturient
        montes, nascetur ridiculus mus.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Sam Arbid</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>
<script>
export default {
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
    links: [
      { icon: "mdi-facebook", link: "https://www.facebook.com/samarbid13" },
      { icon: "mdi-twitter", link: "https://twitter.com/Sam_Arbid" },
      { icon: "mdi-linkedin", link: "https://www.linkedin.com/in/samarbid/" },
      { icon: "mdi-instagram", link: "https://www.instagram.com/sam_insta13/" }
    ]
  })
};
</script>
