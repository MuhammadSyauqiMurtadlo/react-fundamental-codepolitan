import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Homepage from "../pages/Index";
import Blog from "../pages/blogs";
import About from "../pages/About";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);
