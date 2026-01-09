import { createBrowserRouter } from "react-router-dom";

/* layouts */
import App from "../App";

/* public pages */
import Home from "../pages/public/Home";
import Trending from "../pages/public/Trending";
import Search from "../pages/public/Search";
import PostDetails from "../pages/public/PostDetails";

/* auth pages */
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";

/* private pages */
import CreatePost from "../pages/private/CreatePost";
import EditPost from "../pages/private/EditPost";
import MyPosts from "../pages/private/MyPosts";
import Profile from "../pages/private/Profile";

/* admin pages */
import AdminDashboard from "../pages/admin/AdminDashboard";

/* route guards */
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";

/* misc */
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      /* ---------- PUBLIC ---------- */
      {
        index: true,
        element: <Home />,
      },
      {
        path: "trending",
        element: <Trending />,
      },
      {
        path: "search",
        element: <Search />,
      },
      {
        path: "post/:id",
        element: <PostDetails />,
      },

      /* ---------- AUTH ---------- */
      {
        path: "login",
        element: (
          <PublicRoute>
            <Login />
          </PublicRoute>
        ),
      },
      {
        path: "signup",
        element: (
          <PublicRoute>
            <Signup />
          </PublicRoute>
        ),
      },

      /* ---------- PRIVATE ---------- */
      {
        path: "create",
        element: (
          <PrivateRoute>
            <CreatePost />
          </PrivateRoute>
        ),
      },
      {
        path: "edit/:id",
        element: (
          <PrivateRoute>
            <EditPost />
          </PrivateRoute>
        ),
      },
      {
        path: "my-posts",
        element: (
          <PrivateRoute>
            <MyPosts />
          </PrivateRoute>
        ),
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },

      /* ---------- ADMIN ---------- */
      {
        path: "admin",
        element: (
          <AdminRoute>
            <AdminDashboard />
          </AdminRoute>
        ),
      },

      /* ---------- 404 ---------- */
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
