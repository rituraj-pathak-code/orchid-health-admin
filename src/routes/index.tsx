import Dashboard from "../pages/Dashboard";
import AdminContainer from "../components/Containers/AdminContainer";
import Users from "../pages/Users";

export const routes = [
  {
    path: "/admin/dashboard",
    element: (
      <AdminContainer>
        <Dashboard />
      </AdminContainer>
    ),
    roles: ["super_admin"],
  },
  {
    path: "/admin/users",
    element: (
      <AdminContainer>
        <Users />
      </AdminContainer>
    ),
    roles: ["super_admin"],
  },
];
