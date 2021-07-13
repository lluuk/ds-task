import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Form from "@/views/Form.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Form",
    component: Form,
  },
  {
    path: "/profile",
    name: "Profile",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "profile" */ "@/views/Profile.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
