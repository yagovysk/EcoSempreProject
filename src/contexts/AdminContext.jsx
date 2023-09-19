import React, { createContext, useContext } from 'react'
import { useFetchWithToken } from '../hooks/useFetchWithToken'
import { useFetchData } from '../hooks/useFetchData'
import jwtDecode from 'jwt-decode'
import { getUnixTime } from 'date-fns'

const AdminContext = createContext({})

export function AdminProvider({ children }) {
  const admin = JSON.parse(localStorage.getItem('@ecoSempre-v1:token'))
  const decodedToken = admin && jwtDecode(admin.token)
  const isTokenExpires =
    decodedToken && decodedToken.exp <= getUnixTime(new Date())

  const responsePosts = useFetchWithToken('/articles', admin && admin.token)
  const responseNewsletter = useFetchWithToken(
    '/newsletter',
    admin && admin.token,
  )
  const responseContacts = useFetchWithToken('/contacts', admin && admin.token)
  const responseCollectionPoints = useFetchData('/collection-points')

  if (!admin) {
    return (
      <div className="p-4 font-bold text-2xl font-inter">Acesso restrito</div>
    )
  }

  if (isTokenExpires) {
    return (
      <div className="p-4 font-inter">
        <p className="font-bold text-2xl">Acesso expirou!</p>
        <p className="text-base font-normal max-w-xs mt-1 text-gray-700">
          Logue novamente para ter acesso ao painel de administrador!
        </p>
      </div>
    )
  }

  if (
    responsePosts.error ||
    responseCollectionPoints.error ||
    responseContacts.error ||
    responseNewsletter.error
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
