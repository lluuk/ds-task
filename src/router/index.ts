import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import UserForm from "@/views/UserForm.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "UserForm",
    component: UserForm,
  },
  {
    path: "/profile",
    name: "UserProfile",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "user-profile" */ "@/views/UserProfile.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
