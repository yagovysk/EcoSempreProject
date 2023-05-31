import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Default } from "./layouts/Default";
import { AboutUs } from "./pages/AboutUs";
import { MaterialList } from "./pages/MaterialList";
import { Blog } from "./pages/Blog";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Default />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about_us",
        element: <AboutUs />,
      },
      {
        path: "/material_list",
        element: <MaterialList />,
      },
      {
        path: "/Blog",
        element: <Blog />,
      },
    ],
  },
]);
