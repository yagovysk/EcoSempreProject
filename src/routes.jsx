import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Default } from "./layouts/Default";
import { AboutUs } from "./pages/AboutUs";
import { MaterialList } from "./pages/MaterialList";
import { Blog } from "./pages/Blog";
import { Contact } from "./pages/Contact";
import { PontosDeColeta } from "./pages/PontosDeColeta";
import { FAQ } from "./pages/FAQ";
import { Partners } from "./pages/Partners";

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
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/material_list",
        element: <MaterialList />,
      },
      {
        path: "/coletas",
        element: <PontosDeColeta />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/faq",
        element: <FAQ />,
      },
      {
        path: "/parceiros",
        element: <Partners />,
      },
    ],
  },
]);
