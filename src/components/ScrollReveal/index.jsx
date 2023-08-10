import { useEffect, useRef } from 'react'
import './ScrollReveal.css'

export const ScrollReveal = ({
  children,
  origin,
  immediately = false,
  ...props
}) => {
  const sectionRef = useRef(null)

  useEffect(() => {
    if (!sectionRef.current) return

    function handleScrollReveal() {
      const threeQuartersWindow = window.innerHeight * 0.75
      const windowTop = window.scrollY + threeQuartersWindow
      const positionTopElement =
        sectionRef.current.getBoundingClientRect().top + window.scrollY

      if (windowTop > positionTopElement) {
        sectionRef.current.classList.add('active-animation')
      }
    }
    const delayAnimation = immediately
      ? setTimeout(() => {
          sectionRef.current.classList.add('active-animation')
        }, 200)
      : false

    if (!immediately) window.addEventListener('scroll', handleScrollReveal)

    return () => {
      if (!immediately) window.removeEventListener('scroll', handleScrollReveal)
      if (delayAnimation) clearTimeout(delayAnimation)
    }
  }, [])

  return (
    <div
      {...props}
      className={`scroll-reveal-wrapper ${props.className}`}
      ref={sectionRef}
      data-animate={origin}
    >
      {children}
    </div>
  )
}
