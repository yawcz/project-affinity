<template>
  <v-sheet class="bg-white">
    <number
      :from="0"
      :to="to"
      :format="theFormat"
      :duration="5"
      :delay="1"
      easing="Power1.easeOut"
    />
  </v-sheet>
</template>

<script>
export default {
  name: 'Counter',
  props: ['from', 'to'],
  methods: {
    theFormat(number) {
      return number.toFixed(0);
    },
  },
};
</script>
