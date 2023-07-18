import { createRouter, createWebHistory } from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';
import LandingPromoEmprendedor from './components/landing/LandingPromoEmprendedor.vue';

const routes = [
  { path: '/hello', component: HelloWorld },
  { path: '/', component: LandingPromoEmprendedor },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
