import * as Toast from '@radix-ui/react-toast'
import * as Progress from '@radix-ui/react-progress'
import { Icon } from '@iconify/react'
import { useEffect, useState } from 'react'
import { Close } from './Close'

export function Content({ children, duration = 5000, ...props }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(100)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <Toast.Root
      {...props}
      duration={duration}
      className={`relative shadow-lg bg-white rounded-lg p-2 font-roboto data-[state=open]:animate-slideIn data-[state=closed]:animate-swipeOut data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=cancel]:transition-[transform_200ms_ease-out] data-[swipe=end]:animate-swipeOut ${props.className}`}
    >
      {children}
      <Close
        aria-label="Fechar aviso"
        className="py-3 px-2 absolute top-2 right-2"
      >
        <Icon aria-hidden icon="ph:x" className="w-5 h-5 text-gray-900" />
      </Close>

      <Progress.Root
        className="relative overflow-hidden w-full h-1 -mb-2 rounded-full"
        style={{ transform: 'translateZ(0)' }}
        value={progress}
      >
        <Progress.Indicator
          className={`bg-red-500 w-full h-full rounded-full ease-linear transition-transform`}
          style={{
            transform: `translateX(-${100 - progress}%)`,
            transitionDuration: `${duration}ms`,
          }}
        />
      </Progress.Root>
    </Toast.Root>
  )
}
