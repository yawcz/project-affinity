<template>
  <v-row>
    <v-col cols=12 md=6 class="pr-lg-12 pr-md-6">
      <v-img :src="this.thumbnail"></v-img>
    </v-col>
    <v-col cols=12 md=6 align="left" class="d-flex flex-column pl-lg-12 pl-md-6">
      <div class="t-h2 bold black--text pb-2" justify="center">{{ this.title }}</div>
      <div class="t-h5 medium mb-auto black--text">{{ this.date }}</div>
      <div class="mb-6"></div>
      <Link text="READ MORE" :route="`/blog/${id}`" color="#fa5a73" />
    </v-col>
  </v-row>
</template>

<script>
import Link from '@/components/Link.vue';
import db from '@/fb';
import {
  collection,
  query,
  where,
  getDocs,
} from 'firebase/firestore';
import { format } from 'date-fns';

export default {
  data: () => ({
    thumbnail: '',
    title: '',
    date: '',
  }),
  props: ['id'],
  components: {
    Link,
  },
  created() {
    getDocs(query(collection(db, 'blog'), where('id', '==', this.id))).then((snapshot) => {
      snapshot.forEach((doc) => {
        this.thumbnail = doc.data().thumbnail;
        this.title = doc.data().title;
        this.date = format(doc.data().date.toDate(), 'dd-MM-yyyy');
      });
    });
  },
};
</script>
