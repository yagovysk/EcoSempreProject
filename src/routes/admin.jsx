import { Admin } from '../admin/pages/Admin'
import {
  AdminEditPost,
  loader as editPostLoader,
} from '../admin/pages/AdminEditPost'
import { AdminLogin } from '../admin/pages/AdminLogin'
import { AdminNewPost } from '../admin/pages/AdminNewPost'
import { AdminPostLabels } from '../admin/pages/AdminPostLabels'
import { AdminPosts } from '../admin/pages/AdminPosts'
import { CreateCollectionPoint } from '../admin/pages/CreateCollectionPoint'
import { AdminLayout } from '../layouts/AdminLayout'
import { ErrorPage } from '../pages/ErrorPage'

export const adminRoutes = {
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
        {
          path: '/admin/new-collection-point',
          element: <CreateCollectionPoint />,
        },
      ],
    },
  ],
}
