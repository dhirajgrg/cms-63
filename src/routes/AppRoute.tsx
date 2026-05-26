import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "../pages/Home.tsx";
import Login from "../components/forms/LoginForm.tsx";
import Register from "../components/forms/RegisterForm.tsx";
import AdminLayout from "../pages/layouts/AdminLayout.tsx";
import NotFound from "../pages/NotFound.tsx";

const router = createBrowserRouter([
  { path: "/", Component: Home },
  { path: "/login", Component: Login },
  { path: "/register", Component: Register },
  {
    path: "/admin",
    Component: AdminLayout,
    children: [
      { path: "dashboard", element: <h1>Dashboard</h1> },
      { path: "content", element: <h1>content</h1> },
      { path: "analytics", element: <h1>analytics</h1> },
      { path: "users", element: <h1>users</h1> },
      { path: "settings", element: <h1>settings</h1> },
      { path: "*", element: <NotFound /> },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

const AppRoute = () => {
  return <RouterProvider router={router} />;
};

export default AppRoute;
