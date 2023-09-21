import { ColetasProvider } from '../contexts/ColetasContext'
import { AboutUs } from '../pages/AboutUs'
import { Blog } from '../pages/Blog'
import { Contact } from '../pages/Contact'
import { Descarte } from '../pages/Descarte'
import { Donation } from '../pages/Donation'
import { ErrorPage } from '../pages/ErrorPage'
import { FAQ } from '../pages/FAQ'
import { Home } from '../pages/Home'
import { LogisticaReversa } from '../pages/LogisticaReversa'
import { MaterialList } from '../pages/MaterialList'
import { Partners } from '../pages/Partners'
import { BuscarColetas } from '../pages/BuscarColetas'
import { PontosDeColeta } from '../pages/PontosDeColeta'
import { Post } from '../pages/Post'
import { Reforestation } from '../pages/Reforestation'
import { Schedule } from '../pages/Schedule'
import { SearchResult, loader as searchLoader } from '../pages/SearchResult'

export const defaultRoutes = [
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
        path: '/buscar-coletas',
        element: (
          <ColetasProvider>
            <BuscarColetas />
          </ColetasProvider>
        ),
      },
      {
        path: '/pontos-de-coleta',
        element: (
          <ColetasProvider>
            <PontosDeColeta />
          </ColetasProvider>
        ),
      },
      {
        path: '/blog',
        element: <Blog />,
      },
      {
        path: '/posts/:key',
        element: <Post />,
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
]
