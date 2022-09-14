<template>
  <v-sheet class="mb-md-16 mb-6">
    <v-sheet
      align="center"
      class="bg-pink"
    >
      <div class="inward pt-16">
        <v-row justify="center">
          <v-col cols=8>
            <v-img src="@/assets/vector-14.svg" />
          </v-col>
        </v-row>
        <div class="pt-12 t-h1 bold mb-auto txt-red" justify="center">BLOG</div>
      </div>
    </v-sheet>
    <svg style="display:block;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fa5a73" fill-opacity="1" d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,117.3C672,139,768,213,864,202.7C960,192,1056,96,1152,64C1248,32,1344,64,1392,80L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
    <div class="inward">
      <BlogPreview
        v-for="n in this.totalBlogs"
        :key=n
        :id="totalBlogs - n + 1"
      />
    </div>
  </v-sheet>
</template>

<script>
import BlogPreview from '@/components/BlogPreview.vue';
import db from '@/fb';
import {
  collection,
  query,
  getDocs,
} from 'firebase/firestore';

export default {
  data: () => ({
    totalBlogs: 0,
  }),
  components: {
    BlogPreview,
  },
  created() {
    getDocs(query(collection(db, 'blog'))).then((snapshot) => {
      this.totalBlogs = snapshot.size;
    });
  },
};
</script>
