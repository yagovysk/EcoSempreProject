/* eslint-disable no-undef */
import { useCallback, useEffect, useState } from 'react'

import { Circle, Marker, GoogleMap, OverlayView } from '@react-google-maps/api'

import { Marker as CustomMarker } from '../Marker'
import { useColetasContext } from '../../../../contexts/ColetasContext'
import { Loader } from '../Loader'
import { useFetchData } from '../../../../hooks/useFetchData'

const center = {
  lat: -15.8398885,
  lng: -48.0183334,
}

const googleMapsOptions = {
  mapId: '4f43d1fc4ed26442',
  disableDefaultUI: true,
  clickableIcons: false,
}

const getPixelPositionOffset = (width, height) => ({
  x: -(width / 2),
  y: -(height / 2),
})

export function MapColetas() {
  const { mapRef, userAddressCoordinates, nearbyPontosColetas, RADIUS } =
    useColetasContext()

  const onLoad = useCallback(
    (map) => {
      if (!mapRef) return

      mapRef.current = map
    },
    [mapRef],
  )

  console.log(userAddressCoordinates)

  return (
    <div className="w-full h-full">
      <GoogleMap
        center={center}
        zoom={11}
        mapContainerClassName="w-full h-full"
        options={googleMapsOptions}
        onLoad={onLoad}
      >
        {userAddressCoordinates && (
          <>
            <Marker position={userAddressCoordinates}></Marker>

            {nearbyPontosColetas.length &&
              nearbyPontosColetas.map((ponto) => (
                <OverlayView
                  key={ponto.id}
                  position={ponto.location}
                  mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
                  getPixelPositionOffset={getPixelPositionOffset}
                >
                  <CustomMarker pontoDeColeta={ponto} />
                </OverlayView>
              ))}

            <Circle
              center={userAddressCoordinates}
              radius={RADIUS}
              options={closeOptions}
            />
          </>
        )}
      </GoogleMap>
    </div>
  )
}

const closeOptions = {
  strokeOpacity: 0.5,
  strokeWeight: 2,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
  zIndex: 3,
  fillOpacity: 0.15,
  strokeColor: '#0457E3',
  fillColor: '#0457E3',
}
