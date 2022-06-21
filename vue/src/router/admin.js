import Login from "../views/Auth/Login.vue";
import Dashboard from "../views/AdminDashboard.vue";
import DashboardContent from "../views/admin/DashboardContent.vue";

const adminRoutes = [
  {
    path: "/admin",
    name: "admin.login",
    component: Login,
  },
  {
    path: "/admin/dashboard",
    redirect: "/admin/dashboard-content",
    name:'admin.dashboard',
    component: Dashboard,
    children: [
      {
        path: "/admin/dashboard-content",
        name: "admin.dashboard.content",
        component: DashboardContent,
      },
    ],
  },
];

export default adminRoutes;
