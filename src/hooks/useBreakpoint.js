import { useState, useEffect } from 'react'
import throttle from 'lodash.throttle'

export function useBreakpoint() {
  const [breakpoint, setBreakpoint] = useState(window.innerWidth)

  useEffect(() => {
    const calcWindowWidth = throttle(() => {
      setBreakpoint(window.innerWidth)
    }, 200)

    window.addEventListener('resize', calcWindowWidth)

    return () => window.removeEventListener('resize', calcWindowWidth)
  }, [])

  return breakpoint
}
