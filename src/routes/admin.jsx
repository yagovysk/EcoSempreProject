import { Admin } from '../admin/pages/Admin'
import {
  AdminEditPost,
  loader as editPostLoader,
} from '../admin/pages/AdminEditPost'
import { AdminLogin } from '../admin/pages/AdminLogin'
import { AdminNewPost } from '../admin/pages/AdminNewPost'
import { AdminLabels } from '../admin/pages/AdminLabels'
import { AdminPosts } from '../admin/pages/AdminPosts'
import { CreateCollectionPoint } from '../admin/pages/CreateCollectionPoint'
import { EditCollectionPoint } from '../admin/pages/EditCollectionPoint'
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
          element: <AdminLabels />,
        },
        {
          path: '/admin/new-collection-point',
          element: <CreateCollectionPoint />,
        },
        {
          path: '/admin/edit-collection-point/:id',
          element: <EditCollectionPoint />,
        },
      ],
    },
  ],
}
