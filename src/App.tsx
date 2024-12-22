import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { routes } from "./routes";
import ProtectedRoute from "./routes/ProtectedRoute";
import Login from "./pages/Login";
import InvitationLink from "./pages/InvitationLink"
import "./styles/styles.css"



const App = () => {

  const router = createBrowserRouter([
    { path: "/login", element: <Login /> },
    { path: "/accept-invite/:token", element: <InvitationLink/>},
    ...routes.map((route) => ({
      path: route.path,
      element: (
        <ProtectedRoute
          element={route?.element}
        />
      ),
    })),
  ]);
  return <RouterProvider router={router} />;
};

export default App;
