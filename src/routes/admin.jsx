import { ErrorPage } from '../pages/ErrorPage'

export const adminRoutes = {
  children: [
    {
      path: '/admin/login',
      async lazy() {
        const { AdminLogin } = await import('../admin/pages/AdminLogin')
        return { Component: AdminLogin }
      },
    },
    {
      path: '/admin',
      async lazy() {
        const { AdminLayout } = await import('../layouts/AdminLayout')
        return { Component: AdminLayout }
      },
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/admin',
          async lazy() {
            const { Admin } = await import('../admin/pages/Admin')
            return { Component: Admin }
          },
        },
        {
          path: '/admin/new-post',
          async lazy() {
            const { AdminNewPost } = await import('../admin/pages/AdminNewPost')
            return { Component: AdminNewPost }
          },
        },
        {
          path: '/admin/posts',
          async lazy() {
            const { AdminPosts } = await import('../admin/pages/AdminPosts')
            return { Component: AdminPosts }
          },
        },
        {
          path: '/admin/edit/post/:key',
          async lazy() {
            const { AdminEditPost, loader } = await import(
              '../admin/pages/AdminEditPost'
            )
            return { Component: AdminEditPost, loader }
          },
        },
        {
          path: '/admin/post-labels',
          async lazy() {
            const { AdminLabels } = await import('../admin/pages/AdminLabels')
            return { Component: AdminLabels }
          },
        },
        {
          path: '/admin/new-collection-point',
          async lazy() {
            const { CreateCollectionPoint } = await import(
              '../admin/pages/CreateCollectionPoint'
            )
            return { Component: CreateCollectionPoint }
          },
        },
        {
          path: '/admin/edit-collection-point/:id',
          async lazy() {
            const { EditCollectionPoint } = await import(
              '../admin/pages/EditCollectionPoint'
            )
            return { Component: EditCollectionPoint }
          },
        },
      ],
    },
  ],
}
