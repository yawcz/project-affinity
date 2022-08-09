<template>
  <v-sheet class="mb-md-16 mb-6">
    <v-sheet class="inward">
      <v-row class="pb-16 pt-6 pt-md-16 mt-16">
        <v-col cols=12 md=6 :align="$vuetify.breakpoint.name.includes('s') ? 'center' : 'left'" class="d-flex flex-column">
          <div class="t-h1 bold text-gradient mb-md-auto mb-6" justify="center">PROJECT<br>AFFINITY</div>
          <div class="t-h4 medium">Connecting Hearts, Inspiring Minds</div>
        </v-col>
        <v-col cols=12 md=6 class="mt-16 mt-md-0" align="center">
          <v-img :width="$vuetify.breakpoint.name.includes('s') ? '70%' : ''" src="@/assets/vector-1.svg"></v-img>
        </v-col>
      </v-row>
    </v-sheet>
    <v-sheet
      align="center"
      :style="'margin-bottom:' + ($vuetify.breakpoint.name.includes('s') ? '-25%;' : '-15%') + ';'"
      class="inward"
    >
      <v-row no-gutters class="justify-space-between">
        <v-col
          v-for="(counter, index) in counters"
          :key="counter.label"
          cols="6"
          md="3"
          style="position:relative;z-index:0;"
          class="pa-md-6 pa-sm-12 pa-4"
        >
          <div class="square-box bg-white txt-red bold">
            <div class="square-content">
              <Counter :from="0" :to="counter.to" />
            </div>
          </div>
          <div style="display:flex; justify-content:center; line-height:1.5rem;" :class="'medium t-h5 pt-4 ' + ($vuetify.breakpoint.name.includes('s') && index < 2 ? 'txt-pink': 'txt-white')" >{{ counter.label }}</div>
        </v-col>
      </v-row>
    </v-sheet>
    <svg class="mt-n16" style="z-index:-1;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="#fa5a73" fill-opacity="1" d="M0,128L40,138.7C80,149,160,171,240,
      170.7C320,171,400,149,480,133.3C560,117,640,107,720,101.3C800,96,880,96,960,
      112C1040,128,1120,160,1200,149.3C1280,139,1360,85,1400,58.7L1440,32L1440,
      320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,
      800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,
      320,40,320L0,320Z"></path>
    </svg>
    <v-sheet class="bg-pink">
      <div class="inward">
        <v-row class="py-16">
          <v-col cols=12 md=6 class="pr-lg-12 pr-md-6  pt-16 pt-md-0 my-auto d-flex flex-column">
            <div class="bold txt-red t-h2 mb-md-16 mb-6">OUR OBJECTIVES</div>
            <div class="medium txt-white t-h4 mb-md-16 mb-6 text-justify"
            style="line-height:2rem;">To present equal
              opportunities through academic and holistic activities, to enrich and
              improve the lives of disadvantaged children.</div>
            <Link text="ABOUT US" route="/about" color="#f8f9fe" />
          </v-col>
          <v-col cols=12 md=6 class="pl-lg-12 pl-md-6">
            <v-img src="../assets/photo-1.jpg" />
          </v-col>
        </v-row>
      </div>
    </v-sheet>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fa5a73" fill-opacity="1" d="M0,32L60,69.3C120,107,240,181,360,186.7C480,192,600,128,720,122.7C840,117,960,171,1080,165.3C1200,160,1320,96,1380,64L1440,32L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
    <v-sheet class="inward">
      <div class="t-h2 bold txt-red pb-md-16 pb-6">RECENT BLOGS</div>
      <v-list width="100%" class="pa-0 ma-0">
        <v-list-item
          width="100%"
          v-for="n in Math.min(3, this.totalBlogs)"
          :key=n
          class="pa-0 ma-0 txt-white"
        >
          <BlogPreview :id="totalBlogs - n + 1" />
        </v-list-item>
      </v-list>
    </v-sheet>
  </v-sheet>
</template>

<script>
import BlogPreview from '@/components/BlogPreview.vue';
import Counter from '@/components/Counter.vue';
import Link from '@/components/Link.vue';

import db from '@/fb';
import {
  collection,
  query,
  getDocs,
} from 'firebase/firestore';

export default {
  data: () => ({
    totalBlogs: 0,
    counters: [{
      label: 'BENEFICIARIES HELPED',
      to: 149,
    }, {
      label: 'VOLUNTEERS RECRUITED',
      to: 38,
    }, {
      label: 'INITIATIVES ORGANISED',
      to: 12,
    }, {
      label: 'COLLABORATIONS HELD',
      to: 6,
    }],
  }),
  components: {
    BlogPreview,
    Counter,
    Link,
  },
  created() {
    getDocs(query(collection(db, 'blog'))).then((snapshot) => {
      this.totalBlogs = snapshot.size;
    });
  },
};
</script>

<style scoped>
.text-gradient {
  background: -webkit-linear-gradient(#fa5a73, #900c3f);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.square-box {
  position: relative;
  width: 100%;
  overflow: hidden;
  font-size: 70px;
}
.square-box::before {
  content: "";
  display: block;
  padding-top: 100%;
}
.square-content {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
