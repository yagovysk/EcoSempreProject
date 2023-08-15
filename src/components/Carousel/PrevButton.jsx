import { useCarousel } from './Root'
import { Icon } from '@iconify/react'

export function PrevButton({ ...props }) {
  const { instanceRef } = useCarousel()

  return (
    <button
      {...props}
      className={`absolute text-[#D7D7D757] z-10 bottom-4 ${props.className}`}
      onClick={() => instanceRef.current && instanceRef.current.prev()}
      type="button"
    >
      <Icon
        className="w-12 h-12 sm:w-16 sm:h-16"
        icon="ph:caret-up-thin"
        rotate={3}
      />
    </button>
  )
}
