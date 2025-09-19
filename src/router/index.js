import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import CreateAccount from '../views/CreateAccount.vue';
import ProfilePage from '../views/ProfilePage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/signup',
    name: 'CreateAccount',
    component: CreateAccount
  },
  {
    path: '/profile',
    name: 'ProfilePage',
    component: ProfilePage
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;