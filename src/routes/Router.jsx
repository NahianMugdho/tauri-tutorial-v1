// Router.jsx — createBrowserRouter দিয়ে সব route এখানে
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Project from "../pages/Project";
import Lab from "../pages/Lab";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "projects", element: <Projects /> },
      { path: "project/:slug", element: <Project /> },
      { path: "lab", element: <Lab /> },
    ],
  },
]);

export default router;
