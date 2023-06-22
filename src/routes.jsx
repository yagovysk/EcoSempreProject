import { createBrowserRouter } from "react-router-dom";
import { Default } from "./layouts/Default";
import { Home } from "./pages/Home";
import { AboutUs } from "./pages/AboutUs";
import { MaterialList } from "./pages/MaterialList";
import { Blog } from "./pages/Blog";
import { Contact } from "./pages/Contact";
import { PontosDeColeta } from "./pages/PontosDeColeta";
import { FAQ } from "./pages/FAQ";
import { Partners } from "./pages/Partners";
import { Post } from "./pages/Post";
import { SearchResult } from "./pages/SearchResult";
import { LogisticaReversa } from "./pages/LogisticaReversa";
import { Descarte } from "./pages/Descarte";
import { Schedule } from "./pages/Schedule";

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
        path: "/sobre",
        element: <AboutUs />,
      },
      {
        path: "/contato",
        element: <Contact />,
      },
      {
        path: "/materiais",
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
        path: "/posts/:key",
        element: <Post />,
      },
      {
        path: "/faq",
        element: <FAQ />,
      },
      {
        path: "/parceiros",
        element: <Partners />,
      },
      {
        path: "/buscar",
        element: <SearchResult />,
      },
      {
        path: "/logistica",
        element: <LogisticaReversa />,
      },
      {
        path: "/descarte",
        element: <Descarte />,
      },
      {
        path: "/agendar",
        element: <Schedule />,
      },
    ],
  },
]);
