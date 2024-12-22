import Dashboard from "../pages/Dashboard";
import AdminContainer from "../components/Containers/AdminContainer";
import UsersPage from "../pages/UsersPage";

export const routes = [
  {
    path: "/",
    element: (
      <AdminContainer>
        <Dashboard />
      </AdminContainer>
    ),
    roles: ["super_admin"],
  },
  {
    path: "/users",
    element: (
      <AdminContainer>
        <UsersPage />
      </AdminContainer>
    ),
    roles: ["super_admin"],
  },
];
