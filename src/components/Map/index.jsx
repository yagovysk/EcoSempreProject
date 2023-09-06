import { GoogleMap, useLoadScript } from '@react-google-maps/api'

const center = {
  lat: -15.8398885,
  lng: -48.0183334,
}

const googleMapsOptions = {
  mapId: '4f43d1fc4ed26442',
  disableDefaultUI: true,
  clickableIcons: false,
}

const libraries = ['places']

export function Map({ children, customLoader: CustomLoader, ...props }) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries,
  })

  if (!isLoaded) {
    if (CustomLoader) {
      return <CustomLoader />
    }

    return <div className="w-full h-full bg-slate-200" />
  }

  if (!children)
    return (
      <div className="w-full h-full">
        <GoogleMap
          zoom={11}
          center={center}
          mapContainerClassName="w-full h-full"
          options={googleMapsOptions}
          {...props}
        >
          {children}
        </GoogleMap>
      </div>
    )

  return <>{children}</>
}
