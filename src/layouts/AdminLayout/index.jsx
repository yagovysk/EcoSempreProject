import { Outlet, ScrollRestoration, useNavigation } from 'react-router-dom'
import { Sidebar } from './components/Sidebar'
import { AdminProvider } from '../../contexts/AdminContext'
import { Dots } from '../../components/Loader/Dots'

export function AdminLayout() {
  const navigation = useNavigation()

  return (
    <AdminProvider>
      <div className="flex min-h-screen">
        <Sidebar />

        <div className="py-10 pr-9 pl-32 flex-1">
          <Outlet />

          {navigation.state === 'loading' && (
            <div className="fixed inset-0 z-50 bg-white/50 grid place-content-center">
              <Dots />
            </div>
          )}
        </div>
        <ScrollRestoration />
      </div>
    </AdminProvider>
  )
}
