import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { routes } from "./routes";
import ProtectedRoute from "./routes/ProtectedRoute";
import Login from "./pages/Login";
import { useEffect, useState } from "react";
import InvitationLink from "./pages/InvitationLink";

// const userRole = localStorage.getItem("role");
// // TODO : save it in redux
// const router = createBrowserRouter([
//   { path: "/admin/login", element: <Login /> },
//   ...routes.map((route) => ({
//     path: route.path,
//     element: (
//       <ProtectedRoute
//         element={route?.element}
//         roles={route?.roles}
//         userRole={userRole}
//       />
//     ),
//   })),
// ]);

const App = () => {
  const [userRole, setUserRole] = useState(localStorage.getItem("role"));

  // This effect will re-check and set the userRole from localStorage whenever the component mounts
  useEffect(() => {
    const storedRole = localStorage.getItem("role");
    setUserRole(storedRole);
  }, []);

  const router = createBrowserRouter([
    { path: "/admin/login", element: <Login setUserRole={setUserRole} /> },
    { path: "/accept-invite/:token", element: <InvitationLink/>},
    ...routes.map((route) => ({
      path: route.path,
      element: (
        <ProtectedRoute
          element={route?.element}
          roles={route?.roles}
          userRole={userRole}
        />
      ),
    })),
  ]);
  return <RouterProvider router={router} />;
};

export default App;
