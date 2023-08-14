import { createContext, useContext } from 'react'
import { useKeenSlider } from 'keen-slider/react'

import 'keen-slider/keen-slider.min.css'

const CarouselContext = createContext({})

export function Root({ children }) {
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    loop: true,
  })

  return (
    <CarouselContext.Provider value={{ sliderRef, instanceRef }}>
      {children}
    </CarouselContext.Provider>
  )
}

export const useCarousel = () => useContext(CarouselContext)
