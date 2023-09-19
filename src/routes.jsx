import { createBrowserRouter } from 'react-router-dom'
import { Default } from './layouts/Default'
import { Home } from './pages/Home'
import { AboutUs } from './pages/AboutUs'
import { MaterialList } from './pages/MaterialList'
import { Blog } from './pages/Blog'
import { Contact } from './pages/Contact'
import { PontosDeColeta } from './pages/PontosDeColeta'
import { FAQ } from './pages/FAQ'
import { Partners } from './pages/Partners'
import { Post } from './pages/Post'
import { SearchResult, loader as searchLoader } from './pages/SearchResult'
import { LogisticaReversa } from './pages/LogisticaReversa'
import { Descarte } from './pages/Descarte'
import { Schedule } from './pages/Schedule'
import { Donation } from './pages/Donation'
import { ErrorPage } from './pages/ErrorPage'
import { Reforestation } from './pages/Reforestation'
import { ColetasProvider } from './contexts/ColetasContext'
import { AdminLayout } from './layouts/AdminLayout'
import { Admin } from './admin/pages/Admin'
import { AdminLogin } from './admin/pages/AdminLogin'
import { AdminNewPost } from './admin/pages/AdminNewPost'
import { AdminPosts } from './admin/pages/AdminPosts'
import {
  AdminEditPost,
  loader as editPostLoader,
} from './admin/pages/AdminEditPost'
import { AdminPostLabels } from './admin/pages/AdminPostLabels'

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
    ],
  },
  {
    children: [
      {
        path: '/admin/login',
        element: <AdminLogin />,
      },
      {
        path: '/admin',
        element: <AdminLayout />,
        errorElement: <ErrorPage />,
        children: [
          {
            path: '/admin',
            element: <Admin />,
          },
          {
            path: '/admin/new-post',
            element: <AdminNewPost />,
          },
          {
            path: '/admin/posts',
            element: <AdminPosts />,
          },
          {
            path: '/admin/edit/post/:key',
            element: <AdminEditPost />,
            loader: editPostLoader,
          },
          {
            path: '/admin/post-labels',
            element: <AdminPostLabels />,
          },
        ],
      },
    ],
  },
])
