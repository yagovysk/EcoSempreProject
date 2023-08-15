import { useState, useEffect } from 'react'

export function useIncreaseNumber(amount, duration, increase, ref) {
  const [number, setNumber] = useState(0)
  const [isTimeToIncreaseNumber, setIsTimeToIncreaseNumber] = useState(false)

  useEffect(() => {
    if (!ref) return

    function handleScrollReveal() {
      const threeQuartersWindow = window.innerHeight * 0.75
      const windowTop = window.scrollY + threeQuartersWindow
      const positionTopElement =
        ref.current.getBoundingClientRect().top + window.scrollY

      setIsTimeToIncreaseNumber(windowTop > positionTopElement)
    }

    window.addEventListener('scroll', handleScrollReveal)

    return () => {
      window.removeEventListener('scroll', handleScrollReveal)
    }
  }, [ref])

  useEffect(() => {
    let increaseNumberInterval

    if (isTimeToIncreaseNumber) {
      if (number >= amount) return

      increaseNumberInterval = setInterval(() => {
        setNumber((prevNumber) => prevNumber + increase)
      }, [duration])
    }

    return () => clearInterval(increaseNumberInterval)
  }, [number, amount, duration, increase, isTimeToIncreaseNumber])

  return number
}
