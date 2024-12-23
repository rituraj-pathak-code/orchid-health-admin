import Dashboard from "../pages/Dashboard";
import UsersPage from "../pages/UsersPage";

export const routes = [
  {
    path: "/",
    element: Dashboard,
    roles: ["super_admin"],
  },
  {
    path: "/users",
    element: UsersPage,
    roles: ["super_admin"],
  },
];
