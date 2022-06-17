import Login from "../views/Auth/Login.vue";
import Dashboard from "../views/AdminDashboard.vue";
const adminRoutes = [
  {
    path: "/admin",
    name: "admin.login",
    component: Login,
  },
  {
    path: "/admin/dashboard",
    name: "admin.dashboard",
    component: Dashboard,
  },
];

export default adminRoutes;
