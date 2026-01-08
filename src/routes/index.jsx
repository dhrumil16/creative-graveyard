import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/public/Home";
import Login from "../pages/auth/Login";
import AdminDashboard from "../pages/admin/AdminDashboard";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "login", element: <Login /> },

      {
        element: <PrivateRoute />,
        children: [],
      },

      {
        element: <AdminRoute />,
        children: [{ path: "admin", element: <AdminDashboard /> }],
      },
    ],
  },
]);

export default router;
