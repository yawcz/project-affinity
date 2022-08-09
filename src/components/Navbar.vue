<template>
  <v-sheet>
    <v-app-bar
      app
      hide-on-scroll
      class="bg-grey d-flex justify-lg-space-around pl-lg-0"
    >
      <v-app-bar-nav-icon
        @click="drawer=true"
        class="d-lg-none"
      />
      <router-link class="router-link" to="/">
        <v-img
          max-height="60px"
          max-width="60px"
          src="../assets/logo.png"
        />
      </router-link>
      <v-app-bar-title class="medium mr-16 text-no-wrap">
        <div>
          <router-link class="router-link pink--text text--lighten-1" to="/">PROJECT AFFINITY</router-link>
        </div>
      </v-app-bar-title>
      <router-link
        class="d-lg-inline-block d-none pl-3 router-link"
        v-for="navLink in navLinks"
        :key="navLink.text"
        :to="navLink.route"
      >
        <v-btn text>{{ navLink.text }}</v-btn>
      </router-link>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      app
      class="d-lg-none"
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group active-class="pink--text text--lighten-1">
          <v-list-item
            v-for="navLink in navLinks"
            :key="navLink.text"
            router
            :to="navLink.route"
          >
            <v-list-item-icon>
              <v-icon v-text="navLink.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="navLink.text" />
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-sheet>
</template>

<script>
export default {
  name: 'Navbar',
  data: () => ({
    drawer: false,
    navLinks: [
      { text: 'About', icon: 'mdi-information', route: '/about' },
      { text: 'Our Beneficiaries', icon: 'mdi-human-child', route: '/our-beneficiaries' },
      { text: 'Events', icon: 'mdi-calendar', route: '/events' },
      { text: 'Blog', icon: 'mdi-note-edit', route: '/blog' },
    ],
  }),
};
</script>

<style scoped>
.router-link {
  text-decoration: none;
  color: black;
}
</style>
