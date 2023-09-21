import { createContext, useState, useRef, useContext, useCallback } from 'react'
import { useFetchData } from '../hooks/useFetchData'

const ColetasContext = createContext({})

const RADIUS = 20000

export function ColetasProvider({ children }) {
  const [userAddressCoordinates, setUserAddressCoordinates] = useState()
  const mapRef = useRef({})
  const { data, isLoading, error } = useFetchData('/collection-points', {
    revalidateOnFocus: false,
    revalidateIfStale: false,
    onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
      if (error.response.status === 404) return

      // Retry after 10 seconds
      setTimeout(() => revalidate({ retryCount }), 10 * 1000)
    },
  })

  const apiError = error && error.request.status !== 404

  const randomCoordinates = generatePontosDeColeta(
    userAddressCoordinates || {
      lat: -15.8398885,
      lng: -48.0183334,
    },
  )

  const pontosDeColeta = data
    ? data.map((ponto, index) => {
        return {
          ...ponto,
          location: {
            lat: randomCoordinates[index].lat,
            lng: randomCoordinates[index].lng,
          },
        }
      })
    : null

  const nearbyPontosColetas =
    pontosDeColeta && userAddressCoordinates
      ? pontosDeColeta.filter((point) => {
          const distance = calculateDistance(
            userAddressCoordinates.lat,
            userAddressCoordinates.lng,
            point.location.lat,
            point.location.lng,
          )
          return distance <= RADIUS
        })
      : []

  const updateUserAddressCoordinates = useCallback((coordinates) => {
    setUserAddressCoordinates(coordinates)
  }, [])

  return (
    <ColetasContext.Provider
      value={{
        userAddressCoordinates,
        updateUserAddressCoordinates,
        pontosDeColeta,
        isLoading,
        apiError,
        mapRef,
        RADIUS,
        nearbyPontosColetas,
      }}
    >
      {children}
    </ColetasContext.Provider>
  )
}

export const useColetasContext = () => useContext(ColetasContext)

function calculateDistance(lat1, lng1, lat2, lng2) {
  const R = 6371000 // Earth radius in meters
  const dLat = degToRad(lat2 - lat1)
  const dLng = degToRad(lng2 - lng1)

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(degToRad(lat1)) *
      Math.cos(degToRad(lat2)) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2)

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))

  return R * c // Distance in meters
}

function degToRad(deg) {
  return deg * (Math.PI / 180)
}

const generatePontosDeColeta = (position) => {
  const _pontos = []
  for (let i = 0; i < 50; i++) {
    const direction = Math.random() < 0.5 ? -2 : 2

    _pontos.push({
      lat: position.lat + Math.random() / direction,
      lng: position.lng + Math.random() / direction,
    })
  }

  return _pontos
}
