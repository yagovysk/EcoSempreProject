import { createBrowserRouter } from 'react-router-dom'
import { Default } from './layouts/Default'
import { Home } from './pages/Home'
import { AboutUs } from './pages/AboutUs'
import { MaterialList } from './pages/MaterialList'
import { Blog, loader as blogLoader } from './pages/Blog'
import { Contact } from './pages/Contact'
import { PontosDeColeta } from './pages/PontosDeColeta'
import { FAQ } from './pages/FAQ'
import { Partners } from './pages/Partners'
import { Post, loader as postLoader } from './pages/Post'
import { SearchResult, loader as searchLoader } from './pages/SearchResult'
import { LogisticaReversa } from './pages/LogisticaReversa'
import { Descarte } from './pages/Descarte'
import { Schedule } from './pages/Schedule'
import { Donation } from './pages/Donation'
import { ErrorPage } from './pages/ErrorPage'
import { Reforestation } from './pages/Reforestation'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Default />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            path: '/',
            element: <Home />,
          },
          {
            path: '/sobre',
            element: <AboutUs />,
          },
          {
            path: '/contato',
            element: <Contact />,
          },
          {
            path: '/materiais',
            element: <MaterialList />,
          },
          {
            path: '/coletas',
            element: <PontosDeColeta />,
          },
          {
            path: '/blog',
            element: <Blog />,
            loader: blogLoader,
          },
          {
            path: '/posts/:key',
            element: <Post />,
            loader: postLoader,
          },
          {
            path: '/faq',
            element: <FAQ />,
          },
          {
            path: '/parceiros',
            element: <Partners />,
          },
          {
            path: '/buscar',
            element: <SearchResult />,
            loader: searchLoader,
          },
          {
            path: '/logistica',
            element: <LogisticaReversa />,
          },
          {
            path: '/descarte',
            element: <Descarte />,
          },
          {
            path: '/agendar',
            element: <Schedule />,
          },
          {
            path: '/doar',
            element: <Donation />,
          },
          {
            path: '/reflorestamento',
            element: <Reforestation />,
          },
        ],
      },
    ],
  },
])
