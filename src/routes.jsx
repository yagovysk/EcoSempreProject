import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Default } from "./layouts/Default";
import { AboutUs } from "./pages/AboutUs";

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
    ],
  },
]);
