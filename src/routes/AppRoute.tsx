import { createBrowserRouter, RouterProvider } from "react-router";
import Login from "../components/forms/LoginForm.tsx";
import Register from "../components/forms/RegisterForm.tsx";
import AdminLayout from "../pages/layouts/AdminLayout.tsx";
import NotFound from "../pages/NotFound.tsx";
import Platform from "../pages/Platform.tsx";
import Features from "../pages/Features.tsx";
import Editorial from "../pages/Editorial.tsx";
import Enterprise from "../pages/Enterprise.tsx";
import MainLayout from "../pages/layouts/MainLayout.tsx";
import Home from "../pages/Home.tsx";
import CreatePost from "../pages/CreatePost.tsx";
import CheckPermission from "../components/permission/CheckPermission.tsx";
import Content from "../pages/admin/Content.tsx";
import Analytics from "../pages/admin/Analytics.tsx";
import Users from "../pages/admin/Users.tsx";
import Settings from "../pages/admin/Settings.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, Component: Home },
      { path: "login", Component: Login },
      { path: "register", Component: Register },
      { path: "platform", Component: Platform },
      { path: "features", Component: Features },
      { path: "editorial", Component: Editorial },
      { path: "enterprise", Component: Enterprise },
    ],
  },
  {
    path: "/admin",
    element: (
      <CheckPermission>
        <AdminLayout />
      </CheckPermission>
    ),
    children: [
      { index: true, element: <h1>Dashboard</h1> },
      { path: "content", element: <Content /> },
      { path: "analytics", element: <Analytics /> },
      { path: "users", element: <Users /> },
      { path: "settings", element: <Settings /> },
      { path: "*", element: <NotFound /> },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

const AppRoute = () => {
  return <RouterProvider router={router} />;
};

export default AppRoute;
