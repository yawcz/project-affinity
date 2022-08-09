<template>
  <v-btn
    tile
    depressed
    text
    x-large
    :color="color"
    :to="route"
  >
    {{ text }}
    <v-icon right>
      mdi-open-in-new
    </v-icon>
  </v-btn>
</template>

<script>
export default {
  name: 'Link',
  props: ['text', 'route', 'color'],
};
</script>
