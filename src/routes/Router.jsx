// // Router.jsx — createBrowserRouter দিয়ে সব route এখানে
// import { createBrowserRouter } from "react-router-dom";
// import MainLayout from "../layouts/MainLayout";
// import Home from "../pages/Home";
// import Projects from "../pages/Projects";
// import Project from "../pages/Project";
// import Lab from "../pages/Lab";
// import NotFound from "../pages/NotFound";

// const router = createBrowserRouter(
//   [
//     {
//       path: "/",
//       element: <MainLayout />,
//       errorElement: <NotFound />,
//       children: [
//         { index: true, element: <Home /> },
//         { path: "projects", element: <Projects /> },
//         { path: "project/:slug", element: <Project /> },
//         { path: "lab", element: <Lab /> },
//       ],
//     },
//   ],
//   // basename: সাইট /রিপো-নাম/ এর ভেতরে চললে সব লিংক ঠিক থাকে (Vite এর base থেকে আসে)
//   { basename: import.meta.env.BASE_URL }
// );

// export default router;
// Router.jsx — createBrowserRouter দিয়ে সব route এখানে
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Start from "../pages/Start";
import Projects from "../pages/Projects";
import Project from "../pages/Project";
import Lab from "../pages/Lab";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <NotFound />,
      children: [
        { index: true, element: <Home /> },
        { path: "start", element: <Start /> },
        { path: "projects", element: <Projects /> },
        { path: "project/:slug", element: <Project /> },
        { path: "lab", element: <Lab /> },
      ],
    },
  ],
  // basename: সাইট /রিপো-নাম/ এর ভেতরে চললে সব লিংক ঠিক থাকে (Vite এর base থেকে আসে)
  { basename: import.meta.env.BASE_URL }
);

export default router;
