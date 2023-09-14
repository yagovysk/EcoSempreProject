import { Outlet, ScrollRestoration } from 'react-router-dom'
import { Sidebar } from './components/Sidebar'
import { AdminProvider } from '../../contexts/AdminContext'

export function AdminLayout() {
  return (
    <AdminProvider>
      <div className="flex min-h-screen">
        <Sidebar />

        <div className="py-10 pr-9 pl-32 flex-1">
          <Outlet />
        </div>
        <ScrollRestoration />
      </div>
    </AdminProvider>
  )
}
