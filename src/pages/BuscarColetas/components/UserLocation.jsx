import { Icon } from '@iconify/react'
import { useCallback, useEffect } from 'react'

export function UserLocation({ onSelect }) {
  const getUserLocation = useCallback(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        if (!position) return

        onSelect({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        })
      })
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    getUserLocation()
  }, [getUserLocation])

  return (
    <button
      type="button"
      onClick={getUserLocation}
      className={`flex items-center gap-1.5 text-blue bg-[#f1f1f1] py-5 px-8 md:px-11 rounded`}
    >
      <Icon
        icon="icon-park-solid:local-two"
        aria-hidden
        className="w-[1.125rem] h-[1.125rem]"
      />
      <span>Minha Localização Atual</span>
    </button>
  )
}
