import { createBrowserRouter } from 'react-router-dom'
import { Default } from '../layouts/Default'
import { ErrorPage } from '../pages/ErrorPage'
import { adminRoutes } from './admin'
import { defaultRoutes } from './default'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Default />,
    errorElement: <ErrorPage />,
    children: defaultRoutes,
  },
  adminRoutes,
])
