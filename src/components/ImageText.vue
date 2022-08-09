<template>
  <div style="display: contents">
    <template v-if="$vuetify.breakpoint.mobile">
      <v-col align="center" cols=12 class="py-md-16 py-6">
        <v-img width="60%" :src="require(`@/assets/vector-${info.imageID}.svg`)" />
      </v-col>
      <v-col cols=12 class="py-md-16 py-6">
        <v-card class="bg-white" elevation=12>
          <v-card-title v-if="info.title" class="t-h2 bold txt-red justify-center">{{ info.title }}</v-card-title>
          <v-card-text class="t-h4 medium pa-6 text-justify">{{ info.description }}</v-card-text>
          <v-card-text
            v-for="(link, index) in info.links"
            :key="index"
            class="t-h4 medium px-6 text-justify"
          >
            <a :href="link.route" class="text-decoration-none">{{ link.label }}</a>
          </v-card-text>
          <v-card-actions v-if="info.details">
            <v-btn
              text
              color="pink lighten-1"
              @click="reveal = true"
            >
              Read More
            </v-btn>
          </v-card-actions>
          <v-expand-transition v-if="info.details">
            <v-card
              v-if="reveal"
              class="transition-fast-in-fast-out v-card--reveal bg-white"
              style="height: 100%;"
            >
              <v-card-text class="pb-0 t-h4 medium text-justify">{{ info.details }}</v-card-text>
              <v-card-actions class="pt-6">
                <v-btn
                  text
                  color="pink lighten-1"
                  @click="reveal = false"
                >
                  Close
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-expand-transition>
        </v-card>
      </v-col>
    </template>
    <template v-else>
      <v-col v-if="index % 2 == 0" cols=6 class="pr-lg-16 pr-6 py-16 my-auto">
        <v-img :src="require(`@/assets/vector-${info.imageID}.svg`)" />
      </v-col>
      <v-col v-else cols=6 class="pr-lg-16 pr-6 py-16 my-auto">
        <v-card class="bg-white" elevation=12>
          <v-card-title v-if="info.title" class="t-h2 bold txt-red justify-center">{{ info.title }}</v-card-title>
          <v-card-text class="t-h4 medium pa-6 text-justify">{{ info.description }}</v-card-text>
          <v-card-text
            v-for="(link, index) in info.links"
            :key="index"
            class="t-h4 medium px-6 text-justify"
          >
            <a :href="link.route" class="text-decoration-none">{{ link.label }}</a>
          </v-card-text>
          <v-card-actions v-if="info.details">
            <v-btn
              text
              color="pink lighten-1"
              @click="reveal = true"
            >
              Read More
            </v-btn>
          </v-card-actions>
          <v-expand-transition v-if="info.details">
            <v-card
              v-if="reveal"
              class="transition-fast-in-fast-out v-card--reveal bg-white"
              style="height: 100%;"
            >
              <v-card-text class="pb-0 t-h4 medium text-justify">{{ info.details }}</v-card-text>
              <v-card-actions class="pt-6">
                <v-btn
                  text
                  color="pink lighten-1"
                  @click="reveal = false"
                >
                  Close
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-expand-transition>
        </v-card>
      </v-col>

      <v-col v-if="index % 2 == 1" cols=6 class="pl-lg-16 pl-6 py-16 my-auto">
        <v-img :src="require(`@/assets/vector-${info.imageID}.svg`)" />
      </v-col>
      <v-col v-else cols=6 class="pl-lg-16 pl-6 py-16 my-auto">
        <v-card class="bg-white" elevation=12>
          <v-card-title v-if="info.title" class="t-h2 bold txt-red justify-center">{{ info.title }}</v-card-title>
          <v-card-text class="t-h4 medium pa-6 text-justify">{{ info.description }}</v-card-text>
          <v-card-text
            v-for="(link, index) in info.links"
            :key="index"
            class="t-h4 medium px-6 text-justify"
          >
            <a :href="link.route" class="text-decoration-none">{{ link.label }}</a>
          </v-card-text>
          <v-card-actions v-if="info.details">
            <v-btn
              text
              color="pink lighten-1"
              @click="reveal = true"
            >
              Read More
            </v-btn>
          </v-card-actions>
          <v-expand-transition v-if="info.details">
            <v-card
              v-if="reveal"
              class="transition-fast-in-fast-out v-card--reveal bg-white"
              style="height: 100%;"
            >
              <v-card-text class="pb-0 t-h4 medium text-justify">{{ info.details }}</v-card-text>
              <v-card-actions class="pt-6">
                <v-btn
                  text
                  color="pink lighten-1"
                  @click="reveal = false"
                >
                  Close
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-expand-transition>
        </v-card>
      </v-col>
    </template>
  </div>
</template>

<script>
export default {
  name: "ImageText",
  props: ["info", "index"],
  data: () => ({
    reveal: false,
  }),
};
</script>

<style scoped>
.v-card__title {
  word-break: normal;
  text-align: center;
}
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
</style>