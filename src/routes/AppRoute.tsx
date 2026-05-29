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
import CreateProduct from "../pages/CreateProduct.tsx";

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
    Component: AdminLayout,
    children: [
      { index: true, element: <h1>Dashboard</h1> },
      { path: "content", element: <h1>content</h1> },
      { path: "analytics", element: <h1>analytics</h1> },
      { path: "users", element: <h1>users</h1> },
      { path: "settings", element: <h1>settings</h1> },
      { path: "create", element: <CreateProduct/> },
      { path: "*", element: <NotFound /> },
      
    ],
  },
  { path: "*", element: <NotFound /> },
]);

const AppRoute = () => {
  return <RouterProvider router={router} />;
};

export default AppRoute;
