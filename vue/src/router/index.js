import { createRouter, createWebHistory } from "vue-router";
import adminRoutes from "./admin.js";
import studentRoutes from "./student.js";

// SPLITING ROUTES FILES
var allRoutes = [];
var routes = allRoutes.concat(adminRoutes, studentRoutes);
// SPLITING ROUTES FILES ENDS

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
});

export default router;
