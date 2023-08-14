import { useCarousel } from './Root'
import { Icon } from '@iconify/react'

export function NextButton({ ...props }) {
  const { instanceRef } = useCarousel()

  return (
    <button
      {...props}
      className={`absolute text-[#D7D7D757] z-10 right-4 bottom-4 ${props.className}`}
      onClick={() => instanceRef.current && instanceRef.current.next()}
      type="button"
    >
      <Icon
        className="w-12 h-12 sm:w-16 sm:h-16"
        icon="ph:caret-up-thin"
        rotate={1}
      />
    </button>
  )
}
