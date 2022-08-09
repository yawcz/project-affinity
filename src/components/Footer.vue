<template>
  <v-footer class="py-8">
    <div class="inward" style="width:100%;">
      <v-row>
        <v-col cols="12">
          <p class="pink--text text--lighten-1 t-h3 text-center">PROJECT AFFINITY | {{ new Date().getFullYear() }}</p>
        </v-col>
        <v-col cols="12">
          <div
            class="t-h5 py-2 medium txt-white"
            v-for="(navLink, index) in navLinks"
            :key="index"
          >
            <router-link class="router-link" :to="navLink.route">{{ navLink.text }}</router-link>
          </div>
          <v-btn class="float-right" depressed href="https://www.instagram.com/weareprojectaffinity/">
            <v-icon left>mdi-instagram</v-icon>
            drop a follow!
          </v-btn>
        </v-col>
      </v-row>
    </div>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    navLinks: [
      { text: 'Home', route: '/' },
      { text: 'About', route: '/about' },
      { text: 'Our Beneficiaries', route: '/our-beneficiaries' },
      { text: 'Events', route: '/events' },
      { text: 'Blog', route: '/blog' },
    ],
  }),
};
</script>

<style scoped>
.router-link {
  color: black!important;
  text-decoration: none;
}
</style>
