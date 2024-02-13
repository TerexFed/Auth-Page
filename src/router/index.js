import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import UsersPage from '../views/UsersPage.vue'
import LoginPage from '../views/LoginPage.vue'
import ProfilePage from '../views/ProfilePage.vue'

function checkAuth() {
  let token = localStorage.getItem("token");
  if (token !== null) {
    return true;
  }
  else{
    return false
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   {
    path: '/',
    component: HomePage
   },
   {
    path: '/users',
    component: UsersPage
   },
   {
    path: '/login',
    component: LoginPage
   },
   {
    path: '/profile',
    component: ProfilePage
   }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.path === "/profile" && !checkAuth()) {
    next("/");
  } else {
    next();
  }
});

export default router
