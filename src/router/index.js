import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import OurBeneficiaries from '@/views/OurBeneficiaries.vue';
import Blog from '@/views/Blog.vue';
import BlogDetail from '@/views/BlogDetail.vue';
import Events from '@/views/Events.vue';
import PageNotFound from '@/views/PageNotFound.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/our-beneficiaries',
    name: 'OurBeneficiaries',
    component: OurBeneficiaries,
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog,
  },
  {
    path: '/blog/:id',
    component: BlogDetail,
  },
  {
    path: '/events',
    name: 'Events',
    component: Events,
  },
  {
    path: '*',
    name: 'PageNotFound',
    component: PageNotFound,
  },
];

const router = new VueRouter({
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
