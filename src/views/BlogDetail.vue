<template>
  <v-sheet
    class="mt-16 mb-md-16 mb-12"
    v-if="this.valid"
  >
    <div class="inward">
      <v-row justify="center">
        <v-img
          :src="this.thumbnail"
          width="100%"
        ></v-img>
        <div style="width:100%;" class="t-h4 bold">{{ this.date }}</div>
        <div class="t-h2 bold pb-8">{{ this.title }}</div>
        <div v-html="this.content" class="t-h4 medium text-justify"></div>
      </v-row>
    </div>
  </v-sheet>
  <v-sheet
    v-else
  >
    <PageNotFound />
  </v-sheet>
</template>

<script>
import db from '@/fb';
import {
  collection,
  query,
  where,
  getDocs,
} from 'firebase/firestore';
import { format } from 'date-fns';

import PageNotFound from '@/views/PageNotFound.vue';

export default {
  data: () => ({
    totalBlogs: 0,
    valid: true,
    thumbnail: '',
    title: '',
    date: '',
    content: '',
  }),
  components: {
    PageNotFound,
  },
  created() {
    getDocs(query(collection(db, 'blog'))).then((snapshot) => {
      this.totalBlogs = snapshot.size;
      this.valid = (this.$route.params.id <= this.totalBlogs);
      if (this.valid) {
        getDocs(query(collection(db, 'blog'), where('id', '==', parseInt(this.$route.params.id, 10)))).then((snapshot2) => {
          snapshot2.forEach((doc) => {
            this.thumbnail = doc.data().thumbnail;
            this.title = doc.data().title;
            this.date = format(doc.data().date.toDate(), 'dd-mm-yy');
            this.content = doc.data().content;
          });
        });
      }
    });
  },
};
</script>
