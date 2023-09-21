import React, { createContext, useContext } from 'react'
import { useFetchWithToken } from '../hooks/useFetchWithToken'
import { useFetchData } from '../hooks/useFetchData'
import jwtDecode from 'jwt-decode'
import { getUnixTime } from 'date-fns'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'

const AdminContext = createContext({})

const fetchOptions = {
  onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
    if (error.response.status === 404) return

    // Retry after 10 seconds
    setTimeout(() => revalidate({ retryCount }), 10 * 1000)
  },
  revalidateOnFocus: false,
  revalidateIfStale: false,
}

export function AdminProvider({ children }) {
  const admin = JSON.parse(localStorage.getItem('@ecoSempre-v1:token'))
  const decodedToken = admin && jwtDecode(admin.token)
  const isTokenExpires =
    decodedToken && decodedToken.exp <= getUnixTime(new Date())

  const responsePosts = useFetchData('/articles', fetchOptions)
  const responseNewsletter = useFetchWithToken(
    '/newsletter',
    admin && admin.token,
    fetchOptions,
  )
  const responseContacts = useFetchWithToken(
    '/contacts',
    admin && admin.token,
    fetchOptions,
  )
  const responseCollectionPoints = useFetchData(
    '/collection-points',
    fetchOptions,
  )

  if (!admin) {
    return (
      <div className="p-4 font-bold text-2xl font-inter">Acesso restrito</div>
    )
  }

  if (isTokenExpires) {
    return (
      <div className="p-4 font-inter space-y-1">
        <p className="font-bold text-2xl">Acesso expirou!</p>
        <p className="text-base font-normal max-w-xs text-gray-700">
          Logue novamente para ter acesso ao painel de administrador!
        </p>
        <Link
          to="/admin/login"
          className="flex items-center text-green-300 border-b w-max mt-1 border-green-300 hover:text-green-600 gap-1.5"
        >
          Login <Icon icon="ph:arrow-right-bold" className="w-5 h-5" />
        </Link>
      </div>
    )
  }

  if (
    (responsePosts.error && responsePosts.error.response.status !== 404) ||
    (responseCollectionPoints.error &&
      responseCollectionPoints.error.response.status !== 404) ||
    (responseContacts.error &&
      responseContacts.error.response.status !== 404) ||
    (responseNewsletter.error &&
      responseNewsletter.error.response.status !== 404)
  ) {
    return (
      <div className="font-roboto p-4 text-zinc-900">
        Erro interno no servidor
      </div>
    )
  }

  if (
    responsePosts.isLoading ||
    responseCollectionPoints.isLoading ||
    responseContacts.isLoading ||
    responseNewsletter.isLoading
  ) {
    return (
      <div className="font-roboto p-4 text-zinc-900 animate-pulse">
        Carregando...
      </div>
    )
  }

  return (
    <AdminContext.Provider
      value={{
        posts: {
          ...responsePosts,
        },
        newsletter: {
          ...responseNewsletter,
        },
        contacts: {
          ...responseContacts,
        },
        collectionPoints: {
          ...responseCollectionPoints,
        },
        admin,
      }}
    >
      {children}
    </AdminContext.Provider>
  )
}

export const useAdmin = () => useContext(AdminContext)
