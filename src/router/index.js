import { createRouter, createWebHistory } from 'vue-router';
import UniversityList from '../components/UniversityList.vue';
import UniversityDetail from '../components/UniversityDetail.vue'

const routes = [
  { path: '/', component: UniversityList },
  { path: '/university/:name', component: UniversityDetail, props: true}
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
