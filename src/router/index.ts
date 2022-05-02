import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import AuthenticationRoutes from "@/modules/Authentication/router";

const staticRoutes = [...AuthenticationRoutes];

const routes: RouteRecordRaw[] = staticRoutes;

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
