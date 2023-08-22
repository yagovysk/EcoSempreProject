/* eslint-disable no-undef */
import {
  GoogleMap,
  Marker,
  DirectionsRenderer,
  Circle,
  useLoadScript,
} from '@react-google-maps/api'
import { useCallback, useState } from 'react'

import { mapIndicator } from '../../assets/icons'

const center = {
  lat: -15.8398885,
  lng: -48.0183334,
}

const googleMapsOptions = {
  mapId: '4f43d1fc4ed26442',
  disableDefaultUI: true,
  clickableIcons: false,
}

export function Map({ mapRef, coordinates }) {
  const [directions, setDirections] = useState()
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries: ['places'],
  })

  const onLoad = useCallback(
    (map) => {
      if (!mapRef) return

      mapRef.current = map
    },
    [mapRef],
  )

  const pontosColetas = generatePontosDeColeta(coordinates || center)

  const fetchDirections = (pontoColeta) => {
    if (!coordinates) return

    const service = new google.maps.DirectionsService()

    service.route(
      {
        origin: coordinates,
        destination: pontoColeta,
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === 'OK' && result) {
          setDirections(result)
        }
      },
    )
  }

  if (!isLoaded) return <div className="w-full h-full bg-slate-200" />

  return (
    <div className="w-full h-full">
      <GoogleMap
        zoom={11}
        center={center}
        mapContainerClassName="w-full h-full"
        options={googleMapsOptions}
        onLoad={onLoad}
      >
        {directions && (
          <DirectionsRenderer
            directions={directions}
            options={{
              polylineOptions: {
                zIndex: 50,
                strokeColor: '#0457E3',
                strokeWeight: 5,
              },
            }}
          />
        )}

        {coordinates && (
          <>
            <Marker position={coordinates} />

            {pontosColetas.map((ponto) => (
              <Marker
                key={ponto.lat + ponto.lng}
                position={ponto}
                icon={mapIndicator}
                onClick={() => {
                  fetchDirections(ponto)
                }}
              />
            ))}

            <Circle
              center={coordinates}
              radius={15000}
              options={closeOptions}
            />
          </>
        )}
      </GoogleMap>
    </div>
  )
}

const defaultOptions = {
  strokeOpacity: 0.5,
  strokeWeight: 2,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
}

const closeOptions = {
  ...defaultOptions,
  zIndex: 3,
  fillOpacity: 0.15,
  strokeColor: '#0457E3',
  fillColor: '#0457E3',
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
