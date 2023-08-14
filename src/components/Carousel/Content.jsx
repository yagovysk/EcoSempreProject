import { useCarousel } from './Root'

export function Content({ children, ...props }) {
  const { sliderRef } = useCarousel()

  return (
    <div {...props}>
      <div ref={sliderRef} className="relative keen-slider">
        {children}
      </div>
    </div>
  )
}
