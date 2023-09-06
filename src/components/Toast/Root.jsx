import * as Toast from '@radix-ui/react-toast'

export function Root({ children, ...props }) {
  return (
    <Toast.Provider {...props}>
      {children}
      <Toast.Viewport className="[--viewport-padding-top:_25px] [--viewport-padding-bottom:_15px] fixed top-0 right-0 py-[var(--viewport-padding-top)] px-[var(--viewport-padding-bottom)] max-w-lg z-[2147483647] outline-none" />
    </Toast.Provider>
  )
}
