import { useEffect } from 'react'

export function useClickAway(ref, callback) {
  useEffect(() => {
    if (!ref.current) return

    function handleClickAway(e) {
      const currentEl = ref.current
      const node = e.target

      if (currentEl.contains(node)) return
      callback()
    }

    document.addEventListener('click', handleClickAway)

    return () => {
      document.removeEventListener('click', handleClickAway)
    }
  }, [ref])
}
